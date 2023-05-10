"use client"

import { useState } from "react";
import IntroSection from "./components/sections/IntroSection";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";


export default function Home() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="w-full flex flex-col gap-4 relative text-indigo-950">
      <Menu menu={menu} />

      <Navbar menu={menu} setMenu={setMenu} />

      <IntroSection />

      <section></section>
    </div>
  )
}
