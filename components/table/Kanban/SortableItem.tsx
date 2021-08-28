import React, { useEffect, useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { KanbanItem } from './KanbanItem'

interface SortableItemProps {
  rowId: string
  index: number
  optionId?: string
}

function useMountStatus() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500)

    return () => clearTimeout(timeout)
  }, [])

  return isMounted
}

export function SortableItem({ rowId, index, optionId }: SortableItemProps) {
  const { setNodeRef, listeners, isDragging, isSorting, transform, transition } = useSortable({
    id: rowId,
  })

  const mounted = useMountStatus()
  const mountedWhileDragging = isDragging && !mounted

  return (
    <KanbanItem
      ref={setNodeRef}
      rowId={rowId}
      optionId={optionId}
      dragging={isDragging}
      sorting={isSorting}
      index={index}
      transition={transition as any} // TODO:
      transform={transform}
      fadeIn={mountedWhileDragging}
      listeners={listeners}
    />
  )
}
