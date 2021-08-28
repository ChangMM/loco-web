import React, { memo } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { Checkbox } from '@bone-ui/checkbox'
import { Group } from '@generated/types'
import { Mutator } from '@generated/mutator'
import { apiService } from '@generated/api'
import { useTable } from '@stores/table.store'

export interface GroupTypeProps extends FowerHTMLProps<'input'> {
  group: Group
  index: number // group index

  /**
   * Switch size, you can set any size
   */
  size?: number

  /**
   * Aspect ratio for siwtch
   */
  aspectRatio?: number
}

export const GroupType = memo((props: GroupTypeProps) => {
  const { view } = useTable()

  const {
    index,
    group,
    size = 28,
    aspectRatio = 6,
    // ...rest
  } = props
  const width = size * aspectRatio

  return (
    <Checkbox
      checked={group.ascending}
      onChange={(e) => {
        const { checked } = e.target

        Mutator.mutateTable((tale) => {
          const viewIndex = tale.views.findIndex((i) => i.id === view.id)
          tale.views[viewIndex].groups[index].ascending = checked
        })

        apiService.updateGroup({
          where: { id: group.id },
          data: { ascending: checked },
        })
      }}
      render={({ checked }) => {
        const x = checked ? '0px' : `${width / 2}px`
        const currentColor = 'gray200'
        return (
          <Box
            h={size}
            w={width}
            // w={200}
            relative
            rounded-4
            overflowHidden
            // borderWidth={borderWidth}
            // borderColor={currentColor}
            bg={currentColor}
            css={{ boxSizing: 'content-box' }}
          >
            <Box
              h-100p
              absolute
              left0
              w={1 / 2}
              zIndex-2
              toCenter
              color={checked ? '#fff' : 'gray80'}
            >
              0 - 9
            </Box>
            <Box
              h-100p
              absolute
              right0
              w={1 / 2}
              zIndex-2
              toCenter
              color={!checked ? '#fff' : 'gray80'}
            >
              9 - 0
            </Box>
            <Box
              // circle={size}
              h={size}
              w={1 / 2}
              bgBrand500
              relative
              zIndex-1
              css={{
                transform: `translateX(${x})`,
                transition: 'transform 250ms ease 0s',
              }}
            ></Box>
          </Box>
        )
      }}
    ></Checkbox>
  )
})
