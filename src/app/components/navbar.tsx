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
                            <Link href="/" className="font-semibold text-lg hover:text-violet-500">
                                Inicio
                            </Link>
                        </li>
                        <li className="ml-2 xl:ml-6">
                            <Link href="/quienes_somos" className="font-semibold text-lg hover:text-violet-500">
                            Quienes Somos
                            </Link>
                        </li>
                        <li className="ml-2 xl:ml-6">
                            <Link href="/#services" className="font-semibold text-lg hover:text-violet-500">
                               Nuestros servicios
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
            {openMenu && (
                <div className="absolute top-0 left-0 h-screen w-full mob-nav z-50 lg:hidden">
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
                        <Link href="/" onClick={toggleMenu} className="font-semibold pb-2 text-lg hover:text-violet-500">
                                Inicio
                        </Link>
                        <Link href="/quienes_somos"  onClick={toggleMenu}className="font-semibold py-2 text-lg hover:text-violet-500">
                                Quienes Somos
                        </Link>
                        <Link href="#services" onClick={toggleMenu} className="font-semibold py-2 text-lg hover:text-violet-500">
                                Nuestros Servicios
                        </Link>
                        </div>
                </div>
            )}
        </nav>
    );
}
