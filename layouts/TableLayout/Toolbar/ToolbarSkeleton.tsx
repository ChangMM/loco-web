import React from 'react'
import { Box } from '@fower/react'
import { Skeleton } from '@bone-ui/skeleton'

export const ToolbarSkeleton = () => {
  const list = Array(3).fill('')
  return (
    <Box bgWhite rounded p4 toLeft spaceX3>
      {list.map((_, i) => (
        <Skeleton key={i} h7 w-200></Skeleton>
      ))}
    </Box>
  )
}
