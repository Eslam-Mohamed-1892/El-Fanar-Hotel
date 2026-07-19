import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function MainHeader() {
    const [open, setOpen] = useState(false)
    return (
        <header className="w-full h-[12vh] bg-gray-800 px-10 fixed top-0 left-0 z-20">
            <div className="h-full w-full flex justify-between items-center">
                <a href="Hero" className="inter-font text-lg md:text-2xl lg:text-4xl text-white font-bold">
                    El Fanar Hotel
                </a>

                <nav className="inter-font hidden md:flex md:gap-7 text-white font-semibold">
                    <a href="hero">Home</a>
                    <a href="about">About</a>
                    <a href="explore el fanar">Explore El Fanar</a>
                    <a href="faq">FAQ</a>
                    <a href="contact">Contact</a>
                    <a href="#">Footer</a>
                </nav>
                <HiMenu
                    className='w-7 h-7 cursor-pointer md:hidden text-white'
                    onClick={() => setOpen(!open)}
                />
            </div>
            {open && (
                <div className="inter-font flex md:hidden flex-col items-center gap-4 py-6 text-white bg-[#0e0e0ea2]">
                    <a href="Hero">Home</a>
                    <a href="About">About</a>
                    <a href="Explore El Fanar">Explore El Fanar</a>
                    <a href="faq">FAQ</a>
                    <a href="contact">Contact</a>
                    <a href="#">Footer</a>
                </div>
            )}
        </header>
    );
}