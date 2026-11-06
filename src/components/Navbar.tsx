import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { PARTNER_FORM_URL } from '../lib/ui'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/directory', label: 'Directory' },
  { to: '/pages', label: 'Pages' }
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const scrolled = useScrolled()

  return (
    <>
      {/* Top fade: hides page content as it scrolls up under (and above) the navbar */}
      <div
        aria-hidden
        className={`
          pointer-events-none fixed inset-x-0 top-0 z-40 h-24 sm:h-32 lg:h-36
          bg-gradient-to-b from-[#150b2a] via-[#150b2a]/90 to-transparent
          transition-opacity duration-500 ease-out
          ${scrolled ? 'opacity-100' : 'opacity-0'}
        `}
      />

      <header
        className={`
        fixed left-1/2 top-4 z-50 -translate-x-1/2
        flex w-[calc(100%-2rem)] max-w-[1920px] items-center justify-between gap-4
        rounded-[22px] border px-4 py-2.5
        font-monda text-[#f2eaf5]
        transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out
        sm:top-5 sm:w-[calc(100%-5rem)] sm:px-6 sm:py-3 lg:px-9 lg:py-4
        ${
          scrolled
            ? 'border-white/15 bg-[#2a1c45]/85 shadow-[0_18px_50px_rgba(8,3,22,0.45)] backdrop-blur-xl'
            : 'border-white/20 bg-[#8f7ca0]/35 shadow-[0_16px_50px_rgba(8,3,22,0.22)] backdrop-blur-md'
        }
      `}
      >
        {/* Logo / Brand */}
        <Link to="/" className="shrink-0 text-lg tracking-tight sm:text-xl lg:text-[22px]">
          BU CheSS
        </Link>

        {/* Right-side cluster: nav links + CTA grouped together */}
        <div className="flex items-center gap-6 lg:gap-8">
          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-7 text-[15px] sm:flex lg:gap-11 lg:text-[17px] xl:gap-14"
            aria-label="Main navigation"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.to
              const isHovered = hoveredPath === item.to

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onMouseEnter={() => setHoveredPath(item.to)}
                  className={`relative pb-1 transition-colors ${
                    isActive ? 'text-white' : 'text-[#f2eaf5]/80 hover:text-white'
                  }`}
                >
                  {item.label}

                  {/* Underline: grows/shrinks in place from center, per link — never travels between links */}
                  <motion.span
                    className={`absolute inset-x-0 bottom-0 h-[2px] origin-center rounded-full ${
                      isActive ? 'bg-[#c68de5]' : 'bg-[#c68de5]/50'
                    }`}
                    initial={false}
                    animate={{ scaleX: isActive || isHovered ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Partnership CTA */}
          <a
            href={PARTNER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
            shrink-0 rounded-xl bg-[#b76bdb] px-4 py-1.5
            text-xs text-white shadow-lg shadow-purple-950/25
            transition hover:bg-[#c27ce3]
            focus:outline-none focus:ring-2 focus:ring-[#dba4eb] focus:ring-offset-2 focus:ring-offset-[#0c0618]
            sm:px-5 sm:py-2 sm:text-sm lg:px-6 lg:text-[15px]
          "
          >
            Partner with us
          </a>
        </div>
      </header>
    </>
  )
}

/** True once the page has scrolled past a few pixels; drives the navbar's "scrolled" styling. */
function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [threshold])

  return scrolled
}
