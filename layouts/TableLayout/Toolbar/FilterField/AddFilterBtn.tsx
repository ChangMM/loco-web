import React, { FC } from 'react'
import { nanoid } from 'nanoid'
import { Button } from '@bone-ui/button'
import PlusOutline from '@bone-ui/icons/PlusOutline'
import { apiService } from '@generated/api'
import { ConjunctionType, OperatorType } from '@generated/types'
import { Mutator } from '@generated/mutator'
import { refecthTable, useTable } from '@stores/table.store'
import { useVisit } from '@stores/visit.store'

interface Props {}

export const AddFilterBtn: FC<Props> = () => {
  const { viewId, tableId } = useVisit()
  const { view, viewColumns } = useTable()

  const [viewColumn] = viewColumns.filter(
    (i) => !view.filters.some((filter) => i.columnId === filter.columnId),
  )

  async function createFilter() {
    const id = nanoid()

    Mutator.mutateTable((table) => {
      const viewIndex = table.views.findIndex((i) => i.id === view.id)

      table.views[viewIndex].filters.push({
        id,
        value: '',
        conjunction: ConjunctionType.And,
        columnId: viewColumn.columnId,
        fieldType: viewColumn.column.fieldType,
        operator: OperatorType.Is,
        tableId,
        viewId,
      })
    })

    await apiService.createFilter({
      id,
      conjunction: ConjunctionType.And,
      columnId: viewColumn.columnId,
      fieldType: viewColumn.column.fieldType,
      operator: OperatorType.Is,
      tableId,
      viewId,
    })

    refecthTable({ id: tableId })
  }

  return (
    <Button size={28} borderNone onClick={createFilter}>
      <PlusOutline></PlusOutline>
      <span>添加条件</span>
    </Button>
  )
}
