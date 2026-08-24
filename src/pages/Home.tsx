import { Link } from 'react-router-dom'
import logo from '../assets/images/bu-chess-logo.png'
import background from '../assets/images/desktop-background.svg'

const ctaLinkBase =
  'rounded-full bg-[#ad63cf] py-2 text-xs font-bold text-[#f8eafa] shadow-lg shadow-purple-950/30 ' +
  'transition hover:bg-[#bd75dc] focus:outline-none focus:ring-2 focus:ring-[#dba4eb] focus:ring-offset-2 focus:ring-offset-[#0c0618]'

export default function Home() {
  return (
    <section
      className="relative isolate flex min-h-dvh w-full items-center overflow-hidden bg-[#0c0618] text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1092px] items-center px-6 pt-24 sm:px-10 lg:px-12">
        <div className="w-full max-w-[720px]">
          {/* Organization identity */}
          <div className="flex items-center gap-4 sm:gap-5 lg:gap-6">
            <img
              src={logo}
              alt="Bicol University Chemical Science Society logo"
              className="h-24 w-24 shrink-0 object-contain sm:h-32 sm:w-32 lg:h-36 lg:w-36"
            />

            <div className="min-w-0">
              <p className="text-xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-[36px]">
                Bicol University
              </p>

              <h1 className="mt-1 text-2xl font-extrabold leading-[1.08] tracking-tight text-[#ead9ec] sm:text-4xl lg:text-[39px]">
                CHEMICAL SCIENCE SOCIETY
              </h1>

              <p className="mt-2 text-sm leading-tight text-[#efe3f0] sm:text-base lg:text-[20px]">
                for the advancement of chemical sciences
              </p>
            </div>
          </div>

          {/* Hero actions */}
          <div className="mt-5 flex flex-wrap gap-3 sm:pl-[132px] lg:pl-[168px]">
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