import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { Row, View, ViewColumn } from '@generated/types'
import { GridRow } from './GridRow'

interface Props {
  index: number

  id: string // row 唯一 id
  row: Row

  view: View

  viewColumns: ViewColumn[]
}

export function SortableGridRow(props: Props) {
  const { row, view, viewColumns, id, index } = props
  const {
    attributes,
    listeners,
    isDragging,
    isSorting,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <GridRow
      ref={setNodeRef}
      id={id}
      index={index}
      isDragging={isDragging}
      isSorting={isSorting}
      row={row}
      view={view}
      viewColumns={viewColumns}
      style={style}
      attributes={attributes}
      listeners={listeners}
    />
  )
}
