import React, { FC } from 'react'
import { useDroppable } from '@dnd-kit/core'
import { Box } from '@fower/react'

export interface Props {
  children: React.ReactNode
  id: string
  items: string[]
}

export const DroppableContainer: FC<Props> = ({ children, id, items }) => {
  const { over, isOver, setNodeRef } = useDroppable({ id })
  const isOverContainer = isOver || (over ? items.includes(over.id) : false)

  const { clientHeight } = document.body

  return (
    <Box
      ref={setNodeRef}
      bgGray200={!isOverContainer}
      bgBlue200={isOverContainer}
      rounded-8
      mt5
      p4
      h={clientHeight - 140} // TODO: 需要计算
      w-280
      overflowY="auto"
      spaceY-12
      flexShrink={0}
      css={{ flexShrink: 0, transition: 'background-color 350ms ease' }}
    >
      {children}
    </Box>
  )
}
