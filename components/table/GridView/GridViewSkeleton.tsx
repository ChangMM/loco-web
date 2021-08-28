import React from 'react'
import { Box } from '@fower/react'
import { Skeleton } from '@bone-ui/skeleton'

export const GridViewSkeleton = () => {
  const list = Array(6 * 3).fill('')
  return (
    <Box h-100vh bgWhite rounded p4>
      <Box grid gridTemplateColumns-3 gap-16>
        {list.map((_, i) => (
          <Skeleton key={i} h7></Skeleton>
        ))}
      </Box>
    </Box>
  )
}
