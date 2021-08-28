import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { apiService } from '@generated/api'
import { AddGroupBtn } from './AddGroupBtn'
import { FieldSelect } from './FieldSelect'
import { GroupType } from './GroupType'
import { CloseButton } from '@bone-ui/close-button'
import { IconGroup } from '@components/icons/IconGroup'
import { ToolbarBtn } from '../ToolbarBtn'
import { refecthTable, useTable } from '@stores/table.store'
import { Box } from '@fower/react'

export const GroupField = () => {
  const { viewColumns, view, table, loadingTable } = useTable()

  async function removeGroup(id: string) {
    await apiService.deleteGroup({ id })
    refecthTable({ id: table.id! })
  }
  if (loadingTable) return null

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <ToolbarBtn
          isHighlight={!!view?.groups.length}
          hightLightColor="green"
          icon={<IconGroup size={16}></IconGroup>}
        >
          {view?.groups?.length} 分组
        </ToolbarBtn>
      </PopoverTrigger>
      <PopoverContent>
        <Box w-480 p3 spaceY2 spaceX3 rounded-4>
          {view?.groups?.map((group, index) => (
            <Box toBetween key={group.id}>
              <FieldSelect index={index} group={group}></FieldSelect>
              <GroupType index={index} group={group}></GroupType>
              <CloseButton size={20} onClick={() => removeGroup(group.id)}></CloseButton>
            </Box>
          ))}

          {view && viewColumns.length > view.groups.length && <AddGroupBtn></AddGroupBtn>}
        </Box>
      </PopoverContent>
    </Popover>
  )
}
