import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { IconDropDown } from '@components/icons/IconDropDown'
import { Filter, OperatorType } from '@generated/types'
import { Mutator } from '@generated/mutator'
import { Menu, MenuItem } from '@bone-ui/menu'
import { apiService } from '@generated/api'
import { useTable } from '@stores/table.store'
import { Box } from '@fower/react'

interface FieldSelectProps {
  filter: Filter
  index: number
}

export function OperatorSelect({ index, filter }: FieldSelectProps) {
  const { view } = useTable()

  function onSelectOperator(operator: OperatorType) {
    Mutator.mutateTable((table) => {
      const viewIndex = table.views.findIndex((i) => i.id === view.id)
      table.views[viewIndex].filters[index].operator = operator
    })

    apiService.updateFilter({
      where: { id: filter.id },
      data: { operator },
    })
  }

  return (
    <Popover>
      <PopoverTrigger>
        {({ isOpen }) => (
          <Box
            toBetween
            toCenterY
            border
            borderColor={isOpen ? 'primary' : 'white'}
            borderWidth-1
            px2
            py2
            bgGray200={!isOpen}
            bgGray30--hover
            rounded-4
            overflowHidden
            w-120
          >
            <div>{filter.operator}</div>
            <IconDropDown></IconDropDown>
          </Box>
        )}
      </PopoverTrigger>
      <PopoverContent>
        {({ close }) => (
          <Menu w-120>
            {Object.keys(OperatorType).map((type) => (
              <MenuItem
                key={type}
                toBetween
                selected={type === filter.operator}
                onClick={() => {
                  onSelectOperator(type as any)
                  close()
                }}
              >
                <div>{type}</div>
              </MenuItem>
            ))}
          </Menu>
        )}
      </PopoverContent>
    </Popover>
  )
}
