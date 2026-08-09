import React from "react";
import { LuMenu } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";


export default function NavBar({ setOpen, title }) {

    const admin = {
        name: "Eslam Mohamed",
        role: "Receptionist"
    };


    return (

        <div
            className="
                h-20
                md:h-22
                lg:h-24

                bg-white

                shadow-2xl

                flex
                items-center
                justify-between

                px-5
                md:px-6
                lg:px-7
            "
        >


            {/* Mobile Menu */}

            <LuMenu
                className="
                    w-6
                    h-6

                    text-black

                    cursor-pointer

                    md:hidden
                "
                onClick={() => setOpen(prev => !prev)}
            />



            {/* Page Title */}

            <p
                className="
                    text-lg
                    md:text-xl
                    lg:text-2xl

                    font-semibold

                    text-[#102A43]
                "
            >
                {title}
            </p>



            {/* Admin Info */}

            <div
                className="
                    flex
                    items-center

                    gap-3
                "
            >

                <FaRegCircleUser
                    className="
                        w-7
                        h-7

                        md:w-8
                        md:h-8

                        lg:w-9
                        lg:h-9

                        text-black
                    "
                />



                <div
                    className="
                        hidden
                        md:flex

                        flex-col
                    "
                >

                    <p
                        className="
                            font-semibold
                            text-[#102A43]
                        "
                    >
                        {admin.name}
                    </p>


                    <span
                        className="
                            text-sm
                            text-gray-500
                        "
                    >
                        {admin.role}
                    </span>

                </div>


            </div>


        </div>

    )
}