import { Link } from "react-router-dom";
import logo from "../assets/images/bu-chess-logo.png";
import background from "../assets/images/desktop-background.svg";

export default function Home() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#0c0618] text-white">
      <img
        src={background}
        alt=""
        className="absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] max-w-none object-cover object-center"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1092px] px-8 pt-28 sm:px-12 sm:pt-20">
        <div className=" flex max-w-[650px] items-center gap-5 sm:gap-6">
          <img src={logo} alt="BU CheSS logo" className="h-[112px] w-[112px] shrink-0 object-contain sm:h-[150px] sm:w-[150px]" />
          <div>
            <p className="text-[27px] font-semibold leading-tight tracking-tight sm:text-[36px]">Bicol University</p>
            <h1 className="mt-1 text-[30px] font-extrabold leading-[1.08] tracking-tight text-[#ead9ec] sm:text-[39px]">CHEMICAL SCIENCE SOCIETY</h1>
            <p className="mt-2 text-[18px] leading-tight text-[#efe3f0] sm:text-[20px]">for the advancement of chemical sciences</p>
          </div>
        </div>

        <div className="ml-[130px] mt-4 flex flex-wrap gap-4 sm:ml-[178px]">
          <Link to="/about" className="rounded-full bg-[#ad63cf] px-6 py-1.5 text-xs font-bold text-[#f8eafa] shadow-lg shadow-purple-950/30 transition hover:bg-[#bd75dc]">
            Organization Overview
          </Link>
          <Link to="/partners" className="rounded-full bg-[#ad63cf] px-8 py-1.5 text-xs font-bold text-[#f8eafa] shadow-lg shadow-purple-950/30 transition hover:bg-[#bd75dc]">
            Flagship Events
          </Link>
        </div>
      </div>
    </section>
  )
}
