import React from 'react'
import exp from '../images/industry.png'
import room from '../images/room.png'
import people from '../images/group.png'
import rate from '../images/rating.png'


export default function About() {
  const cards = [
    {
      id: 1,
      image: exp,
      number: "6+",
      title: "Years of Experience",
    },
    {
      id: 2,
      image: room,
      number: "81",
      title: "Luxury Rooms",
    },
    {
      id: 3,
      image : people,
      number: "10K+",
      title: "Happy Guests"
    },
    {
      id: 4,
      image: rate,
      number: "4.9",
      title: "Guests Rating"
    }
  ]
  const cardStyle = 'bg-white group rounded-2xl shadow-xl flex flex-col items-center p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-amber-500'
  const imgStyle = 'size-10 group-hover:scale-110 transition-transform duration-300'
  const numStyle = 'font-extrabold mb-6 mt-6 text-4xl text-amber-300 group-hover:text-amber-950 transition-colors duration-300'
  const titleStyle = 'font-bold text-black transition-colors group-hover:text-amber-950'
  return (
    <div className='w-full bg-neutral-100 inter-title'>
      <div className="upper max-w-[90vw] mx-auto text-center mt-10 text-black">
        <h1 className='font-bold text-lg md:text-2xl lg:text-3xl font playFair-title'>About El Fanar Hotel</h1>
        <p className='md:font-semibold text-gray-600 leading-relaxed mt-4'>Nestled along the beautiful coastline, El Fanar Hotel has been welcoming guests with exceptional hospitality since 2019. Our mission is to provide comfort, elegance, and unforgettable experiences for every visitor</p>
      </div>
      <div className="lower grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6 py-10">
        {cards.map((card) => (
          <div key={card.id} className={cardStyle}>
            <img src={card.image} className={imgStyle} />
            <p className={numStyle}>{card.number}</p>
            <p className={titleStyle}>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
