import React from 'react'
import logo from '../../../images/login/Logo.jpeg'

export default function Sidebar({ links, open, setOpen, activeSection, setActiveSection }) {
  console.log(open)
  return (
    <aside
      className={`
bg-white w-64 h-screen p-5 flex flex-col gap-6 md:gap-7
fixed top-0 left-0 z-50 px-4 py-3 inter-font
transition-transform duration-300 
${open ? "translate-x-0" : "-translate-x-full"}
md:translate-x-0
`}
    >
      <div className='flex flex-col items-center mb-6'>
        <img
          src={logo}
          className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl'
          alt=""
        />
        <h1 className="text-base font-medium text-[12px] leading-relaxed tracking-normal">El Fanar Hotel</h1>
        <h1 className="text-base font-medium text-[12px] leading-relaxed tracking-normal">Admin Panel</h1>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        {
          links.map((link) => {
            const active = activeSection === link.value;
            return (
              <div
                key={link.id}
                onClick={() => { setActiveSection(link.value); setOpen(false); }}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
                  transition-all duration-300
                ${active
                    ? "bg-[#102A43] text-white"
                    : "text-[#102A43] hover:bg-sky-50 hover:translate-x-1"
                  }
`}              >
                <link.icon className={`w-6 h-6 ${active ? "text-white" : "text-black"}`}
                />
                <p className="text-base font-medium md:text-lg">{link.title}</p>
              </div>)

          })
        }
      </div>
      <div className="mt-auto">
        <h1 className="text-base font-medium text-[12px] leading-relaxed tracking-normal">© El Fanar Hotel</h1>
      </div>

    </aside>
  )
}