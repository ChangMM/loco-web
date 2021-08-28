import React, { FC, useState } from 'react'
import { ViewColumn } from '@generated/types'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { IconDropDown } from '@components/icons/IconDropDown'
import { Menu, MenuItem } from '@bone-ui/menu'
import { ColumnForm } from './ColumnForm'
import { removeColumn } from '@stores/table.store'

interface ColumnMenuProps {
  viewColumn: ViewColumn

  /**
   * 是否是标题列
   */
  isTitle: boolean
}

export const ColumnMenu: FC<ColumnMenuProps> = ({ viewColumn, isTitle }) => {
  const { columnId } = viewColumn
  const [updating, setUpdating] = useState(false)

  async function onRemoveColumn() {
    removeColumn(columnId)
  }

  return (
    <Popover autoClose={false} onOpen={() => setUpdating(false)}>
      <PopoverTrigger h-100p px1 toCenter>
        <IconDropDown gray600--hover />
      </PopoverTrigger>
      <PopoverContent>
        {({ close }) => (
          <>
            {updating && (
              <ColumnForm viewColumn={viewColumn} close={close} isTitle={isTitle}></ColumnForm>
            )}

            {!updating && (
              <Menu>
                {!isTitle && <MenuItem onClick={onRemoveColumn}>删除列</MenuItem>}
                <MenuItem onClick={() => setUpdating(true)}>修改列</MenuItem>
                <MenuItem>左边插入列</MenuItem>
                <MenuItem>右边插入列</MenuItem>
                <MenuItem>赋值列</MenuItem>
                <MenuItem>降序排列</MenuItem>
                <MenuItem>升序排列</MenuItem>
              </Menu>
            )}
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}
