import { FieldType } from '@generated/types'

export const fieldTypeMaps: Record<FieldType, 'string' | 'number' | 'boolean' | 'array'> = {
  Locale: 'string',
  Namespace: 'string',
  Key: 'string',
  SingleLineText: 'string',
  LongText: 'string',
  Collaborator: 'string',
  SingleSelect: 'string',
  CreatedAt: 'string',
  UpdatedAt: 'string',
  CreatedBy: 'string',
  LastUpdatedBy: 'string',
}
