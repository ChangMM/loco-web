import { Avatar } from '@bone-ui/avatar'
import { CloseButton } from '@bone-ui/close-button'
import { MenuItem } from '@bone-ui/menu'
import { Select } from '@bone-ui/select'
import { Tag } from '@bone-ui/tag'
import { Option } from '@formy/core'
import { Box } from '@fower/react'
import { useMembers } from '@hooks/useMembers'
import React, { FC, memo } from 'react'
import { CellProps } from '../CellProps'

// eslint-disable-next-line react/display-name
export const CollaboratorCell: FC<CellProps> = memo((props) => {
  const { cell, selected, editable, updateCell, width } = props
  cell.columnId
  const { data: members } = useMembers()

  if (!props) return null

  const options: Option[] = members.map((i) => ({
    label: i.user.nickname,
    value: i.id,
    avatar: i.user.avatar,
  }))

  return (
    <Select
      width={width}
      options={options}
      value={cell?.data?.[0]}
      onChange={(e) => {
        updateCell({ ...cell, data: [e] })
      }}
      renderTrigger={({ item }) => (
        <Box h-100p w-100p toLeft px3>
          {item && (
            <Tag colorScheme="gray20" icon={<Avatar src={item?.avatar} size={20}></Avatar>}>
              {item?.label}
              {selected && <CloseButton ml1 size={18} rounded-18></CloseButton>}
            </Tag>
          )}
        </Box>
      )}
      renderItem={({ checked, item }) => (
        <MenuItem w-100p brand500={checked} bgGray100={checked}>
          <Avatar src={item.avatar} size={20}></Avatar>
          <Box>{item.label}</Box>
        </MenuItem>
      )}
    ></Select>
  )
})
