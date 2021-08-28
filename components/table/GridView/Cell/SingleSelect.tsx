import React, { memo, useEffect, useRef, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { Input, InputProps } from '@bone-ui/input'
import { CreateOptionInput, Option } from '@generated/types'
import { Menu, MenuItem } from '@bone-ui/menu'
import { Tag } from '@bone-ui/tag'
import { IconDropDown } from '@components/icons/IconDropDown'
import { nanoid } from 'nanoid'
import SimpleBar from 'simplebar-react'
import { calculateForeColor } from '@common/utils'

import { CellProps } from './CellProps'
import { mutateCellData } from '@stores/table.store'
import { useTable, addOptionToColumns } from '@stores/table.store'
import { Box } from '@fower/react'

// eslint-disable-next-line react/display-name
export const SingleSelect = memo((props: CellProps) => {
  const { cell, selected, width } = props
  const { columnId } = cell
  const { getColumn } = useTable()
  const [searchValue, setSearchValue] = useState('')

  const column = getColumn(columnId)

  const someOption = column?.options.some((i) => i.name.includes(searchValue))

  // 是否应该添加
  const shouldAdd = !someOption && !!searchValue

  const options = column?.options.filter((i) => {
    if (!searchValue) return true
    if (i.name.includes(searchValue)) return true
    return false
  })

  async function createOption(close: any) {
    close()
    const id = nanoid()
    const newOption = {
      id,
      columnId,
      name: searchValue,
      color: 'red400', //TODO:
    } as CreateOptionInput

    addOptionToColumns(newOption)

    mutateCellData(cell, newOption.id)

    setSearchValue('')
  }

  async function selectOption(option: Option) {
    mutateCellData(cell, option.id)
  }

  const option = options.find((i) => i.id === cell.data)

  const textColor = calculateForeColor(option?.color)

  return (
    <Popover>
      <PopoverTrigger h-100p w-100p>
        <Box h-100p toCenterY px3 toBetween>
          <Box>
            {option?.name && (
              <Tag size={20} bg={option.color} color={textColor}>
                {option?.name}
              </Tag>
            )}
          </Box>
          {selected && <IconDropDown></IconDropDown>}
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        {({ close, isOpen }) => (
          <Box w={width}>
            <SearchInput
              isOpen={isOpen}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && shouldAdd) createOption(close)
              }}
            ></SearchInput>
            <Box>
              <SimpleBar style={{ maxHeight: 300 }}>
                <Menu>
                  {options.map((option) => (
                    <MenuItem
                      key={option.id}
                      // cursorPointer
                      // toLeft
                      onClick={() => {
                        selectOption(option)
                        close()
                      }}
                    >
                      <Box
                        bg={option.color}
                        color={calculateForeColor(option.color)}
                        py-2
                        px3
                        textSM
                        rounded-9999
                      >
                        {option.name}
                      </Box>
                    </MenuItem>
                  ))}

                  {shouldAdd && (
                    <MenuItem
                      spaceX2
                      bgGray100
                      onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        createOption(close)
                      }}
                    >
                      <span>添加</span>
                      <Tag size={20}>{searchValue}</Tag>
                    </MenuItem>
                  )}
                </Menu>
              </SimpleBar>
            </Box>
          </Box>
        )}
      </PopoverContent>
    </Popover>
  )
})

interface SearchInputProps extends InputProps {
  isOpen: boolean
}

function SearchInput({ isOpen, ...rest }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (isOpen) {
      // 如果已经 focus, 就不用去 focus 了
      if (document.activeElement === inputRef.current) {
        return
      }

      setTimeout(() => {
        inputRef.current?.focus()
      }, 1)
    }
  }, [isOpen])

  return (
    <Input ref={inputRef as any} variant="unstyled" placeholder="搜索/添加" px4 {...rest}></Input>
  )
}
