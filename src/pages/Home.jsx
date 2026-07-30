import React from 'react'
import MainHeader from './MainHeader'
import Hero from './Hero'
import About from './About'
import Explor from './Explor'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'
import Booking from './Booking'
import { Toaster } from 'react-hot-toast';


export default function Home() {
    return (
        <div>
            <MainHeader />
            <Hero />
            <About />
            <Explor />
            <FAQ />
            <Booking />
            <Contact />
            <Footer />
            <Toaster />
        </div>
    )
}
