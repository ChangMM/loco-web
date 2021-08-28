import MoonOutline from '@bone-ui/icons/MoonOutline'
import SunOutline from '@bone-ui/icons/SunOutline'
import { Box, useMode } from '@fower/react'
import { useMemo } from 'react'
import { useLocalStorage } from 'stook-localstorage'

export const ModeToggle = () => {
  const { mode, setMode } = useMode()

  // useMemo(() => {
  //   if (typeof document === 'undefined') return
  //   if (mode === 'dark') {
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.add('light')
  //   }
  // }, [])

  function toggleMode() {
    if (mode === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }

  return (
    <Box onClick={toggleMode} inlineFlex p2 roundedFull bgGray200--hover>
      {mode === 'dark' && <MoonOutline cursorPointer square6></MoonOutline>}
      {mode !== 'dark' && <SunOutline cursorPointer square6></SunOutline>}
    </Box>
  )
}
