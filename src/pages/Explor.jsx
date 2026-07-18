import React from 'react'

export default function Explor() {
    const facilities = [
        {
            id: 1,
            img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/275963872.jpg?k=55d8521ffb7c04689b50bd221db7c9ff1ff0640b3712edea232294fe497ea074&o=",
            title: "Comfortable Rooms",
            description: "Choose from Family, Double, Twin, or Triple rooms with the option of an extra bed upon request.",
            prev: 'slide6',
            next: 'slide2',
            button: "Explore",
            alt: "Comfortable hotel room"
        },
        {
            id: 2,
            img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263592111.jpg?k=8c2111dcec74a44aa0018d323627db773e75a07b5b36ecdda7d4e233acd22fd5&o=",
            title: "Main Restaurant",
            description: "Breakfast: 8:00-10:00  AM Dinner: 7:0-9:00 PM",
            prev: 'slide1',
            next: 'slide3',
            button: "Explore",
            alt: "Main restaurant at El Fanar Hotel"
        },
        {
            id: 3,
            img: "https://sandybeach.ae/wp-content/uploads/2024/10/amenities_restobar.jpg",
            title: "Lebanese Beach Restaurant",
            description: "Enjoy authentic Lebanese cuisine with a beautiful beachfront view. Open daily from 11:00 AM to 11:00 PM.",
            prev: 'slide2',
            next: 'slide4',
            button: "Explore",
            alt: "Lebanese beachfront restaurant"
        },
        {
            id: 4,
            img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/357251837.jpg?k=781cb3bce62efefcc337b35bc19ad0490b25475093c49c834d478d8558cada82&o=",
            title: "Pools & Beach",
            description: "Relax by the swimming pools or enjoy direct beach access from 9:00 AM to 6:00 PM.",
            prev: 'slide3',
            next: 'slide5',
            button: "Explore",
            alt: "Swimming pools and private beach"
        },
        {
            id: 5,
            img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/843827716.jpg?k=92b63e9e7cfe3cd1dd4eb55517d2b7a242c7cf71a52a4d364b00babe15670aa5&o=",
            title: "Aqua Park",
            description: "Open 6 hours daily with scheduled breaks for maintenance.",
            prev: 'slide4',
            next: 'slide6',
            button: "Explore",
            alt: "Family aqua park"
        },
        {
            id: 6,
            img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/843824059.jpg?k=48abd71cf291818dae5073985adafca01c5507d45dd554d18dae8ab4001c38a4&o=",
            title: "Pool Bar",
            description: "Cool drinks, fresh cocktails, and relaxing moments await you at our Pool Bar beside the main swimming pool.",
            prev: 'slide5',
            next: 'slide1',
            button: "Explore",
            alt: "Pool bar beside the main swimming pool"
        },
    ]
    return (
        <div className='w-full bg-neutral-100 p-5'>
            <div className="carousel w-full rounded-xl">
                {facilities.map((facility) => (
                <div id={`slide${facility.id}`} key={facility.id} className="carousel-item relative w-full bg-black">
                    <img
                        src={facility.img}
                        alt={facility.alt}
                        className="w-full h-140 md:h-160 lg:h-150 object-cover" />
                    <div className='absolute inset-0 bg-black/40'></div>
                    <div className='absolute bottom-10 md:left-8 flex flex-col gap-5 text-white'>
                        <h1 className='text-3xl md:text-5xl font-bold playFair-title'>{facility.title}</h1>
                        <p className='max-w-xl leading-relaxed text-gray-200 inter-title'>{facility.description}</p>
                        <button className='text-white font-bold btn btn-info'>{facility.button}</button>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#${facility.prev}`} className="btn btn-circle bg-black/5">❮</a>
                        <a href={`#${facility.next}`} className="btn btn-circle bg-black/5">❯</a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
