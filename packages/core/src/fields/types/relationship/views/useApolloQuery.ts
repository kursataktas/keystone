import { useMemo, useState } from 'react'

import { type ListMeta } from '../../../../types'
import { type TypedDocumentNode, ApolloClient, gql, InMemoryCache, useApolloClient, useQuery } from '../../../../admin-ui/apollo'
import { useDebouncedValue } from './utils'
import { useFilter } from './useFilter'
import { ManyValueState, SingleValueState } from './types'

const idFieldAlias = '____id____'
const labelFieldAlias = '____label____'

export function useApolloQuery(args: {
  extraSelection: string
  labelField: string
  list: ListMeta
  searchFields: string[]
  state: ManyValueState | SingleValueState
}) {
  const { extraSelection, labelField, list, searchFields, state } = args
  const [search, setSearch] = useState(() => {
    if (state.kind === 'one' && state.value?.label) {
      return state.value?.label
    }
    return ''
  })

  const QUERY: TypedDocumentNode<
    { items: { [idFieldAlias]: string, [labelFieldAlias]: string | null }[], count: number },
    { where: Record<string, any>, take: number, skip: number }
  > = gql`
    query RelationshipSelect($where: ${list.graphql.names.whereInputName}!, $take: Int!, $skip: Int!) {
      items: ${list.graphql.names.listQueryName}(where: $where, take: $take, skip: $skip) {
        ${idFieldAlias}: id
        ${labelFieldAlias}: ${labelField}
        ${extraSelection}
      }
      count: ${list.graphql.names.listQueryCountName}(where: $where)
    }
  `

  const debouncedSearch = useDebouncedValue(search, 200)
  const manipulatedSearch = state.kind === 'one' && state.value?.label === debouncedSearch ? '' : debouncedSearch
  const where = useFilter(manipulatedSearch, list, searchFields)

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
                [list.graphql.names.listQueryName]: {
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
    [link, list.graphql.names.listQueryName]
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
            query RelationshipSelectMore($where: ${list.graphql.names.whereInputName}!, $take: Int!, $skip: Int!) {
              items: ${list.graphql.names.listQueryName}(where: $where, take: $take, skip: $skip) {
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

  return { data, error, loading, search, setSearch, onLoadMore }
}