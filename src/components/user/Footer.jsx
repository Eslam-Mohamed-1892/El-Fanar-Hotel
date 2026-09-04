
import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLocationDot,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaWhatsapp
} from "react-icons/fa6"
import { Link } from "react-scroll"

export default function Footer({ language, theme }) {

    const isArabic = language === "ar"
    const isDark = theme === "dark"

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
    ]

    const buttonStyle = isDark
        ? "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white active:bg-[#D4AF37] active:text-white"
        : "btn-info text-white";

    const socialLinks = [
        {
            id: 1,
            icon: FaFacebook,
            link: 'https://www.facebook.com/share/14itDM2KewK/',
        },
        {
            id: 2,
            icon: FaInstagram,
            link: 'https://www.instagram.com/fanardeluna?igsh=MW5tbmJtc3g5czRpcA==',
        }
    ]

    const contactData = [
        {
            id: 1,
            icon: FaLocationDot,
            enLabel: "Address:",
            arLabel: "العنوان:",
            enValue: "Ain Sokhna, Egypt",
            arValue: "العين السخنة، مصر",
        },
        {
            id: 2,
            icon: FaPhone,
            enLabel: "Phone:",
            arLabel: "الهاتف:",
            enValue: "01050838177",
            arValue: "01050838177",
            href: "tel:01050838177",
        },
        {
            id: 3,
            icon: FaEnvelope,
            enLabel: "Email:",
            arLabel: "البريد الإلكتروني:",
            enValue: "eslameldakhli189@gmail.com",
            arValue: "eslameldakhli189@gmail.com",
            href: "mailto:eslameldakhli189@gmail.com",
        },
        {
            id: 4,
            icon: FaClock,
            enLabel: "Reception:",
            arLabel: "الاستقبال:",
            enValue: "24/7",
            arValue: "24/7",
        },
    ]

    const footerBackground = isDark
        ? "bg-[#081A2B]"
        : "bg-[#0F2D3C]"

    const textFont = isArabic
        ? "aref-font"
        : "inter-font"

    return (
        <footer
            id="footer"
            name="footer"
            className={`
                w-full
                ${footerBackground}
                text-white
                ${textFont}
                px-6 md:px-8 lg:px-10
                py-10
            `}
        >

            {/* Main Footer */}

            <div className="
                w-full
                mx-auto
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-4
                gap-8
            ">

                {/* About */}

                <div className="flex flex-col gap-3">

                    <h2 className="font-extrabold text-[#D4AF37] text-xl">
                        {isArabic ? "فندق الفنار" : "El Fanar Hotel"}
                    </h2>

                    <p className="font-semibold leading-relaxed text-gray-200">
                        {
                            isArabic
                                ? "اهرب إلى الراحة، حيث تصبح كل إقامة تجربة لا تُنسى."
                                : "Escape to Comfort, where every stay becomes a memorable experience."
                        }
                    </p>

                </div>


                {/* Quick Links */}

                <div className="flex flex-col gap-3">

                    <h2 className="font-extrabold text-[#D4AF37] text-xl">
                        {isArabic ? "روابط سريعة" : "Quick Links"}
                    </h2>

                    <nav className="flex flex-col gap-2 font-semibold">

                        {
                            navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    spy={true}
                                    offset={-90}
                                    activeClass="text-[#D4AF37]"
                                    to={item.id}
                                    smooth={true}
                                    duration={1200}
                                    className="cursor-pointer"
                                >
                                    {isArabic ? item.ar : item.en}
                                </Link>
                            ))
                        }

                    </nav>

                </div>


                {/* Contact */}

                <div className="flex flex-col gap-3">

                    <h2 className="font-extrabold text-[#D4AF37] text-xl">
                        {isArabic ? "تواصل معنا" : "Contact"}
                    </h2>

                    <div className="flex flex-col">

                        {
                            contactData.map((item) => {

                                const Icon = item.icon

                                const label = isArabic
                                    ? item.arLabel
                                    : item.enLabel

                                const value = isArabic
                                    ? item.arValue
                                    : item.enValue

                                return (
                                    <div
                                        key={item.id}
                                        className="flex items-center gap-3"
                                    >

                                        <Icon className="text-[#D4AF37] text-lg shrink-0" />

                                        <p className="font-bold whitespace-nowrap">
                                            {label}
                                        </p>

                                        {
                                            item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="font-semibold text-gray-300 break-all"
                                                >
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className="font-semibold text-gray-300">
                                                    {value}
                                                </p>
                                            )
                                        }

                                    </div>
                                )
                            })
                        }


                        {/* WhatsApp */}

                        <a
                            href="https://wa.me/201050838177"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3"
                        >

                            <FaWhatsapp className="text-[#D4AF37] text-lg shrink-0" />

                            <p className="font-bold whitespace-nowrap">
                                {isArabic ? "واتساب:" : "WhatsApp:"}
                            </p>

                            <p className="font-semibold text-gray-300">
                                01050838177
                            </p>

                        </a>

                    </div>

                </div>


                {/* Follow Us */}

                <div className="flex flex-col gap-3 lg:px-10">

                    <h2 className="font-extrabold text-[#D4AF37] text-xl">
                        {isArabic ? "تابعنا" : "Follow Us"}
                    </h2>

                    <div className="flex gap-4">

                        {
                            socialLinks.map((item) => {

                                const Icon = item.icon

                                return (
                                    <a
                                        key={item.id}
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
                                            inline-flex
                                            justify-center
                                            items-center
                                            text-2xl
                                            h-10
                                            w-10
                                            bg-white
                                            text-[#D4AF37]
                                            rounded-full
                                            border
                                            border-[#D4AF37]
                                        "
                                    >
                                        <Icon />
                                    </a>
                                )
                            })
                        }

                    </div>

                </div>

            </div>


            {/* Contact CTA */}

            <div className="flex flex-col gap-3 mt-10 mb-6">

                <p className="font-semibold md:text-center text-lg">
                    {
                        isArabic
                            ? "جاهز لعطلتك القادمة؟"
                            : "Ready for your next vacation?"
                    }
                </p>

                <Link
                    to="contact"
                    smooth={true}
                    duration={1200}
                    offset={-90}
                    className={`
                        text-lg
        btn
        btn-outline
        font-semibold
        ${buttonStyle}
    `}
                >
                    {isArabic ? "تواصل معنا" : "Contact Us"}
                </Link>

            </div>


            {/* Divider */}

            <div className="border-solid bg-white border-2 mb-4"></div>


            {/* Copyright */}

            <p className="font-semibold text-center text-gray-200">
                {
                    isArabic
                        ? "تم التصميم باستخدام React و Tailwind CSS ❤️"
                        : "Designed with ❤️ using React & Tailwind CSS."
                }
            </p>

            <h3 dir='ltr' className="font-extrabold mt-5">
                Designed by F.E.D : Eslam Mohamed
            </h3>

        </footer>
    )
}

