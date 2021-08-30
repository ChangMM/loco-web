import { Session } from 'next-iron-session'
import { NextApiRequest, NextApiResponse } from 'next'
import { withSession } from '@common/session'
import { LOGIN_BY_GITHUB } from '@generated/gql'
import { query } from '@common/query'
import { LoginSuccessPayload } from '@generated/types'

type NextIronRequest = NextApiRequest & { session: Session }

export default withSession(async (req: NextIronRequest, res: NextApiResponse) => {
  const { code } = req.query
  try {
    const t0 = Date.now()
    const data = await query(LOGIN_BY_GITHUB, {
      code,
    })
    const payload: LoginSuccessPayload = data.loginByGithub
    const t1 = Date.now()

    req.session.set('payload', payload)

    await req.session.save()
    const { visit } = payload

    res.redirect(`/t/${visit.teamId}?tableId=${visit.tableId}&viewId=${visit.viewId}`)

    // res.json({ foo: code })
  } catch (error) {
    res.status(500).json(error)
  }
})
