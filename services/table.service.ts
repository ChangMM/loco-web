import { fieldTypeMaps } from '@common/constants'
import { FieldType } from '@generated/types'

class TableService {
  transformCellData(data: any, oldFieldType: FieldType, newFieldType: FieldType) {
    if (!data) return null
    const map = new Map<string, any>([
      ['string->number', () => (Number.isNaN(parseFloat(data)) ? null : parseFloat(data))],
      ['string->boolean', () => null],
      ['string->array', () => null],
      ['number->string', () => String(data)],
      ['boolean->string', () => String(data)],
      ['array->string', () => String(data)],
      ['number->boolean', () => (data === 1 ? true : null)],
      ['array->boolean', () => null],
      ['number->array', () => null],
      ['boolean->array', () => null],
      ['boolean->number', () => null],
      ['array->number', () => null],
    ])

    const fn = map.get(`${fieldTypeMaps[oldFieldType]}->${fieldTypeMaps[newFieldType]}`)
    if (fn) return fn()
    return null
  }
}

export const tableService = new TableService()
