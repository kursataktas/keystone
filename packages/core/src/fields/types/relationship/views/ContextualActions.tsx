import React, { type Key, PropsWithChildren, useMemo } from 'react'

import { Icon } from '@keystar/ui/icon'
import { arrowUpRightIcon } from '@keystar/ui/icon/icons/arrowUpRightIcon'
import { plusIcon } from '@keystar/ui/icon/icons/plusIcon'
import { Grid } from '@keystar/ui/layout'
import { ActionMenu, Item } from '@keystar/ui/menu'
import { Text } from '@keystar/ui/typography'

import { useList } from '../../../../admin-ui/context'
import type { FieldProps } from '../../../../types'
import type { RelationshipController } from './types'

export function ContextualActions (props: PropsWithChildren<FieldProps<() => RelationshipController>>) {
  const { children, ...otherProps } = props
  return (
    <Grid gap="regular" alignItems="end" columns="minmax(0, 1fr) auto">
      {children}
      <ContextualActionsMenu {...otherProps} />
    </Grid>
  )
}

function ContextualActionsMenu (props: FieldProps<() => RelationshipController>) {
  const { field, onChange, value } = props

  const foreignList = useList(field.refListKey)
  const relatedItem = useRelatedItem(props)

  const items = useMemo(() => {
    let result = []
    let allowCreate = !field.hideCreate && onChange !== undefined

    if (allowCreate) {
      result.push({
        icon: plusIcon,
        key: 'add',
        label: `Add ${foreignList.singular.toLocaleLowerCase()}`,
      })
    }
    if (relatedItem) {
      result.push({
        key: 'view',
        ...relatedItem,
      })
    }

    return result
  }, [value])

  const onAction = (key: Key) => {
    switch (key) {
      case 'add': {
        alert('TODO: "create" modal')
        break
      }
    }
  }

  // if there are no items, and the user has no ability to add items, don't
  // render the menu
  if (onChange === undefined && items.length === 0) {
    return null
  }

  return (
    <ActionMenu
      aria-label={`Actions for ${field.label}`}
      direction="bottom"
      align="end"
      isDisabled={items.length === 0}
      items={items}
      onAction={onAction}
    >
      {item => (
        <Item key={item.key} href={'href' in item ? item.href : undefined} textValue={item.label}>
          <Icon src={item.icon} />
          <Text>{item.label}</Text>
        </Item>
      )}
    </ActionMenu>
  )
}

function useRelatedItem ({ field, value }: FieldProps<() => RelationshipController>) {
  const foreignList = useList(field.refListKey)

  if (value.kind === 'count') {
    return null
  }
  if (value.kind === 'many' && !value.value.length) {
    return null
  }
  if (value.kind === 'one' && !value.value) {
    return null
  }

  if (value.kind === 'many') {
    const query = field.refFieldKey && value.id
      ? `!${field.refFieldKey}_matches="${value.id}"`
      :`!id_in="${(value?.value)
        .slice(0, 100) // where does 100 come from?
        .map(item => item.id)
        .join(',')}"`

    return {
      href: `/${foreignList.path}?${query}`,
      icon: arrowUpRightIcon,
      label: `View related ${foreignList.plural.toLocaleLowerCase()}`,
    }
  }

  if (value.value?.id) {
    return {
      href: `/${foreignList.path}/${value.value?.id}`,
      icon: arrowUpRightIcon,
      label: `View ${foreignList.singular.toLocaleLowerCase()}`,
    }
  }

  return null
}
