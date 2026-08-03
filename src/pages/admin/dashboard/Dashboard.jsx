import React, { useState } from 'react'
import Sidebar from './SideBard';
import NavBar from './NavBar';
import DashboardView from './DashboardView';
import { RiDashboardFill } from "react-icons/ri";
import { FaCalendarCheck, FaBed, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const sectionTitles = {
    dashboard: "Dashboard",
    bookings: "Bookings",
    rooms: "Rooms",
    messages: "Messages",
    settings: "Settings"
  }
  console.log(activeSection);
  const sidebarLinks = [
    {
      id: 1,
      title: "Dashboard",
      icon: RiDashboardFill,
      value: "dashboard"
    },
    {
      id: 2,
      title: "Bookings",
      icon: FaCalendarCheck,
      value: "bookings"
    },
    {
      id: 3,
      title: "Rooms",
      icon: FaBed,
      value: "rooms"
    },
    {
      id: 4,
      title: "Messages",
      icon: MdEmail,
      value: "messages"
    },
    {
      id: 5,
      title: "Settings",
      icon: IoSettingsSharp,
      value: "settings"
    }
  ]
  return (
    <div className='w-full h-screen bg-neutral-100 overflow-hidden inter-font'>
      <div className='flex text-black h-screen'>
        <Sidebar
          links={sidebarLinks}
          open={sidebarOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        {
          sidebarOpen && (
            <div
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/0 md:hidden z-40"
            />
          )
        }
        <div className="flex-1 flex flex-col h-screen md:ml-64">

          <NavBar
            open={sidebarOpen}
            setOpen={setSidebarOpen}
            title={sectionTitles[activeSection]}
          />

          <div className="flex-1 overflow-y-auto p-5 md:p-6 lg:p-7">

            <DashboardView
              activeSection={activeSection}
            />

          </div>


        </div>
      </div>
    </div>
  )
}
