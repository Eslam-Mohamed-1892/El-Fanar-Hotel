
import React from 'react'
import exp from '../../images/about/industry.png'
import room from '../../images/about/room.png'
import people from '../../images/about/group.png'
import rate from '../../images/about/rating.png'

export default function About({ language, theme }) {

    const isArabic = language === 'ar'
    const isDark = theme === 'dark'

    const cards = [
        {
            id: 1,
            image: exp,
            number: "6+",
            title: isArabic ? "سنوات من الخبرة" : "Years of Experience",
        },
        {
            id: 2,
            image: room,
            number: "81",
            title: isArabic ? "غرفة فاخرة" : "Luxury Rooms",
        },
        {
            id: 3,
            image: people,
            number: "10K+",
            title: isArabic ? "ضيف سعيد" : "Happy Guests",
        },
        {
            id: 4,
            image: rate,
            number: "4.9",
            title: isArabic ? "تقييم الضيوف" : "Guests Rating",
        }
    ]

    const sectionBg = isDark
        ? 'bg-[#081A2B]'
        : 'bg-neutral-100'

    const headingColor = isDark
        ? 'text-[#D4AF37]'
        : 'text-[#102A43]'

    const paragraphColor = isDark
        ? 'text-gray-200'
        : 'text-[#1F2937]'

    const cardStyle = isDark
        ? 'bg-[#102A43] border border-[#D4AF37]/20'
        : 'bg-white border border-transparent'

    const titleColor = isDark
        ? 'text-white'
        : 'text-[#1F2937]'

    const cardStyleBase = `
        group
        rounded-2xl
        shadow-xl
        flex flex-col items-center
        p-6
        transition-all duration-300
        hover:shadow-2xl
        hover:-translate-y-2
        hover:border-[#D4AF37]
        ${cardStyle}
    `

    const imgStyle = `
        size-10
        group-hover:scale-110
        transition-transform duration-300
    `

    const numStyle = `
        font-extrabold
        mb-6 mt-6
        text-4xl
        text-[#D4AF37]
        group-hover:text-amber-950
        transition-colors duration-300
    `

    const titleStyle = `
        font-bold
        ${titleColor}
        transition-colors
        group-hover:text-[#D4AF37]
        ${isArabic ? 'aref-font text-lg' : 'inter-font text-base'}
    `

    return (
        <section
            id="about"
            name="about"
            className={`
                w-full
                ${sectionBg}
                px-6 md:px-8 lg:px-10
                py-10
                transition-colors duration-300
            `}
        >

            <div className="max-w-[90vw] mx-auto text-center mt-8">

                <h1
                    className={`
                        ${headingColor}
                        font-bold
                        text-2xl md:text-3xl lg:text-4xl
                        ${isArabic ? 'aref-font' : 'inter-font'}
                    `}
                >
                    {isArabic ? "عن فندق الفنار" : "About El Fanar Hotel"}
                </h1>

                <p
                    className={`
                        ${paragraphColor}
                        font-semibold
                        leading-relaxed
                        text-base md:text-lg
                        my-4
                            ${isArabic
                            ? 'aref-font text-lg lg:text-xl text-[#1F2937]'
                            : 'inter-font text-base text-gray-300'
                        }
                    `}
                >
                    {isArabic
                        ? "يقع فندق الفنار على امتداد الساحل الخلاب، وقد استقبل ضيوفه بضيافة استثنائية منذ عام 2019. مهمتنا هي توفير الراحة والأناقة وتجارب لا تُنسى لكل زائر."
                        : "Nestled along the beautiful coastline, El Fanar Hotel has been welcoming guests with exceptional hospitality since 2019. Our mission is to provide comfort, elegance, and unforgettable experiences for every visitor."
                    }
                </p>

            </div>


            <div className="lower grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                {cards.map((card) => (

                    <div
                        key={card.id}
                        className={cardStyleBase}
                    >

                        <img
                            src={card.image}
                            alt=""
                            className={imgStyle}
                        />

                        <p className={numStyle}>
                            {card.number}
                        </p>

                        <p className={titleStyle}>
                            {card.title}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    )
}

