import React, { forwardRef } from 'react'
import { FowerHTMLProps } from '@fower/core'
import { CloseButton } from '@bone-ui/close-button'
import { ModalHeader } from './Header'
import { Box } from '@fower/react'
import { FC } from 'react'
// import { ModalFooter } from './Footer'
export interface ModalProps extends FowerHTMLProps<'div'> {
  isOpened: boolean
  onOpen(): void
  onClose(): void
  header?: React.ReactNode
  footer?: React.ReactNode
  // style?: CSSProperties
  children?: any
}
const AddMemberModel: FC<ModalProps> = (props) => {
  const { isOpened, onClose, onOpen, footer, header, children } = props
  if (!isOpened) {
    return null
  }
  return (
    // style={{
    //   visibility: isOpened ? 'visible' : 'hidden',
    // }}
    <Box fixed w="100%" h="100%" left0 top0>
      <Box
        style={{ transform: 'translate(-50%, -50%)' }}
        absolute
        left-50p
        top-50p
        w-50p
        h-auto
        maxW-630
        minW-320
        rounded-10
        zIndex-101
        bgGray100
      >
        <ModalHeader header={header} />
        {children}
        <CloseButton absolute square-30 right-12 top-8 onClick={onClose} />
      </Box>
    </Box>
  )
}
export default AddMemberModel
