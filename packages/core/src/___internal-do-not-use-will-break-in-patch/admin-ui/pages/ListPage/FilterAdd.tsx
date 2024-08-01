import { useRouter } from 'next/router'
import { type FormEvent, Fragment, useMemo, useState, useRef } from 'react'

import { ActionButton, ButtonGroup, Button } from '@keystar/ui/button'
import { Dialog, DialogTrigger } from '@keystar/ui/dialog'
import { Icon } from '@keystar/ui/icon'
import { chevronDownIcon } from '@keystar/ui/icon/icons/chevronDownIcon'
import { Grid, VStack } from '@keystar/ui/layout'
import { MenuTrigger, Menu, Item } from '@keystar/ui/menu'
import { Picker } from '@keystar/ui/picker'
import { Content } from '@keystar/ui/slots'
import { Heading, Text } from '@keystar/ui/typography'

import { type FieldMeta, type JSONValue } from '../../../../types'
import { useList } from '../../../../admin-ui/context'

type State =
  | { kind: 'selecting-field' }
  | { kind: 'filter-value', fieldPath: string, filterType: string, filterValue: JSONValue }

export function FilterAdd (props: {
  filterableFields: Set<string>
  isDisabled?: boolean
  listKey: string
}) {
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const [state, setState] = useState<State>({ kind: 'selecting-field' })
  const router = useRouter()

  const { fieldsWithFilters, filtersByFieldThenType, list } = useFilterFields(props)
  const resetState = () => {
    setState({ kind: 'selecting-field' })
    // This is a bit of a hack to ensure the trigger button is focused after the
    // dialog closes, since we're forking the render
    setTimeout(() => {
      triggerRef?.current?.focus()
    }, 200)
  }
  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (state.kind === 'filter-value') {
      router.push({
        query: {
          ...router.query,
          [`!${state.fieldPath}_${state.filterType}`]: JSON.stringify(state.filterValue),
        },
      })
      resetState()
    }
  }

  if (state.kind === 'filter-value') {
    const { Filter } = fieldsWithFilters[state.fieldPath].controller.filter
    const fieldLabel = list.fields[state.fieldPath].label
    const filterTypes = filtersByFieldThenType[state.fieldPath]
    const typeLabel = filterTypes[state.filterType]
    return (
      <DialogTrigger type="popover" mobileType="tray" defaultOpen onOpenChange={isOpen => !isOpen && resetState()}>
        <ActionButton>
          <Text>Filter</Text>
          <Icon src={chevronDownIcon} />
        </ActionButton>
        <Dialog>
          <form onSubmit={onSubmit} style={{ display: 'contents' }}>
            <Heading>
              Filter by {fieldLabel.toLocaleLowerCase()}
            </Heading>
            <Content>
              <Grid gap="large" rows="auto minmax(0, 1fr)" height="100%">
                <Picker
                  width="100%"
                  aria-label="filter type"
                  items={Object.keys(filterTypes).map(filterType => ({
                    label: filterTypes[filterType],
                    value: filterType,
                  }))}
                  selectedKey={state.filterType}
                  onSelectionChange={key => {
                    if (key) {
                      setState({
                        kind: 'filter-value',
                        fieldPath: state.fieldPath,
                        filterValue:
                          fieldsWithFilters[state.fieldPath].controller.filter.types[key]
                            .initialValue,
                        filterType: key as string,
                      })
                    }
                  }}
                >
                  {item => <Item key={item.value}>{item.label}</Item>}
                </Picker>

                <Filter
                  autoFocus
                  context="add"
                  typeLabel={typeLabel}
                  type={state.filterType}
                  value={state.filterValue}
                  onChange={value => {
                    setState(state => ({
                      ...state,
                      filterValue: value,
                    }))
                  }}
                />
              </Grid>
            </Content>
            <ButtonGroup>
              <Button onPress={resetState}>Cancel</Button>
              <Button prominence="high" type="submit">
                Save
              </Button>
            </ButtonGroup>
          </form>
        </Dialog>
      </DialogTrigger>
    )
  }
  
  return (
    <Fragment>
      <MenuTrigger>
        <ActionButton ref={triggerRef} isDisabled={props.isDisabled}>
          <Text>Filter</Text>
          <Icon src={chevronDownIcon} />
        </ActionButton>
        <Menu
          items={Object.keys(filtersByFieldThenType).map(fieldPath => ({
            label: fieldsWithFilters[fieldPath].label,
            value: fieldPath,
          }))}
          onAction={fieldPath => {
            const filterType = Object.keys(filtersByFieldThenType[fieldPath])[0]
            setState({
              kind: 'filter-value',
              fieldPath: fieldPath as string,
              filterType,
              filterValue:
                fieldsWithFilters[fieldPath].controller.filter.types[filterType].initialValue,
            })
          }}
        >
          {item => (
            <Item key={item.value} >{item.label}</Item>
          )}
        </Menu>
      </MenuTrigger>
    </Fragment>
  )
}

function useFilterFields ({
  listKey,
  filterableFields,
}: {
  listKey: string
  filterableFields: Set<string>
}) {
  const list = useList(listKey)
  const router = useRouter()
  const fieldsWithFilters = useMemo(() => {
    const fieldsWithFilters: Record<
      string,
      FieldMeta & { controller: { filter: NonNullable<FieldMeta['controller']['filter']> } }
    > = {}
    Object.keys(list.fields).forEach(fieldPath => {
      const field = list.fields[fieldPath]
      if (filterableFields.has(fieldPath) && field.controller.filter) {
        fieldsWithFilters[fieldPath] = field as any
      }
    })
    return fieldsWithFilters
  }, [list.fields, filterableFields])
  const filtersByFieldThenType = useMemo(() => {
    const filtersByFieldThenType: Record<string, Record<string, string>> = {}
    Object.keys(fieldsWithFilters).forEach(fieldPath => {
      const field = fieldsWithFilters[fieldPath]
      let hasUnusedFilters = false
      const filters: Record<string, string> = {}
      Object.keys(field.controller.filter.types).forEach(filterType => {
        if (router.query[`!${fieldPath}_${filterType}`] === undefined) {
          hasUnusedFilters = true
          filters[filterType] = field.controller.filter.types[filterType].label
        }
      })
      if (hasUnusedFilters) {
        filtersByFieldThenType[fieldPath] = filters
      }
    })
    return filtersByFieldThenType
  }, [router.query, fieldsWithFilters])

  return {
    fieldsWithFilters,
    filtersByFieldThenType,
    list
  }
}
