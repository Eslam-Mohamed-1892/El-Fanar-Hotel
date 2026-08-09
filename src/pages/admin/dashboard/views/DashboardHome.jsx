import React from "react";
import { stats } from "../../../../data/DashboardHome"

import StatCard from "../components/StatCard";
import RecentBookings from "../components/RecentBookings";
import RecentMessages from "../components/RecentMessages";


export default function DashboardHome() {

    return (

        <div
            className="
                flex
                flex-col

                gap-5
                md:gap-6
                lg:gap-7
            "
        >


            {/* Statistics Cards */}

            <div
                className="
                    grid

                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-4

                    gap-5
                    md:gap-6
                    lg:gap-7
                "
            >

                {
                    stats.map((card) => (

                        <StatCard
                            key={card.id}
                            title={card.title}
                            number={card.number}
                            icon={card.icon}
                        />

                    ))
                }

            </div>



            {/* Recent Data */}

            <RecentBookings />

            <RecentMessages />


        </div>

    )
}