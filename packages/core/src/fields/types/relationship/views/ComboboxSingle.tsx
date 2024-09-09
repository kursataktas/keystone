import React, { useEffect } from 'react'
import { Combobox, Item } from '@keystar/ui/combobox'

import { type ListMeta } from '../../../../types'
import { useApolloQuery } from './useApolloQuery'

const idFieldAlias = '____id____'
const labelFieldAlias = '____label____'

export const ComboboxSingle = ({
  autoFocus,
  description,
  isDisabled,
  isLoading,
  isReadOnly,
  label,
  labelField,
  searchFields,
  list,
  placeholder,
  state,
  extraSelection = '',
}: {
  autoFocus?: boolean
  description?: string
  isDisabled?: boolean
  isLoading?: boolean
  isReadOnly?: boolean
  label?: string
  labelField: string
  searchFields: string[]
  list: ListMeta
  placeholder?: string
  state: {
    kind: 'one'
    value: { label: string, id: string, data?: Record<string, any> } | null
    onChange(value: { label: string, id: string, data: Record<string, any> } | null): void
  }
  extraSelection?: string
}) => {
  const { data, loading, error, onLoadMore, search, setSearch } = useApolloQuery({
    extraSelection,
    labelField,
    list,
    searchFields,
    state,
  })

  useEffect(() => {}, [])

  // TODO: better error UI
  // TODO: Handle permission errors
  // (ie; user has permission to read this relationship field, but
  // not the related list, or some items on the list)
  if (error) {
    return <span>Error</span>
  }
  
  console.log(`ComboboxSingle ${label}:`, state.value)
  
  // if (!data?.items.length) {
  //   return <span>Loading…</span>
  // }

  return (
    <Combobox
      autoFocus={autoFocus}
      description={description}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      items={data?.items ?? []}
      label={label}
      loadingState={loading || isLoading ? 'loading' : 'idle'}
      onInputChange={setSearch}
      inputValue={search}
      onLoadMore={onLoadMore}
      placeholder={placeholder}
      selectedKey={state.value ? state.value.id : null}
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
        setSearch(item?.[labelFieldAlias] ?? '')
      }}
      minWidth="alias.singleLineWidth"
      width="auto"
    >
      {(item) => <Item key={item[idFieldAlias]}>{item[labelFieldAlias] || item[idFieldAlias]}</Item>}
    </Combobox>
  )
}
