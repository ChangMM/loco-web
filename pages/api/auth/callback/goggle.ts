import { NextApiRequest, NextApiResponse } from 'next'

export default async function Hello(req: NextApiRequest, res: NextApiResponse) {
  res.redirect('http://www.baidu.com')
}
