import React from 'react'
import MainHeader from '../../components/user/MainHeader'
import Hero from '../../components/user/Hero'
import About from '../../components/user/About'
import Explore from '../../components/user/Explore'
import FAQ from '../../components/user/FAQ'
import Contact from '../../components/user/Contact'
import Footer from '../../components/user/Footer'
import Booking from '../../components/user/Booking'
import Rooms from '../../components/user/Rooms'


export default function Home() {
    return (
        <div>
            <MainHeader />
            <Hero />
            <About />
            <Explore />
            <Rooms />
            <FAQ />
            {/* <Booking /> */}
            <Contact />
            <Footer />
        </div>
    )
}
