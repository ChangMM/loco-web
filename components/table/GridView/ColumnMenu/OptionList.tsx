import React, { memo } from 'react'
import { Option } from '@generated/types'
import { IconDrag } from '@components/icons/IconDrag'
import { CloseButton } from '@bone-ui/close-button'
import { ModifyColorBtn } from '../ModifyColorBtn'
import SimpleBar from 'simplebar-react'
import { Box } from '@fower/react'

interface Props {
  options: Option[]
}

// eslint-disable-next-line react/display-name
export const OptionList = memo(({ options = [] }: Props) => {
  if (!options.length) return null
  return (
    <SimpleBar style={{ height: 180 }}>
      <Box mt2 spaceY2>
        {options.map((item) => (
          <Box key={item.id} toCenterY toBetween>
            <Box toCenterY spaceX2>
              <IconDrag></IconDrag>
              <ModifyColorBtn option={item}></ModifyColorBtn>
              <Box as="span" textBase leading-14px>
                {item.name}
              </Box>
            </Box>
            <CloseButton size={20}></CloseButton>
          </Box>
        ))}
      </Box>
    </SimpleBar>
  )
})
