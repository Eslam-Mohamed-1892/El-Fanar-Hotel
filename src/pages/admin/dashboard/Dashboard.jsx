import React, { useState } from 'react'
import { RiDashboardFill } from "react-icons/ri";
import { FaCalendarCheck, FaBed, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import StatCard from './StatCard';
import Sidebar from './SideBard';
import NavBar from './NavBar';
// import { FiLogOut } from "react-icons/fi";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarLinks = [
    {
      id: 1,
      title: "Dashboard",
      icon: RiDashboardFill
    },
    {
      id: 2,
      title: "Bookings",
      icon: FaCalendarCheck
    },
    {
      id: 3,
      title: "Rooms",
      icon: FaBed
    },
    {
      id: 4,
      title: "Messages",
      icon: MdEmail
    },
    {
      id: 5,
      title: "Settings",
      icon: IoSettingsSharp
    }
  ]
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
    },
    {
      id: 5,
      title: "Rating",
      number: 4.9,
      icon: FaStar,
    },
    {
      id: 6,
      title: "Rating",
      number: 4.9,
      icon: FaStar,
    },
    {
      id: 7,
      title: "Rating",
      number: 4.9,
      icon: FaStar,
    },
    {
      id: 8,
      title: "Rating",
      number: 4.9,
      icon: FaStar,
    },
    {
      id: 9,
      title: "Rating",
      number: 4.9,
      icon: FaStar,
    },
    {
      id: 10,
      title: "Rating",
      number: 4.9,
      icon: FaStar,
    }
  ];
  return (
    <div className='w-full h-screen bg-neutral-100 overflow-hidden'>
      <div className='flex text-black h-screen'>
        <Sidebar
          links={sidebarLinks}
          open={sidebarOpen}
        />
        {
          sidebarOpen && (
            <div
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/0 md:hidden"
            />
          )
        }
        <div className="flex-1 flex flex-col h-screen">

          <NavBar
            open={sidebarOpen}
            setOpen={setSidebarOpen}
          />

          <div className="flex-1 overflow-y-auto p-5">

            <div className="grid grid-cols-1 gap-3">

              {stats.map(card => (
                <StatCard
                  key={card.id}
                  title={card.title}
                  number={card.number}
                  icon={card.icon}
                />
              ))}

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
