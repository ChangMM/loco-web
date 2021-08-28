import DotsVerticalOutline from '@bone-ui/icons/DotsVerticalOutline'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { Menu, MenuItem } from '@bone-ui/menu'
import { apiService } from '@generated/api'
import { Refetcher } from '@generated/refetcher'
import { Box } from '@fower/react'
import { refecthTable, useTable } from '@stores/table.store'
import { useTeams } from '@hooks/useTeams'
import { modalService } from '@generated/modalService'
import PlusOutline from '@bone-ui/icons/PlusOutline'
import { useVisit } from '@stores/visit.store'
import { useRouter } from 'next/router'

interface Props {
  close: any
}

export const ProjectList = (props: Props) => {
  const { tableId } = useVisit()
  const { loading, data } = useTeams()
  const { loadingTable, table } = useTable()
  const { visit, setVisit } = useVisit()
  const { push } = useRouter()

  async function removeProject(id: string) {
    await apiService.removeTable({ id })
    Refetcher.refetchOwnedTeams()
  }

  if (loading || loadingTable) return <div>loading</div>

  const team = data.find((item) => item.id === table.teamId)!
  const { tables } = team

  return (
    <Box p2>
      {tables?.map((item) => (
        <Box
          key={item.id}
          px4
          py2
          toCenterY
          toBetween
          cursorPointer
          bgGray100--hover
          transitionColors
          rounded
        >
          <Box
            brand500={item.id === tableId}
            toLeft
            toCenterY
            w-100p
            onClick={async () => {
              props.close()
              setTimeout(async () => {
                refecthTable({ id: item.id })
                const data = {
                  teamId: visit.teamId,
                  tableId: item.id,
                  viewId: item.lastVisitedViewId,
                }
                setVisit({ ...visit, ...data })
                push(`/t/${visit.teamId}?tableId=${item.id}&viewId=${item.lastVisitedViewId}`)
                await apiService.updateVisit({
                  where: { id: visit.id },
                  data,
                })
              }, 0)
            }}
          >
            <Box textBase>{item.name}</Box>
          </Box>

          <Popover>
            <PopoverTrigger>
              <DotsVerticalOutline size={20}></DotsVerticalOutline>
            </PopoverTrigger>
            <PopoverContent>
              <Menu>
                <MenuItem>重命名</MenuItem>
                <MenuItem onClick={() => removeProject(item.id)}>删除</MenuItem>
              </Menu>
            </PopoverContent>
          </Popover>
        </Box>
      ))}

      <MenuItem onClick={() => modalService.openModalAddProject()}>
        <PlusOutline square5></PlusOutline>
        <Box>新建项目</Box>
      </MenuItem>
    </Box>
  )
}
