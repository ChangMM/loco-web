import React, { FC, useState } from 'react'
import { FieldRegisterProps } from '@formy/react'
import { Input } from '@bone-ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { Button } from '@bone-ui/button'
import { Box } from '@fower/react'

interface Props {
  onChange(value: any): void
}

export const SingleSelect: FC<FieldRegisterProps & Props> = (props) => {
  const { handleChange, value, options } = props
  const [searchValue, setSearchValue] = useState('')

  const option = options.find((i) => i.value === value)

  return (
    <Popover>
      <PopoverTrigger>
        <Box border>
          <Box bg={option?.color} inlineBlock py-2 px3 textSM white rounded-9999>
            {option?.label || '请选择'}
          </Box>
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        {({ close }) => (
          <Box bgWhite rounded-4 shadow w-200 p3>
            <Box toBetween toCenterY>
              <Input
                variant="unstyled"
                placeholder="搜索/添加"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value)
                }}
              ></Input>
              <Button
                size={28}
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  props?.componentProps?.onCreate?.(searchValue)
                }}
              >
                添加
              </Button>
            </Box>

            <Box spaceY1>
              {props.options?.map((i) => (
                <Box
                  key={i.value}
                  cursorPointer
                  toLeft
                  onClick={() => {
                    close()
                    handleChange(i.value)
                  }}
                >
                  <Box bg={i.color} py-2 px3 textSM white rounded-9999>
                    {i.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </PopoverContent>
    </Popover>
  )
}
