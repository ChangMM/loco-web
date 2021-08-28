import React, { FC } from 'react'
import { nanoid } from 'nanoid'
import { FieldIcon } from '@components/FieldIcon'
import { Button } from '@bone-ui/button'
import { apiService } from '@generated/api'
import { ViewColumn } from '@generated/types'
import PlusOutline from '@bone-ui/icons/PlusOutline'
import { refecthTable, useTable } from '@stores/table.store'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { Box } from '@fower/react'
import { useVisit } from '@stores/visit.store'

interface Props {}

export const AddGroupBtn: FC<Props> = () => {
  const { viewId, tableId } = useVisit()
  const { view, viewColumns } = useTable()

  async function selectColumn(viewColumn: ViewColumn) {
    const id = nanoid()

    await apiService.createGroup({
      id,
      tableId,
      viewId,
      columnId: viewColumn.columnId,
      ascending: true,
    })

    refecthTable({ id: tableId })
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button size={28} borderNone px1>
          <PlusOutline></PlusOutline>
          <span>添加条件</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {({ close }) => (
          <Box bgWhite w-180 p2 rounded-4>
            {viewColumns
              .filter((i) => {
                // 过滤已经添加的列
                const find = view.groups.find((group) => group.columnId === i.columnId)
                return !find
              })
              .map((i) => {
                const column = i.column
                return (
                  <Box
                    key={i.id}
                    cursorPointer
                    toCenterY
                    spaceX2
                    bgGray20--hover
                    px3
                    py2
                    rounded-4
                    onClick={() => {
                      close()
                      selectColumn(i)
                    }}
                  >
                    <FieldIcon size={18} fieldType={column.fieldType}></FieldIcon>
                    <span>{column.name}</span>
                  </Box>
                )
              })}
          </Box>
        )}
      </PopoverContent>
    </Popover>
  )
}
