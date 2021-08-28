import { Tooltip } from '@bone-ui/tooltip'
import { Avatar } from '@bone-ui/avatar'
import React, { useRef } from 'react'
import { useTable } from '@stores/table.store'
import PlusOutline from '@bone-ui/icons/PlusOutline'
import { toast } from '@bone-ui/toast'
import { Box } from '@fower/react'
import { useMembers } from '@hooks/useMembers'

export const Members = () => {
  const { table } = useTable()
  const { loading, data: members } = useMembers()
  const ref = useRef(0)

  if (loading) return null

  function invite() {
    toast.info(`这是消息啊${ref.current}`)
    ref.current = ref.current + 1
  }

  return (
    <Box toLeft spaceX-8 ml4>
      {members.map((item) => (
        <Tooltip label={item.user.nickname} key={item.id}>
          <Avatar cursorPointer size={28} src={item.user.avatar}></Avatar>
        </Tooltip>
      ))}
      <Box toCenter border borderDashed circle7 cursorPointer onClick={invite}>
        <PlusOutline gray400></PlusOutline>
      </Box>
    </Box>
  )
}
