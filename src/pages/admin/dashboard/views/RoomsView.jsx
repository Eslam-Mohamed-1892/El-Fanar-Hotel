import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiEdit2, FiFilter } from "react-icons/fi";

export default function RoomsView() {
    const rooms = [
        {
            id: 1,
            roomNum: "1201",
            roomType: "Family Room",
            status: "Available",
            price: "$250",

        },
        {
            id: 2,
            roomNum: "1202",
            roomType: "Double Room",
            status: "Busy",
            price: "$150",

        },
        {
            id: 3,
            roomNum: "1203",
            roomType: "Double Room",
            status: "Available",
            price: "$150",

        },
        {
            id: 4,
            roomNum: "1204",
            roomType: "triple Room",
            status: "Available",
            price: "$200",

        },
        {
            id: 5,
            roomNum: "1205",
            roomType: "Double Room",
            status: "Unavailable",
            price: "----",

        },

    ]
    return (
        <section className='flex flex-col gap-5 md:gap-6 lg:gap-7 mt-5 md:mt-6 lg:mt-7'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-[#102A43] text-center'>Rooms</h1>
            <div className='flex gap-5'>
                <div className='relative w-full'>
                    <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-black z-10' />
                    <input className='input input-info pl-10 bg-white text-gray-700 placeholder:text-gray-700 font-semibold w-full' type="text" placeholder='Search rooms...' />
                </div>
                <button className='btn btn-info btn-outline text-[#102A43] active:text-white lg:text-lg'><FiFilter className='text-black w-5 h-5' /> Filter</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7'>
                {
                    rooms.map((room) => (

                        <div key={room.id} className='bg-white rounded-2xl shadow-xl grid gap-3 p-5 text-[#102A43] font-semibold'>
                            <h1>Room Number: <span className='text-lg font-bold text-black'>{room.roomNum}</span></h1>
                            <h1>Room Type: <span className='text-black'>{room.roomType}</span></h1>
                            <h1>Room Status: <span
                                className={`badge text-white 
                                    ${room.status === "Available"
                                        ? "badge-success"
                                        : room.status === "Busy"
                                            ? "badge-warning"
                                            : "badge-error"
                                    }`}
                            >
                                {room.status}
                            </span></h1>
                            <h1>Room Price: <span className='text-black'>{room.price}</span></h1>
                            <button className="btn btn-info btn-outline text-[#102A43] active:text-white text-sm md:text-base">
                                <FiEdit2 className="w-4 h-4" />
                                Edit
                            </button>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
