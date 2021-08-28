import React, { FC } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import AdjustmentsOutline from '@bone-ui/icons/AdjustmentsOutline'
import { ToolbarBtn } from '../ToolbarBtn'
import { useTable } from '@stores/table.store'
import { HideFieldOverlay } from './HideFieldOverlay'

interface Props {}

export const HideField: FC<Props> = () => {
  const { viewColumns } = useTable()

  const count = viewColumns.filter((i) => !i.visible).length

  return (
    <div>
      <Popover placement="bottom-center">
        <PopoverTrigger>
          <ToolbarBtn
            isHighlight={!!count}
            hightLightColor="blue"
            icon={<AdjustmentsOutline size={16}></AdjustmentsOutline>}
          >
            {count > 0 && count} 隐藏列
          </ToolbarBtn>
        </PopoverTrigger>
        <PopoverContent>
          <HideFieldOverlay></HideFieldOverlay>
        </PopoverContent>
      </Popover>
    </div>
  )
}
