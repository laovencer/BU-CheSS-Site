import { Link } from 'react-router-dom'
import logo from '../assets/images/bu-chess-logo.png'

const ctaLinkBase =
  'rounded-full bg-[#ad63cf] py-2 text-xs font-bold text-[#f8eafa] shadow-lg shadow-purple-950/30 ' +
  'transition hover:bg-[#bd75dc] focus:outline-none focus:ring-2 focus:ring-[#dba4eb] focus:ring-offset-2 focus:ring-offset-[#0c0618]'

export default function Home() {
  return (
    <section className="relative isolate flex min-h-dvh w-full items-start overflow-hidden text-white">
      <div className="relative z-10 mx-auto w-full translate-y-12 px-6 pt-20 sm:px-10 sm:pt-24 lg:px-20 lg:pt-32 lg:translate-y-40">
        <div className="w-full">
          {/* Organization identity */}
          <div className="grid grid-cols-[auto_1fr] items-start gap-6 sm:gap-8 lg:gap-10">
            {/* Logo */}
            <img
              src={logo}
              alt="Bicol University Chemical Science Society logo"
              className="h-36 w-36 shrink-0 object-contain sm:h-68 sm:w-68 lg:h-[380px] lg:w-[380px]"
            />

            {/* Organization information + actions */}
            <div className="min-w-0 pt-1 sm:pt-2 lg:pt-4">
              <p className="text-3xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-[62px]">
                Bicol University
              </p>

              <h1 className="mt-2 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#ead9ec] sm:mt-3 sm:text-7xl lg:text-[68px]">
                CHEMICAL SCIENCE SOCIETY
              </h1>

              <p className="mt-3 text-lg leading-tight text-[#efe3f0] sm:mt-4 sm:text-xl lg:text-[30px]">
                for the advancement of chemical sciences
              </p>

              {/* Hero actions */}
              <div className="mt-6 flex flex-wrap gap-4 sm:mt-8 lg:mt-9">
                <Link
                  to="/about"
                  className={`${ctaLinkBase} px-7 py-3.5 text-sm sm:px-8 sm:py-4 sm:text-base`}
                >
                  Organization Overview
                </Link>

                <Link
                  to="/partners"
                  className={`${ctaLinkBase} px-8 py-3.5 text-sm sm:px-9 sm:py-4 sm:text-base`}
                >
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
