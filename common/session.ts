import { withIronSession, Handler } from 'next-iron-session'

export function withSession(handler: Handler<any, any>) {
  return withIronSession(handler, {
    // password: process.env.SECRET_COOKIE_PASSWORD,
    password: '38ZKkv9gUB39L7oMoiyXcD6itBCpCYVv',
    // cookieName: 'next.js/examples/with-iron-session',
    cookieName: 'loco',
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      // secure: process.env.NODE_ENV === 'production' ? true : false,
      httpOnly: false,
      secure: false,
    },
  })
}
