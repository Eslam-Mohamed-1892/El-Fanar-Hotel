import React from 'react'
import DashboardHome from "./views/DashboardHome";
import BookingView from "./views/BookingView";
import RoomsView from './views/RoomsView';
import MessagesView from './views/Messages';
import SettingsView from './views/SettingsView';

export default function DashboardView({ activeSection }) {

    switch (activeSection) {

        case "dashboard":
            return <DashboardHome />;

        case "bookings":
            return <BookingView />;

        case "rooms":
            return <RoomsView />;

        case "messages":
            return <MessagesView />;

        case "settings":
            return <SettingsView />;

        default:
            return <DashboardHome />;
    }

}