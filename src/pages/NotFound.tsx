import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#100a22] px-6 pt-24 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#ead9ec]">Page not found</h1>
        <p className="mt-3 text-[#efe3f0]/70">Sorry, we couldn't find that page.</p>
        <Link to="/" className="mt-4 inline-block text-[#c68de5] hover:text-[#d9a6ec]">Go home</Link>
      </div>
    </div>
  )
}