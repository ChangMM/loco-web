import React, { FC, memo } from 'react'
import { Tag } from '@bone-ui/tag'
import { IconLeadingShort } from '@components/icons/IconLeadingShort'
import { CellProps } from './CellProps'

// eslint-disable-next-line react/display-name
export const RadioCell: FC<CellProps> = memo(({}) => {
  return (
    <div>
      {['sm', 'md', 'lg'].map((size) => (
        <Tag key={size} variant="outline" colorScheme="blue">
          Blue
          <IconLeadingShort />
        </Tag>
      ))}
    </div>
  )
})
