import React from 'react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Bicol University Chemical Science Society</h1>
        <p className="mb-6 text-lg">Connecting students, researchers, and partners to advance chemical sciences in the Bicol region.</p>
        <div className="flex justify-center gap-4">
          <a href="/partners" className="bg-white text-blue-700 px-5 py-2 rounded-md font-medium">Our Partners</a>
          <a href="/contact" className="border border-white text-white px-5 py-2 rounded-md">Contact Us</a>
        </div>
      </div>
    </section>
  )
}
