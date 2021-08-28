import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { apiService } from '@generated/api'
import { mappedBykey } from '@common/utils'
import { IconDropDown } from '@components/icons/IconDropDown'
import { Sort, ViewColumn } from '@generated/types'
import { Mutator } from '@generated/mutator'
import CheckOutline from '@bone-ui/icons/CheckOutline'
import { Menu, MenuItem } from '@bone-ui/menu'
import { useTable } from '@stores/table.store'
import { Box } from '@fower/react'

interface FieldSelectProps {
  sort: Sort
  index: number // sort index
}
export function FieldSelect({ sort, index }: FieldSelectProps) {
  const { columns, viewColumns, view } = useTable()

  function onSelectSort(viewColumn: ViewColumn, close: any) {
    Mutator.mutateTable((table) => {
      const viewIndex = table.views.findIndex((i) => i.id === view.id)
      table.views[viewIndex].sorts[index].columnId = viewColumn.columnId
      close()
    })

    apiService.updateSort({
      where: { id: sort.id },
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
            <div>{mappedBykey(columns)[sort.columnId]?.name}</div>
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
                const find = view.sorts.find(
                  (item) => item.columnId === i.columnId && sort.columnId !== item.columnId,
                )
                return !find
              })
              .map((item) => (
                <MenuItem
                  key={item.id}
                  toBetween
                  selected={item.columnId === sort.columnId}
                  onClick={() => onSelectSort(item, close)}
                >
                  <div>{item.column.name}</div>
                  {item.columnId === sort.columnId && <CheckOutline size={18}></CheckOutline>}
                </MenuItem>
              ))}
          </Menu>
        )}
      </PopoverContent>
    </Popover>
  )
}
