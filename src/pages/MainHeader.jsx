import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

export default function MainHeader() {
    const [open, setOpen] = useState(false)
    return (
        <header className="w-full h-[12vh] bg-gray-800 px-10 fixed top-0 left-0 z-20">
            <div className="h-full w-full flex justify-between items-center">
                <a href="Hero" className="inter-font text-lg md:text-2xl lg:text-4xl text-white font-bold">
                    El Fanar Hotel
                </a>

                <nav className="inter-font hidden md:flex md:gap-7 text-white font-semibold cursor-pointer">
                    <Link offset={-90} spy={true} to='hero' smooth={true} duration={1200} >Home</Link>
                    <Link offset={-90} spy={true} to='about' smooth={true} duration={1200} >About</Link>
                    <Link offset={-90} spy={true} to='explore' smooth={true} duration={1200} >Explore El Fanar</Link>
                    <Link offset={-90} spy={true} to='faq' smooth={true} duration={1200} >FAQ</Link>
                    <Link offset={-90} spy={true} to='contact' smooth={true} duration={1200} >Contact</Link>
                    <Link offset={-90} spy={true} to='footer' smooth={true} duration={1200} >Footer</Link>
                </nav>
                <HiMenu
                    className='w-7 h-7 cursor-pointer md:hidden text-white'
                    onClick={() => setOpen(!open)}
                />
            </div>
            {open && (
                <div className="cursor-pointer inter-font flex md:hidden flex-col items-center gap-4 py-6 text-white bg-[#0e0e0ea2]">
                    <Link offset={-90} spy={true} to='hero' smooth={true} duration={1200} >Home</Link>
                    <Link offset={-90} spy={true} to='about' smooth={true} duration={1200} >About</Link>
                    <Link offset={-90} spy={true} to='explore' smooth={true} duration={1200} >Explore El Fanar</Link>
                    <Link offset={-90} spy={true} to='faq' smooth={true} duration={1200} >FAQ</Link>
                    <Link offset={-90} spy={true} to='contact' smooth={true} duration={1200} >Contact</Link>
                    <Link offset={-90} spy={true} to='footer' smooth={true} duration={1200} >Footer</Link>
                </div>
            )}
        </header>
    );
}