import React, { useState } from 'react'

export default function FAQ({ language, theme }) {

    const [openIndex, setOpenIndex] = useState(null)

    const isArabic = language === "ar"
    const isDark = theme === "dark"

    const questions = [
        {
            id: 1,
            question: "What time is breakfast served?",
            questionAr: "ما هو موعد تقديم وجبة الإفطار؟",
            answer: "Breakfast is served daily from 8:00 AM to 10:00 AM.",
            answerAr: "يتم تقديم وجبة الإفطار يوميًا من الساعة 8:00 صباحًا حتى الساعة 10:00 صباحًا."
        },
        {
            id: 2,
            question: "Is the reception available 24 hours?",
            questionAr: "هل مكتب الاستقبال متاح على مدار 24 ساعة؟",
            answer: "Yes, our reception team is available 24 hours a day to assist our guests.",
            answerAr: "نعم، فريق الاستقبال متاح على مدار 24 ساعة يوميًا لمساعدة ضيوفنا."
        },
        {
            id: 3,
            question: "What are the room service hours?",
            questionAr: "ما هي مواعيد خدمة الغرف؟",
            answer: "Room service is available daily from 8:00 AM to 4:00 PM.",
            answerAr: "خدمة الغرف متاحة يوميًا من الساعة 8:00 صباحًا حتى الساعة 4:00 مساءً."
        },
        {
            id: 4,
            question: "Can I add an extra bed to my room?",
            questionAr: "هل يمكنني إضافة سرير إضافي إلى غرفتي؟",
            answer: "Yes, an extra bed can be added to any room upon request with an additional charge added to the room bill.",
            answerAr: "نعم، يمكن إضافة سرير إضافي إلى أي غرفة عند الطلب، مع إضافة تكلفة إضافية إلى فاتورة الغرفة."
        },
        {
            id: 5,
            question: "How far is the hotel from the beach?",
            questionAr: "كم يبعد الفندق عن الشاطئ؟",
            answer: "El Fanar Hotel offers easy access to the beach for a relaxing seaside experience.",
            answerAr: "يوفر فندق الفنار سهولة الوصول إلى الشاطئ للاستمتاع بتجربة هادئة ومريحة على البحر."
        },
        {
            id: 6,
            question: "Is Wi-Fi available at the hotel?",
            questionAr: "هل تتوفر خدمة الواي فاي في الفندق؟",
            answer: "Yes, free Wi-Fi is available for our guests.",
            answerAr: "نعم، تتوفر خدمة الواي فاي المجانية لضيوفنا."
        },
        {
            id: 7,
            question: "Do you have parking available?",
            questionAr: "هل تتوفر مواقف للسيارات؟",
            answer: "Yes, parking facilities are available for hotel guests.",
            answerAr: "نعم، تتوفر مواقف للسيارات لضيوف الفندق."
        }
    ]

    const leftColumn = questions.filter((_, index) => index % 2 === 0)
    const rightColumn = questions.filter((_, index) => index % 2 !== 0)

    const toggleQuestion = (id) => {
        setOpenIndex(openIndex === id ? null : id)
    }

    const renderQuestion = (item) => (
        <div
            key={item.id}
            className={`
                rounded-xl
                shadow-xl
                overflow-hidden
                ${isDark ? "bg-[#102A43]" : "bg-white"}
            `}
        >

            <button
                type='button'
                onClick={() => toggleQuestion(item.id)}
                className={`
                    w-full
                    flex
                    justify-between
                    items-center
                    gap-5
                    p-5
                    font-bold
                    ${isArabic ? "text-right" : "text-left"}
                    ${isDark ? "text-white" : "text-black"}
                `}
            >

                <span>
                    {isArabic ? item.questionAr : item.question}
                </span>

                <span className='text-[#D4AF37] text-xl shrink-0'>
                    {openIndex === item.id ? "−" : "+"}
                </span>

            </button>


            {
                openIndex === item.id && (
                    <div className='px-5 pb-5'>

                        <p
                            className={`
                                text-base
                                md:text-lg
                                leading-relaxed
                                ${isDark ? "text-gray-300" : "text-[#1F2937]"}
                            `}
                        >
                            {isArabic ? item.answerAr : item.answer}
                        </p>

                    </div>
                )
            }

        </div>
    )

    return (
        <section
            id='faq'
            name="faq"
            className={`
                w-full
                py-10
                px-6 md:px-8 lg:px-10
                ${isDark ? "bg-[#081A2B]" : "bg-neutral-100"}
                ${isArabic ? "aref-font" : "inter-font"}
            `}
        >

            <div className='text-center mb-8'>

                <h1
                    className={`
                        font-bold
                        text-2xl md:text-3xl lg:text-4xl
                        ${isDark ? "text-[#D4AF37]" : "text-[#102A43]"}
                    `}
                >
                    {isArabic
                        ? "الأسئلة الشائعة"
                        : "Frequently Asked Questions"
                    }
                </h1>

                <p
                    className={`
                        font-semibold
                        text-base md:text-lg
                        leading-relaxed
                        mb-6
                        my-4
                        ${isDark ? "text-gray-300" : "text-[#1F2937]"}
                    `}
                >
                    {isArabic
                        ? "تعرف على إجابات أكثر الأسئلة شيوعًا حول إقامتك في فندق الفنار."
                        : "Find answers to the most common questions about your stay at El Fanar Hotel."
                    }
                </p>

            </div>


            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-4'>

                {/* Left Column */}

                <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                    {
                        leftColumn.map((item) => renderQuestion(item))
                    }
                </div>


                {/* Right Column */}

                <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                    {
                        rightColumn.map((item) => renderQuestion(item))
                    }
                </div>

            </div>

        </section>
    )
}