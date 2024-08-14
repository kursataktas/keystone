import 'intersection-observer'
import React, { useEffect, useMemo, useState } from 'react'
import { Combobox, Item } from '@keystar/ui/combobox'

import { type ListMeta } from '../../../../types'
import { type TypedDocumentNode, ApolloClient, gql, InMemoryCache, useApolloClient, useQuery } from '../../../../admin-ui/apollo'

function useDebouncedValue<T> (value: T, limitMs: number) {
  const [debouncedValue, setDebouncedValue] = useState(() => value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(() => value)
    }, limitMs)
    return () => clearTimeout(timeout)
  }, [value, limitMs])

  return debouncedValue
}

function isInt (x: string) {
  return Number.isInteger(Number(x))
}

function isBigInt (x: string) {
  try {
    BigInt(x)
    return true
  } catch {
    return true
  }
}

// TODO: this is unfortunate, remove in breaking change?
function isUuid (x: unknown) {
  if (typeof x !== 'string') return
  if (x.length !== 36) return
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(x)
}

export function useFilter (value: string, list: ListMeta, searchFields: string[]) {
  return useMemo(() => {
    const trimmedSearch = value.trim()
    if (!trimmedSearch.length) return { OR: [] }

    const conditions: Record<string, any>[] = []
    const idField = list.fields.id.fieldMeta as { type: string, kind: string }

    if (idField.type === 'String') {
      // TODO: remove in breaking change?
      if (idField.kind === 'uuid') {
        if (isUuid(value)) {
          conditions.push({ id: { equals: trimmedSearch } })
        }
      } else {
        conditions.push({ id: { equals: trimmedSearch } })
      }
    } else if (idField.type === 'Int' && isInt(trimmedSearch)) {
      conditions.push({ id: { equals: Number(trimmedSearch) } })
    } else if (idField.type === 'BigInt' && isBigInt(trimmedSearch)) {
      conditions.push({ id: { equals: trimmedSearch } })
    }

    for (const fieldKey of searchFields) {
      const field = list.fields[fieldKey]
      conditions.push({
        [field.path]: {
          contains: trimmedSearch,
          mode: field.search === 'insensitive' ? 'insensitive' : undefined,
        },
      })
    }

    return { OR: conditions }
  }, [value, list, searchFields])
}

const idFieldAlias = '____id____'
const labelFieldAlias = '____label____'

export const RelationshipSelect = ({
  autoFocus,
  isDisabled,
  isLoading,
  labelField,
  searchFields,
  list,
  placeholder,
  state,
  extraSelection = '',
}: {
  autoFocus?: boolean
  isDisabled: boolean
  isLoading?: boolean
  labelField: string
  searchFields: string[]
  list: ListMeta
  placeholder?: string
  state:
    | {
        kind: 'many'
        value: { label: string, id: string, data?: Record<string, any> }[]
        onChange(value: { label: string, id: string, data: Record<string, any> }[]): void
      }
    | {
        kind: 'one'
        value: { label: string, id: string, data?: Record<string, any> } | null
        onChange(value: { label: string, id: string, data: Record<string, any> } | null): void
      }
  extraSelection?: string
}) => {
  const [search, setSearch] = useState('')

  const QUERY: TypedDocumentNode<
    { items: { [idFieldAlias]: string, [labelFieldAlias]: string | null }[], count: number },
    { where: Record<string, any>, take: number, skip: number }
  > = gql`
    query RelationshipSelect($where: ${list.gqlNames.whereInputName}!, $take: Int!, $skip: Int!) {
      items: ${list.gqlNames.listQueryName}(where: $where, take: $take, skip: $skip) {
        ${idFieldAlias}: id
        ${labelFieldAlias}: ${labelField}
        ${extraSelection}
      }
      count: ${list.gqlNames.listQueryCountName}(where: $where)
    }
  `

  const debouncedSearch = useDebouncedValue(search, 200)
  const where = useFilter(debouncedSearch, list, searchFields)

  const link = useApolloClient().link
  // we're using a local apollo client here because writing a global implementation of the typePolicies
  // would require making assumptions about how pagination should work which won't always be right
  const apolloClient = useMemo(
    () =>
      new ApolloClient({
        link,
        cache: new InMemoryCache({
          typePolicies: {
            Query: {
              fields: {
                [list.gqlNames.listQueryName]: {
                  keyArgs: ['where'],
                  merge: (existing: readonly unknown[], incoming: readonly unknown[], { args }) => {
                    const merged = existing ? existing.slice() : []
                    const { skip } = args!
                    for (let i = 0; i < incoming.length; ++i) {
                      merged[skip + i] = incoming[i]
                    }
                    return merged
                  },
                },
              },
            },
          },
        }),
      }),
    [link, list.gqlNames.listQueryName]
  )

  const initialItemsToLoad = Math.min(list.pageSize, 10)
  const subsequentItemsToLoad = Math.min(list.pageSize, 50)
  const { data, error, loading, fetchMore } = useQuery(QUERY, {
    fetchPolicy: 'network-only',
    variables: { where, take: initialItemsToLoad, skip: 0 },
    client: apolloClient,
  })

  const count = data?.count || 0

  // we want to avoid fetching more again and `loading` from Apollo
  // doesn't seem to become true when fetching more
  const [lastFetchMore, setLastFetchMore] = useState<{
    where: Record<string, any>
    extraSelection: string
    list: ListMeta
    skip: number
  } | null>(null)

  const onLoadMore = () => {
    const skip = data?.items.length
    if (
      !loading &&
      skip &&
      data.items.length < count &&
      (lastFetchMore?.extraSelection !== extraSelection || lastFetchMore?.where !== where || lastFetchMore?.list !== list || lastFetchMore?.skip !== skip)
    ) {
      const QUERY: TypedDocumentNode<
        { items: { [idFieldAlias]: string, [labelFieldAlias]: string | null }[] },
        { where: Record<string, any>, take: number, skip: number }
      > = gql`
            query RelationshipSelectMore($where: ${list.gqlNames.whereInputName}!, $take: Int!, $skip: Int!) {
              items: ${list.gqlNames.listQueryName}(where: $where, take: $take, skip: $skip) {
                ${labelFieldAlias}: ${labelField}
                ${idFieldAlias}: id
                ${extraSelection}
              }
            }
          `
      setLastFetchMore({ extraSelection, list, skip, where })
      fetchMore({
        query: QUERY,
        variables: {
          where,
          take: subsequentItemsToLoad,
          skip,
        },
      })
        .then(() => {
          setLastFetchMore(null)
        })
        .catch(() => {
          setLastFetchMore(null)
        })
    }
  }

  // TODO: better error UI
  // TODO: Handle permission errors
  // (ie; user has permission to read this relationship field, but
  // not the related list, or some items on the list)
  if (error) {
    return <span>Error</span>
  }

  if (state.kind === 'one') {
    return (
      <Combobox
        // this is necessary because react-select passes a second argument to onInputChange
        // and useState setters log a warning if a second argument is passed
        onInputChange={(val) => setSearch(val)}
        loadingState={loading || isLoading ? 'loading' : 'idle'}
        autoFocus={autoFocus}
        selectedKey={state.value ? state.value.id : null}
        items={data?.items ?? []}
        onSelectionChange={(key) => {
          const item = key ? data?.items.find((item) => item[idFieldAlias] === key) : null
          state.onChange(
            item
              ? {
                  id: item[idFieldAlias],
                  label: item[labelFieldAlias] ?? '',
                  data: item,
                }
              : null
          )
        }}
        onLoadMore={onLoadMore}
        placeholder={placeholder}
        isDisabled={isDisabled}
      >
        {(item) => <Item key={item[idFieldAlias]}>{item[labelFieldAlias] || item[idFieldAlias]}</Item>}
      </Combobox>
    )
  }

  return (
    <Combobox
      onInputChange={setSearch}
      loadingState={loading || isLoading ? 'loading' : 'idle'}
      autoFocus={autoFocus}
      items={data?.items ?? []}
      onLoadMore={onLoadMore}
      placeholder={placeholder}
      isDisabled={isDisabled}
    >
      {(item) => <Item key={item[idFieldAlias]}>{item[labelFieldAlias] || item[idFieldAlias]}</Item>}
    </Combobox>
  )
}
