import React from 'react'
import Room from '../images/Room.jpg'
import mainRestuarant from '../images/mainRestuarant.jpg'
import jarelbarh from '../images/jarElBahr.webp'
import pool from '../images/pool.jpg'
import aqua from '../images/aqua.jpg'
import poolBar from '../images/bar.jpg'

export default function Explor() {
    const facilities = [
        {
            id: 1,
            img: Room,
            title: "Comfortable Rooms",
            description: "Choose from Family, Double, Twin, or Triple rooms with the option of an extra bed upon request.",
            prev: 'slide6',
            next: 'slide2',
            button: "Explore →",
            alt: "Comfortable hotel room"
        },
        {
            id: 2,
            img: mainRestuarant,
            title: "Main Restaurant",
            description: "Breakfast: from 8:00 to 10:00 AM, Dinner: from 7:0 to 9:00 PM ",
            prev: 'slide1',
            next: 'slide3',
            button: "Explore →",
            alt: "Main restaurant at El Fanar Hotel"
        },
        {
            id: 3,
            img: jarelbarh,
            title: "Lebanese Beach Restaurant",
            description: "Enjoy authentic Lebanese cuisine with a beautiful beachfront view. Open daily from 11:00 AM to 11:00 PM.",
            prev: 'slide2',
            next: 'slide4',
            button: "Explore →",
            alt: "Lebanese beachfront restaurant"
        },
        {
            id: 4,
            img: pool,
            title: "Pools & Beach",
            description: "Relax by the swimming pools or enjoy direct beach access from 9:00 AM to 6:00 PM.",
            prev: 'slide3',
            next: 'slide5',
            button: "Explore →",
            alt: "Swimming pools and private beach"
        },
        {
            id: 5,
            img: aqua,
            title: "Aqua Park",
            description: "Open 6 hours daily with scheduled breaks for maintenance.",
            prev: 'slide4',
            next: 'slide6',
            button: "Explore →",
            alt: "Family aqua park"
        },
        {
            id: 6,
            img: poolBar,
            title: "Pool Bar",
            description: "Cool drinks, fresh cocktails, and relaxing moments await you at our Pool Bar beside the main swimming pool.",
            prev: 'slide5',
            next: 'slide1',
            button: "Explore →",
            alt: "Pool bar beside the main swimming pool"
        },
    ]
    return (
        <div className='w-full bg-neutral-100 py-10 px-6'>
            <div className='text-center'>
            <h1 className='text-black font-bold text-lg md:text-2xl lg:text-3xl font playFair-font'>Explore Our Resort</h1>
            <p className='font-semibold text-gray-600 leading-relaxed mb-6 inter-font my-4'>Discover everything El Fanar Hotel has to offer, from luxurious rooms to relaxing pools and unforgettable dining experiences.</p>
            </div>
            <div className="carousel w-full rounded-xl">
                {facilities.map((facility) => (
                <div id={`slide${facility.id}`} key={facility.id} className="carousel-item relative w-full bg-black">
                    <img
                        src={facility.img}
                        alt={facility.alt}
                        className="w-full h-140 md:h-160 lg:h-140 object-cover" />
                    <div className='absolute inset-0 bg-black/40'></div>
                    <div className='absolute bottom-10 md:left-8 flex flex-col gap-5 text-white px-3'>
                        <h1 className='text-3xl md:text-5xl font-bold playFair-font'>{facility.title}</h1>
                        <p className='max-w-xl leading-relaxed text-gray-200 inter-font font-bold'>{facility.description}</p>
                        <button className='text-white font-bold btn btn-info'>{facility.button}</button>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#${facility.prev}`} className="btn btn-circle bg-black/5 text-white">❮</a>
                        <a href={`#${facility.next}`} className="btn btn-circle bg-black/5 text-white">❯</a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
