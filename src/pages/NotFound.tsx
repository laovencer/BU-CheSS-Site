import { Link } from 'react-router-dom'
import PageMotion from '../components/PageMotion'

export default function NotFound() {
  return (
    <PageMotion>
      <div className="relative z-10 min-h-screen px-6 pb-16 pt-36 text-white bg-[#100a22]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#ead9ec]">Page not found</h1>
          <p className="mt-3 text-[#efe3f0]/70">Sorry, we couldn't find that page.</p>
          <Link to="/" className="mt-4 inline-block text-[#c68de5] hover:text-[#d9a6ec]">Go home</Link>
        </div>
      </div>
    </PageMotion>
  )
}