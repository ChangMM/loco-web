import React, { ReactNode } from 'react'
import { FieldType } from '@generated/types'
import { FieldIcon } from '@components/FieldIcon'
import { Box } from '@fower/react'

interface Props {
  fieldType: `${FieldType}`
  text: ReactNode
}

export const FieldLabel = ({ fieldType, text }: Props) => {
  return (
    <Box toCenter>
      <FieldIcon fieldType={fieldType}></FieldIcon>
      <Box gray600>{text}</Box>
    </Box>
  )
}
