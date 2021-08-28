import { getTeamId } from '@stores/teamId.store'
import { getToken } from '@stores/token.store'
// import { config, applyMiddleware } from 'stook-graphql'
import { config, applyMiddleware } from '@common/stook-graphql'

applyMiddleware(async (ctx, next) => {
  const token = getToken()
  const teamId = getTeamId()

  if (token) {
    ctx.headers.authorization = `bearer ${token}`
  }

  if (teamId) ctx.headers['x-team-id'] = `${teamId}`

  await next()
  if (typeof ctx.body !== 'object') return
  if (Object.keys(ctx.body).length === 1) {
    ctx.body = ctx.body[Object.keys(ctx.body)[0]]
  }
})

config({
  endpoint: process.env.NEXT_PUBLIC_GQL_ENDPOINT as string,
})
