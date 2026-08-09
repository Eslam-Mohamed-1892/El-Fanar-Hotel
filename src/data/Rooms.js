import dbl from '../images/rooms/dbl.jpg'
import fam from '../images/rooms/fam.jpg'
import trpl from '../images/rooms/trpl.jpg'
import single from '../images/rooms/single.jpg'




export const rooms = [
    {
        id: 1,
        roomType: "Family Room",
        img: fam,
        price: 250,
        beds: {
            king: 1,
            single: 2,
        },
        capacity: 4,
        extraBed: true,
        view: "Pool & Sea View",
        description: "Spacious family room with a comfortable bed setup and a beautiful pool and sea view.",
    },

    {
        id: 2,
        roomType: "Triple Room",
        img: trpl,
        price: 200,
        beds: {
            single: 3,
        },
        capacity: 3,
        extraBed: true,
        view: "Sea View",
        description: "Comfortable triple room with three single beds and a relaxing sea view.",
    },

    {
        id: 3,
        roomType: "Double Room",
        img: dbl,
        price: 150,
        beds: {
            king: 1,
        },
        capacity: 2,
        extraBed: true,
        view: "Pool & Sea View",
        description: "Comfortable double room with a king bed and a beautiful pool and sea view.",
    },

    {
        id: 4,
        roomType: "Single Room",
        img: single,
        price: 100,
        beds: {
            single: 1,
        },
        capacity: 1,
        extraBed: true,
        view: "Pool View",
        description: "Cozy single room with a comfortable bed and a pleasant pool view.",
    },
];