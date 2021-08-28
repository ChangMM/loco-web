import React, { useEffect, useState } from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Tag } from '@bone-ui/tag'
import { SortableItem } from './SortableItem'
import { DroppableContainer } from './DroppableContainer'
import { Column, Row, Option } from '@generated/types'
import { mappedBykey } from '@common/utils'
import { AddItemBtn } from './AddItemBtn'
import { DndContextContainer } from './DndContextContainer'
import { useTable } from '@stores/table.store'
import { Box } from '@fower/react'

type Items = Record<string, string[]>

export function Kanban() {
  const { rows, columns, view } = useTable()
  const { stackedColumnId } = view
  const [options, setOptions] = useState<Option[]>([])
  const [items, setItems] = useState<Items>({})

  useEffect(() => {
    if (!rows || !columns || !view) return
    const options = getKanbanOptions(stackedColumnId, columns)
    const initialItems = getInitialItems(stackedColumnId, rows, options)
    setOptions(options)
    setItems(initialItems)
  }, [rows, columns, view])

  return (
    <DndContextContainer
      stackedColumnId={stackedColumnId || ''}
      items={items}
      setItems={setItems}
      options={options}
      rows={rows}
    >
      <Box toLeft border overflowX="auto" spaceX3 px3>
        {Object.keys(items).map((optionId) => {
          const option = mappedBykey(options)[optionId]

          return (
            <SortableContext
              key={optionId}
              items={items[optionId]}
              strategy={verticalListSortingStrategy}
            >
              <DroppableContainer id={optionId} items={items[optionId]}>
                <Tag fontBold bg={option?.color || 'transparent'} white={!!option}>
                  {option?.name || '未分配'}
                </Tag>
                <Box spaceY3>
                  {items[optionId].map((value, index) => {
                    return (
                      <SortableItem key={value} rowId={value} optionId={option?.id} index={index} />
                    )
                  })}
                </Box>
                <AddItemBtn optionId={option?.id}></AddItemBtn>
              </DroppableContainer>
            </SortableContext>
          )
        })}
      </Box>
    </DndContextContainer>
  )
}

/**
 * 看板的 options
 * @param stackedColumnId
 * @param columns
 */
function getKanbanOptions(stackedColumnId: any, columns: Column[]) {
  return (columns.find((column) => column.id === stackedColumnId) as Column).options
}

/**
 * 看板的初始数据
 * optionId 到 rowId 的映射
 * @param stackedColumnId
 * @param rows
 * @param columns
 */
function getInitialItems(stackedColumnId: any, rows: Row[], options: Option[]): Items {
  const uncategorized = 'uncategorized'

  const items = options.reduce<Items>((result, option) => ({ ...result, [option.id]: [] }), {
    [uncategorized]: [],
  })

  for (const row of rows) {
    const cell = row.cells.find((cell) => cell.columnId === stackedColumnId)
    const data = cell?.data

    if (items[data]) {
      items[data].push(row.id)
    } else {
      items[uncategorized].push(row.id)
    }
  }
  return items
}
