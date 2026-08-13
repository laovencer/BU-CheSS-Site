import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="mt-3 text-gray-600">Sorry, we couldn't find that page.</p>
        <Link to="/" className="mt-4 inline-block text-blue-600">Go home</Link>
      </div>
    </div>
  )
}
