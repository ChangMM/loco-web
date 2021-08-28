import { Form, Field } from '@formy/react'
import { apiService } from '@generated/api'
import { Button } from '@bone-ui/button'
import { Refetcher } from '@generated/refetcher'
import { modalService } from '@generated/modalService'
import { Box } from '@fower/react'

interface Values {
  name: string
}

function ModalAddTeam() {
  return (
    <Box p5>
      <Box textXL fontBold mb4>
        创建团队
      </Box>
      <Form<Values>
        onSubmit={async (values: Values) => {
          try {
            await apiService.addTeam(values)
            await Refetcher.refetchOwnedTeams()
            modalService.closeModalAddTeam()
          } catch (error) {
            // message.error(error.message)
          }
        }}
      >
        <Field name="name" value="" component="Input" rules={{ required: '请输入名称' }} />
        <Button type="submit">保存</Button>
      </Form>
    </Box>
  )
}

export default ModalAddTeam
