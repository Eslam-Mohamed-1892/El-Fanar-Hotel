
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
import { Link } from "react-scroll";

export default function Footer() {

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

    const data = [
        {
            id: 1,
            icon: FaLocationDot,
            p1: "Address: ",
            p2: "Ain Sokhna, Egypt"
        },
        {
            id: 2,
            icon: FaPhone,
            p1: "Phone: ",
            p2: "01050838177",
            href: "tel:01050838177"
        },
        {
            id: 3,
            icon: FaEnvelope,
            p1: "Email: ",
            p2: "eslameldakhli189@gmail.com",
            href: "mailto:eslameldakhli189@gmail.com"
        },
        {
            id: 4,
            icon: FaClock,
            p1: "Reception: ",
            p2: "24/7"
        },
    ]

    return (
        <footer
            id='footer'
            name="footer"
            className='w-full bg-[#0F2D3C] text-white inter-font px-6 md:px-8 lg:px-10 py-10'
        >

            <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8'>

                {/* About */}

                <div className='flex flex-col gap-3 mb-4'>
                    <h1 className='font-extrabold text-[#D4AF37]'>
                        El Fanar Hotel
                    </h1>

                    <p className='font-semibold'>
                        Escape to Comfort, where every stay becomes a memorable experience.
                    </p>
                </div>


                {/* Quick Links */}

                <div className='flex flex-col gap-3 mb-4'>

                    <h1 className='font-extrabold text-[#D4AF37]'>
                        Quick Links
                    </h1>

                    <nav className='flex flex-col gap-2 font-semibold cursor-pointer'>

                        <Link
                            spy={true}
                            offset={-90}
                            to='hero'
                            smooth={true}
                            duration={1200}
                            className='hover:text-[#D4AF37] transition-colors hover:translate-x-1'
                        >
                            Home
                        </Link>

                        <Link
                            spy={true}
                            offset={-90}
                            to='about'
                            smooth={true}
                            duration={1200}
                            className='hover:text-[#D4AF37] transition-colors hover:translate-x-1'
                        >
                            About
                        </Link>

                        <Link
                            spy={true}
                            offset={-90}
                            to='explore'
                            smooth={true}
                            duration={1200}
                            className='hover:text-[#D4AF37] transition-colors hover:translate-x-1'
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
                        >
                            Our Rooms
                        </Link>

                        <Link
                            spy={true}
                            offset={-90}
                            to='faq'
                            smooth={true}
                            duration={1200}
                            className='hover:text-[#D4AF37] transition-colors hover:translate-x-1'
                        >
                            FAQ
                        </Link>

                        <Link
                            spy={true}
                            offset={-90}
                            to='contact'
                            smooth={true}
                            duration={1200}
                            className='hover:text-[#D4AF37] transition-colors hover:translate-x-1'
                        >
                            Contact
                        </Link>

                    </nav>

                </div>


                {/* Contact */}

                <div className='flex flex-col gap-3 mb-4'>

                    <h1 className='font-extrabold text-[#D4AF37]'>
                        Contact
                    </h1>

                    <div className='w-full'>

                        {
                            data.map((data) => {

                                const Icon = data.icon

                                return (
                                    <div
                                        className='text-white flex items-center gap-3'
                                        key={data.id}
                                    >

                                        <Icon className='text-[#D4AF37] text-lg shrink-0' />

                                        <p className='pt-4 pb-4 font-bold'>
                                            {data.p1}
                                        </p>

                                        {
                                            data.href ? (
                                                <a
                                                    href={data.href}
                                                    className='font-semibold text-gray-300 break-all'
                                                >
                                                    {data.p2}
                                                </a>
                                            ) : (
                                                <p className='font-semibold text-gray-300'>
                                                    {data.p2}
                                                </p>
                                            )
                                        }

                                    </div>
                                )
                            })
                        }


                        {/* WhatsApp */}

                        <a
                            href='https://wa.me/201050838177'
                            target='_blank'
                            rel='noreferrer'
                            className='text-white flex items-center gap-3'
                        >

                            <FaWhatsapp className='text-[#D4AF37] text-lg shrink-0' />

                            <p className='pt-4 pb-4 font-bold'>
                                WhatsApp:
                            </p>

                            <p className='font-semibold text-gray-300'>
                                01050838177
                            </p>

                        </a>

                    </div>

                </div>


                {/* Follow Us */}

                <div className='flex flex-col gap-3 mb-4 lg:px-15'>

                    <h1 className='font-extrabold text-[#D4AF37]'>
                        Follow Us
                    </h1>

                    <div className='flex gap-4'>

                        {
                            socialLinks.map((item) => {

                                const Icon = item.icon

                                return (
                                    <div key={item.id}>

                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className='inline-flex justify-center items-center text-2xl h-10 w-10 bg-white text-[#D4AF37] rounded-full border border-[#D4AF37]'
                                        >
                                            <Icon />
                                        </a>

                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

            </div>


            {/* Contact CTA */}

            <div className='flex flex-col gap-3 mb-6 mt-6'>

                <p className='font-semibold md:text-center'>
                    Ready for your next vacation?
                </p>

                <Link
                    to='contact'
                    smooth={true}
                    duration={1200}
                    offset={-90}
                    className='btn btn-outline btn-info text-white'
                >
                    Contact Us
                </Link>

            </div>


            <div className='border-solid bg-white border-2 mb-4'></div>

            <p className='font-semibold text-center'>
                Designed with ❤️ using React & Tailwind CSS.
            </p>

            <h1 className='font-extrabold my-6'>
                Designed by F.E.D : Eslam Mohamed
            </h1>

        </footer>
    )
}

