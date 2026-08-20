import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#100a22]">
      <Navbar />
      <Outlet />
    </div>
  );
}