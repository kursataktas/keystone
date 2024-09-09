import React from 'react'
import { Combobox, Item } from '@keystar/ui/combobox'

import { type ListMeta } from '../../../../types'
import { useApolloQuery } from './useApolloQuery'

const idFieldAlias = '____id____'
const labelFieldAlias = '____label____'

export const ComboboxMany = ({
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
    kind: 'many'
    value: { label: string, id: string, data?: Record<string, any> }[]
    onChange(value: { label: string, id: string, data: Record<string, any> }[]): void
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

  // TODO: better error UI
  // TODO: Handle permission errors
  // (ie; user has permission to read this relationship field, but
  // not the related list, or some items on the list)
  if (error) {
    return <span>Error</span>
  }
  
  // diff selection. only show items that are not selected
  const items = data?.items.filter((item) => !state.value.find((selected) => selected.id === item[idFieldAlias])) ?? []

  return (
    <Combobox
      autoFocus={autoFocus}
      description={description}
      isDisabled={isDisabled || isReadOnly} // no selection available if isReadOnly
      // isReadOnly={isReadOnly}
      items={items}
      label={label}
      loadingState={loading || isLoading ? 'loading' : 'idle'}
      onInputChange={setSearch}
      inputValue={search}
      onLoadMore={onLoadMore}
      placeholder={placeholder}
      disabledKeys={state.value.map((item) => item.id)}
      // selectedKey={state.value.map((item) => item.id)[state.value.length - 1]}
      selectedKey={null}
      onSelectionChange={(key) => {
        const item = key ? data?.items.find((item) => item[idFieldAlias] === key) : null
        if (item) {
          state.onChange([...state.value, { label: item[labelFieldAlias] || item[idFieldAlias], id: item[idFieldAlias], data: item }])
        }
        setSearch('')
      }}
      minWidth="alias.singleLineWidth"
      width="auto"
    >
      {(item) => <Item key={item[idFieldAlias]}>{item[labelFieldAlias] || item[idFieldAlias]}</Item>}
    </Combobox>
  )
}
