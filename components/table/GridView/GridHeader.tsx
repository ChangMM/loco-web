import React, { memo, useMemo } from 'react'
import { AddColumnBtn } from './AddColumnBtn'
import { GridHeaderItem } from './GridHeaderItem'
import { ViewColumn } from '@generated/types'
import { Box } from '@fower/react'
import { useVisit } from '@stores/visit.store'

interface Props {
  viewColumns: ViewColumn[]
}

export const GridHeader = ({ viewColumns }: Props) => {
  const { viewId } = useVisit()

  const visibleViewColumns = useMemo(() => {
    return viewColumns.filter((item) => item.viewId === viewId && item.visible)
  }, [viewColumns, viewId])

  return (
    <Box row sticky top-0 bgWhite zIndex-1000 flexNowrap>
      <Box sticky left0 bgWhite h-40 zIndex-1000 w-70 borderBottom borderRight flexShrink={0}></Box>
      {visibleViewColumns.map((item, i) => (
        <GridHeaderItem key={item.id} viewColumn={item} index={i}></GridHeaderItem>
      ))}
      <AddColumnBtn></AddColumnBtn>
    </Box>
  )
}
