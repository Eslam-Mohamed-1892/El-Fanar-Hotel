import React from 'react'
import { LuMenu } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Navbar({setOpen}) {

    return (
        <div className='h-20 bg-white flex items-center justify-between px-5'>

            <LuMenu
                className='w-6 h-6 text-black md:hidden'
                onClick={() => setOpen(prev => !prev)}
            />

            <p className='text-lg font-semibold text-[#102A43]'>
                Dashboard
            </p>

            <FaRegCircleUser
                className='w-7 h-7 text-black md:hidden'
            />

        </div>
    )
}