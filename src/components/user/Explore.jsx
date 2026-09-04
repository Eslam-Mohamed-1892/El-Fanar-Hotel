
import React, { useState } from 'react'
import Room from '../../images/explore/Room.jpg'
import mainRestuarant from '../../images/explore/mainRestuarant.jpg'
import jarelbarh from '../../images/explore/jarElBahr.webp'
import pool from '../../images/explore/pool.jpg'
import aqua from '../../images/explore/aqua.jpg'
import poolBar from '../../images/explore/bar.jpg'
import { FaXmark } from "react-icons/fa6"

export default function Explore({ language, theme }) {

    const [selectedFacility, setSelectedFacility] = useState(null)

    const isArabic = language === 'ar'
    const isDark = theme === 'dark'

    const buttonStyle = isDark
        ? "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white active:bg-[#D4AF37] active:text-white"
        : "btn-info text-white";
    const buttonStyle2 = isDark
        ? "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white active:bg-[#D4AF37] active:text-white"
        : "btn-info text-black";


    const facilities = [
        {
            id: 1,
            img: Room,
            title: isArabic ? "غرف مريحة" : "Comfortable Rooms",
            description: isArabic
                ? "اختر من بين الغرف العائلية أو المزدوجة أو التوأم أو الثلاثية، مع إمكانية إضافة سرير إضافي عند الطلب."
                : "Choose from Family, Double, Twin, or Triple rooms with the option of an extra bed upon request.",
            details: isArabic
                ? "صُممت غرفنا المريحة لتوفر إقامة هادئة للأزواج والعائلات والمجموعات. اختر من بين الغرف العائلية أو المزدوجة أو التوأم أو الثلاثية، مع إمكانية توفير سرير إضافي عند الطلب."
                : "Our comfortable rooms are designed to provide a relaxing stay for couples, families, and groups. Choose from Family, Double, Twin, or Triple rooms, with an extra bed available upon request.",
            prev: 'slide6',
            next: 'slide2',
            button: isArabic ? "اعرف المزيد" : "Learn More",
            alt: isArabic ? "غرفة فندقية مريحة" : "Comfortable hotel room"
        },
        {
            id: 2,
            img: mainRestuarant,
            title: isArabic ? "المطعم الرئيسي" : "Main Restaurant",
            description: isArabic
                ? "الإفطار من 8:00 إلى 10:00 صباحًا، والعشاء من 7:00 إلى 9:00 مساءً."
                : "Breakfast: from 8:00 to 10:00 AM, Dinner: from 7:00 to 9:00 PM.",
            details: isArabic
                ? "استمتع بتجربة تناول طعام مريحة في مطعمنا الرئيسي. يُقدم الإفطار من الساعة 8:00 إلى 10:00 صباحًا، بينما يُقدم العشاء من الساعة 7:00 إلى 9:00 مساءً."
                : "Enjoy a comfortable dining experience at our main restaurant. Breakfast is served from 8:00 to 10:00 AM, while dinner is served from 7:00 to 9:00 PM.",
            prev: 'slide1',
            next: 'slide3',
            button: isArabic ? "اعرف المزيد" : "Learn More",
            alt: isArabic ? "المطعم الرئيسي في فندق الفنار" : "Main restaurant at El Fanar Hotel"
        },
        {
            id: 3,
            img: jarelbarh,
            title: isArabic ? "مطعم الشاطئ اللبناني" : "Lebanese Beach Restaurant",
            description: isArabic
                ? "استمتع بالمأكولات اللبنانية الأصيلة مع إطلالة رائعة على الشاطئ. مفتوح يوميًا من 11:00 صباحًا حتى 11:00 مساءً."
                : "Enjoy authentic Lebanese cuisine with a beautiful beachfront view. Open daily from 11:00 AM to 11:00 PM.",
            details: isArabic
                ? "استمتع بالمأكولات اللبنانية الأصيلة بينما تستمتع بالإطلالة الجميلة على الشاطئ. المطعم مفتوح يوميًا من الساعة 11:00 صباحًا حتى 11:00 مساءً."
                : "Enjoy authentic Lebanese cuisine while taking in the beautiful beachfront view. The restaurant is open daily from 11:00 AM to 11:00 PM.",
            prev: 'slide2',
            next: 'slide4',
            button: isArabic ? "اعرف المزيد" : "Learn More",
            alt: isArabic ? "مطعم لبناني على الشاطئ" : "Lebanese beachfront restaurant"
        },
        {
            id: 4,
            img: pool,
            title: isArabic ? "حمامات السباحة والشاطئ" : "Pools & Beach",
            description: isArabic
                ? "استرخِ بجوار حمامات السباحة أو استمتع بالدخول المباشر إلى الشاطئ من 9:00 صباحًا حتى 6:00 مساءً."
                : "Relax by the swimming pools or enjoy direct beach access from 9:00 AM to 6:00 PM.",
            details: isArabic
                ? "اقضِ يومك مسترخيًا بجوار حمامات السباحة أو استمتع بالدخول المباشر إلى الشاطئ. تتوفر مرافق حمامات السباحة والشاطئ من الساعة 9:00 صباحًا حتى 6:00 مساءً."
                : "Spend your day relaxing by our swimming pools or enjoying direct access to the beach. Pool and beach facilities are available from 9:00 AM to 6:00 PM.",
            prev: 'slide3',
            next: 'slide5',
            button: isArabic ? "اعرف المزيد" : "Learn More",
            alt: isArabic ? "حمامات السباحة والشاطئ الخاص" : "Swimming pools and private beach"
        },
        {
            id: 5,
            img: aqua,
            title: isArabic ? "أكوا بارك" : "Aqua Park",
            description: isArabic
                ? "مفتوح لمدة 6 ساعات يوميًا مع فترات راحة مجدولة للصيانة."
                : "Open 6 hours daily with scheduled breaks for maintenance.",
            details: isArabic
                ? "استمتع بوقت ممتع مع العائلة والأصدقاء في أكوا بارك. يفتح أكوا بارك لمدة 6 ساعات يوميًا، مع فترات راحة مجدولة للصيانة."
                : "Have fun with family and friends at our Aqua Park. The Aqua Park is open for 6 hours every day, with scheduled breaks for maintenance.",
            prev: 'slide4',
            next: 'slide6',
            button: isArabic ? "اعرف المزيد" : "Learn More",
            alt: isArabic ? "أكوا بارك للعائلات" : "Family aqua park"
        },
        {
            id: 6,
            img: poolBar,
            title: isArabic ? "بار حمام السباحة" : "Pool Bar",
            description: isArabic
                ? "مشروبات منعشة وكوكتيلات طازجة ولحظات من الاسترخاء في انتظارك بجوار حمام السباحة الرئيسي."
                : "Cool drinks, fresh cocktails, and relaxing moments await you at our Pool Bar beside the main swimming pool.",
            details: isArabic
                ? "استرخِ بجوار حمام السباحة الرئيسي واستمتع بمجموعة متنوعة من المشروبات المنعشة والكوكتيلات في بار حمام السباحة."
                : "Relax beside the main swimming pool and enjoy a selection of refreshing drinks and cocktails at our Pool Bar.",
            prev: 'slide5',
            next: 'slide1',
            button: isArabic ? "اعرف المزيد" : "Learn More",
            alt: isArabic ? "بار بجوار حمام السباحة الرئيسي" : "Pool bar beside the main swimming pool"
        },
    ]

    const openModal = (facility) => {
        setSelectedFacility(facility)
    }

    const closeModal = () => {
        setSelectedFacility(null)
    }

    const sectionBg = isDark
        ? 'bg-[#081A2B]'
        : 'bg-neutral-100'

    const headingColor = isDark
        ? 'text-[#D4AF37]'
        : 'text-[#102A43]'

    const paragraphColor = isDark
        ? 'text-gray-200'
        : 'text-[#1F2937]'

    const modalBg = isDark
        ? 'bg-[#102A43]'
        : 'bg-white'

    const modalText = isDark
        ? 'text-white'
        : 'text-[#1F2937]'

    return (
        <>
            <section
                id="explore"
                name="explore"
                className={`
                    w-full
                    ${sectionBg}
                    py-10
                    px-6 md:px-8 lg:px-10
                    transition-colors duration-300
                `}
            >

                <div className="text-center">

                    <h1
                        className={`
                            ${headingColor}
                            font-bold
                            text-2xl md:text-3xl lg:text-4xl
                            ${isArabic ? 'aref-font' : 'inter-font'}
                        `}
                    >
                        {isArabic ? "اكتشف منتجعنا" : "Explore Our Resort"}
                    </h1>

                    <p
                        className={`
                            ${paragraphColor}
                            font-semibold
                            leading-relaxed
                            text-base md:text-lg
                            mb-6 my-4
                        ${isDark ? 'text-gray-300' : 'text-[#1F2937]'}
                            ${isArabic
                                ? 'aref-font text-lg lg:text-xl'
                                : 'inter-font text-base'
                            }
                        `}
                    >
                        {isArabic
                            ? "اكتشف كل ما يقدمه فندق الفنار، من الغرف الفاخرة إلى حمامات السباحة المريحة وتجارب تناول الطعام التي لا تُنسى."
                            : "Discover everything El Fanar Hotel has to offer, from luxurious rooms to relaxing pools and unforgettable dining experiences."
                        }
                    </p>

                </div>


                <div className="carousel w-full rounded-xl">

                    {facilities.map((facility) => (

                        <div
                            id={`slide${facility.id}`}
                            key={facility.id}
                            className="carousel-item relative w-full bg-black"
                        >

                            <img
                                src={facility.img}
                                alt={facility.alt}
                                className="w-full h-140 md:h-160 lg:h-140 object-cover"
                            />

                            <div className="absolute inset-0 bg-black/40"></div>


                            <div
                                className={`
                                    absolute
                                    bottom-10
                                    ${isArabic
                                        ? 'right-8 md:right-8'
                                        : 'left-8 md:left-8'
                                    }
                                    flex flex-col
                                    gap-5
                                    text-white
                                    px-3
                                    max-w-2xl
                                `}
                            >

                                <h1
                                    className={`
                                        ${isArabic
                                            ? 'aref-font text-3xl md:text-4xl lg:text-5xl'
                                            : 'inter-font text-3xl md:text-5xl'
                                        }
                                        font-bold
                                    `}
                                >
                                    {facility.title}
                                </h1>

                                <p
                                    className={`
                                        max-w-xl
                                        leading-relaxed
                                        text-gray-200
                                        font-bold
                                        ${isArabic
                                            ? 'aref-font text-lg md:text-xl'
                                            : 'inter-font text-base'
                                        }
                                    `}
                                >
                                    {facility.description}
                                </p>


                                <button
                                    type="button"
                                    onClick={() => openModal(facility)}
                                    className={`
                                        text-lg
                                        btn
                                        btn-outline
${buttonStyle}
                                        font-semibold
                                        w-fit
                                        ${isArabic ? 'aref-font' : 'inter-font'}
                                    `}
                                >
                                    {facility.button}
                                </button>

                            </div>


                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">

                                <a
                                    href={`#${facility.prev}`}
                                    className="
                                        btn btn-circle
                                        bg-black/20
                                        text-white
                                        border-[#D4AF37]/40
                                        hover:bg-[#D4AF37]
                                        hover:text-[#102A43]
                                        hover:border-[#D4AF37]
                                    "
                                >
                                    ❮
                                </a>

                                <a
                                    href={`#${facility.next}`}
                                    className="
                                        btn btn-circle
                                        bg-black/20
                                        text-white
                                        border-[#D4AF37]/40
                                        hover:bg-[#D4AF37]
                                        hover:text-[#102A43]
                                        hover:border-[#D4AF37]
                                    "
                                >
                                    ❯
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {selectedFacility && (

                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
                    onClick={closeModal}
                >

                    <div
                        className={`
                            relative
                            w-full max-w-2xl
                            ${modalBg}
                            rounded-2xl
                            shadow-2xl
                            overflow-hidden
                        `}
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="relative h-52 md:h-64">

                            <img
                                src={selectedFacility.img}
                                alt={selectedFacility.alt}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/30"></div>

                            <button
                                type="button"
                                onClick={closeModal}
                                aria-label={isArabic ? "إغلاق" : "Close"}
                                className="
                                    absolute top-4 right-4
                                    btn btn-circle
                                    bg-black/50
                                    text-white
                                    border-none
                                    hover:bg-[#D4AF37]
                                    hover:text-[#102A43]
                                "
                            >
                                <FaXmark />
                            </button>

                        </div>


                        <div className="p-6 md:p-8">

                            <h2
                                className={`
                                    ${headingColor}
                                    font-bold
                                    text-2xl md:text-3xl
                                    ${isArabic ? 'aref-font' : 'playFair-font'}
                                    mb-4
                                `}
                            >
                                {selectedFacility.title}
                            </h2>

                            <p
                                className={`
                                    ${modalText}
                                    font-semibold
                                    leading-relaxed
                                    ${isArabic
                                        ? 'aref-font text-lg md:text-xl'
                                        : 'inter-font text-base'
                                    }
                                `}
                            >
                                {selectedFacility.details}
                            </p>


                            <button
                                type="button"
                                onClick={closeModal}
                                className={`
                                    btn
                                    btn-outline
${buttonStyle2}                                    font-semibold
                                    mt-6
                                    ${isArabic ? 'aref-font text-lg' : 'inter-font'}
                                `}
                            >
                                {isArabic ? "إغلاق" : "Close"}
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </>
    )
}

