import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { IconDropDown } from '@components/icons/IconDropDown'
import { Menu, MenuItem } from '@bone-ui/menu'
import { Button } from '@bone-ui/button'
interface Props {
  onAddItem(roleType: string): void
}
export const AddItemMenu = (props: Props) => {
  const { onAddItem } = props
  const asMember = (roleType: string) => {
    onAddItem(roleType)
  }
  return (
    <Popover>
      <PopoverTrigger>
        <Button size={18} borderNone ml1 icon={<IconDropDown></IconDropDown>}></Button>
      </PopoverTrigger>
      <PopoverContent>
        {({ close }) => (
          <Menu>
            <MenuItem
              onClick={() => {
                asMember('Editor')
                close()
              }}
            >
              编辑者
            </MenuItem>
            <MenuItem
              onClick={() => {
                asMember('Commenter')
                close()
              }}
            >
              评论者
            </MenuItem>
            <MenuItem
              onClick={() => {
                asMember('Reader')
                close()
              }}
            >
              阅读者
            </MenuItem>
          </Menu>
        )}
      </PopoverContent>
    </Popover>
  )
}
