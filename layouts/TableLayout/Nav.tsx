import React, { FC } from 'react'
import { AvatarWithMenu } from '@components/AvatarWithMenu'
import { Logo } from '@components/Logo'
import { Saving } from './Saving'
import { Box } from '@fower/react'
import { TeamSelector } from './TeamSelector'
import { Tag } from '@bone-ui/tag'
import { ViewBox } from './ViewBox'
import { Tooltip } from '@bone-ui/tooltip'
import { ModeToggle } from '../../components/ModeToggle'
import { useVisit } from '@stores/visit.store'

interface Props {}

export const Nav: FC<Props> = () => {
  const { isEmptyTeam } = useVisit()

  return (
    <Box zIndex-100 h-48 px3 toBetween toCenterY flexShrink-0>
      <Box toLeft toCenterY h-100p flex-1>
        <Logo href="/"></Logo>
        {/* <Box mr9 ml4 toLeft toCenterY spaceX1>
          <Box toCenter>
            <Saving></Saving>
          </Box>
        </Box> */}

        <Box toCenter spaceX1 ml2 mr14>
          <TeamSelector></TeamSelector>
          <Tooltip label="gogo">
            <Tag variant="light">管理员</Tag>
          </Tooltip>
        </Box>
        {!isEmptyTeam && <ViewBox></ViewBox>}
      </Box>
      <Box flex-1 spaceX2 toRight toCenterY>
        <ModeToggle></ModeToggle>
        <AvatarWithMenu></AvatarWithMenu>
      </Box>
    </Box>
  )
}
