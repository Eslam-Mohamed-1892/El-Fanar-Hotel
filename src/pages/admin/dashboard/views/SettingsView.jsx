import React from 'react'

export default function SettingsView() {
return (
    <div className="
        flex
        flex-col
        gap-5
        md:gap-6
        lg:gap-7
        text-[#102A43]
    ">


        <div
            className="
                bg-white
                rounded-2xl
                shadow-xl
                p-5

                flex
                flex-col
                gap-3

                font-semibold

                w-full
                lg:max-w-md

                hover:-translate-y-1
                hover:shadow-2xl

                transition-all
                duration-300
            "
        >

            <h1 className="text-lg font-semibold text-[#102A43] border-b pb-2">
                Admin Profile
            </h1>


            <p className="text-gray-600">
                Name:

                <span className="text-black font-semibold">
                    Eslam Mohamed
                </span>
            </p>


            <p className="text-gray-600">
                Email:

                <span className="text-black font-semibold break-all">
                    eslameldakhli189@gmail.com
                </span>
            </p>


            <p className="text-gray-600">
                Role:

                <span className="text-black font-semibold">
                    Receptionist
                </span>
            </p>


            <button className="btn btn-info btn-outline text-[#102A43] active:text-white text-sm md:text-base">

                Edit Profile

            </button>


        </div>



        <div
            className="
                bg-white
                rounded-2xl
                shadow-xl
                p-5

                flex
                flex-col
                gap-3

                font-semibold

                w-full
                lg:max-w-md

                hover:-translate-y-1
                hover:shadow-2xl

                transition-all
                duration-300
            "
        >

            <h1 className="text-lg font-semibold text-[#102A43] border-b pb-2">
                Hotel Information
            </h1>


            <p className="text-gray-600">
                Hotel Name:

                <span className="text-black font-semibold">
                    El Fanar hotel
                </span>
            </p>


            <p className="text-gray-600">
                Phone:

                <span className="text-black font-semibold break-all">
                    01050838177
                </span>
            </p>


            <p className="text-gray-600">
                Address:

                <span className="text-black font-semibold">
                    Ain skhna, Egypt
                </span>
            </p>


            <button className="btn btn-info btn-outline text-[#102A43] active:text-white text-sm md:text-base">

                Edit hotel info

            </button>


        </div>



        <div
            className="
                bg-white
                rounded-2xl
                shadow-xl
                p-5

                flex
                flex-col
                gap-3

                font-semibold

                w-full
                lg:max-w-md

                hover:-translate-y-1
                hover:shadow-2xl

                transition-all
                duration-300
            "
        >

            <h1 className="text-lg font-semibold text-[#102A43] border-b pb-2">
                Preferences
            </h1>


            <p className="text-gray-600">
                Dark Mode:
            </p>


            <p className="text-gray-600">
                Language:
            </p>


        </div>



        <div
            className="
                bg-white
                rounded-2xl
                shadow-xl
                p-5

                flex
                flex-col
                gap-3

                w-full
                lg:max-w-md

                hover:-translate-y-1
                hover:shadow-2xl

                transition-all
                duration-300
            "
        >

            <h1 className="text-lg font-semibold text-[#102A43] border-b pb-2">
                Account
            </h1>


            <p className="text-black font-semibold break-all">
                elfanarhotel123@gmail.com
            </p>


            <button className="btn btn-info btn-outline text-[#102A43] active:text-white text-sm md:text-base">

                Change password

            </button>


        </div>



        <button
            className="
                btn
                btn-outline
                btn-error

                text-[#102A43]
                active:text-white

                text-sm
                md:text-base

                w-full
                lg:max-w-md
            "
        >

            Logout

        </button>


    </div>
)}
