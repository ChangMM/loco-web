import { useSaving } from '@stores/saving.store'
import { motion } from 'framer-motion'
import { Box } from '@fower/react'

export const Saving = () => {
  const { saving } = useSaving()
  if (saving === null) return null

  if (saving) {
    return (
      <motion.div
        style={{
          width: '20px',
          height: '20px',
          border: '4px solid #e9e9e9',
          borderTop: '4px solid #8fe98f',
          borderRadius: '50%',
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeatType: 'loop',
          ease: 'linear',
          duration: 1,
        }}
      />
    )
  }
  return (
    <Box gray500 textSM>
      已保存到云端
    </Box>
  )
}
