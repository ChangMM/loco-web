import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { apiService } from '@generated/api'
import { mappedBykey } from '@common/utils'
import { IconDropDown } from '@components/icons/IconDropDown'
import { Filter, ViewColumn } from '@generated/types'
import { Mutator } from '@generated/mutator'
import CheckOutline from '@bone-ui/icons/CheckOutline'
import { Menu, MenuItem } from '@bone-ui/menu'
import { useTable } from '@stores/table.store'
import { Box } from '@fower/react'

interface FieldSelectProps {
  filter: Filter
  index: number // filter index
}
export function FieldSelect({ filter, index }: FieldSelectProps) {
  const { viewColumns, view, columns } = useTable()

  function onSelectFilter(viewColumn: ViewColumn) {
    Mutator.mutateTable((table) => {
      const viewIndex = table.views.findIndex((i) => i.id === view.id)
      table.views[viewIndex].filters[index].columnId = viewColumn.columnId
    })

    apiService.updateFilter({
      where: { id: filter.id },
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
            <div>{mappedBykey(columns)[filter.columnId]?.name}</div>
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
                const find = view.filters.find(
                  (item) => item.columnId === i.columnId && filter.columnId !== item.columnId,
                )
                return !find
              })
              .map((item) => (
                <MenuItem
                  key={item.id}
                  toBetween
                  selected={item.columnId === filter.columnId}
                  onClick={() => {
                    onSelectFilter(item)
                    close()
                  }}
                >
                  <div>{item.column.name}</div>
                  {item.columnId === filter.columnId && <CheckOutline size={18}></CheckOutline>}
                </MenuItem>
              ))}
          </Menu>
        )}
      </PopoverContent>
    </Popover>
  )
}
