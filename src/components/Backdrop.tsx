import { AnimatePresence, motion } from 'motion/react'
import { useLocation } from 'react-router-dom'
import homeBackground from '../assets/images/desktop-background.svg'
import defaultBackground from '../assets/images/default-background.svg'
import { MOTION_DURATION, MOTION_EASE } from '../lib/motion'

export default function Backdrop() {
  const { pathname } = useLocation()
  const image = pathname === '/' ? homeBackground : defaultBackground

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#1a0f2e]">
      <AnimatePresence>
        <motion.div
          key={image}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: MOTION_DURATION, ease: MOTION_EASE }}
        />
      </AnimatePresence>
    </div>
  )
}