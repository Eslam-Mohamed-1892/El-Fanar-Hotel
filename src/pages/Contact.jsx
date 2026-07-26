import React from 'react'
import address from '../images/contact/home.png'
import phone from '../images/contact/viber.png'
import email from '../images/contact/email.png'
import reception from '../images/contact/counter.png'
import team from '../images/contact/team.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'

export default function Contact() {
    const contactSchema = Yup.object({
        name: Yup.string()
            .required("Name is required")
            .min(3, "Minimum 10 characters")
            .max(40, "Maximum 40 characters"),
        email: Yup.string()
            .required("Email is required")
            .email("Please enter a valid email"),
        phone: Yup.string()
            .required("Phone number is required")
            .min(11, "mini 11 number")
            .max(11, "max 11 number"),
        message: Yup.string()
            .required("Message is required")
            .min(10, "min 10 characters")
            .max(500, "max 500 characters"),
    })
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        },

        validationSchema: contactSchema,

        onSubmit: (values) => {
            toast.success("Message sent successfully!")
        }
    });
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
            className='w-full bg-neutral-100 pt-10 pb-20 px-6 md:px-8 lg:px-10 inter-font'
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
                <form
                    onSubmit={formik.handleSubmit}
                    className='flex flex-col gap-8 w-full lg:w-[58%] bg-white rounded-2xl shadow-2xl p-8'
                >
                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor='name'
                            className='font-semibold text-[#D4AF37] leading-relaxed text-lg'
                        >
                            Name
                        </label>
                        <input
                            id='name'
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type='text'
                            className={`input w-full focus:shadow-2xl transition-all text-[#1F2937] bg-neutral-100 ${formik.touched.name && formik.errors.name
                                ? "input-error"
                                : "input-info"
                                }`} />
                        {formik.touched.name && formik.errors.name && (
                            <p className='text-red-500 text-sm'>
                                {formik.errors.name}
                            </p>
                        )}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor='email'
                            className='font-semibold text-[#D4AF37] leading-relaxed text-lg'
                        >
                            Email
                        </label>
                        <input
                            id='email'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="email"
                            className={`input w-full focus:shadow-2xl transition-all text-[#1F2937] bg-neutral-100 ${formik.touched.email && formik.errors.email
                                ? "input-error"
                                : "input-info"
                                }`} />
                        {formik.touched.email && formik.errors.email && (
                            <p className='text-red-500 text-sm'>
                                {formik.errors.email}
                            </p>
                        )}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor='phone'
                            className='font-semibold text-[#D4AF37] leading-relaxed text-lg'
                        >
                            Phone
                        </label>
                        <input
                            id='phone'
                            name='phone'
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type='text'
                            className={`input w-full focus:shadow-2xl transition-all text-[#1F2937] bg-neutral-100 ${formik.touched.phone && formik.errors.phone
                                ? "input-error"
                                : "input-info"
                                }`} />
                        {formik.touched.phone && formik.errors.phone && (
                            <p className='text-red-500 text-sm'>
                                {formik.errors.phone}
                            </p>
                        )}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor='message'
                            className='font-semibold text-[#D4AF37] leading-relaxed text-lg'
                        >
                            Message
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`textarea w-full focus:shadow-2xl transition-all text-[#1F2937] bg-neutral-100 ${formik.touched.message && formik.errors.message
                                ? "input-error"
                                : "input-info"
                                }`}
                            rows={5}
                        />
                        {formik.touched.message && formik.errors.message && (
                            <p className='mb-5 text-red-500 text-sm'>
                                {formik.errors.message}
                            </p>
                        )}
                    </div>
                    <button type='submit' className='btn btn-info text-white font-semibold w-full'>Submit</button>
                </form>
            </div>
        </section>
    )
}
