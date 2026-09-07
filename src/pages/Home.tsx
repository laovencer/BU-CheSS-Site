import { Link } from 'react-router-dom'
import logo from '../assets/images/bu-chess-logo.png'

const ctaLinkBase =
  'rounded-full bg-[#ad63cf] py-2 text-xs font-bold text-[#f8eafa] shadow-lg shadow-purple-950/30 ' +
  'transition hover:bg-[#bd75dc] focus:outline-none focus:ring-2 focus:ring-[#dba4eb] focus:ring-offset-2 focus:ring-offset-[#0c0618]'

export default function Home() {
  return (
    <section className="relative isolate flex min-h-dvh w-full items-center overflow-hidden text-white">
      <div className="relative z-10 mx-auto w-full max-w-[1092px] px-6 pt-28 sm:px-10 sm:pt-32 lg:px-12 lg:pt-36">
        <div className="w-full max-w-[880px]">
          {/* Organization identity */}
          <div className="flex items-start gap-5 sm:gap-6 lg:gap-8">
            <img
              src={logo}
              alt="Bicol University Chemical Science Society logo"
              className="h-28 w-28 shrink-0 object-contain sm:h-40 sm:w-40 lg:h-52 lg:w-52"
            />

            <div className="min-w-0">
              <p className="text-2xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                Bicol University
              </p>

              <h1 className="mt-1 text-3xl font-extrabold leading-[1.08] tracking-tight text-[#ead9ec] sm:mt-2 sm:text-5xl lg:text-[46px]">
                CHEMICAL SCIENCE SOCIETY
              </h1>

              <p className="mt-2 text-base leading-tight text-[#efe3f0] sm:mt-3 sm:text-lg lg:text-[22px]">
                for the advancement of chemical sciences
              </p>
            </div>
          </div>

          {/* Hero actions */}
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:pl-[184px] lg:mt-10 lg:pl-[240px]">
            <Link to="/about" className={`${ctaLinkBase} px-5`}>
              Organization Overview
            </Link>

            <Link to="/partners" className={`${ctaLinkBase} px-6`}>
              Flagship Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}