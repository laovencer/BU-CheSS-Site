import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'

import Backdrop from './components/Backdrop'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-dvh w-full">
      <Backdrop />
      <Navbar />

      <main className="relative w-full">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}