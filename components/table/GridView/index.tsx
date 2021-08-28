import { Box } from '@fower/react'
import { GridHeader } from './GridHeader'
import { RightMenu } from './RightMenu'
import { GridBody } from './GridBody'
import { useTable } from '@stores/table.store'
import { GridViewSkeleton } from './GridViewSkeleton'

export const GridView = () => {
  const { viewColumns, loadingTable } = useTable()

  // return <GridViewSkeleton></GridViewSkeleton>
  if (loadingTable) return <GridViewSkeleton></GridViewSkeleton>
  console.log('render...')

  return (
    <>
      <Box
        className="grid-view"
        // mx3
        // rounded-4
        bgWhite
        // borderLeft
        // absolute
        // top0
        // right0
        // left0
        // bottom0
        // overflowScroll
      >
        <GridHeader viewColumns={viewColumns}></GridHeader>
        <GridBody></GridBody>
      </Box>
      {/* <RightMenu /> */}
    </>
  )
}
