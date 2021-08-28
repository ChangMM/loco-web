import PlusOutline from '@bone-ui/icons/PlusOutline'
import { Checkbox } from '@bone-ui/checkbox'
import { Box } from '@fower/react'

interface Props {
  index: number
}

export const CellOperator = ({ index }: Props) => {
  return (
    <Box w-70>
      <PlusOutline />
      <Checkbox />
      {index}
    </Box>
  )
}
