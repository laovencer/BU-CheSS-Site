import { Link } from 'react-router-dom'
import logo from '../assets/images/bu-chess-logo.png'
import PageMotion, { PageItem } from '../components/PageMotion'

const ctaLinkBase =
  'inline-flex items-center justify-center rounded-full bg-[#ad63cf] font-bold text-[#f8eafa] shadow-lg shadow-purple-950/30 ' +
  'transition hover:bg-[#bd75dc] focus:outline-none focus:ring-2 focus:ring-[#dba4eb] focus:ring-offset-2 focus:ring-offset-[#0c0618]'

// Desktop sizes are viewport-relative (clamped) so the hero keeps the Canva mockup's proportions at any width
const ctaSize =
  'w-60 whitespace-nowrap px-6 py-2 text-base sm:w-72 lg:w-[clamp(15rem,17.5vw,22rem)] lg:py-2 lg:text-[clamp(1rem,1.15vw,1.25rem)]'

export default function Home() {
  return (
    <PageMotion>
      {/* Vertical padding clears the fixed navbar; the larger bottom padding lifts the hero slightly above center */}
      <section className="relative isolate flex min-h-dvh w-full items-center overflow-hidden pb-24 pt-32 text-white sm:pt-36 lg:pb-48">
        {/* Horizontal inset matches the navbar so the logo lines up with its left edge */}
        <div className="relative z-10 mx-auto w-full max-w-[1920px] px-4 sm:px-10">
          {/* Organization identity: stacked on small screens, side by side on large */}
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:gap-[clamp(1.5rem,2vw,2.75rem)] lg:text-left">
            {/* Logo */}
            <PageItem className="shrink-0">
              <img
                src={logo}
                alt="Bicol University Chemical Science Society logo"
                className="h-48 w-48 object-contain sm:h-56 sm:w-56 lg:h-[clamp(11rem,15vw,20rem)] lg:w-[clamp(11rem,15vw,20rem)]"
              />
            </PageItem>

            {/* Organization information + actions */}
            <div className="min-w-0">
              <PageItem>
                <p className="text-[1.75rem] font-bold leading-[1.1] tracking-tight sm:text-[2.5rem] lg:text-[clamp(2.125rem,2.7vw,3.75rem)]">
                  Bicol University
                </p>
              </PageItem>

              <PageItem>
                <h1 className="mt-1 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-tight text-[#ead9ec] sm:text-[3.25rem] lg:mt-0.5 lg:text-[clamp(2.25rem,2.8vw,4rem)]">
                  CHEMICAL SCIENCE SOCIETY
                </h1>
              </PageItem>

              <PageItem>
                <p className="mt-2 text-balance font-monda text-xl leading-snug text-[#efe3f0] sm:text-[1.375rem] lg:text-[clamp(1.25rem,1.5vw,2rem)]">
                  for the advancement of chemical sciences
                </p>
              </PageItem>

              {/* Hero actions */}
              <PageItem className="mt-6 flex flex-wrap justify-center gap-4 lg:mt-7 lg:justify-start lg:gap-[clamp(1rem,1.5vw,2rem)]">
                <Link to="/overview" className={`${ctaLinkBase} ${ctaSize}`}>
                  Organization Overview
                </Link>

                <Link to="/events" className={`${ctaLinkBase} ${ctaSize}`}>
                  Flagship Events
                </Link>
              </PageItem>
            </div>
          </div>
        </div>
      </section>
    </PageMotion>
  )
}
