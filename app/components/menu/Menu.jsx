import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'

const MenuLink = ({ children, href }) => {
    return (
        <li className='text-white font-bold text-6xl tracking-wide mt-6 whitespace-nowrap'>
            <Link href={href} className='hover:opacity-60 transition-all duration-200'>{children}</Link>
        </li>
    )
}

const Menu = ({ menu }) => {
    return (
        <AnimatePresence initial={false}>
            {menu == true && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="z-10 w-full h-full fixed top-0 left-0 bg-gradient-to-t from-indigo-900 via-indigo-800 to-indigo-500">

                    <div className='w-full h-full flex flex-col'>
                        <div className='w-full h-full flex mt-20 p-10'>
                            <div className='flex-1 '>
                                <ul className='list-none'>
                                    <h3 className='text-indigo-200 font-medium text-xl'>Services</h3>
                                    <MenuLink href='#'>Clients</MenuLink>
                                    <MenuLink href='#'>Vendors</MenuLink>
                                </ul>
                            </div>
                            <div className='flex-1'>
                                <ul className='list-none'>
                                    <h3 className='text-indigo-200 font-medium text-xl'>Company</h3>
                                    <MenuLink href='#'>Intelligence hub</MenuLink>
                                    <MenuLink href='#'>About us</MenuLink>
                                    <MenuLink href='#'>Career</MenuLink>
                                    <MenuLink href='#'>News</MenuLink>
                                    <MenuLink href='#'>Rebranding</MenuLink>
                                </ul>
                            </div>
                            <div className='flex-1'>
                                <div className="flex justify-end items-end flex-col gap-4">
                                    <PrimaryButton>Become our partner</PrimaryButton>
                                    <PrimaryButton>Contact us</PrimaryButton>
                                    <PrimaryButton>E-commerce</PrimaryButton>
                                </div>
                            </div>
                        </div>

                        {/* FOOTER */}
                        <div></div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Menu