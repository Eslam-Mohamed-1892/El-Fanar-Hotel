import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";

export default function BookingView() {
    const bookings = [
        {
            id: 1,
            name: "Eslam",
            room: "1201",
            checkIn: "1/9/2026",
            checkOut: "5/9/2026",
            status: "Pending"
        },
        {
            id: 2,
            name: "Kareem",
            room: "1202",
            checkIn: "1/9/2026",
            checkOut: "5/9/2026",
            status: "Confirmed"
        },
        {
            id: 3,
            name: "Mohamed",
            room: "1203",
            checkIn: "1/9/2026",
            checkOut: "5/9/2026",
            status: "Cancelled"
        },
        {
            id: 4,
            name: "Abdo",
            room: "1204",
            checkIn: "1/9/2026",
            checkOut: "5/9/2026",
            status: "Confirmed"
        },
        {
            id: 5,
            name: "Ahmed",
            room: "1205",
            checkIn: "1/9/2026",
            checkOut: "5/9/2026",
            status: "Cancelled"
        },
        {
            id: 6,
            name: "Ali",
            room: "1207",
            checkIn: "1/9/2026",
            checkOut: "5/9/2026",
            status: "Pending"
        },
    ]
    return (
        <section className='flex flex-col gap-5 md:gap-6 lg:gap-7 mt-5 md:mt-6 lg:mt-7'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-[#102A43] text-center'>Bookings</h1>
            <div className='flex gap-5'>
                <div className='relative w-full'>
                    <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-black z-10' />
                    <input className='input input-info pl-10 bg-white text-gray-700 placeholder:text-gray-700 font-semibold w-full' type="text" placeholder='Search bookings...' />
                </div>
                <button className='btn btn-info btn-outline text-[#102A43] active:text-white text-sm md:text-base'><FiFilter className='text-black w-5 h-5' /> Filter</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7'>
                {
                    bookings.map((booking) => (

                        <div key={booking.id} className='bg-white rounded-2xl shadow-xl grid gap-3 p-5 text-[#102A43] font-semibold'>
                            <h1>Guest Name: <span className='text-lg font-bold text-black'>{booking.name}</span></h1>
                            <h1>Room: <span className='text-black'>{booking.room}</span></h1>
                            <h1>Check In: <span className='text-black'>{booking.checkIn}</span></h1>
                            <h1>Check Out: <span className='text-black'>{booking.checkOut}</span></h1>
                            <h1>Status: <span
                                className={`badge text-white 
                                    ${booking.status === "Confirmed"
                                        ? "badge-success"
                                        : booking.status === "Pending"
                                            ? "badge-warning"
                                            : "badge-error"
                                    }`}
                            >
                                {booking.status}
                            </span></h1>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
