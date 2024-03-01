'use client'
import Link from 'next/link';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    // Toggle para abrir/cerrar el menú
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    // Efecto secundario para bloquear/desbloquear el scroll
    useEffect(() => {
        if (openMenu) {
            // Bloquear el scroll añadiendo 'overflow-hidden' al body
            document.body.style.overflow = 'hidden';
        } else {
            // Desbloquear el scroll removiendo 'overflow-hidden' del body
            document.body.style.overflow = '';
        }

        // Opcional: Cleanup function para asegurar que el scroll se desbloquee
        // cuando el componente se desmonte
        return () => {
            document.body.style.overflow = '';
        };
    }, [openMenu]); // Dependencias del efecto: se ejecuta cada vez que `openMenu` cambie


    return (
        <nav className=" px-6 h-full py-6 lg:py-10">
            <div className="container mx-auto flex items-center">
                <Link href="/" className='flex items-center mr-10'>
                    <Image src="/img/logo.webp" className="hidden xl:block" alt='logo' width={300} height={83} />
                    <Image src="/img/logo.webp" className="xl:hidden" alt='logo' width={250} height={70} />
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
                <div className="absolute top-0 left-0 h-screen w-full mob-nav z-50 lg:hidden overflow:hidden ">
                    <div className='flex px-6 pt-6 '>
                        <div className='container mx-auto flex items-center'>
                            <Link href="/" className='flex items-center mr-10'>
                                <Image src="/img/logo.webp" className="xl:hidden" alt='logo' width={250} height={70} />
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
