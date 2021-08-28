import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { apiService } from '@generated/api'
import { AddSortBtn } from './AddSortBtn'
import { FieldSelect } from './FieldSelect'
import { SortType } from './SortType'
import { CloseButton } from '@bone-ui/close-button'
import { IconSort } from '@components/icons/IconSort'
import { ToolbarBtn } from '../ToolbarBtn'
import { refecthTable, useTable } from '@stores/table.store'
import { Box } from '@fower/react'

export const SortField = () => {
  const { viewColumns, view, table } = useTable()

  async function removeSort(id: string) {
    await apiService.deleteSort({ id })
    refecthTable({ id: table.id })
  }

  if (!view) return null

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <ToolbarBtn
          isHighlight={!!view?.sorts.length}
          hightLightColor="red"
          icon={<IconSort size={16}></IconSort>}
        >
          {view?.sorts.length} 排序
        </ToolbarBtn>
      </PopoverTrigger>
      <PopoverContent>
        <Box bgWhite w-480 p3 spaceY2 spaceX3 rounded-4>
          {view.sorts.map((sort, index) => (
            <Box toBetween key={sort.id}>
              <FieldSelect index={index} sort={sort}></FieldSelect>
              <SortType index={index} sort={sort}></SortType>
              <CloseButton size={20} onClick={() => removeSort(sort.id)}></CloseButton>
            </Box>
          ))}

          {viewColumns.length > view.sorts.length && <AddSortBtn></AddSortBtn>}
        </Box>
      </PopoverContent>
    </Popover>
  )
}
