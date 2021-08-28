import { Box } from '@fower/react'
import { useVisit } from '@stores/visit.store'
import { FC } from 'react'
import { Nav } from './Nav'
import { Toolbar } from './Toolbar'

const TableLayout: FC<{}> = (props) => {
  const { isEmptyTeam } = useVisit()

  return (
    <Box toLeft absolute top-0 right-0 left-0 flex-1>
      <Box column flex-1>
        <Nav></Nav>
        <Box flex-1>
          <Box bgWhite flex-1 roundedTopRight-2 borderGray200--T5 border>
            {!isEmptyTeam && <Toolbar></Toolbar>}

            {/* <Box flex-1 absolute top-100 right0 left0 bottom0> */}
            <Box flex-1>{props.children}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TableLayout
