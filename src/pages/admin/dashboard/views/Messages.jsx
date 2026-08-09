import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiEdit2, FiFilter } from "react-icons/fi";
import { messages } from "../../../../data/Messages"

export default function MessagesView() {
return (
    <section className="flex flex-col gap-5 md:gap-6 lg:gap-7 mt-5 md:mt-6 lg:mt-7">

        <div className="flex gap-5">

            <div className="relative w-full">

                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-black z-10" />

                <input
                    className="input input-info pl-10 bg-white text-gray-700 placeholder:text-gray-700 font-semibold w-full"
                    type="text"
                    placeholder="Search messages..."
                />

            </div>


            <button className="btn btn-info btn-outline text-[#102A43] active:text-white text-sm md:text-base">

                <FiFilter className="text-black w-5 h-5" />

                Filter

            </button>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7">

            {
                messages.map((message) => (

                    <div
                        key={message.id}
                        className="
                            bg-white
                            rounded-2xl
                            shadow-xl
                            p-5

                            grid
                            gap-3

                            min-h-64

                            cursor-pointer

                            hover:-translate-y-1
                            hover:shadow-2xl

                            transition-all
                            duration-300
                        "
                    >

                        <p className="text-gray-600">
                            Guest:

                            <span className="text-black font-semibold">
                                {message.name}
                            </span>
                        </p>


                        <p className="text-gray-600">
                            Email:

                            <span className="text-black font-semibold break-all">
                                {message.email}
                            </span>
                        </p>


                        <p className="text-gray-600">
                            Content:

                            <span className="text-black font-semibold">
                                {message.message}
                            </span>
                        </p>


                        <p className="text-gray-600">
                            Date:

                            <span className="text-black font-semibold">
                                {message.date}
                            </span>
                        </p>


                        <button className="btn btn-info btn-outline text-[#102A43] active:text-white text-sm md:text-base">

                            <FiEdit2 className="w-4 h-4" />

                            Reply

                        </button>


                    </div>

                ))
            }

        </div>

    </section>
)}
