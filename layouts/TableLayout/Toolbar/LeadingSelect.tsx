import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { apiService } from '@generated/api'
import { IconLeadingShort } from '@components/icons/IconLeadingShort'
import { IconLeadingMedium } from '@components/icons/IconLeadingMedium'
import { IconLeadingTall } from '@components/icons/IconLeadingTall'
import { IconLeadingExtraTall } from '@components/icons/IconLeadingExtraTall'
import { Menu, MenuItem } from '@bone-ui/menu'
import { mappedBykey } from '@common/utils'
import { LeadingType } from '@generated/types'
import { Mutator } from '@generated/mutator'
import { mutateSaving } from '@stores/saving.store'
import { useTable } from '@stores/table.store'
import { Box } from '@fower/react'
import { ViewType } from '@generated/types'

const leadings = [
  {
    type: LeadingType.Short,
    alias: '矮',
    Component: IconLeadingShort,
  },
  {
    type: LeadingType.Medium,
    alias: '中',
    Component: IconLeadingMedium,
  },
  {
    type: LeadingType.Tall,
    alias: '高',
    Component: IconLeadingTall,
  },
  {
    type: LeadingType.ExtraTall,
    alias: '超高',
    Component: IconLeadingExtraTall,
  },
]

export const LeadingSelect = () => {
  const { view, loadingTable } = useTable()

  async function selectLeading(type: LeadingType) {
    Mutator.mutateTable((table) => {
      const viewIndex = table.views.findIndex((i) => i.id === view.id)
      table.views[viewIndex].leading = type
    })
    mutateSaving(true)
    await apiService.updateView({ where: { id: view.id }, data: { leading: type } })
    mutateSaving(false)
  }

  if (loadingTable) return null
  if (view?.type !== ViewType.Grid) return null

  const Component = mappedBykey(leadings, 'type')[view.leading].Component

  return (
    <Popover placement="bottom-center">
      <PopoverTrigger>
        <Box toCenterY spaceX1 cursorPointer>
          <Component size={16}></Component>
          <span>行高</span>
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        {({ close }) => (
          <Menu>
            {leadings.map(({ alias, Component, type }) => {
              const selected = view.leading === type
              return (
                <MenuItem
                  key={alias}
                  selected={selected}
                  onClick={() => {
                    selectLeading(type)
                    close()
                  }}
                >
                  <Component size={16}></Component>
                  <span>{alias}</span>
                </MenuItem>
              )
            })}
          </Menu>
        )}
      </PopoverContent>
    </Popover>
  )
}
