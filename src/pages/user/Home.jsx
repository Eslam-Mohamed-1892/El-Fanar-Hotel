import React from 'react'
import MainHeader from '../../components/user/MainHeader'
import Hero from '../../components/user/Hero'
import About from '../../components/user/About'
import Explore from '../../components/user/Explore'
import FAQ from '../../components/user/FAQ'
import Contact from '../../components/user/Contact'
import Footer from '../../components/user/Footer'
// import Booking from '../../components/user/Booking'
import Rooms from '../../components/user/Rooms'
import LanguageToggle from '../../components/user/LanguageToggle'
import ThemeToggle from '../../components/user/ThemeToggle'


export default function Home({ language, theme, setLanguage, setTheme }) {
    return (
        <div>
            <MainHeader language={language} theme={theme} />
            <Hero language={language} theme={theme} />
            <About language={language} theme={theme} />
            <Explore language={language} theme={theme} />
            <Rooms language={language} theme={theme} />
            <FAQ language={language} theme={theme} />
            {/* <Booking /> */}
            <Contact language={language} theme={theme} />
            <Footer language={language} theme={theme} />
            <div className='fixed bottom-5 right-5 z-30 flex flex-col gap-3'>
                <LanguageToggle
                    language={language}
                    setLanguage={setLanguage}
                />

                <ThemeToggle
                    theme={theme}
                    setTheme={setTheme}
                />
            </div>
        </div>
    )
}


