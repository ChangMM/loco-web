import React, { useState } from 'react'
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
import { SortableGridRow } from './SortableGridRow'
import { GridRow } from './GridRow'
import { AddGridRow } from './AddGridRow'
import { sortRows, useTable } from '@stores/table.store'

export function GridBody() {
  const { rows, getRow, view, viewColumns, loadingTable } = useTable()

  const [activeId, setActiveId] = useState<string | null>(null as any)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const items = rows.map((i) => i.id)

  const activeRow = activeId ? getRow(activeId) : (null as any)

  if (!view || loadingTable) return null

  return (
    <div id="t-body">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        // modifiers={[restrictToVerticalAxis]}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {rows.map((row, index) => (
            <SortableGridRow
              key={row.id}
              index={index}
              id={row.id}
              row={row}
              view={view}
              viewColumns={viewColumns}
            />
          ))}
        </SortableContext>

        {createPortal(
          <DragOverlay
            // zIndex={2000}
            adjustScale={false}
            modifiers={[restrictToWindowEdges]}
          >
            {activeId ? (
              <GridRow
                dragOverlay
                row={activeRow}
                view={view}
                viewColumns={viewColumns}
                id={activeId}
              />
            ) : null}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
      <AddGridRow></AddGridRow>
    </div>
  )

  function handleDragStart(event: DragStartEvent) {
    const { active } = event

    setActiveId(active.id)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active.id !== over?.id) {
      const oldIndex = rows.findIndex((i) => i.id === active.id)
      const newIndex = rows.findIndex((i) => i.id === over?.id)

      sortRows(oldIndex, newIndex)
    }

    setActiveId(null)
  }
}
