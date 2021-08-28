import React, { memo } from 'react'
import { Form, Field, FormSpy } from '@formy/react'
import { Button } from '@bone-ui/button'
import { FieldType, ViewColumn } from '@generated/types'
import { Menu, MenuItem } from '@bone-ui/menu'
import { FieldIcon } from '@components/FieldIcon'
import { IconDropRight } from '@components/icons/IconDropRight'
import { addColumn, modifyColum } from '@stores/table.store'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import SimpleBar from 'simplebar-react'
import { fieldTextMaps } from '@common/fieldTextMaps'
import { OptionList } from './OptionList'
import { Config } from './Config'
import { Box } from '@fower/react'
import { useVisit } from '@stores/visit.store'

interface Values {
  name: string

  fieldType: FieldType
}

interface Props {
  viewColumn?: ViewColumn
  // 关闭 Popover
  close(): void

  /**
   * 是否是标题列
   */
  isTitle: boolean
}

// eslint-disable-next-line react/display-name
export const ColumnForm = memo(({ viewColumn, close }: Props) => {
  const { viewId, tableId } = useVisit()
  const column = viewColumn?.column
  const width = 216

  async function updateColumn(values: Values) {
    close()
    modifyColum(viewColumn!.columnId, values)
  }

  async function createColumn(values: Values) {
    try {
      close()
      addColumn(tableId, viewId, values)
      // refecthTable()
    } catch (e) {
      console.log('捕获报错', e)
    }
  }

  return (
    <Box w-240 p3>
      <Form
        onSubmit={async (values: Values) => {
          viewColumn ? updateColumn(values) : createColumn(values)
        }}
        onError={(e) => {
          console.log('e:', e)
        }}
      >
        <Field
          name="name"
          value={column?.name || '单行文本'}
          label={
            <Box textBase gray500>
              列名
            </Box>
          }
          component="Input"
          rules={{ required: '请输入列名称' }}
        />
        <Field
          name="fieldType"
          value={column?.fieldType || FieldType.SingleLineText}
          label={
            <Box textBase gray500>
              类型
            </Box>
          }
          rules={{ required: '请输入列名称' }}
        >
          {({ label, value, handleChange }) => (
            <Box>
              <Box py2 toCenterY>
                {label}
              </Box>

              <Box>
                <Popover placement="right-start" possiblePlacements={['left-center']}>
                  <PopoverTrigger w-100p>
                    {({ isOpen }) => (
                      <Box
                        toBetween
                        w-100p
                        cursorPointer
                        toCenterY
                        border
                        borderColor={isOpen ? 'primary500' : 'white'}
                        borderWidth-1
                        px2
                        py2
                        bgGray200={!isOpen}
                        bgGray30--hover
                        rounded-4
                      >
                        <Box>{fieldTextMaps[value as FieldType]}</Box>
                        <IconDropRight size={24} gray600></IconDropRight>
                      </Box>
                    )}
                  </PopoverTrigger>
                  <PopoverContent w-218>
                    {({ close }) => (
                      <SimpleBar style={{ maxHeight: 300 }}>
                        <Menu>
                          {Object.keys(FieldType).map((fieldType) => (
                            <MenuItem
                              key={fieldType}
                              selected={value === fieldType}
                              onClick={() => {
                                handleChange(fieldType)
                                close()
                              }}
                            >
                              <FieldIcon fieldType={fieldType as any}></FieldIcon>
                              <Box>{fieldTextMaps[fieldType as FieldType]}</Box>
                            </MenuItem>
                          ))}
                        </Menu>
                      </SimpleBar>
                    )}
                  </PopoverContent>
                </Popover>
              </Box>
            </Box>
          )}
        </Field>

        <OptionList options={viewColumn?.column.options || []}></OptionList>

        <Config column={viewColumn?.column}></Config>

        <Box toRight spaceX2 mt4>
          <Button size="sm" onClick={close} type="button">
            取消
          </Button>
          <FormSpy>
            {({ handleSubmit }) => (
              <Button size="sm" type="submit" onClick={handleSubmit}>
                保存
              </Button>
            )}
          </FormSpy>
        </Box>
      </Form>
    </Box>
  )
})
