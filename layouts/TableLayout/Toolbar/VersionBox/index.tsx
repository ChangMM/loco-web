import { VersionSelect } from './VersionSelect'
import { Box } from '@fower/react'
import { Button } from '@bone-ui/button'
import { useReadonly } from '@stores/readonly.store'
import { refecthTable } from '@stores/table.store'
import { useVisit } from '@stores/visit.store'

export const VersionBox = () => {
  const { tableId } = useVisit()
  const { readonly, setReadonly } = useReadonly()
  return (
    <Box toCenterY spaceX2 ml4>
      <VersionSelect></VersionSelect>
      {readonly && (
        <Button
          onClick={() => {
            setReadonly(false)
            refecthTable({ id: tableId })
          }}
          size={28}
        >
          返回编辑
        </Button>
      )}
    </Box>
  )
}
