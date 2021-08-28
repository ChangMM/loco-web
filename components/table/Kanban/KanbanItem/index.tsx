import { DraggableSyntheticListeners } from '@dnd-kit/core'
import { Transform } from '@dnd-kit/utilities'
import { modalService } from '@generated/modalService'
import { CellList } from './CellList'
import { Box } from '@fower/react'
import { forwardRef, memo } from 'react'

export interface Props {
  index?: number

  rowId: string
  optionId?: string

  disabled?: boolean

  dragOverlay?: boolean
  dragging?: boolean
  listeners?: DraggableSyntheticListeners
  sorting?: boolean
  transition?: string
  transform?: Transform | null

  height?: number
  fadeIn?: boolean
}

// eslint-disable-next-line react/display-name
export const KanbanItem = memo(
  forwardRef<HTMLDivElement, Props>(
    (
      {
        dragOverlay,
        dragging,
        disabled,
        fadeIn,
        height,
        index,
        listeners,
        sorting,
        transition,
        transform,
        rowId,
        optionId,
        ...props
      },
      ref,
    ) => {
      const { round } = Math
      const translateX = `${round(transform?.x || 0)}px`
      const translateY = `${round(transform?.y || 0)}px`
      const scaleX = transform?.scaleX || 0
      const scaleY = transform?.scaleY || 0

      return (
        <Box
          ref={ref}
          toLeft
          zIndex-0
          shadow="0 1px 4px rgba(0, 0, 0, 0.02), 0 0 2px rgba(0,0,0,0.02)"
          style={{
            transition,
            transform: transform
              ? `translate3d(${translateX}, ${translateY}, 0) scaleX(${scaleX}) scaleY(${scaleY})`
              : 'translate3d(0, 0, 0) scaleX(1) scaleY(1)',

            transformOrigin: '0 0',
            touchAction: 'manipulation',
          }}
          onClick={() => {
            modalService.openModalAddRowWithData({ optionId, rowId })
          }}
        >
          <Box
            {...props}
            {...listeners}
            data-cypress="draggable-item"
            toLeft
            bgWhite
            relative
            flex-1
            px5
            py4
            column
            shadow--hover
            rounded-4
            opacity-50={dragging}
            zIndex-0={dragging}
            cursor={dragOverlay ? 'grabbing' : 'pointer'}
            css={{ transition: 'box-shadow .5s' }}
          >
            <CellList rowId={rowId}></CellList>
          </Box>
        </Box>
      )
    },
  ),
)
