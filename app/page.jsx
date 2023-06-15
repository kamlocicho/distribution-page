"use client"

import { useEffect, useRef, useState } from "react";
import IntroSection from "./components/sections/IntroSection";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import MainText from "./components/typography/MainText";
import Image from "next/image";
import { AnimatePresence, useAnimate } from "framer-motion";


const AboutCard = ({ icon, title, content, innerRef }) => {
  return (
    <div className="w-full h-screen" >
      <div className="border border-white/20 p-8 w-5/6" ref={innerRef}>
        <Image width={48} height={48} src={icon} alt={title} className="mb-8" />
        <h1 className="text-white font-medium text-3xl mb-8">{title}</h1>
        <p className="text-white/70 text-xl">{content}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [menu, setMenu] = useState(false)

  const activenessSection = useRef(null)
  const intelligenceSection = useRef(null)
  const technologySection = useRef(null)
  const businessSection = useRef(null)

  const imageContainer = useRef(null)
  const [animate] = useAnimate()

  const [currentImage, setCurrentImage] = useState('/phone.png')

  const handleYPosition = () => {
    const containerY = imageContainer.current.getBoundingClientRect().top

    const activenessSectionY = activenessSection.current.getBoundingClientRect().bottom
    const intelligenceSectionY = intelligenceSection.current.getBoundingClientRect().bottom
    const technologySectionY = technologySection.current.getBoundingClientRect().bottom
    const businessSectionY = businessSection.current.getBoundingClientRect().bottom

    if (activenessSectionY >= containerY) setCurrentImage('/phone.png')
    else if (intelligenceSectionY >= containerY) setCurrentImage('/computer.jpg')
    else if (technologySectionY >= containerY) setCurrentImage('/solar-panels.jpg')
    else if (businessSectionY >= containerY) setCurrentImage('/elevator.jpg')
  }


  useEffect(() => {
    handleYPosition()

    window.addEventListener("scroll", handleYPosition);
  }, [])

  return (
    <div className="w-full flex flex-col gap-4 relative text-indigo-950 scroll-smooth">
      <Menu menu={menu} />

      <Navbar menu={menu} setMenu={setMenu} />

      <IntroSection />

      <section className="w-full bg-[#311196] px-12" id='about'>
        <div className="flex w-full align-center items-center gap-6 mb-20">
          <div className="grow">
            <p className="text-white font-medium text-md pb-10 pt-20">About us</p>
            <MainText className='text-white text-6xl font-medium'>We are your personal tech adoption team</MainText>
          </div>
          <div className="grow">
            <p className="text-[#8A94A8] text-2xl">We bridge global strategy and trends with localised execution, helping our vendors and clients stay ahead of the market and competition.</p>
          </div>
        </div>

        <div className="flex w-full align-center items-start gap-6">
          <div className="grow w-1/2 sticky top-32" ref={imageContainer}>
            <AnimatePresence initial={false}>
              <Image width={560} height={640} alt='phone image' src={currentImage} className="max-w-full w-[560px] h-[640px] transition-opacity" />
            </AnimatePresence>
          </div>
          <div className="grow w-1/2 flex flex-col">

            <AboutCard innerRef={activenessSection} icon={"/flow-icon.svg"} title={"Proactiveness"} content={"Our teams work continuously to exchange knowledge and offer business development opportunities."} />
            <AboutCard innerRef={intelligenceSection} icon={"/intelligence-icon.svg"} title={"Intelligence and expertise"} content={"ACC Distribution bridges global strategy and trends with localised execution, helping vendors and clients stay ahead of the market."} />
            <AboutCard innerRef={technologySection} icon={"/technology-icon.svg"} title={"Technology range"} content={"We represent a wide spectrum of leading and emerging products as well as channels of distribution."} />
            <AboutCard innerRef={businessSection} icon={"/business-icon.svg"} title={"Business solutions"} content={"We offer extended range of value-added services and flexible partnership approach for vendors and clients, helping achieve business growth."} />

          </div>
        </div>

      </section>
    </div>
  )
}
