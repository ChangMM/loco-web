import { Menu, MenuItem } from '@bone-ui/menu'
import { ViewIcon } from '@components/ViewIcon'
import { AddViewBtn } from '../Toolbar/AddViewBtn'
import { useTable } from '@stores/table.store'
import { Box } from '@fower/react'
import { useRouter } from 'next/router'
import { useVisit } from '@stores/visit.store'
import { View } from '@generated/types'
import { apiService } from '@generated/api'
import { memo, useState } from 'react'
import { useViews } from '@stores/views.store'

interface Props {
  onSelectView(view: View): void
  selectedViewId: string
}

export const ViewSelect = memo(
  function ViewSelectToMemo({ selectedViewId, onSelectView }: Props) {
    const { data: views, loading } = useViews()
    const [id, setId] = useState(selectedViewId)

    if (loading) return null

    return (
      <Box toCenterY spaceX4 h-100p textSM>
        {views.map((view) => (
          <Box
            key={view.id}
            onClick={() => {
              close()
              onSelectView(view)
              setId(view.id)
            }}
            borderBottom-2={id === view.id}
            borderBrand500
            toCenterY
            flexShrink-0
            h-100p
            cursorPointer
            gray700--hover
            spaceX2
          >
            <ViewIcon viewType={view.type}></ViewIcon>
            <Box>{view.name}</Box>
          </Box>
        ))}

        <AddViewBtn></AddViewBtn>
      </Box>
    )
  },
  (prev, next) => {
    return prev.selectedViewId === next.selectedViewId
  },
)
