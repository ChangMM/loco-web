import React, { useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
} from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { SortableCardtem } from './SortableCardtem'
import { sortRows, useTable } from '@stores/table.store'
import { createPortal } from 'react-dom'
import { restrictToWindowEdges } from '@dnd-kit/modifiers'
import { CardItem } from './CardItem'
import { Box } from '@fower/react'

export const Gallery = () => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const { rows, getRow } = useTable()
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  /**
   * TODO: 有 bug
   * @param event
   */
  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active.id !== over?.id) {
      const oldIndex = rows.findIndex((i) => i.id === active.id)
      const newIndex = rows.findIndex((i) => i.id === over?.id)

      sortRows(oldIndex, newIndex)
    }

    setActiveId(null)
  }

  const items = rows.map((i) => i.id)
  const activeRow = activeId ? getRow(activeId) : (null as any)

  return (
    <Box toLeft space-8 flexWrap px5 mt4>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={({ active }) => {
          if (!active) return

          // TODO: 会导致闪烁
          setActiveId(active.id)
        }}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items}
          // strategy={verticalListSortingStrategy}
          strategy={rectSortingStrategy}
          // strategy={horizontalListSortingStrategy}
        >
          {rows.map((row, index) => (
            <SortableCardtem key={row.id} id={row.id.toString()} index={index} row={row} />
          ))}
        </SortableContext>

        {createPortal(
          <DragOverlay adjustScale={false} modifiers={[restrictToWindowEdges]}>
            {activeId ? <CardItem dragOverlay row={activeRow} id={activeId} /> : null}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
    </Box>
  )
}
