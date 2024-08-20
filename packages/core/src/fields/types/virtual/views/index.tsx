/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core'
import { FieldContainer, FieldDescription, FieldLabel } from '@keystone-ui/fields'
import {
  type CellComponent,
  type FieldController,
  type FieldControllerConfig,
  type FieldProps,
} from '../../../../types'

import { PrettyData } from './PrettyData'

export const Field = ({ field, value }: FieldProps<typeof controller>) =>
  value === createViewValue ? null : (
    <FieldContainer>
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>{field.description}</FieldDescription>
      <PrettyData data={value} />
    </FieldContainer>
  )

export const Cell: CellComponent = ({ item, field }) => {
  return <PrettyData data={item[field.path]} />
}

const createViewValue = Symbol('create view virtual field value')

export const controller = (
  config: FieldControllerConfig<{ query: string }>
): FieldController<any> => {
  return {
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: `${config.path}${config.fieldMeta.query}`,
    defaultValue: createViewValue,
    deserialize: data => {
      return data[config.path]
    },
    serialize: () => ({}),
  }
}
