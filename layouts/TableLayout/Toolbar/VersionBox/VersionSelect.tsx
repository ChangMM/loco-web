import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { Menu, MenuItem } from '@bone-ui/menu'
import { Box } from '@fower/react'
import { Hooks } from '@generated/hooks'
import { modalService } from '@generated/modalService'
import { apiService } from '@generated/api'
import { selectVersion } from '@stores/table.store'
import { useReadonly } from '@stores/readonly.store'
import PlusOutline from '@bone-ui/icons/PlusOutline'
import { useVisit } from '@stores/visit.store'

export const VersionSelect = () => {
  const { tableId } = useVisit()
  const { data = [] } = Hooks.useVersions({ where: { tableId } })
  const { setReadonly } = useReadonly()

  async function clickVersion(versionId: number) {
    try {
      const [columns, rows] = await Promise.all([
        apiService.versionedColumns({ where: { tableId, versionId } }),
        apiService.versionedRows({ where: { tableId, versionId } }),
      ])

      selectVersion(columns, rows)
      setReadonly(true)
    } catch (error) {
      //
    }
  }

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger toCenter spaceX1 cursorPointer>
        版本管理
      </PopoverTrigger>
      <PopoverContent>
        {({ close }) => (
          <Menu>
            <MenuItem
              icon={<PlusOutline size={22} gray500 />}
              onClick={() => {
                modalService.openModalAddVersion()
                close()
              }}
            >
              <Box gray600>新建版本</Box>
            </MenuItem>
            {data.map((item) => (
              <MenuItem
                key={item.id}
                onClick={() => {
                  clickVersion(item.id)
                  close()
                }}
              >
                <Box>
                  版本 {item.name} ({item.index})
                </Box>
              </MenuItem>
            ))}
          </Menu>
        )}
      </PopoverContent>
    </Popover>
  )
}
