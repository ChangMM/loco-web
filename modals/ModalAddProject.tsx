import { nanoid } from 'nanoid'
import { Form, Field } from '@formy/react'
import { apiService } from '@generated/api'
import { Button } from '@bone-ui/button'
import { Refetcher } from '@generated/refetcher'
import { modalService } from '@generated/modalService'
import { Box } from '@fower/react'
import { useUser } from '@stores/user.store'
import { useVisit } from '@stores/visit.store'

interface Values {
  name: string
}

function ModalAddProject() {
  const { user } = useUser()
  const { visit } = useVisit()
  return (
    <Box p5>
      <Box textXL fontBold mb4>
        创建项目
      </Box>
      <Form<Values>
        onSubmit={async ({ name }: Values) => {
          try {
            await apiService.addTable({
              id: nanoid(),
              teamId: visit.teamId,
              userId: user.id,
              name,
            })
            await Refetcher.refetchOwnedTeams()
            modalService.closeModalAddProject()
          } catch (error) {
            // message.error(error.message)
          }
        }}
      >
        <Field name="name" value="" component="Input" rules={{ required: '请输入名称' }} />
        <Button w-100p type="submit">
          保存
        </Button>
      </Form>
    </Box>
  )
}

ModalAddProject.modalProps = {
  footer: null,
}

export default ModalAddProject
