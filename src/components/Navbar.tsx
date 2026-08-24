import { Link } from 'react-router-dom'

const navLinkClasses = 'transition-colors hover:text-white'

export default function Navbar() {
  return (
    <header
      className="
        fixed left-1/2 top-5 z-50 -translate-x-1/2
        flex w-[calc(100%-2rem)] max-w-[940px] items-center justify-between gap-4
        rounded-[24px] border border-white/20 bg-[#8f7ca0]/35 px-5 py-3
        text-[#f2eaf5] shadow-[0_16px_50px_rgba(8,3,22,0.22)] backdrop-blur-md
        sm:top-6 sm:w-[calc(100%-5rem)] sm:px-7 sm:py-4
      "
    >
      {/* Logo / Brand */}
      <Link to="/" className="shrink-0 text-lg font-bold tracking-tight sm:text-xl">
        BU CheSS
      </Link>

      {/* Desktop navigation */}
      <nav
        className="hidden items-center gap-8 text-base font-semibold sm:flex lg:gap-12 lg:text-lg"
        aria-label="Main navigation"
      >
        <Link to="/" className="border-b-4 border-[#c68de5] pb-1 text-white">
          Home
        </Link>

        <Link to="/about" className={navLinkClasses}>
          Directory
        </Link>

        <Link to="/partners" className={navLinkClasses}>
          Partners
        </Link>
      </nav>

      {/* Partnership CTA */}
      <Link
        to="/partners"
        className="
          shrink-0 rounded-2xl bg-[#b76bdb] px-4 py-2
          text-xs font-bold text-white shadow-lg shadow-purple-950/25
          transition hover:bg-[#c27ce3]
          focus:outline-none focus:ring-2 focus:ring-[#dba4eb] focus:ring-offset-2 focus:ring-offset-[#0c0618]
          sm:px-6 sm:text-sm
        "
      >
        Partner with us
      </Link>
    </header>
  )
}