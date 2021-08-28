import { FieldType } from '@generated/types'

export const fieldTextMaps: Record<FieldType, string> = {
  Locale: '语言',
  Namespace: '命名空间',
  Key: '语言 Key',
  SingleLineText: '单行文本',
  LongText: '长文本',
  Collaborator: '成员',
  SingleSelect: '单选',
  CreatedAt: '创建时间',
  UpdatedAt: '最后更新时间',
  CreatedBy: '创建人',
  LastUpdatedBy: '修改人',
}
