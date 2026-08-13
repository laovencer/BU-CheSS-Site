import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto p-6 text-sm text-gray-600">
        © {new Date().getFullYear()} BU CheSS — Building partnerships in chemical sciences.
      </div>
    </footer>
  )
}
