import { getUser } from '@stores/user.store'
import { useUser } from '@stores/user.store'
import { apiService } from '@generated/api'
import { Button } from '@bone-ui/button'
import { Field, Form } from '@formy/react'
import { toast } from '@bone-ui/toast'
import { Box } from '@fower/react'

export default function Profile() {
  const user = getUser()
  const { setUser } = useUser()
  return (
    <div>
      <Box leading-48 borderBottom="1px solid #e8e8e8">
        <Box pl5>个人信息</Box>
      </Box>
      <Box p4>
        <Form
          initialValues={user}
          onSubmit={async (values) => {
            try {
              const data = await apiService.updateUser({ where: { id: user.id }, data: values })
              setUser(data)
              toast.success('更新个人信息成功')
            } catch (error) {
              toast.error('更新个人信息失败' + error.code)
            }
          }}
        >
          <label>昵称</label>
          <Field
            name="nickname"
            value=""
            component="Input"
            componentProps={{ placeholder: '请输入昵称' }}
            rules={{
              required: '昵称不能为空',
            }}
          />
          <label>简介</label>
          <Field
            name="bio"
            value=""
            componentProps={{ placeholder: '请输入简介' }}
            component="Textarea"
          ></Field>
          <label>职业</label>
          <Field
            name="jobTitle"
            value=""
            component="Input"
            componentProps={{ placeholder: '请输入职业' }}
            rules={{
              required: '职业不能为空',
            }}
          />
          <label>邮箱</label>
          <Field
            name="email"
            value=""
            component="Input"
            componentProps={{ placeholder: '请输入邮箱' }}
            rules={{
              required: '邮箱不能为空',
            }}
          />
          <Box toCenterX>
            <Box w-200>
              <Button w-100p type="submit">
                更新信息
              </Button>
            </Box>
          </Box>
        </Form>
      </Box>
    </div>
  )
}
