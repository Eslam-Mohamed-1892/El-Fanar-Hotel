import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggle({ theme, setTheme }) {

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-[#102A43]
                text-[#D4AF37]
                border border-[#D4AF37]/60
                shadow-md
                transition-colors duration-200
            "
        >
            {theme === 'light' ? <FaMoon size={14} /> : <FaSun size={15} />}
        </button>
    )
}