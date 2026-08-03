import React from 'react'
import DashboardHome from "./views/DashboardHome";
import BookingView from "./views/BookingView";

export default function DashboardView({ activeSection }) {

    switch (activeSection) {

        case "dashboard":
            return <DashboardHome />;

        case "bookings":
            return <BookingView />;

        case "rooms":
            return <h1>Rooms</h1>;

        case "messages":
            return <h1>Messages</h1>;

        case "settings":
            return <h1>Settings</h1>;

        default:
            return <DashboardHome />;
    }

}