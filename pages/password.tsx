import { apiService } from '@generated/api'
import { Button } from '@bone-ui/button'
import { Field, Form, useForm } from '@formy/react'
import { toast } from '@bone-ui/toast'
import { Box } from '@fower/react'

export default function Password() {
  const modifyForm = useForm({
    async onSubmit(values) {
      const { oldPassword, newPassword, comfirmPassword } = values
      if (newPassword === comfirmPassword) {
        try {
          const isSuccess = await apiService.modifyPassword({ oldPassword, newPassword })
          if (isSuccess) {
            toast.success('更新密码成功')
            setTimeout(() => {
              modifyForm.resetForm()
            }, 1000)
          } else {
            toast.success('更新密码失败')
          }
        } catch (error) {
          toast.error('更新密码失败:' + error.message)
        }
      } else {
        toast.error('确认密码与新密码输入不一致')
      }
    },
  })
  return (
    <div>
      <Box leading-48 borderBottom="1px solid #e8e8e8">
        <Box pl5>修改密码</Box>
      </Box>
      <Box p-16>
        <Form hook={modifyForm}>
          <label>原始密码</label>
          <Field
            name="oldPassword"
            value=""
            component="Input"
            componentProps={{ type: 'password', placeholder: '请输入原始密码' }}
            rules={{
              required: '原始密码不能为空',
            }}
          />
          <label>新密码</label>
          <Field
            name="newPassword"
            value=""
            component="Input"
            componentProps={{ type: 'password', placeholder: '请输入新密码' }}
            rules={{
              required: '新密码不能为空',
            }}
          />
          <label>确认新密码</label>
          <Field
            name="comfirmPassword"
            value=""
            component="Input"
            componentProps={{ type: 'password', placeholder: '请再次确认密码' }}
            rules={{
              required: '确认密码不能为空',
            }}
          />
          <Box toCenterX>
            <Box w-200>
              <Button w-100p type="submit">
                修改
              </Button>
            </Box>
          </Box>
        </Form>
      </Box>
    </div>
  )
}
