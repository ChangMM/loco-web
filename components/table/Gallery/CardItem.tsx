import React, { FC, forwardRef, memo, useMemo } from 'react'
import { Card } from '@bone-ui/card'
import { Cell, Column, FieldType, Row } from '@generated/types'
import { modalService } from '@generated/modalService'
import { FieldIcon } from '@components/FieldIcon'
import { mappedBykey } from '@common/utils'
import { Tag } from '@bone-ui/tag'
import { DraggableSyntheticListeners } from '@dnd-kit/core'
import { useTable } from '@stores/table.store'
import { Box } from '@fower/react'
import { useVisit } from '@stores/visit.store'

interface Props {
  dragging?: boolean
  dragOverlay?: boolean
  isDragging?: boolean
  isSorting?: boolean

  /** for drag handle */
  listeners?: DraggableSyntheticListeners

  /** for drag handle */
  attributes?: any

  id: string
  index?: number | null
  row: Row

  style?: any
}

interface CellListProps {
  row: Row
}

// eslint-disable-next-line react/display-name
const CellList: FC<CellListProps> = memo(({ row }) => {
  const { viewId } = useVisit()
  const { columns, viewColumns } = useTable()

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

  function renderData(cell: Cell, column: Column) {
    if (cell.fieldType === FieldType.SingleSelect) {
      if (!cell.data) return null
      const { name } = mappedBykey(column.options)[cell.data]

      return (
        <div>
          <Tag>{name}</Tag>
        </div>
      )
    }
    return <div>{cell.data || ''}</div>
  }
  return (
    <>
      {sortedCells.map((cell) => {
        const column = mappedBykey(columns)[cell.columnId]
        return (
          <Box key={cell.id} spaceY2>
            <Box toCenterY spaceX1>
              <FieldIcon fieldType={cell.fieldType} size={16}></FieldIcon>
              <span>{column.name}</span>
            </Box>
            {renderData(cell, column)}
          </Box>
        )
      })}
    </>
  )
})

// eslint-disable-next-line react/display-name
export const CardItem = memo(
  forwardRef<HTMLDivElement, Props>((props, ref) => {
    const {
      index,
      id,
      row,
      attributes,
      listeners,
      isDragging,
      isSorting,
      dragOverlay,
      ...rest
    } = props

    return (
      <Card
        ref={ref}
        {...attributes}
        {...listeners}
        hoverable={false}
        shadow={dragOverlay}
        opacity-50={isDragging}
        cursorPointer
        w-260
        spaceY2
        onDoubleClick={() => modalService.openModalFormTable(row)}
        {...rest}
      >
        <CellList row={row}></CellList>
      </Card>
    )
  }),
)
