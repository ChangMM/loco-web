import React, { FC } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import PlusOutline from '@bone-ui/icons/PlusOutline'
import { ColumnForm } from './ColumnMenu/ColumnForm'
import { Box } from '@fower/react'
import { useReadonly } from '@stores/readonly.store'

interface Props {}

export const AddColumnBtn: FC<Props> = ({}) => {
  const { readonly } = useReadonly()
  if (readonly) return null
  return (
    <Box toCenter square-40 borderBottom borderRight>
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <PlusOutline size={26} gray600 />
        </PopoverTrigger>
        <PopoverContent>
          {({ close }) => <ColumnForm isTitle={false} close={close}></ColumnForm>}
        </PopoverContent>
      </Popover>
    </Box>
  )
}
