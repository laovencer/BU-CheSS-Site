import type { Variants } from 'motion/react'

// Smooth "ease-out-quint"-style curve: fast start, long soft landing
export const EASE_OUT = [0.22, 1, 0.36, 1] as const

export const MOTION_DURATION = 0.6
export const MOTION_EASE = EASE_OUT

// Page wrapper: quick fade out on leave, then reveals its items one after another on enter
export const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.09, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.22, ease: 'easeIn' },
  },
}

// Individual content blocks: fade + rise into place
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
}
