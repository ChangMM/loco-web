import React, { FC } from 'react'
import { ShareOutline } from '@bone-ui/icons/ShareOutline'
import { Members } from '../Members'
import { useTable } from '@stores/table.store'
import { Button } from '@bone-ui/button'
import { HideField } from './HideField'
import { SortField } from './SortField'
import { LeadingSelect } from './LeadingSelect'
import { FilterField } from './FilterField'
import { GroupField } from './GroupField'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { Box } from '@fower/react'
import { VersionBox } from './VersionBox'
import { memo } from 'react'
import { ToolbarSkeleton } from './ToolbarSkeleton'

interface Props {}

export const Toolbar: FC<Props> = memo(function ToolbarToMemo() {
  const { loadingTable } = useTable()

  if (loadingTable) return <ToolbarSkeleton></ToolbarSkeleton>

  return (
    <Box px2 py2 toCenterY spaceX4 toBetween relative zIndex-102 borderBottom-2 borderGray200--T5>
      <Box toCenterY gray600>
        <Box toCenterY spaceX4 mr6>
          <Popover>
            <PopoverTrigger>
              <Button textSM size={28} colorScheme="brand">
                非公开
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Box>
                <Box>haah</Box>
              </Box>
            </PopoverContent>
          </Popover>
        </Box>

        <Box toCenterY spaceX1>
          <Box>
            <FilterField></FilterField>
          </Box>
          <Box>
            <GroupField></GroupField>
          </Box>
          <Box>
            <SortField></SortField>
          </Box>
          <Box>
            <HideField></HideField>
          </Box>
          <Box>
            <LeadingSelect></LeadingSelect>
          </Box>

          <VersionBox />
        </Box>
      </Box>

      <Box toCenterY spaceX2>
        <Members></Members>
        <Box toCenterY spaceX1>
          <ShareOutline square5></ShareOutline>
          <Box>分享</Box>
        </Box>
      </Box>
    </Box>
  )
})
