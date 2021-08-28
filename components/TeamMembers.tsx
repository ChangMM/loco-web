import { Tooltip } from '@bone-ui/tooltip'
import { Avatar } from '@bone-ui/avatar'
import PlusOutline from '@bone-ui/icons/PlusOutline'
import { Box } from '@fower/react'
import { Member } from '@generated/types'

interface Props {
  members: Member[]
}

export const TeamMembers = ({ members }: Props) => {
  function invite() {
    //
  }

  return (
    <Box toLeft spaceX-8>
      {members.map((item) => (
        <Tooltip label={item.user.nickname} key={item.id}>
          <Avatar cursorPointer size={32} src={item.user.avatar}></Avatar>
        </Tooltip>
      ))}
      <Box toCenter border borderDashed circle8 cursorPointer onClick={invite}>
        <PlusOutline gray400></PlusOutline>
      </Box>
    </Box>
  )
}
