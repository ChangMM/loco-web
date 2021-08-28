import React from 'react'
import { Box } from '@fower/react'
import { Skeleton, SkeletonCircle } from '@bone-ui/skeleton'

export const ViewSkeleton = () => {
  const list = Array(2).fill('')
  return (
    <Box toCenterY spaceX3>
      {list.map((_, i) => (
        <Skeleton key={i} h7 w-100></Skeleton>
      ))}
      <SkeletonCircle></SkeletonCircle>
    </Box>
  )
}
