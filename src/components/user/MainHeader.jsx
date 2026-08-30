
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { Link } from "react-scroll";

export default function MainHeader() {
    const [open, setOpen] = useState(false)

    const closeMenu = () => {
        setOpen(false)
    }

    return (
        <header className="w-full h-[12vh] bg-[#102A43] px-6 md:px-8 lg:px-10 fixed top-0 left-0 z-20">

            <div className="h-full w-full flex justify-between items-center">

                {/* Logo */}

                <Link
                    to='hero'
                    smooth={true}
                    duration={1200}
                    className="playFair-font text-2xl md:text-2xl lg:text-4xl text-[#D4AF37] font-bold"
                >
                    El Fanar Hotel
                </Link>


                {/* Desktop Navigation */}

                <nav className="inter-font hidden md:flex md:gap-7 text-white font-semibold cursor-pointer">

                    <Link offset={-90} spy={true} activeClass="text-[#D4AF37]" to='hero' smooth={true} duration={1200}>
                        Home
                    </Link>

                    <Link offset={-90} spy={true} activeClass="text-[#D4AF37]" to='about' smooth={true} duration={1200}>
                        About
                    </Link>

                    <Link offset={-90} spy={true} activeClass="text-[#D4AF37]" to='explore' smooth={true} duration={1200}>
                        Explore El Fanar
                    </Link>

                    <Link offset={-90} spy={true} activeClass="text-[#D4AF37]" to='rooms' smooth={true} duration={1200}>
                        Our Rooms
                    </Link>

                    <Link offset={-90} spy={true} activeClass="text-[#D4AF37]" to='faq' smooth={true} duration={1200}>
                        FAQ
                    </Link>

                    <Link offset={-90} spy={true} activeClass="text-[#D4AF37]" to='booking' smooth={true} duration={1200}>
                        Booking
                    </Link>

                    <Link offset={-90} spy={true} activeClass="text-[#D4AF37]" to='contact' smooth={true} duration={1200}>
                        Contact
                    </Link>

                    <Link offset={-90} spy={true} activeClass="text-[#D4AF37]" to='footer' smooth={true} duration={1200}>
                        Footer
                    </Link>

                </nav>


                {/* Mobile Menu Button */}

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-[#D4AF37] text-3xl"
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <HiX /> : <HiMenu />}
                </button>

            </div>


            {/* Mobile Navigation */}

            {open && (

                <div className="md:hidden absolute top-[12vh] left-0 w-full px-6 pb-6">

                    <nav className="inter-font bg-[#102A43] border border-[#D4AF37]/40 rounded-b-2xl shadow-2xl overflow-hidden">

                        <Link
                            offset={-90}
                            spy={true}
                            activeClass="text-[#D4AF37]"
                            to='hero'
                            smooth={true}
                            duration={1200}
                            onClick={closeMenu}
                            className="block text-white font-semibold text-center py-4 border-b border-white/10"
                        >
                            Home
                        </Link>

                        <Link
                            offset={-90}
                            spy={true}
                            activeClass="text-[#D4AF37]"
                            to='about'
                            smooth={true}
                            duration={1200}
                            onClick={closeMenu}
                            className="block text-white font-semibold text-center py-4 border-b border-white/10"
                        >
                            About
                        </Link>

                        <Link
                            offset={-90}
                            spy={true}
                            activeClass="text-[#D4AF37]"
                            to='explore'
                            smooth={true}
                            duration={1200}
                            onClick={closeMenu}
                            className="block text-white font-semibold text-center py-4 border-b border-white/10"
                        >
                            Explore El Fanar
                        </Link>

                        <Link
                            offset={-90}
                            spy={true}
                            activeClass="text-[#D4AF37]"
                            to='rooms'
                            smooth={true}
                            duration={1200}
                            onClick={closeMenu}
                            className="block text-white font-semibold text-center py-4 border-b border-white/10"
                        >
                            Our Rooms
                        </Link>

                        <Link
                            offset={-90}
                            spy={true}
                            activeClass="text-[#D4AF37]"
                            to='faq'
                            smooth={true}
                            duration={1200}
                            onClick={closeMenu}
                            className="block text-white font-semibold text-center py-4 border-b border-white/10"
                        >
                            FAQ
                        </Link>

                        <Link
                            offset={-90}
                            spy={true}
                            activeClass="text-[#D4AF37]"
                            to='booking'
                            smooth={true}
                            duration={1200}
                            onClick={closeMenu}
                            className="block text-white font-semibold text-center py-4 border-b border-white/10"
                        >
                            Booking
                        </Link>

                        <Link
                            offset={-90}
                            spy={true}
                            activeClass="text-[#D4AF37]"
                            to='contact'
                            smooth={true}
                            duration={1200}
                            onClick={closeMenu}
                            className="block text-white font-semibold text-center py-4 border-b border-white/10"
                        >
                            Contact
                        </Link>

                        <Link
                            offset={-90}
                            spy={true}
                            activeClass="text-[#D4AF37]"
                            to='footer'
                            smooth={true}
                            duration={1200}
                            onClick={closeMenu}
                            className="block text-white font-semibold text-center py-4"
                        >
                            Footer
                        </Link>

                    </nav>

                </div>

            )}

        </header>
    );
}

