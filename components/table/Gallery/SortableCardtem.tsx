import React, { FC } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Row } from '@generated/types'
import { CardItem } from './CardItem'

interface Props {
  id: string
  index: number | null
  row: Row
}

export const SortableCardtem: FC<Props> = (props) => {
  const { index, id, row } = props
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isSorting,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <CardItem
      ref={setNodeRef}
      id={id}
      index={index}
      isDragging={isDragging}
      isSorting={isSorting}
      row={row}
      style={style}
      attributes={attributes}
      listeners={listeners}
    ></CardItem>
  )
}
