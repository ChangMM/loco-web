import { FC } from 'react'
import { Box } from '@fower/react'
import { Button } from '@bone-ui/button'
import { modalService } from '@generated/modalService'

interface Props {}

export const AddProjectBox: FC<Props> = () => {
  return (
    <Box h-60p toCenter>
      <Button
        onClick={() => {
          console.log('objec-t')
          // modalService.openModalAddProject()
          modalService.openModalAddTeam()
        }}
      >
        添加项目
      </Button>
    </Box>
  )
}
