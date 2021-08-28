import React, { useState } from 'react'
import { IconDropDown } from '@components/icons/IconDropDown'
import { Radio, RadioGroup, RadioProps } from '@bone-ui/radio'
import { colors } from '@common/colors'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { apiService } from '@generated/api'
import { Option } from '@generated/types'
import { calculateForeColor } from '@common/utils'
import { refecthTable } from '@stores/table.store'
import { Box } from '@fower/react'

interface Props {
  option: Option
}

const ColorRadio = (props: RadioProps) => (
  <Radio
    {...props}
    render={({ checked }) => (
      <Box toCenter square5 rounded-2 bg={checked ? 'gray200' : false}>
        <Box rounded-2 bg={props.value as string} square4></Box>
      </Box>
    )}
  ></Radio>
)

export const ModifyColorBtn = ({ option }: Props) => {
  const [value, setValue] = useState(option.color)
  async function selectColor(value: any) {
    setValue(value)
    await apiService.updateOption({
      where: { id: option.id },
      data: { color: value },
    })

    // refecthTable()
  }

  const forceColor = calculateForeColor(option.color)

  return (
    <Popover>
      <PopoverTrigger>
        <Box circle-18 bg={option.color} toCenter cursorPointer>
          <IconDropDown color={forceColor} size={6}></IconDropDown>
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        {({ close }) => (
          <Box p3 className="__ModifyColorBtn__radio">
            <RadioGroup
              value={value}
              onChange={(e) => {
                selectColor(e)
                close()
              }}
              spaceX1
            >
              {colors.map((item, index) => (
                <Box key={index}>
                  {item.map((color) => (
                    <ColorRadio value={color} key={color}></ColorRadio>
                  ))}
                </Box>
              ))}
            </RadioGroup>
          </Box>
        )}
      </PopoverContent>
    </Popover>
  )
}
