import { Bars3Icon, GlobeEuropeAfricaIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

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
    return (
        <div className={`fixed top-0 left-0 ${menu ? 'bg-transparent' : 'bg-white'} transition-colors w-full h-24 z-50 flex justify-between items-center px-10`}>

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
        </div>
    )
}

export default Navbar