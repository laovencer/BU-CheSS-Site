import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-[#100a22]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}