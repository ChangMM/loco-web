/* eslint-disable react/display-name */
import React, { forwardRef, memo, useEffect, useMemo, useRef, useState } from 'react'
import { Switch } from '@bone-ui/switch'
import { FieldIcon } from '@components/FieldIcon'
import { IconDrag } from '@components/icons/IconDrag'
import { LeadingType, ViewColumn } from '@generated/types'
import { DraggableSyntheticListeners } from '@dnd-kit/core'
import { setColumnVisible } from '@stores/table.store'
import { Box } from '@fower/react'
import { useVisit } from '@stores/visit.store'

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

  viewColumn: ViewColumn
}

export const Item = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    viewColumn,
    index,
    id,
    dragOverlay,
    isDragging,
    isSorting,
    attributes,
    listeners,
    ...rest
  } = props

  const { viewId } = useVisit()

  async function toggleVisible(visible: boolean, id: string) {
    setColumnVisible(id, visible, viewId)
  }

  const { column } = viewColumn
  return (
    <Box
      ref={ref}
      key={viewColumn.id}
      bgWhite
      py1
      toBetween
      shadow={!!dragOverlay}
      zIndex-10000={dragOverlay}
      opacity-50={isDragging}
      {...rest}
    >
      <Box toLeft spaceX1>
        <IconDrag {...attributes} {...listeners} />
        <FieldIcon size={18} fieldType={column.fieldType} />
        <span>{column.name}</span>
      </Box>
      <Switch
        checked={viewColumn.visible}
        size={12}
        mr-4
        onChange={(e) => toggleVisible(e.target.checked, id)}
      />
    </Box>
  )
})
