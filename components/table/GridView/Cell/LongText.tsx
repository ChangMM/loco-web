import { IconExpand } from '@components/icons/IconExpand'
import { Box } from '@fower/react'
import React, { FC, memo, useState, useEffect } from 'react'
import { CellProps } from './CellProps'

// eslint-disable-next-line react/display-name
export const LongTextCell: FC<CellProps> = memo((props) => {
  const { cell, editable, updateCell, selected, width } = props
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

  if (!editable) {
    return (
      <Box w-100p h-100p p2 ellipsis1={width} selectNone>
        {value}
      </Box>
    )
  }

  return (
    <Box w-100p h-100p relative>
      <Box
        as="textarea"
        value={value || ''}
        onChange={onChange}
        onBlur={onBlur}
        p2
        pr4
        w-100p
        h-100p
        outlineNone
        autoFocus
        style={{ resize: 'none' }}
      />
      {selected && <IconExpand size={16} absolute top-8 right-6 />}
    </Box>
  )
})
