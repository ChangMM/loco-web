import { nanoid } from 'nanoid'
import { mappedBykey } from '@common/utils'
import { arrayMove } from '@dnd-kit/sortable'
import { apiService } from '@generated/api'
import { Hooks } from '@generated/hooks'
import { Mutator } from '@generated/mutator'
import { Refetcher } from '@generated/refetcher'
import { useMemo } from 'react'
import { Cell, Column, FieldType, Option, Row, ViewColumn } from '@generated/types'
import { fieldTypeMaps } from '@common/constants'
import { tableService } from '@services/table.service'
import { getState } from 'stook'
import { TABLE } from '@generated/gql'
import { Result } from 'stook-graphql'
import { Table } from '@generated/types'
import { useVisit } from './visit.store'

interface ColumnValues {
  name: string
  fieldType: FieldType
}

type AddColumnValues = ColumnValues
type ModifyColumnValues = ColumnValues

export function useTable() {
  const { visit } = useVisit()
  const { tableId, viewId } = visit || {}

  const { data: table, loading: loadingTable, ...rest } = Hooks.useTable(() => {
    if (!tableId) throw new Error()
    return { id: tableId }
  })

  const columns = table?.columns || []
  const columnsMap = mappedBykey(columns)
  const rows = table?.rows || []
  const rowsMap = mappedBykey(rows)

  const views = table?.views || []
  const viewsMap = mappedBykey(views)
  const view = viewsMap[viewId]

  const viewColumns = useMemo(
    () =>
      (view?.viewColumns || []).map((i) => {
        const column = columnsMap[i.columnId]
        return { ...i, column }
      }),
    [view?.viewColumns, columnsMap],
  )

  const viewColumnsMap = mappedBykey(viewColumns)

  return {
    ...rest,
    loadingTable,
    table,
    views,
    view,
    viewColumns,
    columns,
    rows,
    rowsMap,

    getRow(rowId = '') {
      return rowsMap[rowId]
    },

    getColumn(columnId = '') {
      return columnsMap[columnId]
    },

    getViewColum(viewColumnId = '') {
      return viewColumnsMap[viewColumnId]
    },

    getOptions(columnId = '') {
      return columnsMap[columnId]?.options || []
    },
  }
}

export function getTable(): Table {
  const { data: table } = getState<Result<Table>>(TABLE)
  return table
}

export function updateTableName(name: string) {
  Mutator.mutateTable((table) => {
    table.name = name
    apiService.updateTable({ where: { id: table.id }, data: { name } })
  })
}

interface RefetchTableOptions {
  id: string
  showLoading?: boolean
}

export async function refecthTable(opt: RefetchTableOptions) {
  const { id, showLoading = true } = opt
  return await Refetcher.refetchTable({ id }, { showLoading })
}

export async function sortViewColumns(originIndex: number, targetIndex: number, viewId: string) {
  Mutator.mutateTable((table) => {
    const viewIndex = table.views.findIndex((i) => i.id === viewId)
    const { viewColumns } = table.views[viewIndex]
    table.views[viewIndex].viewColumns = arrayMove(viewColumns, originIndex, targetIndex)

    /** 更新服务器数据 */
    const origin = viewColumns[originIndex].sortBaseView
    const target = viewColumns[targetIndex].sortBaseView
    apiService.sortViewColumns({ origin, target, baseOn: `view|${viewId}` })
  })
}

export async function sortRows(originIndex: number, targetIndex: number) {
  Mutator.mutateTable((table) => {
    const { rows } = table

    /** 更新服务器数据 */
    const origin = rows[originIndex].sortBaseTable
    const target = rows[targetIndex].sortBaseTable
    apiService.sortRows({ origin, target, baseOn: `table|${table.id}` })

    table.rows = resetRowsSort(arrayMove(rows, originIndex, targetIndex))
  })
}

export async function sortRowsBySort(origin: number, target: number) {
  Mutator.mutateTable((table) => {
    const { rows } = table

    const originIndex = rows.findIndex((i) => i.sortBaseTable === origin)
    const targetIndex = rows.findIndex((i) => i.sortBaseTable === target)
    table.rows = resetRowsSort(arrayMove(rows, originIndex, targetIndex))

    /** 更新服务器数据 */
    apiService.sortRows({ origin, target, baseOn: `table|${table.id}` })
  })
}

export async function sortRowsById(originId: string, targetId = '') {
  const table = getTable()
  const oldIndex = table.rows.findIndex((i) => i.id === originId)
  const newIndex = table.rows.findIndex((i) => i.id === targetId)

  sortRows(oldIndex, newIndex)
}

export async function addRow(tableId: string) {
  const rowId = nanoid()

  Mutator.mutateTable((table) => {
    const cells = table.columns.map((column) => ({
      id: nanoid(), // tmp
      columnId: column.id,
      rowId,
      fieldType: column.fieldType,
      tableId,
    }))
    table.rows.push({
      id: rowId,
      tableId,
      sortBaseTable: table.rows.length + 1,
      cells,
    } as Row)
  })
  await apiService.addRow({ tableId, id: rowId })
}

export async function removeRow(id: string) {
  Mutator.mutateTable((table) => {
    const index = table.rows.findIndex((i) => i.id === id)
    table.rows.splice(index, 1)
  })
  await apiService.removeRow({ id })
}

/**
 * 更新某个单元格数据
 * @param cell 目标单元格
 * @param data 修改后的数据
 */
export async function mutateCellData(cell: Cell, data: any) {
  Mutator.mutateTable((table) => {
    const { rows } = table
    const rowIndex = rows.findIndex((i) => i.id === cell.rowId)

    const cellIndex = rows[rowIndex].cells.findIndex(
      (i) => i.rowId === cell.rowId && i.columnId === cell.columnId,
    )
    rows[rowIndex].cells[cellIndex].data = data
  })

  await apiService.modifyCell({
    columnId: cell.columnId,
    rowId: cell.rowId,
    data: data ? JSON.stringify({ value: data }) : null,
  })
}

export async function addColumn(tableId: string, viewId: string, values: AddColumnValues) {
  // TODO: 要处理 option
  const columnId = nanoid()

  const newColumn = {
    id: columnId,
    tableId,
    ...values,
  } as Column

  Mutator.mutateTable((table) => {
    table.columns.push(newColumn)

    // add viewColumn
    for (const item of table.views) {
      item.viewColumns.push({
        id: nanoid(), // tmp
        tableId,
        viewId,
        columnId,
        width: 180,
        sortBaseView: item.viewColumns.length + 1,
        visible: true,
      } as ViewColumn)
    }

    // add cells
    for (const item of table.rows) {
      item.cells.push({
        id: nanoid(), // tmp
        tableId,
        columnId,
        rowId: item.id,
        fieldType: values.fieldType,
      } as Cell)
    }
  })

  await apiService.addColumn(newColumn)
}

export async function modifyColum(id: string, values: ModifyColumnValues) {
  const { fieldType } = values
  Mutator.mutateTable((table) => {
    const index = table.columns.findIndex((i) => i.id === id)
    const column = table.columns[index]
    table.columns[index] = { ...column, ...values }

    /** 如果类型变了也要修改单元格类型 */
    if (fieldType !== column.fieldType) {
      for (const item of table.rows) {
        const index = item.cells.findIndex((i) => i.columnId === id)

        // 修改 单元格类型
        item.cells[index].fieldType = fieldType

        /** data 需要转换 */
        if (fieldTypeMaps[column.fieldType] !== fieldTypeMaps[fieldType]) {
          item.cells[index].data = tableService.transformCellData(
            item.cells[index].data,
            column.fieldType,
            fieldType,
          )
        }
      }
    }
  })

  await apiService.modifyColumn({ id, ...values })
}

export function removeColumn(id: string) {
  Mutator.mutateTable((table) => {
    /** remove column */
    const index = table.columns.findIndex((i) => i.id === id)
    table.columns.splice(index, 1)

    /** remove viewColumns */
    for (const item of table.views) {
      const index = item.viewColumns.findIndex((i) => i.columnId === id)
      item.viewColumns.splice(index, 1)
    }

    /** remove rows */
    for (const item of table.rows) {
      const index = item.cells.findIndex((i) => i.columnId === id)
      item.cells.splice(index, 1)
    }
  })

  apiService.removeColumn({ id })
}

export async function addOptionToColumns(option: Option) {
  const { columnId } = option
  Mutator.mutateTable((table) => {
    const columnIndex = table.columns.findIndex((i) => i.id === columnId)
    table.columns[columnIndex].options.push(option)
  })

  await apiService.createOption(option)
}

export async function setColumnVisible(id: string, visible: boolean, viewId: string) {
  Mutator.mutateTable((table) => {
    const viewIndex = table.views.findIndex((i) => i.id === viewId)
    const viewColumnIndex = table.views[viewIndex].viewColumns.findIndex((i) => i.id === id)
    table.views[viewIndex].viewColumns[viewColumnIndex].visible = visible
  })

  await apiService.updateViewColumn({
    where: { id },
    data: { visible },
  })
}

function resetRowsSort(rows: Row[]) {
  return rows.map((row, index) => {
    return {
      ...row,
      sortBaseTable: index + 1,
    }
  })
}

export async function selectVersion(versionedColumns: any[], versionedRows: any[]) {
  Mutator.mutateTable((table) => {
    table.columns = versionedColumns
    table.rows = versionedRows
  })
}
