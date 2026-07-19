import React from 'react'
import MainHeader from './pages/MainHeader'
import Hero from './pages/Hero'
import About from './pages/About'
import Explor from './pages/Explor'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

export default function App() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <MainHeader />
      <Hero />
      <About />
      <Explor />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
