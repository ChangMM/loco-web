import { modalService } from '@generated/modalService'
import { Button } from '@bone-ui/button'
import PlusOutline from '@bone-ui/icons/PlusOutline'
import { Box } from '@fower/react'
import { useTable } from '@stores/table.store'
import Loading from '@components/Loading'

export const AddProjectBtn = () => {
  const { table, loadingTable } = useTable()

  if (loadingTable) return null

  return (
    <Button
      size="sm"
      variant="light"
      onClick={() => modalService.openModalAddProject(table.team.id)}
      spaceX-8
      toLeft
      w-100p
      rounded
    >
      <PlusOutline square5></PlusOutline>
      <Box>新建项目</Box>
    </Button>
  )
}
