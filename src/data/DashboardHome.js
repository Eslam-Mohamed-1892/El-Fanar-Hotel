import { FaCalendarCheck, FaBed, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const stats = [
    {
        id: 1,
        title: "Bookings",
        number: 25,
        icon: FaCalendarCheck,
    },
    {
        id: 2,
        title: "Rooms",
        number: 81,
        icon: FaBed,
    },
    {
        id: 3,
        title: "Rating",
        number: 4.9,
        icon: FaStar,
    },
    {
        id: 4,
        title: "Messages",
        number: 12,
        icon: MdEmail,
    },
];

export const messages = [
    {
        id: 1,
        guest: "Eslam Mohamed",
        message: "I want to know the breakfast time",
        date: "18/9/2026",
    },
    {
        id: 2,
        guest: "Ahmed Ali",
        message: "Can I change my booking date?",
        date: "20/9/2026",
    },
    {
        id: 3,
        guest: "Mohamed Hassan",
        message: "I need more information about the rooms",
        date: "22/9/2026",
    }
];

export const bookings = [
    {
        id: 1,
        guest: "Eslam Mohamed",
        room: "1201",
        status: "Confirmed",
        date: "18/9/2026"
    },
    {
        id: 2,
        guest: "Ahmed Ali",
        room: "1202",
        status: "Pending",
        date: "20/9/2026"
    },
    {
        id: 3,
        guest: "Mohamed Hassan",
        room: "1203",
        status: "Confirmed",
        date: "22/9/2026"
    }
];