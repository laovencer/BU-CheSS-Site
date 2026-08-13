import React from 'react'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">About BU CheSS</h2>
        <p className="text-gray-700">Bicol University Chemical Science Society (BU CheSS) is the official student organization for chemistry enthusiasts. We host events, workshops, and partner with industry and academia.</p>
      </section>
    </div>
  )
}
