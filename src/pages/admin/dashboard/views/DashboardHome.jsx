import React from 'react'
import { FaCalendarCheck, FaBed, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import StatCard from "../components/StatCard";
export default function DashboardHome() {
    const stats = [
        {
            id: 1,
            title: "Bookings",
            number: 25,
            icon: FaCalendarCheck,
        },
        {
            id: 2,
            title: "Rooms",
            number: 81,
            icon: FaBed,
        },
        {
            id: 3,
            title: "Messages",
            number: 12,
            icon: MdEmail,
        },
        {
            id: 4,
            title: "Rating",
            number: 4.9,
            icon: FaStar,
        }
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7">
            {stats.map(card => (
                <StatCard
                    key={card.id}
                    title={card.title}
                    number={card.number}
                    icon={card.icon}
                />
            ))}
        </div>
    )
}
