import React from "react";
import logo from "../../../images/login/Logo.jpeg";


export default function Sidebar({
    links,
    open,
    setOpen,
    activeSection,
    setActiveSection
}) {

    const admin = {
        name: "Eslam Mohamed",
        role: "Receptionist",
        email: "eslameldakhli189@gmail.com"
    };


    return (
        <aside
            className={`
                bg-white
                w-64
                h-screen

                fixed
                top-0
                left-0
                z-50

                px-4
                py-3

                flex
                flex-col

                gap-6
                md:gap-7

                inter-font

                transition-transform
                duration-300

                ${open ? "translate-x-0" : "-translate-x-full"}

                md:translate-x-0
            `}
        >


            {/* Logo */}

            <div className="flex flex-col items-center mb-6">

                <img
                    src={logo}
                    className="
                        w-20
                        h-20
                        md:w-24
                        md:h-24
                        lg:w-28
                        lg:h-28

                        rounded-2xl
                    "
                    alt="El Fanar Hotel"
                />


                <h1 className="text-xs font-medium leading-relaxed">
                    El Fanar Hotel
                </h1>


                <h1 className="text-xs font-medium leading-relaxed">
                    Admin Panel
                </h1>

            </div>



            {/* Links */}

            <div className="flex flex-col gap-3">

                {
                    links.map((link) => {

                        const active = activeSection === link.value;


                        return (

                            <div
                                key={link.id}
                                onClick={() => {
                                    setActiveSection(link.value);
                                    setOpen(false);
                                }}

                                className={`
                                    flex
                                    items-center
                                    gap-3

                                    px-4
                                    py-3

                                    rounded-xl

                                    cursor-pointer

                                    transition-all
                                    duration-300

                                    ${
                                        active
                                            ? "bg-[#102A43] text-white"
                                            : "text-[#102A43] hover:bg-sky-50 hover:translate-x-1"
                                    }
                                `}
                            >

                                <link.icon
                                    className={`
                                        w-6
                                        h-6

                                        ${
                                            active
                                                ? "text-white"
                                                : "text-black"
                                        }
                                    `}
                                />


                                <p className="text-base md:text-lg font-medium">
                                    {link.title}
                                </p>


                            </div>

                        )

                    })
                }

            </div>



            {/* Admin Profile */}

            <div className="
                md:hidden

                bg-sky-50

                rounded-2xl

                p-4

                flex
                flex-col

                gap-2
            ">


                <p className="text-[#102A43] font-semibold">
                    {admin.name}
                </p>


                <p className="text-gray-600 text-sm">
                    {admin.role}
                </p>


                <button
                    className="
                        btn
                        btn-error
                        btn-outline

                        text-sm
                    "
                >
                    Logout
                </button>


            </div>



            {/* Copyright */}

            <p className="text-xs font-medium mt-auto">
                © El Fanar Hotel
            </p>


        </aside>
    )
}