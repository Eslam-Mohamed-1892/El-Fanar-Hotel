import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { SiInstagram } from "react-icons/si";
import address from '../images/pin.png'
import phone from '../images/phone-call.png'
import email from '../images/email2.png'
import reception from '../images/desk2.png'
import { Link } from "react-scroll";

export default function Footer() {
    const data = [
        {
            id: 1,
            img: address,
            p1: "Address: ",
            p2: "Ain Sokhna, Egypt"
        },
        {
            id: 2,
            img: phone,
            p1: "Phone: ",
            p2: "01050838177"
        },
        {
            id: 3,
            img: email,
            p1: "Email: ",
            p2: "eslameldakhli189@gmail.com"
        },
        {
            id: 4,
            img: reception,
            p1: "Reception: ",
            p2: "24/7"
        },
    ]
    return (
        <footer
            id='footer'
            name="footer"
            className='w-full bg-[#0F2D3C] text-white inter-font px-6 py-10'
        >
            <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8'>
                <div className='flex flex-col gap-3 mb-4'>
                    <h1 className='font-extrabold text-[#D4AF37]'>El Fanar Hotel</h1>
                    <p className='font-semibold'>Escape to Comfort, where every stay becomes a memorable experience.</p>
                </div>
                <div className='flex flex-col gap-3 mb-4'>
                    <h1 className='font-extrabold text-[#D4AF37]'>Quick Links</h1>
                    <nav className='flex flex-col gap-2 font-semibold cursor-pointer'>
                        <Link spy={true} offset={-90} to='hero' smooth={true} duration={1200} className='hover:text-[#D4AF37] transition-colors hover:translate-x-1'>Home</Link>
                        <Link spy={true} offset={-90} to='about' smooth={true} duration={1200} className='hover:text-[#D4AF37] transition-colors hover:translate-x-1'>About</Link>
                        <Link spy={true} offset={-90} to='explore' smooth={true} duration={1200} className='hover:text-[#D4AF37] transition-colors hover:translate-x-1'>Explore El Fanar</Link>
                        <Link spy={true} offset={-90} to='faq' smooth={true} duration={1200} className='hover:text-[#D4AF37] transition-colors hover:translate-x-1'>FAQ</Link>
                        <Link spy={true} offset={-90} to='contact' smooth={true} duration={1200} className='hover:text-[#D4AF37] transition-colors hover:translate-x-1'>Contact</Link>
                    </nav>
                </div>
                <div className='flex flex-col gap-3 mb-4'>
                    <h1 className='font-extrabold text-[#D4AF37]'>Contact</h1>
                    <div className='w-full'>
                        {
                            data.map((data) => (
                                <div className='text-white flex items-center gap-3' key={data.id}>
                                    <img className='size-5 bg-white rounded-lg' src={data.img} alt="" />
                                    <p className='pt-4 pb-4 font-bold'>{data.p1}</p>
                                    <p className='font-semibold text-gray-300'>{data.p2}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-3 mb-4 lg:px-15'>
                    <h1 className='font-extrabold text-[#D4AF37]'>Follow Us</h1>
                    <div className='flex gap-4'>
                        < CiFacebook size={35} className='w-10 h-10 rounded-full border hover:bg-cyan-500' />
                        < SiInstagram size={30} className='w-10 h-10 rounded-full border hover:bg-cyan-500' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 mb-6 mt-6'>
                <p className='font-semibold md:text-center'>Ready for your next vacation?</p>
                <button to='contact' smooth={true} className='btn btn-outline btn-info text-white'>Book Now</button>
            </div>
            <div className='border-solid bg-white border-2 mb-4'></div>
            <p className='font-semibold text-center'>Designed with ❤️ using React & Tailwind CSS.</p>
            <h1 className='font-extrabold my-6'>Designed by F.E.D : Eslam Mohamed</h1>
        </footer>
    )
}
