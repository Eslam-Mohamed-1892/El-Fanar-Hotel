import React from 'react'
import logo from '../../../images/login/Logo.jpeg'

export default function Dashboard() {
  return (
    <div className='w-full h-screen bg-neutral-100'>
        <div className='flex text-black'>
        <div className='bg-white w-64 h-full'>
            <img src={logo} alt="" />
        </div>
        <div className='flex-1'>Dashboard</div>
        </div>
    </div>
  )
}
