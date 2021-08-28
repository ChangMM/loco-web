import React, { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Cell, Column, FieldType, Member } from '@generated/types'
import { FieldIcon } from '@components/FieldIcon'
import { Avatar } from '@bone-ui/avatar'
import { calculateForeColor } from '@common/utils'
import { Box } from '@fower/react'

export interface Props {
  isTitle: boolean
  cell: Cell
  column: Column
  members: Member[]
}

// eslint-disable-next-line react/display-name
export const CellItem = memo(
  (props: Props) => {
    const { cell, column, isTitle, members } = props
    const { data, fieldType } = cell
    const { options } = column

    if (fieldType === FieldType.SingleSelect) {
      const option = options.find((option) => option.id === data)
      if (!option) return null
      return (
        <Box
          bg={option?.color}
          color={calculateForeColor(option?.color)}
          py-2
          px3
          textSM
          rounded-9999
          toCenter
          inlineFlex
        >
          {option?.name}
        </Box>
      )
    }

    if (fieldType === FieldType.Collaborator) {
      const memberIds = Array.isArray(data) ? data : data ? [data] : []

      return (
        <Box toLeft spaceX1 w-100p>
          {members
            .filter((i) => memberIds.includes(i.id))
            .map((item) => (
              <Avatar key={item.id} src={item.user.avatar} size={20}></Avatar>
            ))}
        </Box>
      )
    }

    if (!data) return null

    return (
      <Box textSM>
        {/* {!isTitle && (
          <Box row toCenterY mb1 fontBold gray90>
            <FieldIcon size={18} fieldType={fieldType} />
            <Box ml1>{columnName}</Box>
          </Box>
        )} */}

        <Box fontBold={isTitle} textBase={isTitle}>
          {data}
        </Box>
      </Box>
    )
  },

  (prev, next) => {
    return isEqual(prev, next)
  },
)
