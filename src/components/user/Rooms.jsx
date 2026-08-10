import React from "react";
import { rooms } from "../../data/Rooms";
import { Link } from "react-scroll";

export default function Rooms() {
    return (
        <section
            id='rooms'
            name="rooms"
            className="bg-neutral-100 flex flex-col gap-7 px-5 py-10 md:px-6 lg:px-7"
        >

            <div className="text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#102A43]">
                    Our Rooms
                </h2>

                <p className="mt-2 text-sm md:text-base text-gray-600">
                    Choose the room that suits your stay.
                </p>
            </div>

            <div className="
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-4
    gap-5
    md:gap-6
    lg:gap-7
    items-stretch">

                {rooms.map((room) => (
                    <div
                        key={room.id}
                        className="
                bg-white
                rounded-2xl
                shadow-xl
                overflow-hidden
                flex
                flex-col
                h-full
                hover:-translate-y-1
            hover:shadow-2xl
            transition-all
            duration-300
            "
                    >

            <div className="w-full h-52 md:h-56 lg:h-52 shrink-0">
                <img
                    src={room.img}
                    alt={room.roomType}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col gap-3 p-5 flex-1">

                <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg md:text-xl font-semibold text-[#102A43]">
                        {room.roomType}
                    </h3>

                    <p className="text-lg font-bold text-[#102A43] whitespace-nowrap">
                        ${room.price}
                    </p>
                </div>

                <div className="flex flex-col gap-2 text-sm md:text-base">

                    <p className="text-gray-600">
                        Capacity:
                        <span className="text-black font-semibold">
                            {" "}{room.capacity} Guests
                        </span>
                    </p>

                    <p className="text-gray-600">
                        Beds:
                        <span className="text-black font-semibold">
                            {" "}
                            {room.beds.king > 0 &&
                                `${room.beds.king} King Bed`}
                            {room.beds.king > 0 &&
                                room.beds.single > 0 &&
                                " + "}
                            {room.beds.single > 0 &&
                                `${room.beds.single} Single Bed`}
                        </span>
                    </p>

                    <p className="text-gray-600">
                        View:
                        <span className="text-black font-semibold">
                            {" "}{room.view}
                        </span>
                    </p>

                    <p className="text-gray-600">
                        Extra Bed:
                        <span className="text-black font-semibold">
                            {" "}
                            {room.extraBed ? "Available" : "Not Available"}
                        </span>
                    </p>

                </div>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {room.description}
                </p>


                <Link
                    to='booking'
                    smooth={true}
                    duration={1200}
                    spy={true}
                    className="
                    btn
                    btn-info
                    btn-outline
                    w-full
                    text-[#102A43]
                    active:text-white
                    text-sm
                    md:text-base
                    mt-auto
                "
                >
                    Book Now ↓
                </Link>

            </div>

        </div>
    ))
}
            </div >

        </section >
    );
}