import React from 'react'
import address from '../images/home.png'
import phone from '../images/viber.png'
import email from '../images/email.png'
import reception from '../images/counter.png'
import team from '../images/team.png'

export default function Contact() {
    const data = [
        {
            id: 1,
            img: address,
            p1: "Address: ",
            p2: "Ain Sokhna, Egypt"
        },
        {
            id: 2,
            img: phone,
            p1: "Phone: ",
            p2: "01050838177"
        },
        {
            id: 3,
            img: email,
            p1: "Email: ",
            p2: "eslameldakhli189@gmail.com"
        },
        {
            id: 4,
            img: reception,
            p1: "Reception: ",
            p2: "24/7"
        },
    ]
    return (
        <section
            id='contact' 
            name="contact"
            className='w-full bg-neutral-100 pt-10 pb-20 px-6 inter-font'
        >
            <div className='text-center mb-8'>
                <h1 className='text-black font-bold text-lg md:text-2xl lg:text-3xl font playFair-font'>
                    Contact Us
                </h1>
                <p className='font-semibold text-[#1F2937] leading-relaxed mb-6 my-4'>
                    We'd love to hear from you.
                </p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-10 text-black font-bold'>
                <div className='flex flex-col gap-5 lg:grid lg:grid-cols-1 text-black font-bold bg-white rounded-2xl shadow-2xl p-8 lg:bg-transparent lg:shadow-none lg:p-0 w-full lg:w-[38%]'>
                    {
                        data.map((data) => (
                            <div className='flex gap-4 items-center lg:bg-white lg:rounded-xl lg:shadow-xl lg:p-5 ' key={data.id}>
                                <img className='size-5' src={data.img} alt="" />
                                <p className='text-[20px] pt-4 pb-4'>{data.p1}</p>
                                <p className='font-semibold text-[#1F2937] break-all'>{data.p2}</p>
                            </div>
                        ))
                    }
                    <div className='flex items-center gap-4'>
                        <img className='size-8' src={team} alt="" />
                        <p className='font-semibold text-[#1F2937] break-all'>Our team is always ready to help you. Feel free to contact us anytime.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-8 w-full lg:w-[58%] bg-white rounded-2xl shadow-2xl p-8'>
                    <div>
                        <h1 className='font-bold text-black text-[20px] pb-3'>Name: </h1>
                        <input className='w-full focus:shadow-2xl transition-all input input-info text-black font-bold bg-neutral-100 placeholder:text-black placeholder:font-semibold' placeholder='Enter Your Name' type="text" />
                    </div>
                    <div>
                        <h1 className='font-bold text-black text-[20px] pb-3'>Email: </h1>
                        <input className='w-full focus:shadow-2xl transition-all input input-info text-black font-bold bg-neutral-100 placeholder:text-black placeholder:font-semibold' placeholder='Enter a Valid Email' type="text" />
                    </div>
                    <div>
                        <h1 className='font-bold text-black text-[20px] pb-3'>Phone: </h1>
                        <input className='w-full focus:shadow-2xl transition-all input input-info text-black font-bold bg-neutral-100 placeholder:text-black placeholder:font-semibold' placeholder='Enter a Valid Phone Number' type="text" />
                    </div>
                    <div>
                        <h1 className='font-bold text-black text-[20px] pb-3'>Message: </h1>
                        <textarea
                            className="textarea textarea-info w-full bg-neutral-100 mb-5"
                            rows={5}
                        />
                        <button className='btn btn-info text-white font-semibold w-full'>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
