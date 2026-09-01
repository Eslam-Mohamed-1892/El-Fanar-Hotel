// import React from 'react'
// import address from '../../images/contact/home.png'
// import phone from '../../images/contact/viber.png'
// import email from '../../images/contact/email.png'
// import reception from '../../images/contact/counter.png'
// import team from '../../images/contact/team.png'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// import toast from 'react-hot-toast'

// export default function Contact() {
//     const countries = [
//         {
//             id: 1,
//             name: "Egypt",
//         },
//         {
//             id: 2,
//             name: "Saudi Arabia",
//         },
//         {
//             id: 3,
//             name: "United Arab Emirates",
//         },
//         {
//             id: 4,
//             name: "Qatar",
//         },
//         {
//             id: 5,
//             name: "Kuwait",
//         },
//         {
//             id: 6,
//             name: "United States",
//         },
//         {
//             id: 7,
//             name: "United Kingdom",
//         },
//         {
//             id: 8,
//             name: "Germany",
//         },
//         {
//             id: 9,
//             name: "France",
//         },
//         {
//             id: 10,
//             name: "Turkey",
//         }
//     ]
//     const contactSchema = Yup.object({
//         name: Yup.string()
//             .required("Name is required")
//             .min(3, "Minimum 3 characters")
//             .max(40, "Maximum 40 characters"),
//         email: Yup.string()
//             .required("Email is required")
//             .email("Please enter a valid email"),
//         country: Yup.string()
//             .required("Country is required"),
//         phone: Yup.string()
//             .required("Phone number is required")
//             .min(11, "Phone must be 11 numbers")
//             .max(11, "Phone must be 11 numbers")
//             .matches(/^[0-9]+$/, "Phone must contain only numbers"),
//         message: Yup.string()
//             .required("Message is required")
//             .min(10, "min 10 characters")
//             .max(500, "max 500 characters"),
//     })
//     const formik = useFormik({
//         initialValues: {
//             name: "",
//             email: "",
//             country: "",
//             phone: "",
//             message: ""
//         },

//         validationSchema: contactSchema,

//         onSubmit: (values, { resetForm }) => {
//             const oldMessages = localStorage.getItem("messages")
//             const messages = JSON.parse(oldMessages) || []
//             messages.push(values)
//             const allMessages = JSON.stringify(messages)
//             localStorage.setItem("messages", allMessages)
//             resetForm();
//             toast.success("Message sent successfully!")
//             console.log(values)
//         }
//     });
//     const data = [
//         {
//             id: 1,
//             img: address,
//             p1: "Address: ",
//             p2: "Ain Sokhna, Egypt"
//         },
//         {
//             id: 2,
//             img: phone,
//             p1: "Phone: ",
//             p2: "01050838177"
//         },
//         {
//             id: 3,
//             img: email,
//             p1: "Email: ",
//             p2: "eslameldakhli189@gmail.com"
//         },
//         {
//             id: 4,
//             img: reception,
//             p1: "Reception: ",
//             p2: "24/7"
//         },
//     ]
//     return (
//         <section
//             id='contact'
//             name="contact"
//             className='w-full bg-neutral-100 pt-10 pb-20 px-6 md:px-8 lg:px-10 inter-font'
//         >
//             <div className='text-center mb-8'>
//                 <h1 className='text-black font-bold text-lg md:text-2xl lg:text-3xl font playFair-font'>
//                     Contact Us
//                 </h1>
//                 <p className='font-semibold text-[#1F2937] leading-relaxed mb-6 my-4'>
//                     We'd love to hear from you.
//                 </p>
//             </div>
//             <div className='flex flex-col lg:flex-row justify-between gap-10 text-black font-bold'>
//                 <div className='flex flex-col gap-5 text-black font-bold bg-white rounded-2xl shadow-2xl p-8 lg:bg-transparent lg:shadow-none lg:p-0 w-full lg:w-[38%]'>
//                     {
//                         data.map((data) => (
//                             <div className='flex gap-4 items-center lg:bg-white lg:rounded-xl lg:shadow-xl lg:p-5 ' key={data.id}>
//                                 <img className='size-5' src={data.img} alt="" />
//                                 <p className='text-[20px] pt-4 pb-4'>{data.p1}</p>
//                                 <p className='font-semibold text-[#1F2937] break-all'>{data.p2}</p>
//                             </div>
//                         ))
//                     }
//                     <div className='flex items-center gap-4'>
//                         <img className='size-8' src={team} alt="" />
//                         <p className='font-semibold text-[#1F2937] break-all'>Our team is always ready to help you. Feel free to contact us anytime.</p>
//                     </div>
//                 </div>
//                 <form
//                     onSubmit={formik.handleSubmit}
//                     className='flex flex-col gap-8 w-full lg:w-[58%] bg-white rounded-2xl shadow-2xl p-8'
//                 >
//                     <div className='flex flex-col gap-2'>
//                         <label
//                             htmlFor='name'
//                             className='font-semibold text-[#D4AF37] leading-relaxed text-lg'
//                         >
//                             Name
//                         </label>
//                         <input
//                             id='name'
//                             name='name'
//                             value={formik.values.name}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             type='text'
//                             className={`input w-full focus:shadow-2xl transition-all text-[#1F2937] bg-neutral-100 ${formik.touched.name && formik.errors.name
//                                 ? "input-error"
//                                 : "input-info"
//                                 }`} />
//                         {formik.touched.name && formik.errors.name && (
//                             <p className='text-red-500 text-sm'>
//                                 {formik.errors.name}
//                             </p>
//                         )}
//                     </div>
//                     <div className='flex flex-col gap-2'>
//                         <label
//                             htmlFor='email'
//                             className='font-semibold text-[#D4AF37] leading-relaxed text-lg'
//                         >
//                             Email
//                         </label>
//                         <input
//                             id='email'
//                             name='email'
//                             value={formik.values.email}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             type="email"
//                             className={`input w-full focus:shadow-2xl transition-all text-[#1F2937] bg-neutral-100 ${formik.touched.email && formik.errors.email
//                                 ? "input-error"
//                                 : "input-info"
//                                 }`} />
//                         {formik.touched.email && formik.errors.email && (
//                             <p className='text-red-500 text-sm'>
//                                 {formik.errors.email}
//                             </p>
//                         )}
//                     </div>
//                     <div className='flex flex-col gap-2'>
//                         <label
//                             htmlFor='country'
//                             className='font-semibold text-[#D4AF37] leading-relaxed text-lg'
//                         >
//                             Country
//                         </label>
//                         <select
//                             id='country'
//                             name='country'
//                             value={formik.values.country}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             className={`select w-full focus:shadow-2xl transition-all text-[#1F2937] bg-neutral-100 ${formik.touched.country && formik.errors.country
//                                 ? "select-error"
//                                 : "select-info"
//                                 }`}

//                         >
//                             <option value="" disabled>Select your country</option>
//                             {countries.map((country) => (
//                                 <option key={country.id} value={country.name} >{country.name}</option>
//                             ))
//                             }
//                         </select>
//                         {formik.touched.country && formik.errors.country && (
//                             <p className='text-red-500 text-sm'>
//                                 {formik.errors.country}
//                             </p>
//                         )}
//                     </div>
//                     <div className='flex flex-col gap-2'>
//                         <label
//                             htmlFor='phone'
//                             className='font-semibold text-[#D4AF37] leading-relaxed text-lg'
//                         >
//                             Phone
//                         </label>
//                         <input
//                             id='phone'
//                             name='phone'
//                             value={formik.values.phone}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             type='tel'
//                             className={`input w-full focus:shadow-2xl transition-all text-[#1F2937] bg-neutral-100 ${formik.touched.phone && formik.errors.phone
//                                 ? "input-error"
//                                 : "input-info"
//                                 }`} />
//                         {formik.touched.phone && formik.errors.phone && (
//                             <p className='text-red-500 text-sm'>
//                                 {formik.errors.phone}
//                             </p>
//                         )}
//                     </div>
//                     <div className='flex flex-col gap-2'>
//                         <label
//                             htmlFor='message'
//                             className='font-semibold text-[#D4AF37] leading-relaxed text-lg'
//                         >
//                             Message
//                         </label>
//                         <textarea
//                             id='message'
//                             name='message'
//                             value={formik.values.message}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             className={`textarea w-full focus:shadow-2xl transition-all text-[#1F2937] bg-neutral-100 ${formik.touched.message && formik.errors.message
//                                 ? "input-error"
//                                 : "input-info"
//                                 }`}
//                             rows={5}
//                         />
//                         {formik.touched.message && formik.errors.message && (
//                             <p className='text-red-500 text-sm'>
//                                 {formik.errors.message}
//                             </p>
//                         )}
//                     </div>
//                     <button type='submit' className='btn btn-info text-white font-semibold w-full'>Submit</button>
//                 </form>
//             </div>
//         </section>
//     )
// }

import React from 'react'
import {
    FaLocationDot,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaWhatsapp,
    FaUsers
} from 'react-icons/fa6'

export default function Contact({ language, theme }) {

    const isArabic = language === "ar"
    const isDark = theme === "dark"

    const data = [
        {
            id: 1,
            icon: <FaLocationDot />,
            p1: isArabic ? "العنوان:" : "Address:",
            p2: "Ain Sokhna, Egypt"
        },
        {
            id: 2,
            icon: <FaPhone />,
            p1: isArabic ? "الهاتف:" : "Phone:",
            p2: "01050838177"
        },
        {
            id: 3,
            icon: <FaEnvelope />,
            p1: isArabic ? "البريد الإلكتروني:" : "Email:",
            p2: "eslameldakhli189@gmail.com"
        },
        {
            id: 4,
            icon: <FaClock />,
            p1: isArabic ? "الاستقبال:" : "Reception:",
            p2: "24/7"
        },
    ]

    return (
        <section
            id='contact'
            name="contact"
            className={`
                w-full
                pt-10
                pb-20
                px-6 md:px-8 lg:px-10
                ${isDark ? "bg-[#081A2B]" : "bg-neutral-100"}
                ${isArabic ? "aref-font" : "inter-font"}
            `}
        >

            {/* Heading */}

            <div className='text-center mb-8'>

                <h1
                    className={`
                        font-bold
                        text-lg md:text-2xl lg:text-3xl
                        ${isDark ? "text-[#D4AF37]" : "text-[#102A43]"}
                    `}
                >
                    {isArabic ? "تواصل معنا" : "Contact Us"}
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
                    {isArabic ? (
                        <>
                            هل لديك سؤال أو تحتاج إلى مساعدة؟
                            <br />
                            نحن هنا لمساعدتك.
                        </>
                    ) : (
                        <>
                            Have a question or need assistance?
                            <br />
                            We're here to help.
                        </>
                    )}
                </p>

            </div>


            <div className={`
                flex flex-col lg:flex-row
                justify-between
                gap-10
                font-bold
                ${isDark ? "text-white" : "text-black"}
            `}>

                {/* Contact Information */}

                <div
                    className={`
                        flex flex-col gap-5
                        font-bold
                        rounded-2xl
                        p-5
                        lg:bg-transparent
                        lg:shadow-none
                        lg:p-0
                        w-full lg:w-[38%]
                        ${
                            isDark
                                ? "bg-[#102A43]"
                                : "bg-white shadow-2xl"
                        }
                    `}
                >

                    {
                        data.map((data) => (
                            <div
                                className={`
                                    flex gap-4 items-center
                                    break-normal
                                    whitespace-normal
                                    lg:rounded-xl
                                    lg:p-5
                                    ${
                                        isDark
                                            ? "lg:bg-[#102A43]"
                                            : "lg:bg-white lg:shadow-xl"
                                    }
                                `}
                                key={data.id}
                            >

                                <div className='text-[#D4AF37] text-xl shrink-0'>
                                    {data.icon}
                                </div>

                                <p className='text-lg md:text-xl pt-4 pb-4 shrink-0'>
                                    {data.p1}
                                </p>

                                {
                                    data.id === 2 ? (
                                        <a
                                            href='tel:01050838177'
                                            className={`
                                                font-semibold
                                                break-normal
                                                whitespace-normal
                                                ${
                                                    isDark
                                                        ? "text-gray-200"
                                                        : "text-[#1F2937]"
                                                }
                                            `}
                                        >
                                            {data.p2}
                                        </a>
                                    ) : data.id === 3 ? (
                                        <a
                                            href='mailto:eslameldakhli189@gmail.com'
                                            className={`
                                                font-semibold
                                                break-all
                                                ${
                                                    isDark
                                                        ? "text-gray-200"
                                                        : "text-[#1F2937]"
                                                }
                                            `}
                                        >
                                            {data.p2}
                                        </a>
                                    ) : (
                                        <p
                                            className={`
                                                font-semibold
                                                break-normal
                                                whitespace-normal
                                                ${
                                                    isDark
                                                        ? "text-gray-200"
                                                        : "text-[#1F2937]"
                                                }
                                            `}
                                        >
                                            {data.p2}
                                        </p>
                                    )
                                }

                            </div>
                        ))
                    }


                    {/* WhatsApp */}

                    <a
                        href='https://wa.me/201050838177'
                        target='_blank'
                        rel='noreferrer'
                        className={`
                            flex gap-4 items-center
                            lg:rounded-xl
                            lg:p-5
                            ${
                                isDark
                                    ? "lg:bg-[#102A43]"
                                    : "lg:bg-white lg:shadow-xl"
                            }
                        `}
                    >

                        <FaWhatsapp className='text-[#D4AF37] text-xl shrink-0' />

                        <p className='text-lg md:text-xl pt-4 pb-4 shrink-0'>
                            {isArabic ? "واتساب:" : "WhatsApp:"}
                        </p>

                        <p
                            className={`
                                font-semibold
                                break-all
                                ${
                                    isDark
                                        ? "text-gray-200"
                                        : "text-[#1F2937]"
                                }
                            `}
                        >
                            01050838177
                        </p>

                    </a>


                    {/* Team Message */}

                    <div className='flex items-center gap-4'>

                        <FaUsers className='text-[#D4AF37] text-xl shrink-0' />

                        <p
                            className={`
                                font-semibold
                                text-base md:text-lg
                                leading-relaxed
                                break-normal
                                whitespace-normal
                                ${
                                    isDark
                                        ? "text-gray-300"
                                        : "text-[#1F2937]"
                                }
                            `}
                        >
                            {
                                isArabic
                                    ? "فريقنا دائمًا على استعداد لمساعدتك. لا تتردد في التواصل معنا في أي وقت."
                                    : "Our team is always ready to help you. Feel free to contact us anytime."
                            }
                        </p>

                    </div>

                </div>


                {/* Location */}

                <div
                    className={`
                        w-full lg:w-[58%]
                        rounded-2xl
                        shadow-2xl
                        p-8
                        ${
                            isDark
                                ? "bg-[#102A43]"
                                : "bg-white"
                        }
                    `}
                >

                    <div className='flex items-center gap-4 mb-6'>

                        <FaLocationDot className='text-[#D4AF37] text-2xl shrink-0' />

                        <div>

                            <h2
                                className={`
                                    font-bold
                                    text-xl
                                    ${
                                        isDark
                                            ? "text-white"
                                            : "text-black"
                                    }
                                `}
                            >
                                {isArabic ? "موقعنا" : "Our Location"}
                            </h2>

                            <p
                                className={`
                                    font-semibold
                                    ${
                                        isDark
                                            ? "text-gray-300"
                                            : "text-[#1F2937]"
                                    }
                                `}
                            >
                                {isArabic
                                    ? "العين السخنة، مصر"
                                    : "Ain Sokhna, Egypt"
                                }
                            </p>

                        </div>

                    </div>


                    <div className='w-full h-[300px] rounded-xl overflow-hidden'>

                        <iframe
                            title='Ain Sokhna, Egypt'
                            src='https://www.google.com/maps?q=Ain+Sokhna,+Egypt&output=embed'
                            className='w-full h-full border-0'
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        />

                    </div>


                    <a
                        href='https://www.google.com/maps/search/?api=1&query=Ain+Sokhna+Egypt'
                        target='_blank'
                        rel='noreferrer'
                        className='btn btn-info text-white font-semibold w-full mt-5'
                    >
                        {isArabic
                            ? "عرض الموقع على خرائط جوجل"
                            : "View on Google Maps"
                        }
                    </a>

                </div>

            </div>


            {/*
            ==============================
                OLD CONTACT FORM
            ==============================

            Keep the old Contact form here for later.

            The original form, Formik logic, Yup validation,
            countries array, and toast logic are intentionally
            commented out for now.

            ==============================
            */}

        </section>
    )
}
