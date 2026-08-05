import React from 'react'

export default function RecentMessages() {

    const messages = [
        {
            id: 1,
            guest: "Eslam Mohamed",
            message: "I want to know the breakfast time",
            date: "18/9/2026",
        },
        {
            id: 2,
            guest: "Ahmed Ali",
            message: "Can I change my booking date?",
            date: "20/9/2026",
        },
        {
            id: 3,
            guest: "Mohamed Hassan",
            message: "I need more information about the rooms",
            date: "22/9/2026",
        }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6">

            <h2 className="text-lg md:text-xl font-semibold text-[#102A43] mb-5">
                Recent Messages
            </h2>

            <div className="flex flex-col gap-4">

                {
                    messages.map((message) => (
                        <div
                            key={message.id}
                            className="
                            border-b last:border-none pb-3
                            flex flex-col gap-2
                            "
                        >

                            <div className="flex justify-between gap-3">

                                <p className="font-semibold text-[#102A43]">
                                    {message.guest}
                                </p>

                                <span className="text-sm text-gray-500 whitespace-nowrap">
                                    {message.date}
                                </span>

                            </div>

                            <p className="
                            text-gray-600
                            line-clamp-2
                            ">
                                {message.message}
                            </p>

                            <button className="
                            btn btn-info btn-outline 
                            text-[#102A43] 
                            active:text-white
                            text-sm md:text-base
                            w-fit
                            ">
                                Reply
                            </button>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}