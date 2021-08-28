import { Form, Field } from '@formy/react'
import { apiService } from '@generated/api'
import { Button } from '@bone-ui/button'
import { Refetcher } from '@generated/refetcher'
import { modalService } from '@generated/modalService'
import { Box } from '@fower/react'
import { useVisit } from '@stores/visit.store'

interface Values {
  name: string
}

function ModalAddVersion() {
  const { tableId } = useVisit()
  return (
    <Box p5>
      <Box textXL fontBold mb4>
        创建版本
      </Box>
      <Form<Values>
        onSubmit={async (values: Values) => {
          try {
            await apiService.addVersion({ ...values, tableId })
            await Refetcher.refetchVersions({ where: { tableId } })
            modalService.closeModalAddVersion()
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

export default ModalAddVersion
