import React, { FC, useEffect, useRef, useState } from 'react'
import { Properties } from 'csstype'
import { useOutsideClick } from '@bone-ui/hooks'
import { Box } from '@fower/react'

interface RightContextMenuProps {
  context: string
  onEvent?: (e: any) => any
}

export const RightContextMenu: FC<RightContextMenuProps> = ({ context, children, onEvent }) => {
  const [menuStyle, setMenuStyle] = useState<Properties>({})

  const ref = useRef<HTMLDivElement>(null)

  useOutsideClick({
    ref: ref,
    handler() {
      setMenuStyle({})
    },
  })

  useEffect(() => {
    const targetContext = document.querySelector(context)

    if (!targetContext) return

    targetContext.addEventListener('contextmenu', openContextMenu)
  }, [])

  function openContextMenu(e: any) {
    e.preventDefault()
    const xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft)
    const yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop)

    setMenuStyle({
      left: `${e.clientX + xOffset}px`,
      top: `${e.clientY + yOffset}px`,
      visibility: 'visible',
    })

    onEvent && onEvent(e)
  }

  return (
    <Box ref={ref} zIndex-10000 absolute visibility="hidden" style={menuStyle as any}>
      {children}
    </Box>
  )
}
