import React, { FC, useContext } from 'react'
import { Box } from '@fower/react'
import { forwardRef } from '@bone-ui/utils'
import { ModalContentProps } from './types'
import { modalContext } from './modalContext'
import { styled } from '@fower/styled'
import { motion } from 'framer-motion'
import { fadeConfig } from '@bone-ui/motion-configs'
import { CloseButton } from '@bone-ui/close-button'
import { RemoveScroll } from 'react-remove-scroll'

const AnimatedDiv = styled(motion.div)

export const ModalContent: FC<ModalContentProps> = forwardRef((props: ModalContentProps, ref) => {
  const { children, ...rest } = props
  const ctx = useContext(modalContext)
  const { close } = ctx

  return (
    <Box
      ref={ref}
      onClick={() => {
        close()
      }}
      fixed
      w-100p
      h-100p
      top0
      left0
      zIndex-1001
    >
      <Box w-100p h-100p bgBlue100 toCenter bgTransparent>
        <RemoveScroll>
          <AnimatedDiv
            onClick={(e) => {
              e.stopPropagation()
            }}
            className="bone-modal-content"
            bgWhite
            rounded-4
            shadow
            relative
            w-460
            maxH-80vh
            overflowYAuto
            // style={{ transformOrigin: 'center center' }}
            // {...scaleConfig}
            {...fadeConfig}
            {...(rest as any)}
          >
            <CloseButton onClick={close} absolute top-8 right-8 />
            {children}
          </AnimatedDiv>
        </RemoveScroll>
      </Box>
    </Box>
  )
})
