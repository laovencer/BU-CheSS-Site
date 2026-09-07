import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { MOTION_DURATION, MOTION_EASE } from '../lib/motion'

export default function PageMotion({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: MOTION_DURATION, ease: MOTION_EASE }}
    >
      {children}
    </motion.div>
  )
}