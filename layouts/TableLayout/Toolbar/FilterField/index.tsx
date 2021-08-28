import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { motion, AnimatePresence } from 'framer-motion'
import { apiService } from '@generated/api'
import { FieldSelect } from './FieldSelect'
import { CloseButton } from '@bone-ui/close-button'
import { AddFilterBtn } from './AddFilterBtn'
import { OperatorSelect } from './OperatorSelect'
import { Input } from '@bone-ui/input'
import { IconFilter } from '@components/icons/IconFilter'
import { ToolbarBtn } from '../ToolbarBtn'
import { Mutator } from '@generated/mutator'
import { refecthTable, useTable } from '@stores/table.store'
import { Box } from '@fower/react'

export const FilterField = () => {
  const { viewColumns, view, table } = useTable()

  async function removeFilter(id: string) {
    Mutator.mutateTable((table) => {
      const viewIndex = table.views.findIndex((i) => i.id === view.id)
      const filterIndex = table.views[viewIndex].filters.findIndex((i) => i.id === id) as any

      if (filterIndex) {
        table.views[viewIndex].filters.splice(filterIndex, 1)
      }
    })

    await apiService.deleteFilter({ id })
    refecthTable({ id: table.id })
  }

  if (!view) return null

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <ToolbarBtn
          isHighlight={!!view?.filters.length}
          hightLightColor="orange"
          icon={<IconFilter size={16}></IconFilter>}
        >
          {view?.filters.length} 筛选
        </ToolbarBtn>
      </PopoverTrigger>
      <PopoverContent>
        <Box bgWhite w-480 p3 spaceY2 spaceX3 rounded-4>
          <AnimatePresence initial={false}>
            {view?.filters?.map((filter, index) => (
              <motion.div
                style={{
                  display: 'flex',
                  alignContent: 'space-toBetween',
                }}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
                key={filter.id}
              >
                <div>当</div>
                <FieldSelect index={index} filter={filter}></FieldSelect>
                <OperatorSelect index={index} filter={filter}></OperatorSelect>
                <Input w-80></Input>
                <CloseButton size={20} onClick={() => removeFilter(filter.id)}></CloseButton>
              </motion.div>
            ))}
          </AnimatePresence>

          {viewColumns.length > view?.filters?.length && <AddFilterBtn></AddFilterBtn>}
        </Box>
      </PopoverContent>
    </Popover>
  )
}
