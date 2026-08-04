import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiEdit2, FiFilter } from "react-icons/fi";

export default function MessagesView() {
    const messages = [
        {
            id: 1,
            name: "eslam",
            email: "eslameldakhli189@gmail.com",
            message: "Hala Madrid",
            date: "18/9/2002",
        },
        {
            id: 2,
            name: "eslam",
            email: "eslameldakhli189@gmail.com",
            message: "Hala Madrid",
            date: "18/9/2002",
        },
        {
            id: 3,
            name: "eslam",
            email: "eslameldakhli189@gmail.com",
            message: "Hala Madrid",
            date: "18/9/2002",
        },
        {
            id: 4,
            name: "eslam",
            email: "eslameldakhli189@gmail.com",
            message: "Hala Madrid",
            date: "18/9/2002",
        },
        {
            id: 5,
            name: "eslam",
            email: "eslameldakhli189@gmail.com",
            message: "Hala Madrid",
            date: "18/9/2002",
        },


    ]
    return (
        <section className='flex flex-col gap-5 md:gap-6 lg:gap-7 mt-5 md:mt-6 lg:mt-7'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-[#102A43] text-center'>Messages</h1>
            <div className='flex gap-5'>
                <div className='relative w-full'>
                    <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-black z-10' />
                    <input className='input input-info pl-10 bg-white text-gray-700 placeholder:text-gray-700 font-semibold w-full' type="text" placeholder='Search messages...' />
                </div>
                <button className='btn btn-info btn-outline text-[#102A43] active:text-white lg:text-lg'><FiFilter className='text-black w-5 h-5' /> Filter</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7'>
                {
                    messages.map((message) => (

                        <div key={message.id} className='bg-white rounded-2xl shadow-xl grid gap-3 p-5 text-[#102A43] font-semibold'>
                            <h1>Guest: <span className='text-lg font-bold text-black'>{message.name}</span></h1>
                            <h1>Email: <span className='text-black break-all'>{message.email}</span></h1>
                            <h1>Content: <span className='text-black font-semibold'>{message.message}</span></h1>
                            <h1>Date: <span className='text-black'>{message.date}</span></h1>
                            <button className="btn btn-info btn-outline text-[#102A43] active:text-white text-sm md:text-base">
                                <FiEdit2 className="w-4 h-4" />
                                Reply
                            </button>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
