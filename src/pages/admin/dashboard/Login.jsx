import React from 'react'
import logo from '../../../images/login/Logo.jpeg'
import { useFormik } from 'formik'
import * as Yup from "yup"
import toast from 'react-hot-toast'

export default function Login() {
    const loginSchema = Yup.object({
        email: Yup.string()
            .required("Email is required")
            .email("Enter a valid email"),
        password: Yup.string()
            .required("Password is required")
    })
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: (values, { resetForm }) => {
            const oldLogin = localStorage.getItem("logins")
            const logins = JSON.parse(oldLogin) || []
            logins.push(values)
            const allLogin = JSON.stringify(logins)
            localStorage.setItem("logins", allLogin)
            resetForm();
            toast.success("Loged in successfully!")
            console.log(values)
        }
    })
    return (
        <section className='w-full h-screen flex justify-center items-center bg-neutral-100 text-black px-8 md:px-0'>
            <form onSubmit={formik.handleSubmit} className='w-full md:max-w-lg lg:max-w-xl flex flex-col gap-6 items-center bg-white rounded-2xl shadow-2xl p-8'>
                <img src={logo} className='w-21 h-21 md:w-28 md:h-28 rounded-2xl' alt="" />
                <h1 className='text-2xl md:text-3xl font-bold leading-relaxed'>Admin Login</h1>
                <div className='flex flex-col gap-8 w-full'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='font-semibold leading-relaxed text-lg text-[#1F2937]'>Email</label>
                        <input
                            name='email'
                            id='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            className={`input md:w-full bg-neutral-100 placeholder:text-[#1F2937] ${formik.touched.email && formik.errors.email
                                ? "input-error"
                                : "input-info"
                                }`}
                            placeholder='Enter a valid email'
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className='text-red-500 text-sm'>
                                {formik.errors.email}
                            </p>
                        )}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='font-semibold leading-relaxed text-lg text-[#1F2937]'>Password</label>
                        <input
                            name='password'
                            id='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                            className={`input md:w-full bg-neutral-100 placeholder:text-[#1F2937] ${formik.touched.password && formik.errors.password
                                ? "input-error"
                                : "input-info"
                                }`}
                            placeholder='Please enter your passwor'
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className='text-red-500 text-sm'>
                                {formik.errors.password}
                            </p>
                        )}
                    </div>
                </div>
                <button type='submit' className='text-lg btn btn-info btn-outline text-black w-full mt-8 hover:text-white font-bold'>Login</button>
            </form>
        </section>
    )
}
