import React, { useMemo } from 'react'
import { mappedBykey } from '@common/utils'
import { useTable } from '@stores/table.store'
import { CellItem } from './CellItem'
import { Box } from '@fower/react'
import { useMembers } from '@hooks/useMembers'
import { useVisit } from '@stores/visit.store'

export interface Props {
  index?: number

  rowId: string
  optionId?: string
}

export const CellList = ({ rowId }: Props) => {
  const { viewId } = useVisit()
  const { getColumn, viewColumns, getRow, table } = useTable()
  const { data: members } = useMembers()
  const row = getRow(rowId)

  const sortedCells = useMemo(
    () =>
      viewColumns
        .filter((i) => i.visible)
        .map((item) => {
          const { columnId } = item
          const cellsMap = mappedBykey(row.cells, 'columnId')
          return cellsMap[columnId]
        }),
    [viewColumns, viewId, row],
  )

  return (
    <Box spaceY1>
      {sortedCells.map((cell, index) => {
        const isTitle = index === 0
        const { columnId } = cell
        const column = getColumn(columnId)
        return (
          <div key={cell.id}>
            <CellItem isTitle={isTitle} column={column} cell={cell} members={members}></CellItem>
          </div>
        )
      })}
    </Box>
  )
}
