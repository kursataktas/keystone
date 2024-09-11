/** @jsxRuntime classic */
/** @jsx jsx */
'use client'

import { jsx } from '@keystone-ui/core'
import { FieldContainer, FieldDescription, FieldLabel } from '@keystone-ui/fields'
import { Node } from 'slate'

import {
  type CellComponent,
  type FieldProps,
} from '@keystone-6/core/types'

import { DocumentEditor } from './DocumentEditor'
import { ForceValidationProvider } from './DocumentEditor/utils-hooks'
import {
  type controller,
  type DocumentFeatures,
} from './views-shared'

export {
  controller,
} from './views-shared'

export { type DocumentFeatures }
export function Field ({
  field,
  value,
  onChange,
  autoFocus,
  forceValidation,
}: FieldProps<typeof controller>) {
  return <FieldContainer>
    <FieldLabel as="span" id={`${field.path}-label`}>
      {field.label}
    </FieldLabel>
    <FieldDescription id={`${field.path}-description`}>{field.description}</FieldDescription>
    <ForceValidationProvider value={!!forceValidation}>
      <DocumentEditor
        autoFocus={autoFocus}
        aria-labelledby={`${field.path}-label`}
        value={value}
        onChange={onChange}
        componentBlocks={field.componentBlocks}
        relationships={field.relationships}
        documentFeatures={field.documentFeatures}
      />
    </ForceValidationProvider>
  </FieldContainer>
}

function serialize (nodes: Node[]) {
  return nodes.map((n: Node) => Node.string(n)).join('\n')
}

export const Cell: CellComponent = ({ field, item }) => {
  const value = item[field.path]?.document
  if (!value) return null

  // FIXME: @keystar/ui `Text` should be used here, but it's not currently
  // available in this package
  return <span>{serialize(value).slice(0, 60)}</span>
}

export const allowedExportsOnCustomViews = ['componentBlocks']
