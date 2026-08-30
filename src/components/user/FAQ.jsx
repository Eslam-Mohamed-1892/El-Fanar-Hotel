
import React, { useState } from 'react'

export default function FAQ() {

    const [openIndex, setOpenIndex] = useState(null)

    const questions = [
        {
            id: 1,
            question: "What time is breakfast served?",
            answer: "Breakfast is served daily from 8:00 AM to 10:00 AM."
        },
        {
            id: 2,
            question: "Is the reception available 24 hours?",
            answer: "Yes, our reception team is available 24 hours a day to assist our guests."
        },
        {
            id: 3,
            question: "What are the room service hours?",
            answer: "Room service is available daily from 8:00 AM to 4:00 PM."
        },
        {
            id: 4,
            question: "Can I add an extra bed to my room?",
            answer: "Yes, an extra bed can be added to any room upon request with an additional charge added to the room bill."
        },
        {
            id: 5,
            question: "How far is the hotel from the beach?",
            answer: "El Fanar Hotel offers easy access to the beach for a relaxing seaside experience."
        },
        {
            id: 6,
            question: "Is Wi-Fi available at the hotel?",
            answer: "Yes, free Wi-Fi is available for our guests."
        },
        {
            id: 7,
            question: "Do you have parking available?",
            answer: "Yes, parking facilities are available for hotel guests."
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
            className='bg-white rounded-xl shadow-xl overflow-hidden'
        >

            <button
                type='button'
                onClick={() => toggleQuestion(item.id)}
                className='w-full flex justify-between items-center gap-5 p-5 text-left font-bold text-black'
            >

                <span>
                    {item.question}
                </span>

                <span className='text-[#D4AF37] text-xl shrink-0'>
                    {openIndex === item.id ? "−" : "+"}
                </span>

            </button>

            {
                openIndex === item.id && (
                    <div className='px-5 pb-5'>
                        <p className='text-[#1F2937] leading-relaxed'>
                            {item.answer}
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
            className='w-full bg-neutral-100 py-10 px-6 md:px-8 lg:px-10 inter-font'
        >

            <div className='text-center mb-8'>

                <h1 className='text-black font-bold text-lg md:text-2xl lg:text-3xl font playFair-font'>
                    Frequently Asked Questions
                </h1>

                <p className='font-semibold text-[#1F2937] leading-relaxed mb-6 my-4'>
                    Find answers to the most common questions about your stay at El Fanar Hotel.
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

