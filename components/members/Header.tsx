import { Box } from '@fower/react'

export const ModalHeader = ({ header }: any) => {
  if (typeof header !== 'string') {
    return <>{header}</>
  }

  return (
    <Box as="h2" p-20>
      {header}
    </Box>
  )
}
