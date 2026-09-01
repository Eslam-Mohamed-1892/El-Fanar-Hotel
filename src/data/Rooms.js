import dbl from '../images/rooms/dbl.jpg'
import fam from '../images/rooms/fam.jpg'
import trpl from '../images/rooms/trpl.jpg'
import single from '../images/rooms/single.jpg'


export const rooms = [
    {
        id: 1,
        roomType: "Family Room",
        roomTypeAr: "غرفة عائلية",
        img: fam,
        price: 250,
        beds: {
            king: 1,
            single: 2,
        },
        capacity: 4,
        extraBed: true,
        view: "Pool & Sea View",
        viewAr: "إطلالة على المسبح والبحر",
        description:
            "Spacious family room with a comfortable bed setup and a beautiful pool and sea view.",
        descriptionAr:
            "غرفة عائلية واسعة تتميز بتجهيز مريح للأسِرّة وإطلالة جميلة على المسبح والبحر.",
    },

    {
        id: 2,
        roomType: "Triple Room",
        roomTypeAr: "غرفة ثلاثية",
        img: trpl,
        price: 200,
        beds: {
            single: 3,
        },
        capacity: 3,
        extraBed: true,
        view: "Sea View",
        viewAr: "إطلالة على البحر",
        description:
            "Comfortable triple room with three single beds and a relaxing sea view.",
        descriptionAr:
            "غرفة ثلاثية مريحة تحتوي على ثلاثة أسرّة مفردة مع إطلالة هادئة على البحر.",
    },

    {
        id: 3,
        roomType: "Double Room",
        roomTypeAr: "غرفة مزدوجة",
        img: dbl,
        price: 150,
        beds: {
            king: 1,
        },
        capacity: 2,
        extraBed: true,
        view: "Pool & Sea View",
        viewAr: "إطلالة على المسبح والبحر",
        description:
            "Comfortable double room with a king bed and a beautiful pool and sea view.",
        descriptionAr:
            "غرفة مزدوجة مريحة تحتوي على سرير كبير مع إطلالة جميلة على المسبح والبحر.",
    },

    {
        id: 4,
        roomType: "Single Room",
        roomTypeAr: "غرفة فردية",
        img: single,
        price: 100,
        beds: {
            single: 1,
        },
        capacity: 1,
        extraBed: true,
        view: "Pool View",
        viewAr: "إطلالة على المسبح",
        description:
            "Cozy single room with a comfortable bed and a pleasant pool view.",
        descriptionAr:
            "غرفة فردية مريحة تحتوي على سرير مريح مع إطلالة لطيفة على المسبح.",
    },
]