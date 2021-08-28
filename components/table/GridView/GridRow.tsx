import React, { forwardRef, memo, useEffect, useMemo, useRef, useState } from 'react'
import isEqual from 'react-fast-compare'
import { LeadingType, Row, View, ViewColumn } from '@generated/types'
import { mappedBykey } from '@common/utils'
import { GridCell } from './Cell'
import { styled } from '@fower/styled'
import { DraggableSyntheticListeners } from '@dnd-kit/core'
import { IconDrag } from '@components/icons/IconDrag'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useOutsideClick } from '@bone-ui/hooks'
import { Box } from '@fower/react'
import { Checkbox } from '@bone-ui/checkbox'
import { useVisit } from '@stores/visit.store'

const Motion = motion(styled('div'))

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

  index?: number

  style?: any

  row: Row

  view: View

  viewColumns: ViewColumn[]
}

const leadings: Record<LeadingType, number> = {
  Short: 32,
  Medium: 56,
  Tall: 70,
  ExtraTall: 100,
}

/**
 * TODO: 重复渲染太多
 */

// eslint-disable-next-line react/display-name
export const GridRow = memo(
  forwardRef<HTMLDivElement, Props>((props, ref) => {
    const {
      view,
      viewColumns,
      row,
      index = 0,
      id,
      dragOverlay,
      isDragging,
      isSorting,
      attributes,
      listeners,
      ...rest
    } = props
    const { viewId } = useVisit()

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

    const leadingValue = useMotionValue(leadings[view.leading])
    const height = useTransform(
      leadingValue,
      [leadings.Short, leadings.Medium, leadings.Tall, leadings.ExtraTall],
      [leadings.Short, leadings.Medium, leadings.Tall, leadings.ExtraTall],
    )

    /**
     * 处理 row 高亮状态
     */
    const [selected, setSelected] = useState(false)
    const rowRef = useRef<HTMLDivElement>(null)
    const clickRow = () => {
      setSelected(true)
    }
    useOutsideClick({
      ref: rowRef,
      handler() {
        setSelected(false)
      },
    })

    useEffect(() => {
      leadingValue.set(leadings[view.leading])
    }, [leadings[view.leading]])

    /** wrapper style */
    // const cssArgs = ['left']
    // if (dragOverlay) cssArgs.push('shadow')
    // if (isDragging) cssArgs.push('opacity-50')

    const selectedBg = '#f8f8f8'

    const firstColumnWidth = 70
    const rowWidth = viewColumns.reduce<number>((r, cur) => {
      return r + cur.width
    }, firstColumnWidth)

    return (
      <Motion
        ref={ref}
        // className={css(...cssArgs)}
        className="gridrow"
        onClick={clickRow}
        toLeft
        shadow={!!dragOverlay}
        opacity-100--i={!!dragOverlay}
        opacity-60={isDragging}
        h={leadings[view.leading]}
        w={rowWidth}
        // style={{ height }}
        // zIndex-200={dragOverlay}
        {...rest}
        bg={selected ? selectedBg : false}
        css={{
          ':hover': {
            background: selectedBg,
            transition: 'background 1s',
          },
        }}
      >
        <Box ref={rowRef} h-100p toLeft>
          <Box
            className="grid-cell"
            row
            toCenterY
            pl3
            px2
            sticky
            left0
            w={firstColumnWidth}
            h-100p
            bgTransparent
            borderBottom
            borderRight
            flexShrink={0}
          >
            <IconDrag
              invisible
              visible--$gridrow--hover
              bgTransparent
              {...attributes}
              {...listeners}
            ></IconDrag>
            <Checkbox size={10} hidden inlineBlock--$gridrow--hover />
            {/* <input type="checkbox" /> */}
            <Box textXS inlineBlock hidden--$gridrow--hover>
              {(index || 0) + 1}
            </Box>
          </Box>
          {sortedCells.map((cell, i) => {
            if (!cell) return null
            const viewColumn = mappedBykey(viewColumns, 'columnId')[cell.columnId]

            return <GridCell key={cell.id} viewColumn={viewColumn} index={i} cell={cell}></GridCell>
          })}
        </Box>
      </Motion>
    )
  }),
  (prev, next) => {
    const { listeners: listeners1, ...rest1 } = prev
    const { listeners: listeners2, ...rest2 } = next
    return isEqual(rest1, rest2)
  },
)
