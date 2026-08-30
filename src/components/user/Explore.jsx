
import React, { useState } from 'react'
import Room from '../../images/explore/Room.jpg'
import mainRestuarant from '../../images/explore/mainRestuarant.jpg'
import jarelbarh from '../../images/explore/jarElBahr.webp'
import pool from '../../images/explore/pool.jpg'
import aqua from '../../images/explore/aqua.jpg'
import poolBar from '../../images/explore/bar.jpg'
import { FaXmark } from "react-icons/fa6"

export default function Explore() {

    const [selectedFacility, setSelectedFacility] = useState(null)

    const facilities = [
        {
            id: 1,
            img: Room,
            title: "Comfortable Rooms",
            description: "Choose from Family, Double, Twin, or Triple rooms with the option of an extra bed upon request.",
            details: "Our comfortable rooms are designed to provide a relaxing stay for couples, families, and groups. Choose from Family, Double, Twin, or Triple rooms, with an extra bed available upon request.",
            prev: 'slide6',
            next: 'slide2',
            button: "Learn More",
            alt: "Comfortable hotel room"
        },
        {
            id: 2,
            img: mainRestuarant,
            title: "Main Restaurant",
            description: "Breakfast: from 8:00 to 10:00 AM, Dinner: from 7:00 to 9:00 PM.",
            details: "Enjoy a comfortable dining experience at our main restaurant. Breakfast is served from 8:00 to 10:00 AM, while dinner is served from 7:00 to 9:00 PM.",
            prev: 'slide1',
            next: 'slide3',
            button: "Learn More",
            alt: "Main restaurant at El Fanar Hotel"
        },
        {
            id: 3,
            img: jarelbarh,
            title: "Lebanese Beach Restaurant",
            description: "Enjoy authentic Lebanese cuisine with a beautiful beachfront view. Open daily from 11:00 AM to 11:00 PM.",
            details: "Enjoy authentic Lebanese cuisine while taking in the beautiful beachfront view. The restaurant is open daily from 11:00 AM to 11:00 PM.",
            prev: 'slide2',
            next: 'slide4',
            button: "Learn More",
            alt: "Lebanese beachfront restaurant"
        },
        {
            id: 4,
            img: pool,
            title: "Pools & Beach",
            description: "Relax by the swimming pools or enjoy direct beach access from 9:00 AM to 6:00 PM.",
            details: "Spend your day relaxing by our swimming pools or enjoying direct access to the beach. Pool and beach facilities are available from 9:00 AM to 6:00 PM.",
            prev: 'slide3',
            next: 'slide5',
            button: "Learn More",
            alt: "Swimming pools and private beach"
        },
        {
            id: 5,
            img: aqua,
            title: "Aqua Park",
            description: "Open 6 hours daily with scheduled breaks for maintenance.",
            details: "Have fun with family and friends at our Aqua Park. The Aqua Park is open for 6 hours every day, with scheduled breaks for maintenance.",
            prev: 'slide4',
            next: 'slide6',
            button: "Learn More",
            alt: "Family aqua park"
        },
        {
            id: 6,
            img: poolBar,
            title: "Pool Bar",
            description: "Cool drinks, fresh cocktails, and relaxing moments await you at our Pool Bar beside the main swimming pool.",
            details: "Relax beside the main swimming pool and enjoy a selection of refreshing drinks and cocktails at our Pool Bar.",
            prev: 'slide5',
            next: 'slide1',
            button: "Learn More",
            alt: "Pool bar beside the main swimming pool"
        },
    ]

    const openModal = (facility) => {
        setSelectedFacility(facility)
    }

    const closeModal = () => {
        setSelectedFacility(null)
    }

    return (
        <>
            <section
                id='explore'
                name="explore"
                className='w-full bg-neutral-100 py-10 px-6 md:px-8 lg:px-10'
            >

                <div className='text-center'>

                    <h1 className='text-[#000000] font-bold text-lg md:text-2xl lg:text-3xl font playFair-font'>
                        Explore Our Resort
                    </h1>

                    <p className='font-semibold text-[#1F2937] leading-relaxed mb-6 inter-font my-4'>
                        Discover everything El Fanar Hotel has to offer, from luxurious rooms to relaxing pools and unforgettable dining experiences.
                    </p>

                </div>


                <div className="carousel w-full rounded-xl">

                    {
                        facilities.map((facility) => (

                            <div
                                id={`slide${facility.id}`}
                                key={facility.id}
                                className="carousel-item relative w-full bg-black"
                            >

                                <img
                                    src={facility.img}
                                    alt={facility.alt}
                                    className="w-full h-140 md:h-160 lg:h-140 object-cover"
                                />

                                <div className='absolute inset-0 bg-black/40'></div>


                                <div className='absolute bottom-10 md:left-8 flex flex-col gap-5 text-white px-3'>

                                    <h1 className='text-3xl md:text-5xl font-bold playFair-font'>
                                        {facility.title}
                                    </h1>

                                    <p className='max-w-xl leading-relaxed text-gray-200 inter-font font-bold'>
                                        {facility.description}
                                    </p>


                                    <button
                                        type='button'
                                        onClick={() => openModal(facility)}
                                        className='text-white font-bold btn btn-info'
                                    >
                                        {facility.button}
                                    </button>

                                </div>


                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">

                                    <a
                                        href={`#${facility.prev}`}
                                        className="btn btn-circle bg-black/5 text-white"
                                    >
                                        ❮
                                    </a>

                                    <a
                                        href={`#${facility.next}`}
                                        className="btn btn-circle bg-black/5 text-white"
                                    >
                                        ❯
                                    </a>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </section>


            {
                selectedFacility && (

                    <div
                        className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6'
                        onClick={closeModal}
                    >

                        <div
                            className='relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden'
                            onClick={(e) => e.stopPropagation()}
                        >

                            <div className='relative h-52 md:h-64'>

                                <img
                                    src={selectedFacility.img}
                                    alt={selectedFacility.alt}
                                    className='w-full h-full object-cover'
                                />

                                <div className='absolute inset-0 bg-black/30'></div>

                                <button
                                    type='button'
                                    onClick={closeModal}
                                    aria-label='Close'
                                    className='absolute top-4 right-4 btn btn-circle bg-black/50 text-white border-none'
                                >
                                    <FaXmark />
                                </button>

                            </div>


                            <div className='p-6 md:p-8'>

                                <h2 className='text-black font-bold text-2xl md:text-3xl playFair-font mb-4'>
                                    {selectedFacility.title}
                                </h2>

                                <p className='text-[#1F2937] font-semibold leading-relaxed inter-font'>
                                    {selectedFacility.details}
                                </p>


                                <button
                                    type='button'
                                    onClick={closeModal}
                                    className='btn btn-info text-white font-semibold mt-6'
                                >
                                    Close
                                </button>

                            </div>

                        </div>

                    </div>

                )
            }
        </>
    )
}

