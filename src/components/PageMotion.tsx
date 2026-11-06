import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { itemVariants, pageVariants } from '../lib/motion'

/** Wraps a whole page: fades it in/out and staggers any <PageItem> inside it. */
export default function PageMotion({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      {children}
    </motion.div>
  )
}

/** A block of page content that rises into place, in render order, when the page enters. */
export function PageItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
