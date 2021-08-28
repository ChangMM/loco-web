import React, { FC, useState } from 'react'
import { ViewColumn } from '@generated/types'
import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { InformationCircleSolid } from '@bone-ui/icons/InformationCircleSolid'
import { Box } from '@fower/react'
import { Tooltip } from '@bone-ui/tooltip'
import { Form, Field, FormSpy } from '@formy/react'
import { Button } from '@bone-ui/button'
import { apiService } from '@generated/api'

interface Values {
  description: string
}

interface ColumnDescProps {
  viewColumn: ViewColumn
}

export const ColumnDesc: FC<ColumnDescProps> = ({ viewColumn }) => {
  const { columnId, column } = viewColumn
  const [updating, setUpdating] = useState(false)

  return (
    <Popover autoClose={false} onOpen={() => setUpdating(false)}>
      <PopoverTrigger h-100p px1 toCenter cursorPointer invisible visible--$grid-header-cell--hover>
        <Tooltip label={column.description || ''}>
          <InformationCircleSolid square-14 gray400 gray600--hover />
        </Tooltip>
      </PopoverTrigger>
      <PopoverContent>
        {({ close }) => (
          <PopoverBody>
            <Form
              onSubmit={async (values: Values) => {
                await apiService.updateColumn({ where: { id: columnId }, data: values })
                close()
              }}
            >
              <Field name="description" component="Input" value={column.description || ''} />
              <Box toRight spaceX2>
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
          </PopoverBody>
        )}
      </PopoverContent>
    </Popover>
  )
}
