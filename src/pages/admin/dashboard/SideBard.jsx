import React from 'react'
import logo from '../../../images/login/Logo.jpeg'

export default function Sidebar({ links, open, activeSection, setActiveSection }) {
  console.log(open)
  return (
    <aside
      className={`
bg-white w-64 h-screen p-5 flex flex-col gap-6 md:gap-7
fixed top-0 left-0 z-50
transition-transform duration-300
${open ? "translate-x-0" : "-translate-x-full"}
md:translate-x-0
`}
    >
      <div className='flex justify-center'>
        <img
          src={logo}
          className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl'
          alt=""
        />
      </div>

      {
        links.map((link) => (
          <div
            key={link.id}
            onClick={() => {setActiveSection(link.value); console.log(link.value)}}
            className='flex items-center gap-3 text-[#102A43] cursor-pointer'
          >
            <link.icon className='text-black w-5 h-5 md:w-6 md:h-6' />
            <p className="text-base font-medium md:text-lg">{link.title}</p>
          </div>
        ))
      }

    </aside>
  )
}