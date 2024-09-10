import { useListData } from '@react-stately/data'
import React from 'react'

import { Checkbox, CheckboxGroup } from '@keystar/ui/checkbox'
import { Combobox, Item } from '@keystar/ui/combobox'
import { TagGroup } from '@keystar/ui/tag'
import { Text } from '@keystar/ui/typography'

import {
  type CellComponent,
  type FieldController,
  type FieldControllerConfig,
  type FieldProps,
} from '../../../../types'
import { CellContainer, CellLink } from '../../../../admin-ui/components'
import { VStack } from '@keystar/ui/layout'

export const Field = (props: FieldProps<typeof controller>) => {
  if (props.field.displayMode === 'checkboxes') {
    return <CheckboxesField {...props} />
  }

  return (
    <SelectField {...props} />
  )
}

const SelectField = (props: FieldProps<typeof controller>) => {
  const { field, onChange, value } = props

  const tags = useListData({
    initialItems: Array.from(value),
    getKey: item => item.value,
  })

  console.log('SelectField', value)
  
  return (
    <VStack gap="regular">
      <Combobox
        label={field.label}
        description={field.description}
        isReadOnly={onChange === undefined}
        items={field.options.filter(option => !value.some(x => x.value === option.value))}
        selectedKey={null}
        onSelectionChange={key => {
          if (key == null) return
          const selectedOption = field.valuesToOptionsWithStringValues[key]
          onChange?.([...value, selectedOption])
          tags.append(selectedOption)
        }}
        width="auto"
      >
        {item => (
          <Item key={item.value}>
            {item.label}
          </Item>
        )}
      </Combobox>
      
      <TagGroup
        aria-label={field.label}
        items={tags.items}
        maxRows={2}
        onRemove={(keys) => {
          const key = keys.values().next().value
          tags.remove(key)
          onChange?.(value.filter(x => x.value !== key))
        }}
        renderEmptyState={() => (
          <Text color="neutralSecondary" size='small'>
            No items…
          </Text>
        )}
      >
        {item => (
          <Item key={item.value}>
            {item.label}
          </Item>
        )}
      </TagGroup>
    </VStack>
  )
}

const CheckboxesField = (props: FieldProps<typeof controller>) => {
  const { field, onChange, value } = props
  return (
    <CheckboxGroup
      label={field.label}
      description={field.description}
      isReadOnly={onChange === undefined}
      value={value.map(x => x.value)}
      onChange={keys => {
        onChange?.(keys.map(key => field.valuesToOptionsWithStringValues[key]))
      }}
    >
      {field.options.map(option => (
        <Checkbox
          key={option.value}
          value={option.value}
          // isSelected={value.some(x => x.value === option.value)}
        >
          {option.label}
        </Checkbox>
      ))}
    </CheckboxGroup>
  )
}

export const Cell: CellComponent<typeof controller> = ({ item, field, linkTo }) => {
  const value: readonly string[] | readonly number[] = item[field.path] ?? []
  const label = value.map(value => field.valuesToOptionsWithStringValues[value].label).join(', ')
  return linkTo ? <CellLink {...linkTo}>{label}</CellLink> : <CellContainer>{label}</CellContainer>
}
Cell.supportsLinkTo = true

export type AdminMultiSelectFieldMeta = {
  options: readonly { label: string, value: string | number }[]
  type: 'string' | 'integer' | 'enum'
  displayMode: 'checkboxes' | 'select'
  defaultValue: string[] | number[]
}

type Config = FieldControllerConfig<AdminMultiSelectFieldMeta>

type Option = { label: string, value: string }

type Value = readonly Option[]

export const controller = (
  config: Config
): FieldController<Value, Option[]> & {
  displayMode: 'checkboxes' | 'select'
  options: Option[]
  type: 'string' | 'integer' | 'enum'
  valuesToOptionsWithStringValues: Record<string, Option>
} => {
  const optionsWithStringValues = config.fieldMeta.options.map(x => ({
    label: x.label,
    value: x.value.toString(),
  }))

  const valuesToOptionsWithStringValues = Object.fromEntries(
    optionsWithStringValues.map(option => [option.value, option])
  )

  const parseValue = (value: string) =>
    config.fieldMeta.type === 'integer' ? parseInt(value) : value

  return {
    displayMode: config.fieldMeta.displayMode,
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: config.path,
    defaultValue: config.fieldMeta.defaultValue.map(x => valuesToOptionsWithStringValues[x]),
    type: config.fieldMeta.type,
    options: optionsWithStringValues,
    valuesToOptionsWithStringValues,
    deserialize: data => {
      // if we get null from the GraphQL API (which will only happen if field read access control failed)
      // we'll just show it as nothing being selected for now.
      const values: readonly string[] | readonly number[] = data[config.path] ?? []
      const selectedOptions = values.map(x => valuesToOptionsWithStringValues[x])
      return selectedOptions
    },
    serialize: value => ({ [config.path]: value.map(x => parseValue(x.value)) }),
  }
}
