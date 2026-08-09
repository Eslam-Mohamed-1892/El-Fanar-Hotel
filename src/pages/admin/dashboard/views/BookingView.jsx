import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
import { bookings } from "../../../../data/Bookings"
 
export default function BookingView() {
return (
    <section className="flex flex-col gap-5 md:gap-6 lg:gap-7 mt-5 md:mt-6 lg:mt-7">

        <div className="flex gap-5">

            <div className="relative w-full">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-black z-10" />

                <input
                    className="input input-info pl-10 bg-white text-gray-700 placeholder:text-gray-700 font-semibold w-full"
                    type="text"
                    placeholder="Search bookings..."
                />
            </div>

            <button className="btn btn-info btn-outline text-[#102A43] active:text-white text-sm md:text-base">
                <FiFilter className="text-black w-5 h-5" />
                Filter
            </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7">

            {bookings.map((booking) => (

                <div
                    key={booking.id}
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
                        Booking Id:
                        <span className="text-black font-semibold">
                            {booking.bookingId}
                        </span>
                    </p>
                    <p className="text-gray-600">
                        Guest Name:
                        <span className="text-black font-semibold">
                            {booking.name}
                        </span>
                    </p>

                    <p className="text-gray-600">
                        Adul:
                        <span className="text-black font-semibold">
                            {booking.adults}
                        </span>
                    </p>
                    <p className="text-gray-600">
                        Children:
                        <span className="text-black font-semibold">
                            {booking.children}
                        </span>
                    </p>
                    <p className="text-gray-600">
                        Room type:
                        <span className="text-black font-semibold">
                            {booking.room}
                        </span>
                    </p>
                    <p className="text-gray-600">
                        Meals:
                        <span className="text-black font-semibold">
                            {booking.mealPlan}
                        </span>
                    </p>

                    <p className="text-gray-600">
                        Check In:
                        <span className="text-black font-semibold">
                            {booking.checkIn}
                        </span>
                    </p>

                    <p className="text-gray-600">
                        Check Out:
                        <span className="text-black font-semibold">
                            {booking.checkOut}
                        </span>
                    </p>

                    <p className="text-gray-600">
                        Status:

                        <span
                            className={`
                                badge
                                badge-sm
                                md:badge-md
                                text-white

                                ${
                                    booking.status === "Confirmed"
                                        ? "badge-success"
                                        : booking.status === "Pending"
                                            ? "badge-warning"
                                            : "badge-error"
                                }
                            `}
                        >
                            {booking.status}
                        </span>

                    </p>

                </div>

            ))}

        </div>

    </section>
);}
