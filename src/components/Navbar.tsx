import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed left-1/2 top-6 z-50 flex w-[calc(100%-2rem)] max-w-[1092px] -translate-x-1/2 items-center justify-between rounded-[28px] border border-white/20 bg-[#8f7ca0]/35 px-7 py-4 text-[#f2eaf5] shadow-[0_16px_50px_rgba(8,3,22,0.22)] backdrop-blur-md sm:w-[calc(100%-5rem)] sm:px-8">
      <Link to="/" className="text-xl font-bold tracking-tight">
        BU CheSS
      </Link>

      <nav className="hidden items-center gap-12 text-lg font-semibold sm:flex">
        <Link to="/" className="border-b-4 border-[#c68de5] pb-1 text-white">
          Home
        </Link>
        <Link to="/about" className="transition-colors hover:text-white">
          Directory
        </Link>
        <Link to="/partners" className="transition-colors hover:text-white">
          Pages
        </Link>
      </nav>

      <Link to="/partners" className="rounded-2xl bg-[#b76bdb] px-6 py-2 text-sm font-bold text-white shadow-lg shadow-purple-950/25 transition hover:bg-[#c27ce3]">
        Partner with us
      </Link>
    </header>
  );
}