import React from 'react'
import Heroo from '../images/Heroo.webp'

export default function Hero() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Heroo})` }}
    >
      <div className='w-full h-full bg-black/40 flex flex-col justify-center items-center'>
        <p className='tracking-wide font-bold text-[15px] md:text-[12px] lg:text-[14px]'>el fanar hotel</p>
        <h1 className='text-white playFair-title font-extrabold text-[32px] md:text-3xl lg:text-5xl mb-12 md:mb-16 lg:mb-20 mt-1 md:mt-2 lg:mt-4'>Escape For Comfort</h1>
        <button className='btn btn-outline btn-info text-white inter-title'>Book Now ↓</button>
      </div>
    </div>
  )
}
