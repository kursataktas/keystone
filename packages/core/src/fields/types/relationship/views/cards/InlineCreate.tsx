/** @jsxRuntime classic */
/** @jsx jsx */

import { useState } from 'react'
import { jsx, Stack } from '@keystone-ui/core'
import isDeepEqual from 'fast-deep-equal'
import { useToasts } from '@keystone-ui/toast'
import { Button } from '@keystone-ui/button'
import { type ListMeta } from '../../../../../types'
import {
  type ItemData,
  makeDataGetter,
  type DataGetter,
  type Value,
  useInvalidFields,
  serializeValueToObjByFieldKey,
  Fields,
} from '../../../../../admin-ui/utils'
import { gql, useMutation } from '../../../../../admin-ui/apollo'
import { GraphQLErrorNotice } from '../../../../../admin-ui/components'
import { useFieldsObj } from './useItemState'

export function InlineCreate ({
  list,
  onCancel,
  onCreate,
  fields: fieldPaths,
  selectedFields,
}: {
  list: ListMeta
  selectedFields: string
  fields: readonly string[]
  onCancel: () => void
  onCreate: (itemGetter: DataGetter<ItemData>) => void
}) {
  const toasts = useToasts()
  const fields = useFieldsObj(list, fieldPaths)

  const [createItem, { loading, error }] = useMutation(
    gql`mutation($data: ${list.gqlNames.createInputName}!) {
      item: ${list.gqlNames.createMutationName}(data: $data) {
        ${selectedFields}
    }
  }`
  )

  const [value, setValue] = useState(() => {
    const value: Value = {}
    Object.keys(fields).forEach(fieldPath => {
      value[fieldPath] = { kind: 'value', value: fields[fieldPath].controller.defaultValue }
    })
    return value
  })

  const invalidFields = useInvalidFields(fields, value)
  const [forceValidation, setForceValidation] = useState(false)

  const onSubmit = () => {
    const newForceValidation = invalidFields.size !== 0
    setForceValidation(newForceValidation)

    if (newForceValidation) return
    const data: Record<string, any> = {}
    const allSerializedValues = serializeValueToObjByFieldKey(fields, value)
    Object.keys(allSerializedValues).forEach(fieldPath => {
      const { controller } = fields[fieldPath]
      const serialized = allSerializedValues[fieldPath]
      if (!isDeepEqual(serialized, controller.serialize(controller.defaultValue))) {
        Object.assign(data, serialized)
      }
    })

    createItem({
      variables: {
        data,
      },
    })
      .then(({ data, errors }) => {
        // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
        // which are handled seperately and do not indicate a failure to update the item
        const error = errors?.find(x => x.path?.length === 1)
        if (error) {
          toasts.addToast({
            title: 'Failed to create item',
            tone: 'negative',
            message: error.message,
          })
        } else {
          toasts.addToast({
            title: data.item[list.labelField] || data.item.id,
            tone: 'positive',
            message: 'Saved successfully',
          })
          onCreate(makeDataGetter(data, errors).get('item'))
        }
      })
      .catch(err => {
        toasts.addToast({
          title: 'Failed to update item',
          tone: 'negative',
          message: err.message,
        })
      })
  }

  return (
    <section>
      <Stack gap="xlarge">
        {error && (
          <GraphQLErrorNotice networkError={error?.networkError} errors={error?.graphQLErrors} />
        )}
        <Fields
          fields={fields}
          forceValidation={forceValidation}
          invalidFields={invalidFields}
          onChange={setValue}
          value={value}
        />
        <Stack gap="small" across>
          <Button onClick={onSubmit} isLoading={loading} size="small" tone="positive" weight="bold">
            Create {list.singular}
          </Button>
          <Button size="small" weight="none" onClick={onCancel}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </section>
  )
}