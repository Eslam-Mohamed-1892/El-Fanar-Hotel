import React from 'react'
import logo from '../../../images/login/Logo.jpeg'

export default function Sidebar({ links, open }) {
    console.log(open)
  return (
    <aside
      className={`
bg-white w-64 h-screen p-5 flex flex-col gap-6
fixed top-0 left-0
transition-transform duration-300
${open ? "translate-x-0" : "-translate-x-full"}
md:translate-x-0
`}
    >
      <div className='flex justify-center'>
        <img
          src={logo}
          className='w-20 h-20 rounded-2xl'
          alt=""
        />
      </div>

      {
        links.map((link) => (
          <div
            key={link.id}
            className='flex items-center gap-3 text-[#102A43]'
          >
            <link.icon className='text-black w-5 h-5' />
            <p className="text-base font-medium">{link.title}</p>
          </div>
        ))
      }

    </aside>
  )
}