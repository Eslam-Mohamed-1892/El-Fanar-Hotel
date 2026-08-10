import React from 'react'
import { bookings } from "../../../../data/Bookings"

export default function RecentBookings() {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6">

            <h2 className="text-lg md:text-xl font-semibold text-[#102A43] mb-5">
                Recent Bookings
            </h2>

            <div className="flex flex-col gap-4">

                {
                    bookings.map((booking) => (
                        <div
                            key={booking.id}
                            className="
                                border-b
                                last:border-none
                                pb-3
                                flex
                                flex-col
                                gap-2
                            "
                        >

                            <div className="flex justify-between">

                                <p className="font-semibold text-[#102A43]">id:
                                    {booking.bookingId}
                                </p>

                                <span className="text-sm text-gray-500">
                                    {booking.checkIn}
                                </span>

                            </div>

                            <p className="text-gray-600">
                                {booking.guestName}
                            </p>

                            <span
                                className={`badge badge-sm md:badge-lg text-white
                                    ${booking.status === "Confirmed"
                                        ? "badge-success"
                                        : booking.status === "Pending"
                                            ? "badge-warning"
                                            : "badge-error"
                                    }`}
                            >
                                {booking.status}
                            </span>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}