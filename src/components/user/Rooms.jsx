import React from "react";
import { rooms } from "../../data/Rooms";
import { Link } from "react-scroll";

export default function Rooms({ language, theme }) {

    const isArabic = language === "ar";
    const isDark = theme === "dark";
    const buttonStyle = isDark
        ? "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white active:bg-[#D4AF37] active:text-white"
        : "btn-info text-black hover:text-white";


    return (
        <section
            id="rooms"
            name="rooms"
            className={`
                flex flex-col gap-7 py-10 px-6 md:px-8 lg:px-10
                ${isDark ? "bg-[#081A2B]" : "bg-neutral-100"}
                ${isArabic ? "aref-font" : "inter-font"}
            `}
        >

            {/* Heading */}

            <div className="text-center">

                <h1
                    className={`
                        text-2xl md:text-3xl lg:text-4xl
                        font-semibold
                        ${isDark ? "text-[#D4AF37]" : "text-[#102A43]"}
                    `}
                >
                    {isArabic ? "غرفنا" : "Our Rooms"}
                </h1>

                <p
                    className={`
                        mt-2
                        font-semibold
                        leading-relaxed
                        text-base md:text-lg
                            ${isArabic
                            ? 'aref-font text-lg lg:text-xl text-[#1F2937]'
                            : 'inter-font text-base text-gray-300'
                        }
                    `}
                >
                    {
                        isArabic
                            ? "اختر الغرفة التي تناسب إقامتك."
                            : "Choose the room that suits your stay."
                    }
                </p>

            </div>


            {/* Rooms */}

            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-5
                    md:gap-6
                    lg:gap-7
                    items-stretch
                "
            >

                {rooms.map((room) => (

                    <div
                        key={room.id}
                        className={`
                            rounded-2xl
                            shadow-xl
                            overflow-hidden
                            flex
                            flex-col
                            h-full
                            transition-all
                            duration-300
                            ${isDark
                                ? "bg-[#102A43]"
                                : "bg-white"
                            }
                            hover:-translate-y-1
                            hover:shadow-2xl
                        `}
                    >

                        {/* Image */}

                        <div className="w-full h-52 md:h-56 lg:h-52 shrink-0">

                            <img
                                src={room.img}
                                alt={isArabic ? room.roomTypeAr : room.roomType}
                                className="w-full h-full object-cover"
                            />

                        </div>


                        {/* Content */}

                        <div className="flex flex-col gap-3 p-5 flex-1">

                            {/* Room name + price */}

                            <div className="flex items-center justify-between gap-3">

                                <h3
                                    className={`
                                        text-xl md:text-2xl
                                        font-semibold
                                        ${isDark
                                            ? "text-[#D4AF37]"
                                            : "text-[#102A43]"
                                        }
                                    `}
                                >
                                    {isArabic
                                        ? room.roomTypeAr
                                        : room.roomType
                                    }
                                </h3>

                                <p
                                    className={`
                                        text-lg
                                        font-bold
                                        whitespace-nowrap
                                        ${isDark
                                            ? "text-white"
                                            : "text-[#102A43]"
                                        }
                                    `}
                                >
                                    ${room.price}
                                </p>

                            </div>


                            {/* Room Details */}

                            <div className="flex flex-col gap-2 text-base md:text-lg">

                                {/* Capacity */}

                                <p
                                    className={
                                        isDark
                                            ? "text-gray-300"
                                            : "text-gray-600"
                                    }
                                >
                                    {isArabic ? "السعة:" : "Capacity:"}

                                    <span
                                        className={`
                                            font-semibold
                                            ${isDark
                                                ? "text-white"
                                                : "text-black"
                                            }
                                        `}
                                    >
                                        {" "}
                                        {room.capacity}{" "}
                                        {isArabic ? "ضيوف" : "Guests"}
                                    </span>
                                </p>


                                {/* Beds */}

                                <p
                                    className={
                                        isDark
                                            ? "text-gray-300"
                                            : "text-gray-600"
                                    }
                                >
                                    {isArabic ? "الأسِرّة:" : "Beds:"}

                                    <span
                                        className={`
                                            font-semibold
                                            ${isDark
                                                ? "text-white"
                                                : "text-black"
                                            }
                                        `}
                                    >
                                        {" "}

                                        {room.beds.king > 0 &&
                                            `${room.beds.king} ${isArabic
                                                ? "سرير كبير"
                                                : "King Bed"
                                            }`
                                        }

                                        {room.beds.king > 0 &&
                                            room.beds.single > 0 &&
                                            " + "
                                        }

                                        {room.beds.single > 0 &&
                                            `${room.beds.single} ${isArabic
                                                ? "سرير مفرد"
                                                : "Single Bed"
                                            }`
                                        }

                                    </span>
                                </p>


                                {/* View */}

                                <p
                                    className={
                                        isDark
                                            ? "text-gray-300"
                                            : "text-gray-600"
                                    }
                                >
                                    {isArabic ? "الإطلالة:" : "View:"}

                                    <span
                                        className={`
                                            font-semibold
                                            ${isDark
                                                ? "text-white"
                                                : "text-black"
                                            }
                                        `}
                                    >
                                        {" "}
                                        {isArabic
                                            ? room.viewAr
                                            : room.view
                                        }
                                    </span>
                                </p>


                                {/* Extra Bed */}

                                <p
                                    className={
                                        isDark
                                            ? "text-gray-300"
                                            : "text-gray-600"
                                    }
                                >
                                    {isArabic
                                        ? "سرير إضافي:"
                                        : "Extra Bed:"
                                    }

                                    <span
                                        className={`
                                            font-semibold
                                            ${isDark
                                                ? "text-white"
                                                : "text-black"
                                            }
                                        `}
                                    >
                                        {" "}

                                        {room.extraBed
                                            ? (
                                                isArabic
                                                    ? "متاح"
                                                    : "Available"
                                            )
                                            : (
                                                isArabic
                                                    ? "غير متاح"
                                                    : "Not Available"
                                            )
                                        }

                                    </span>
                                </p>

                            </div>


                            {/* Description */}

                            <p
                                className={`
                                    text-base md:text-lg
                                    leading-relaxed
                                    ${isDark
                                        ? "text-gray-300"
                                        : "text-gray-600"
                                    }
                                `}
                            >
                                {isArabic
                                    ? room.descriptionAr
                                    : room.description
                                }
                            </p>


                            {/* Contact Button */}

                            <Link
                                to="contact"
                                smooth={true}
                                duration={1200}
                                spy={true}
                                className={`
                                    btn
                                     ${buttonStyle}
                                    btn-outline
                                    w-full
                                    text-lg
                                    md:text-base
                                    mt-auto
                                    font-semibold

                                `}
                            >
                                {isArabic
                                    ? "تواصل معنا ↓"
                                    : "Contact Us ↓"
                                }
                            </Link>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}