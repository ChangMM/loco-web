import React, { memo } from 'react'
import { format } from 'date-fns'
import { Column, DateFormat, FieldType, TimeFormat } from '@generated/types'
import { Field, FieldSpy } from '@formy/react'
import { Box } from '@fower/react'

interface Props {
  column?: Column
}

// eslint-disable-next-line react/display-name
export const Config = memo(({ column }: Props) => {
  const config = column?.config
  const now = new Date()
  const width = 216
  return (
    <Box mt6>
      <FieldSpy name="fieldType">
        {({ value }) => (
          <>
            {value === FieldType.LongText && (
              <Field
                name="config.useRichText"
                value={config?.useRichText}
                label={
                  <Box textBase gray500>
                    使用富文本
                  </Box>
                }
                componentProps={{ size: 12 }}
                component="Switch"
              />
            )}

            {value === FieldType.Collaborator && (
              <Field
                name="config.multiCollaborator"
                value={config?.multiCollaborator}
                label={
                  <Box textBase gray500>
                    允许多个成员
                  </Box>
                }
                componentProps={{ size: 12 }}
                component="Switch"
              />
            )}

            {value === FieldType.Collaborator && (
              <Field
                name="config.shouldNotify"
                value={config?.shouldNotify}
                label={
                  <Box textBase gray500>
                    是否通知成员
                  </Box>
                }
                componentProps={{ size: 12 }}
                component="Switch"
              />
            )}
          </>
        )}
      </FieldSpy>
    </Box>
  )
})
