import { nanoid } from 'nanoid'
import { Menu, MenuItem } from '@bone-ui/menu'
import { refecthTable, useTable } from '@stores/table.store'
import { ViewIcon } from '@components/ViewIcon'
import { Popover, PopoverTrigger, PopoverContent } from '@bone-ui/popover'
import { AddViewInput, FieldType, ViewType } from '@generated/types'
import { apiService } from '@generated/api'
import { toast } from '@bone-ui/toast'
import { Button } from '@bone-ui/button'
import PlusOutline from '@bone-ui/icons/PlusOutline'
import { useVisit } from '@stores/visit.store'

const viewTypes = [
  { name: '表格视图', type: ViewType.Grid },
  { name: '看板视图', type: ViewType.Kanban },
  { name: '日历视图', type: ViewType.Calendar },
  { name: '相册视图', type: ViewType.Gallery },
]

export const AddViewBtn = () => {
  const { viewColumns } = useTable()
  const { tableId } = useVisit()

  async function addView(type: ViewType, name: string) {
    const viewColumn = viewColumns.find((item) => {
      return item.column.fieldType === FieldType.SingleSelect
    })

    const viewData: AddViewInput = {
      id: nanoid(),
      name,
      type,
      tableId,
    }

    if (type === ViewType.Kanban) {
      if (!viewColumn) {
        return toast.info('该表格没有单选列，请先创建单选列')
      } else {
        viewData.stackedColumnId = viewColumn.columnId
      }
    }

    try {
      const view = await apiService.addView(viewData)

      refecthTable({ id: tableId })
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <Popover placement="bottom-center" showMask>
      <PopoverTrigger style={{ width: '100%' }}>
        <Button
          p0
          icon={<PlusOutline square5></PlusOutline>}
          roundedFull
          variant="light"
          colorScheme="gray400"
          size={24}
        ></Button>
      </PopoverTrigger>
      <PopoverContent>
        {({ close }) => (
          <Menu>
            {viewTypes.map((item) => (
              <MenuItem
                key={item.type}
                onClick={() => {
                  addView(item.type, item.name)
                  close()
                }}
              >
                <ViewIcon viewType={item.type}></ViewIcon>
                <span>{item.name}</span>
              </MenuItem>
            ))}
          </Menu>
        )}
      </PopoverContent>
    </Popover>
  )
}
