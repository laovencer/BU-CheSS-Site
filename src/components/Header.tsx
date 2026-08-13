import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">BU CheSS</Link>
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-blue-600' : 'text-gray-700'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-600' : 'text-gray-700'}>About</NavLink>
          <NavLink to="/partners" className={({isActive}) => isActive ? 'text-blue-600' : 'text-gray-700'}>Partners</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-600' : 'text-gray-700'}>Contact</NavLink>
        </nav>
        <button className="md:hidden p-2 rounded bg-gray-100">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
