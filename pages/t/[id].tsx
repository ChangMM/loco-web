import { GetServerSideProps } from 'next'
import { LoginSuccessPayload, ViewType } from '@generated/types'
import { Gallery } from '@components/table/Gallery'
import { Kanban } from '@components/table/Kanban'
import { GridView } from '@components/table/GridView'
import TableLayout from '@layouts/TableLayout'
import { AddProjectBox } from '@components/AddProjectBox'
import { withSession } from '../../common/session'
import { memo, useEffect } from 'react'
import { useVisit } from '@stores/visit.store'
import { useUser } from '@stores/user.store'
import { useToken } from '@stores/token.store'
import { useMounted } from '@hooks/useMounted'

const Table = (props: LoginSuccessPayload) => {
  const { teamId, tableId, viewId } = useVisit()
  const onlyTeam = teamId && !tableId && !viewId

  /** init paylod data */
  const { setUser } = useUser()
  const { setToken } = useToken()
  const { viewType, setVisit } = useVisit()
  useEffect(() => {
    setUser(props.user)
    setVisit(props.visit)
    setToken(props.token)
  }, [])

  const { mounted } = useMounted()
  if (!mounted) return null

  // if (loading) return <div>gogo.....</div>

  if (onlyTeam)
    return (
      <TableLayout>
        <AddProjectBox></AddProjectBox>
      </TableLayout>
    )

  return (
    <TableLayout>
      {viewType === ViewType.Grid && <GridView></GridView>}
      {viewType === ViewType.Kanban && <Kanban></Kanban>}
      {viewType === ViewType.Gallery && <Gallery></Gallery>}
    </TableLayout>
  )
}

export default memo(Table)

export const getServerSideProps: GetServerSideProps = withSession(async function ({
  req,
  // res,
  query,
}) {
  const payload: LoginSuccessPayload = req.session.get('payload')

  if (!payload) {
    return {
      redirect: {
        destination: '/',
        // destination: '/login',
        permanent: false,
      },
    }
  }
  const { id: teamId, tableId, viewId } = query

  payload.visit.teamId = teamId ?? ''
  payload.visit.tableId = tableId ?? ''
  payload.visit.viewId = viewId ?? ''

  return {
    props: payload,
  }
})
