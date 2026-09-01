
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

export default function MainHeader({ language, theme }) {
    const [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    };

    const isArabic = language === "ar";
    const isDark = theme === "dark";

    const navItems = [
        {
            id: "hero",
            en: "Home",
            ar: "الرئيسية",
        },
        {
            id: "about",
            en: "About",
            ar: "عن الفندق",
        },
        {
            id: "explore",
            en: "Explore El Fanar",
            ar: "اكتشف الفنار",
        },
        {
            id: "rooms",
            en: "Our Rooms",
            ar: "غرفنا",
        },
        {
            id: "faq",
            en: "FAQ",
            ar: "الأسئلة الشائعة",
        },
        {
            id: "contact",
            en: "Contact",
            ar: "تواصل معنا",
        },
    ];

    const headerBackground = isDark
        ? "bg-[#081A2B]"
        : "bg-[#102A43]";

    const mobileBorder = isDark
        ? "border-[#D4AF37]/30"
        : "border-[#D4AF37]/40";

    const mobileDivider = isDark
        ? "border-white/5"
        : "border-white/10";

    return (
        <header
            className={`
                w-full h-[12vh]
                px-6 md:px-8 lg:px-10
                fixed top-0 left-0 z-20
                ${headerBackground}
                transition-colors duration-300
            `}
        >

            <div className="h-full w-full flex justify-between items-center">

                {/* Logo */}

                <Link
                    to="hero"
                    smooth={true}
                    duration={1200}
                    className={`
                        ${isArabic ? "aref-font" : "playFair-font"}
                        text-2xl md:text-2xl lg:text-4xl
                        text-[#D4AF37]
                        font-bold
                        cursor-pointer
                    `}
                >
                    El Fanar Hotel
                </Link>


                {/* Desktop Navigation */}

                <nav
                    className={`
                        ${isArabic ? "aref-font" : "inter-font"}
                        hidden md:flex
                        gap-5 lg:gap-7
                        text-white
                        font-semibold
                        text-base
                        ${isArabic ? "lg:text-lg" : ""}
                        cursor-pointer
                    `}
                >

                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            offset={-90}
                            spy={true}
                            activeClass="text-[#D4AF37]"
                            to={item.id}
                            smooth={true}
                            duration={1200}
                        >
                            {isArabic ? item.ar : item.en}
                        </Link>
                    ))}

                </nav>


                {/* Mobile Menu Button */}

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="
                        md:hidden
                        text-[#D4AF37]
                        text-3xl
                    "
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <HiX /> : <HiMenu />}
                </button>

            </div>


            {/* Mobile Navigation */}

            {open && (

                <div className="md:hidden absolute top-[12vh] left-0 w-full px-6 pb-6">

                    <nav
                        className={`
                            ${isArabic ? "aref-font" : "inter-font"}
                            ${headerBackground}
                            border
                            ${mobileBorder}
                            rounded-b-2xl
                            shadow-2xl
                            overflow-hidden
                        `}
                    >

                        {navItems.map((item, index) => (
                            <Link
                                key={item.id}
                                offset={-90}
                                spy={true}
                                activeClass="text-[#D4AF37]"
                                to={item.id}
                                smooth={true}
                                duration={1200}
                                onClick={closeMenu}
                                className={`
                                    block
                                    text-white
                                    font-semibold
                                    text-center
                                    py-4
                                    text-base
                                    ${isArabic ? "text-lg" : ""}
                                    ${index !== navItems.length - 1
                                        ? `border-b ${mobileDivider}`
                                        : ""
                                    }
                                `}
                            >
                                {isArabic ? item.ar : item.en}
                            </Link>
                        ))}

                    </nav>

                </div>

            )}

        </header>
    );
}

