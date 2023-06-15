import { Bars3Icon, GlobeEuropeAfricaIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useScroll, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NavLink = ({ children, href, className }) => {
    return (
        <Link href={href} className={`text-base font-normal hover:text-violet-400 transition-colors ${className}`}>{children}</Link>
    )
}

const HamburgerButton = ({ isOpen, onClick }) => {
    return (
        <button onClick={onClick} className={`border ${isOpen ? "border-white" : "border-indigo-950"} p-3 rounded-2xl`}>{!isOpen ? <Bars3Icon className="w-6 h-6" /> : <XMarkIcon className="w-6 h-6 text-white" />}</button>
    )
}

const Navbar = ({ menu, setMenu }) => {
    const { scrollY } = useScroll()

    const [hidden, setHidden] = useState(false);

    function update() {
        if (scrollY.get() < scrollY.getPrevious()) {
            setHidden(false)
        } else if (scrollY.get() > 100 && scrollY.get() > scrollY.getPrevious()) {
            setHidden(true)
        }
    }

    useEffect(() => {
        return scrollY.onChange(() => update())
    })

    const variants = {
        visible: { y: 0 },
        hidden: { y: -100 },
    }

    return (
        <motion.nav variants={variants} animate={hidden ? "hidden" : "visible"} transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.4 }} className={`fixed transition-all top-0 left-0 ${menu ? 'bg-transparent' : 'bg-white'} transition-colors w-full h-24 z-50 flex justify-between items-center px-10`}>
            <div className={`cursor-pointer ${menu ? "text-white" : "text-black"}`}>LOGO</div>
            <div className="flex justify-end items-center gap-10">
                {!menu && (
                    <>
                        <NavLink href="#">For clients</NavLink>
                        <NavLink href="#">For vendors</NavLink>
                        <NavLink href="#">Intelligence hub</NavLink>
                        <NavLink href="#">About us</NavLink>
                        <NavLink href="#">
                            <div className="flex items-center justify-center gap-2">
                                <GlobeEuropeAfricaIcon className="h-5 w-5" />
                                <p>EN</p>
                            </div>
                        </NavLink>
                        <NavLink href='#' className="text-violet-400 hover:text-indigo-950">Become our partner</NavLink>
                    </>
                )}


                <HamburgerButton isOpen={menu} onClick={() => setMenu(!menu)} />
            </div>
        </motion.nav>
    )
}

export default Navbar