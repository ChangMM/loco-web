import { modalService } from '@generated/modalService'
import { Box } from '@fower/react'

interface Props {
  optionId: string
}

export function AddItemBtn({ optionId }: Props) {
  return (
    <Box cursorPointer toCenter onClick={() => modalService.openModalAddRowWithData({ optionId })}>
      添加卡片
    </Box>
  )
}
