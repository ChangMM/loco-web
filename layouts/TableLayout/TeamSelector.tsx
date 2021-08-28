import { useTeams } from '@hooks/useTeams'
import { Box } from '@fower/react'
import { Avatar } from '@bone-ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { IconDropDown } from '@components/icons/IconDropDown'
import { modalService } from '@generated/modalService'
import PlusOutline from '@bone-ui/icons/PlusOutline'
import { useVisit } from '@stores/visit.store'
import { ProjectList } from './ProjectList'
import { Skeleton } from '@bone-ui/skeleton'
import { Team } from '@generated/types'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { IconSlash } from '@components/icons/IconSlash'

function TeamItem({ team, selectedTeam }: { team: Team; selectedTeam: Team }) {
  const { setVisit } = useVisit()
  const { push } = useRouter()
  function clickTeam() {
    const { tables } = team
    if (!tables.length) {
      setVisit((visit) => {
        visit.teamId = team.id
        visit.tableId = ''
        visit.viewId = ''
      })
      push(`/t/${team.id}`)
    } else {
      const [table] = team.tables
      push(`/t/${team.id}?tableId=${table.id}&viewId=${table.lastVisitedViewId}`)
    }
  }
  return (
    <Box
      onClick={() => clickTeam()}
      px4
      py2
      toCenterY
      cursorPointer
      bgGray100--hover
      bgGray100={team.id === selectedTeam.id}
      transitionColors
      spaceX2
      rounded
    >
      <Avatar size={24} name={team.name} rounded-10 />
      <Box textBase>{team.name}</Box>
    </Box>
  )
}

export const TeamSelector = memo(function TeamSelectorToMemo() {
  const { data: teams = [], loading } = useTeams()
  const { visit, isEmptyTeam } = useVisit()

  if (loading || !visit) return <Skeleton h-32 w-180></Skeleton>

  const selectedTeam = teams.find((i) => i.id === visit.teamId)!

  if (!selectedTeam) return <div>gogo</div>

  const table = selectedTeam.tables.find((i) => i.id === visit.tableId)!
  const personalTeam = teams.find((i) => i.isPersonal)!

  return (
    <Box spaceY-16>
      <Popover placement="bottom-start">
        <PopoverTrigger w-100p cursorPointer px3 py2 toBetween toCenterY rounded>
          <Avatar size={24} name={selectedTeam.name} rounded-10 mr2 flexShrink-0 />
          <Box flexShrink-0>{selectedTeam.name}</Box>

          {!isEmptyTeam && (
            <>
              <IconSlash size={18} gray400></IconSlash>
              <Box fontSemibold flexShrink-0>
                {table?.name}
              </Box>
            </>
          )}
          <IconDropDown ml2></IconDropDown>
        </PopoverTrigger>
        <PopoverContent w={500}>
          {({ close }) => (
            <>
              <Box toCenterY p4 borderBottom borderGray100--T10 spaceX2>
                <Avatar size={56} name={selectedTeam.name} rounded-10 />
                <Box>
                  <Box fontBold>{selectedTeam.name}</Box>
                  <Box textSM gray400>
                    {selectedTeam.description || '还没什么介绍'}
                  </Box>
                </Box>
              </Box>
              <Box toLeft>
                <Box flex-1 borderRight borderGray100--T10 p2 spaceY1>
                  <Box textXS pl4 py2 gray400>
                    个人
                  </Box>
                  <TeamItem team={personalTeam} selectedTeam={selectedTeam}></TeamItem>
                  <Box textXS pl4 py2 gray400>
                    团队
                  </Box>
                  {teams.map((item) => (
                    <TeamItem key={item.id} team={item} selectedTeam={selectedTeam}></TeamItem>
                  ))}
                  <Box
                    onClick={() => modalService.openModalAddTeam()}
                    px4
                    py2
                    toCenterY
                    cursorPointer
                    bgGray100--hover
                    transitionColors
                    spaceX2
                    rounded
                  >
                    <PlusOutline square5></PlusOutline>
                    <Box>新建团队</Box>
                  </Box>
                </Box>
                <Box flex-1>
                  <ProjectList close={close}></ProjectList>
                </Box>
              </Box>
            </>
          )}
        </PopoverContent>
      </Popover>
    </Box>
  )
})
