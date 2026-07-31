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
    return (
        <section 
        id='faq'
        name="faq"
        className='w-full bg-neutral-100 py-5 px-6 md:px-8 lg:px-10 inter-font'
        >
            <div className='text-center mb-8'>
                <h1 className='text-black font-bold text-lg md:text-2xl lg:text-3xl font playFair-font'>
                    Frequently Asked Questions
                </h1>
                <p className='font-semibold text-[#1F2937] leading-relaxed mb-6 my-4'>
                    Find answers to the most common questions about your stay at El Fanar Hotel.
                </p>
            </div>
            <div className='max-w-4xl mx-auto flex flex-col gap-4'>
                {
                    questions.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-xl overflow-hidden border border-transparent hover:border-[#D4AF37] transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className='w-full flex justify-between items-center p-5 text-left font-bold text-black'
                            >
                                <span>{item.question}</span>
                                <span className="text-[#D4AF37] text-xl">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </button>
                            {
                                openIndex === index && (
                                    <p className="px-5 pb-5 text-[#1F2937] leading-relaxed">
                                        {item.answer}
                                    </p>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
