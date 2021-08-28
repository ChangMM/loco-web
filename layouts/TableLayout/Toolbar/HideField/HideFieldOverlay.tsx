import React, { FC, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { restrictToWindowEdges } from '@dnd-kit/modifiers'
import { Button } from '@bone-ui/button'
import { sortViewColumns, useTable } from '@stores/table.store'
import { SortableItem } from './SortableItem'
import { Item } from './Item'
import { Box } from '@fower/react'
import { useVisit } from '@stores/visit.store'

interface Props {}

export const HideFieldOverlay: FC<Props> = () => {
  const { viewColumns, getViewColum } = useTable()
  const { viewId } = useVisit()

  const [activeId, setActiveId] = useState<string | null>(null as any)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const items = viewColumns.map((i) => i.id)

  function handleDragStart(event: DragStartEvent) {
    const { active } = event

    setActiveId(active.id)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active.id !== over?.id) {
      const oldIndex = viewColumns.findIndex((i) => i.id === active.id)
      const newIndex = viewColumns.findIndex((i) => i.id === over?.id)
      sortViewColumns(oldIndex, newIndex, viewId)
    }

    setActiveId(null)
  }

  const viewColumn = activeId ? getViewColum(activeId) : (null as any)

  return (
    <Box bgWhite rounded-4 p2 w-200>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        // modifiers={[restrictToVerticalAxis]}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items}>
          {viewColumns.map((viewColumn, index) => (
            <SortableItem
              key={viewColumn.id}
              index={index}
              id={viewColumn.id}
              viewColumn={viewColumn}
            />
          ))}
        </SortableContext>

        {createPortal(
          <DragOverlay zIndex={2000} modifiers={[restrictToWindowEdges]}>
            {activeId ? <Item dragOverlay viewColumn={viewColumn} id={activeId} /> : null}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
      <Box toBetween>
        <Button size={28}>隐藏所有</Button>
        <Button size={28}>显示所有</Button>
      </Box>
    </Box>
  )
}
