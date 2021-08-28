import { apiService } from '@generated/api'
import { mappedBykey } from '@common/utils'
import { IconDropDown } from '@components/icons/IconDropDown'
import { Group, ViewColumn } from '@generated/types'
import { Mutator } from '@generated/mutator'
import CheckOutline from '@bone-ui/icons/CheckOutline'
import { Menu, MenuItem } from '@bone-ui/menu'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { useTable } from '@stores/table.store'
import { Box } from '@fower/react'

interface FieldSelectProps {
  group: Group
  index: number // group index
}
export function FieldSelect({ group, index }: FieldSelectProps) {
  const { columns, view, viewColumns } = useTable()

  function onSelectGroup(viewColumn: ViewColumn) {
    Mutator.mutateTable((table) => {
      const viewIndex = table.views.findIndex((i) => i.id === view.id)
      table.views[viewIndex].groups[index].columnId = viewColumn.columnId
    })

    apiService.updateSort({
      where: { id: group.id },
      data: { columnId: viewColumn.columnId },
    })
  }

  return (
    <Popover>
      <PopoverTrigger>
        {({ isOpen }) => (
          <Box
            toBetween
            toCenterY
            border
            borderColor={isOpen ? 'primary' : 'white'}
            borderWidth-1
            px2
            py2
            bgGray200={!isOpen}
            bgGray30--hover
            rounded-4
            overflowHidden
            w-180
          >
            <div>{mappedBykey(columns)[group.columnId]?.name}</div>
            <IconDropDown></IconDropDown>
          </Box>
        )}
      </PopoverTrigger>
      <PopoverContent>
        {({ close }) => (
          <Menu w-180>
            {viewColumns
              .filter((i) => {
                // 过滤已经添加的列
                const find = view.groups.find(
                  (item) => item.columnId === i.columnId && group.columnId !== item.columnId,
                )
                return !find
              })
              .map((item) => (
                <MenuItem
                  key={item.id}
                  toBetween
                  selected={item.columnId === group.columnId}
                  onClick={() => {
                    onSelectGroup(item)
                    close()
                  }}
                >
                  <div>{item.column.name}</div>
                  {item.columnId === group.columnId && <CheckOutline size={18}></CheckOutline>}
                </MenuItem>
              ))}
          </Menu>
        )}
      </PopoverContent>
    </Popover>
  )
}
