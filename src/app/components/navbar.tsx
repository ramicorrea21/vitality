'use client'
import Link from 'next/link';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className=" px-6 py-6 lg:py-10">
            <div className="container mx-auto flex items-center">
                <Link href="/" className='flex items-center mr-10'>
                    <Image src="/img/logo.svg" className="hidden xl:block" alt='logo' width={300} height={300} />
                    <Image src="/img/logo.svg" className="xl:hidden" alt='logo' width={250} height={250} />
                </Link>
                <div className="border-r border-gray-300 h-6 mr-10"></div>
                <div className='lg:hidden' onClick={toggleMenu}><RxHamburgerMenu size={30} /></div>
                <div className="flex-grow hidden lg:block ">
                    <ul className="flex space-x-8 xl:space-x-20 ">
                        <li>
                            <Link href="/our-story" className="font-semibold text-lg hover:text-violet-500">
                                Nuestra Historia
                            </Link>
                        </li>
                        <li className="ml-2 xl:ml-6">
                            <Link href="/philosophy" className="font-semibold text-lg hover:text-violet-500">
                                Filosofia
                            </Link>
                        </li>
                        <li className="ml-2 xl:ml-6">
                            <Link href="/resources" className="font-semibold text-lg hover:text-violet-500">
                                Recursos
                            </Link>
                        </li>
                        <li className="ml-2 xl:ml-6">
                            <Link href="/case-study" className="font-semibold text-lg hover:text-violet-500">
                                Contactanos
                            </Link>
                        </li>
                        <li className="ml-2 xl:ml-6">
                            <Link href="/reviews" className="font-semibold text-lg hover:text-violet-500">
                                Reseñas
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {openMenu && (
                <div className="absolute top-0 left-0 h-screen w-full bg-white z-50 lg:hidden">
                    <div className='flex px-6 pt-6 '>
                        <div className='container mx-auto flex items-center'>
                            <Link href="/" className='flex items-center mr-10'>
                                <Image src="/img/logo.svg" className="xl:hidden" alt='logo' width={250} height={250} />
                            </Link>
                            <div className='flex'>
                                <div className="border-r border-gray-300 h-6 mt-1 mr-10 "></div>
                                <div className='lg:hidden ' onClick={toggleMenu}><IoMdClose size={30} /></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full">
                        <Link href="/our-story" className="font-semibold pb-2 text-lg hover:text-violet-500">
                                Our Story
                        </Link>
                        <Link href="/philosophy" className="font-semibold py-2 text-lg hover:text-violet-500">
                                Philosophy
                        </Link>
                        <Link href="/resources" className="font-semibold py-2 text-lg hover:text-violet-500">
                                Resources
                        </Link>
                        <Link href="/free-case-study" className="font-semibold py-2 text-lg hover:text-violet-500">
                                Free Case Study
                        </Link>
                        <Link href="/reviews" className="font-semibold pt-2 text-lg hover:text-violet-500">
                                Reviews
                        </Link>
                        </div>
                </div>
            )}
        </nav>
    );
}
