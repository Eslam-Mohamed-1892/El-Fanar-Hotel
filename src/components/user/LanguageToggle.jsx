import React from 'react'

export default function LanguageToggle({language, setLanguage}) {
    return (
        <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="
        w-10 h-10
        flex items-center justify-center
        rounded-full
        bg-[#102A43]
        text-[#D4AF37]
        border border-[#D4AF37]/60
        shadow-md
        text-xs font-semibold
        transition-colors duration-200
    "
        >
            {language === 'en' ? 'AR' : 'EN'}
        </button>)
}
