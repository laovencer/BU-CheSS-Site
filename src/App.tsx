import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'motion/react'

import Backdrop from './components/Backdrop'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Directory from './pages/Directory'
import Pages from './pages/Pages'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import OrganizationOverview from './pages/OrganizationOverview'
import FlagshipEvents from './pages/FlagshipEvents'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-dvh w-full">
      <Backdrop />
      <Navbar />

      <main className="relative w-full">
        {/* Honors the OS "reduce motion" setting; old page fades out, then the new one starts at the top */}
        <MotionConfig reducedMotion="user">
          <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/directory" element={<Directory />} />
              <Route path="/pages" element={<Pages />} />
              {/* Old Directory URL */}
              <Route path="/about" element={<Navigate to="/directory" replace />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/overview" element={<OrganizationOverview />} />
              <Route path="/events" element={<FlagshipEvents />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </MotionConfig>
      </main>
    </div>
  )
}