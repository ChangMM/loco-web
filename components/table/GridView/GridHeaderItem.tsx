import React, { memo } from 'react'
import { FieldIcon } from '@components/FieldIcon'
import { ColumnMenu } from './ColumnMenu'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { css } from '@fower/core'
import { ViewColumn } from '@generated/types'
import { useStore } from 'stook'
import { apiService } from '@generated/api'
import { Box } from '@fower/react'
import { ColumnDesc } from './ColumnDesc'
import { styled } from '@fower/styled'

const AnimatedDiv = styled(motion.div)

interface Props {
  index: number
  viewColumn: ViewColumn
}

// eslint-disable-next-line react/display-name
export const GridHeaderItem = memo(({ viewColumn, index }: Props) => {
  const { fieldType, name } = viewColumn.column
  const isTitle = index === 0

  const x = useMotionValue(viewColumn.width - 2)
  const width = useTransform(x, (value) => value + 2)

  // 黑科技，把宽度存在 store，以便可以在单元格中使用
  useStore(viewColumn.id, width)

  function updateWidth() {
    apiService.updateViewColumn({
      where: { id: viewColumn.id },
      data: { width: Number(width.get().toFixed(0)) },
    })
  }

  return (
    <AnimatedDiv
      key={viewColumn.id}
      className={`grid-header-cell`}
      sticky
      bgWhite
      borderBottom-1
      borderRight-1
      h-40
      flexShrink-0
      style={{
        left: isTitle ? 70 : 0,
        zIndex: isTitle ? 100 : 3,
        width: width,
      }}
    >
      <Box row toCenterY toBetween h-100p pl-10 relative>
        <Box spaceX1 toCenterY>
          <FieldIcon fieldType={fieldType}></FieldIcon>
          <Box as="span" ml1>
            {name}
          </Box>
        </Box>
        <Box toCenterY h-100p pr1>
          <ColumnDesc viewColumn={viewColumn} />
          <ColumnMenu viewColumn={viewColumn} isTitle={isTitle} />
        </Box>

        <motion.div
          className={css('zIndex-10000', 'absolute', 'left--2', 'w-4', 'h-100p', 'bgGreen400', {
            ':hover': {
              cursor: 'col-resize',
            },
          })}
          dragMomentum={false}
          dragConstraints={{
            left: 80,
          }}
          drag="x"
          style={{
            x,
          }}
          onDragEnd={() => {
            updateWidth()
          }}
        ></motion.div>
      </Box>
    </AnimatedDiv>
  )
})
