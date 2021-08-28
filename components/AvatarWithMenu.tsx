import { useUser } from '@stores/user.store'
import { useToken } from '@stores/token.store'
import { Avatar } from '@bone-ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { Menu, MenuItem } from '@bone-ui/menu'
import { Box } from '@fower/react'
import { useMounted } from '@hooks/useMounted'
import { useRouter } from 'next/dist/client/router'
import { useLogout } from '@hooks/useLogout'
import { useVisit } from '@stores/visit.store'

export const AvatarWithMenu = () => {
  const { mounted } = useMounted()
  const { user } = useUser()
  const { logout } = useLogout()
  const router = useRouter()
  const { visit } = useVisit()

  function onLogout() {
    logout()
    router.push('/')
  }

  if (!mounted) return null
  if (!user) return null

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger mr2>
        <Avatar cursorPointer square5 src={user.avatar}></Avatar>
      </PopoverTrigger>
      <PopoverContent>
        {() => (
          <Menu style={{ width: '180px' }}>
            <MenuItem
              key="1"
              onClick={() => {
                router.push(`/t/${visit.teamId}?tableId=${visit.tableId}&viewId=${visit.viewId}`)
              }}
            >
              <Box gray600>个人中心</Box>
            </MenuItem>
            <MenuItem key="2" onClick={onLogout}>
              <Box gray600>注销</Box>
            </MenuItem>
          </Menu>
        )}
      </PopoverContent>
    </Popover>
  )
}
