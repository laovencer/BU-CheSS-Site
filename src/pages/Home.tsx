import { Link } from 'react-router-dom'
import logo from '../assets/images/bu-chess-logo.png'

const ctaLinkBase =
  'inline-flex items-center justify-center rounded-full bg-[#ad63cf] font-bold text-[#f8eafa] shadow-lg shadow-purple-950/30 ' +
  'transition hover:bg-[#bd75dc] focus:outline-none focus:ring-2 focus:ring-[#dba4eb] focus:ring-offset-2 focus:ring-offset-[#0c0618]'

const ctaSize = 'w-56 whitespace-nowrap px-6 py-1 text-sm sm:w-64 sm:px-7 sm:py-1.5 sm:text-base'

export default function Home() {
  return (
    <section className="relative isolate flex min-h-dvh w-full items-start overflow-hidden text-white">
      <div className="relative z-10 w-full max-w-[1360px] translate-y-12 px-6 pt-20 sm:px-10 sm:pt-24 lg:px-20 lg:pt-32 lg:translate-y-48">
        <div className="w-full">
          {/* Organization identity */}
          <div className="grid grid-cols-[auto_1fr] items-center gap-6 sm:gap-10 lg:gap-14">
            {/* Logo */}
            <img
              src={logo}
              alt="Bicol University Chemical Science Society logo"
              className="h-48 w-48 shrink-0 object-contain sm:h-64 sm:w-64 lg:h-80 lg:w-80" 
            />

            {/* Organization information + actions */}
            <div className="min-w-0">
              <p className="text-2xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Bicol University
              </p>

              <h1 className="mt-2 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#ead9ec] sm:mt-3 sm:text-6xl lg:text-[58px]">
                CHEMICAL SCIENCE SOCIETY
              </h1>

              <p className="mt-3 font-['Monda'] text-lg leading-tight text-[#efe3f0] sm:mt-4 sm:text-xl lg:text-[26px]">
                for the advancement of chemical sciences
              </p>

              {/* Hero actions */}
              <div className="mt-6 flex flex-wrap gap-4 sm:mt-6 lg:mt-8">
                <Link to="/about" className={`${ctaLinkBase} ${ctaSize}`}>
                  Organization Overview
                </Link>

                <Link to="/partners" className={`${ctaLinkBase} ${ctaSize}`}>
                  Flagship Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}