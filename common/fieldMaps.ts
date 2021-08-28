import { FieldType } from '@generated/types'
import { ComponentType } from '@formy/core'

export const fieldMaps: Record<FieldType, ComponentType> = {
  Key: 'Input',
  Namespace: 'Input',
  Locale: 'Input',
  SingleLineText: 'Input',
  LongText: 'Input',
  Collaborator: 'Input',
  SingleSelect: 'SingleSelect',
  CreatedAt: 'DatePicker',
  UpdatedAt: 'DatePicker',
  CreatedBy: 'Input',
  LastUpdatedBy: 'Input',
}
