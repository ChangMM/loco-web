import { HomeNav } from '@components/HomeNav'
import { styled } from '@fower/styled'
import { Box } from '@fower/react'
import { LoginButton } from '@components/LoginButton'
import { withSession } from '@common/session'
import { LoginSuccessPayload } from '@generated/types'

const Item = styled('span', ['p-10', 'textLG'])
const Image = styled('img', ['w-120', 'p-10'])

export default function PageHome() {
  return (
    <Box>
      <HomeNav />
      <Box textCenter>
        <Box spaceY5>
          <Box mt-100 text5XL fontBold>
            新一代语言文案管理平台
          </Box>
          <Box toCenter>
            <Item># Localization</Item>
            <Item># Developer</Item>
            <Item># PM</Item>
            <Item># Translator</Item>
          </Box>
          <Box>
            <LoginButton>马上体验</LoginButton>
          </Box>
        </Box>

        <Box
          as="img"
          h-520
          src="https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*QT3DQZcBDqwAAAAAAAAAAABjARQnAQ"
        />
        <Box toCenter>
          <Image src="https://assets.vercel.com/image/upload/q_auto/front/home/new/logos/airbnb.svg"></Image>
          <Image src="https://assets.vercel.com/image/upload/q_auto/front/home/new/logos/auth0.svg"></Image>
          <Image src="https://assets.vercel.com/image/upload/q_auto/front/home/new/logos/github.svg"></Image>
          <Image src="https://assets.vercel.com/image/upload/q_auto/front/home/new/logos/herman.svg"></Image>
          <Image src="https://assets.vercel.com/image/upload/q_auto/front/home/new/logos/scale_.svg"></Image>
          <Image src="https://assets.vercel.com/image/upload/q_auto/front/home/new/logos/washingtonpost.svg"></Image>
          <Image src="https://assets.vercel.com/image/upload/q_auto/front/home/new/logos/twilio.svg"></Image>
        </Box>
      </Box>
    </Box>
  )
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const payload = req.session.get('payload') as LoginSuccessPayload

  if (!payload) {
    return {
      props: {},
    }
  }

  const { visit } = payload

  // return {
  //   redirect: {
  //     // TODO:
  //     destination: `/t/${visit.teamId}?tableId=${visit.tableId}&viewId=${visit.viewId}`,
  //     // destination: '/login',
  //     permanent: false,
  //   },
  // }

  return {
    props: payload,
  }
})
