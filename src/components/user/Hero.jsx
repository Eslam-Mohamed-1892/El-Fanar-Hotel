
import React from "react";
import Heroo from "../../images/Heroo.webp";
import { Link } from "react-scroll";

export default function Hero({ language, theme }) {

    const isArabic = language === "ar";
    const isDark = theme === "dark";

    const buttonStyle = isDark
        ? "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white active:bg-[#D4AF37] active:text-white"
        : "btn-info text-white";

    return (
        <section
            id="hero"
            name="hero"
            className="w-full h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Heroo})` }}
        >

            <div
                className={`
                    w-full h-full
                    flex flex-col justify-center items-center
                    px-6
                    ${isDark ? "bg-black/55" : "bg-black/40"}
                    transition-colors duration-300
                `}
            >

                {/* Small Text */}

                <p
                    className={`
                        ${isArabic ? "aref-font text-lg" : "inter-font text-sm"}
                        md:${isArabic ? "text-lg" : "text-sm"}
                        lg:${isArabic ? "text-xl" : "text-base"}
                        tracking-wide
                        font-bold
                        text-[#D4AF37]
                        text-center
                    `}
                >
                    {isArabic ? "فندق الفنار" : "El Fanar Hotel"}
                </p>


                {/* Main Heading */}

                <h1
                    className={`
                        ${isArabic
                            ? "aref-font text-5xl md:text-6xl lg:text-7xl"
                            : "playFair-font text-4xl md:text-5xl lg:text-6xl"
                        }
                        text-white
                        font-bold
                        text-center
                        mt-2
                        mb-10 md:mb-12 lg:mb-14
                    `}
                >
                    {isArabic
                        ? "اهرب إلى الراحة"
                        : "Escape to Comfort"}
                </h1>


                {/* Contact Button */}

                <Link
                    to="contact"
                    smooth={true}
                    duration={1200}
                    spy={true}
                    className={`
                        text-lg
                        btn
                        btn-outline
${buttonStyle}
                    {isArabic ? "تواصل معنا" : "Contact Us"}

                    `}
                >
                    {isArabic ? "تواصل معنا ↓" : "Contact Us ↓"}
                </Link>

            </div>

        </section>
    );
}

