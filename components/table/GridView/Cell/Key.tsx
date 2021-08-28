import { Box } from '@fower/react'
import React, { FC, useState, useEffect } from 'react'
import { CellProps } from './CellProps'

export const KeyCell: FC<CellProps> = (props) => {
  const { cell, editable, updateCell } = props
  const [value, setValue] = useState(cell.data)

  useEffect(() => {
    setValue(cell.data)
  }, [cell.data])

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    updateCell({ ...cell, data: value })
  }

  if (!editable)
    return (
      <Box flexAuto toCenterY px2 h-100p style={{ userSelect: 'none' }}>
        {value}
      </Box>
    )

  return (
    <Box
      as="input"
      className="cell-key"
      type="text"
      onBlur={onBlur}
      onChange={onChange}
      value={value || ''}
      autoFocus
      px2
      w-100p
      h-100p
      outlineNone
      bgTransparent
    />
  )
}
