import { Button } from '@bone-ui/button'
import { modalService } from '@generated/modalService'
import { FC } from 'react'

export const LoginButton: FC = (props) => {
  return (
    <Button
      as="a"
      href="/login"
      onClick={(e) => {
        e.preventDefault()
        modalService.openModalSign()
      }}
      roundedFull
      colorScheme="black"
      {...props}
    />
  )
}