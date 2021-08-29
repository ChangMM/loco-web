import { Session } from 'next-iron-session'
import { NextApiRequest, NextApiResponse } from 'next'
import { withSession } from '@common/session'
import { LOGIN_BY_GITHUB } from '@generated/gql'
import { query } from '@common/query'

type NextIronRequest = NextApiRequest & { session: Session }

export default withSession(async (req: NextIronRequest, res: NextApiResponse) => {
  const { code } = await req.body

  console.log('===========:', code)

  try {
    const data = await query(LOGIN_BY_GITHUB, {
      code,
    })
    const payload = data.loginByGithub

    req.session.set('payload', payload)

    await req.session.save()
    res.json(payload)
  } catch (error) {
    res.status(500).json({ error })
  }
})
