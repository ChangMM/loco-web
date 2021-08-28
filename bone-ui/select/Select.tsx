import React, { useState } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Radio, RadioGroupProvider, RadioProps } from '@bone-ui/radio'
import { SelectProps } from './types'
import { defaultRender } from './defaultRender'
import { Box } from '@fower/react'
import { ChevronDownSolid } from '@bone-ui/icons/ChevronDownSolid'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { FC } from 'react'

export const Select: FC<SelectProps> = forwardRef((props: SelectProps, ref) => {
  const {
    children,
    onChange,
    value,
    options = [],
    renderItem = defaultRender,
    renderTrigger,
    width = 120,
    ...rest
  } = props
  const [selectValue, setSelectValue] = useState<any>(value)

  function setValue(value: any) {
    setSelectValue(value)
    onChange && onChange(value)
  }

  const initialValue = {
    radioGroupValue: selectValue,
    setRadioGroupValue: setValue,
    renderItem,
  }

  if (renderItem) initialValue.renderItem = renderItem

  const option = options.find((i) => i.value === selectValue)

  return (
    <RadioGroupProvider value={initialValue as any}>
      <Popover ref={ref} placement="bottom-center" className="bone-select" {...(rest as any)}>
        <PopoverTrigger h-100p>
          {({ isOpen }: any) => {
            if (renderTrigger) return renderTrigger({ isOpen, item: option })
            return (
              <Box
                toBetween
                toCenterY
                pl-12
                pr-8
                border-1
                borderBrand500={isOpen}
                rounded-4
                style={{ width }}
                h-36
                cursorPointer
              >
                <Box ellipsis={width - 20}>{option?.label}</Box>
                <ChevronDownSolid size={14}></ChevronDownSolid>
              </Box>
            )
          }}
        </PopoverTrigger>
        <PopoverContent style={{ width }}>
          {({ close }: any) => (
            <>
              {options.map((item, i) => {
                const radioProps: RadioProps = { disabled: item.disabled, value: item.value }

                if (renderItem) {
                  radioProps.render = (state) => {
                    const defaultRadio = defaultRender({ ...state, item })
                    return renderItem({ ...state, defaultRadio, item })
                  }
                }

                return (
                  <Radio key={i} onClick={close} {...radioProps} render={radioProps.render}></Radio>
                )
              })}

              {!options.length && children}
            </>
          )}
        </PopoverContent>
      </Popover>
    </RadioGroupProvider>
  )
})
