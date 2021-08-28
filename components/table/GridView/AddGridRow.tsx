import PlusOutline from '@bone-ui/icons/PlusOutline'
import React, { FC } from 'react'
import { addRow } from '@stores/table.store'
import { Box } from '@fower/react'
import { useReadonly } from '@stores/readonly.store'
import { useVisit } from '@stores/visit.store'

interface Props {}

export const AddGridRow: FC<Props> = ({}) => {
  const { tableId } = useVisit()
  const { readonly } = useReadonly()
  async function onAddRow() {
    addRow(tableId)
  }

  if (readonly) return null

  return (
    <Box row>
      <Box
        onClick={onAddRow}
        toCenter
        sticky
        left-0
        cursorPointer
        w-70
        h-50
        borderBottom
        borderRight
      >
        <PlusOutline />
      </Box>
      <Box></Box>
    </Box>
  )
}
