import { FaInstagram } from 'react-icons/fa'; 
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" text-black bg-purple-100 text-sm border shadow-lg  p-4">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row text-center md:text-left">
        <div>
          &copy; {new Date().getFullYear()} Vitality
        </div>
        <div className="my-2 md:my-0">
          Córdoba, Argentina
        </div>
        <div>
          {/* <Link href="https://instagram.com/vitality_arg" className='flex' target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-xl" />
            @vitality_arg
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
