import React, { FC, useState } from 'react'
import { RightContextMenu } from '@components/RightContextMenu'
import { Menu, MenuItem } from '@bone-ui/menu'
import { removeRow } from '@stores/table.store'

interface RightMenuProps {}

export const RightMenu: FC<RightMenuProps> = ({}) => {
  const [rowId, setRowId] = useState<string>('')

  async function onEvent(e: any) {
    const { rowId } = getPos(e)
    setRowId(rowId)
  }

  async function onRemoveRow() {
    removeRow(rowId)
  }

  return (
    <RightContextMenu context="#t-body" onEvent={onEvent}>
      <Menu shadowMedium>
        <MenuItem onClick={onRemoveRow}>删除行</MenuItem>
        <MenuItem>复制行</MenuItem>
        <MenuItem>在上方插入行</MenuItem>
        <MenuItem>在下方插入行</MenuItem>
      </Menu>
    </RightContextMenu>
  )
}

function getPos(e: any) {
  const xPath = e?.path?.find((xPath: any) => xPath.dataset?.pos)
  const [rowId, columnId] = xPath?.dataset?.pos?.split(':') || []
  return { rowId, columnId }
}
