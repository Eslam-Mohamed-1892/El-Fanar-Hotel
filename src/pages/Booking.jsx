import React from 'react'
import king from '../images/booking/king.jpg'
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

export default function Booking() {
  const bookingSchema = Yup.object({
    checkIn: Yup.date()
      .required("Check In date is required"),

    checkOut: Yup.date()
      .required("Check Out date is required")
      .min(
        Yup.ref("checkIn"),
        "Check Out must be after Check In"
      ),

    guests: Yup.number()
      .required("Please enter number of guests")
      .min(1, "Minimum 1 guest")
      .max(6, "Maximum 10 guests"),

    roomType: Yup.string()
      .required("Please select a room"),

    request: Yup.string()
      .max(300, "Maximum 300 characters"),
  });

  const formik = useFormik({
    initialValues: {
      checkIn: "",
      checkOut: "",
      guests: "",
      roomType: "",
      request: "",
    },

    validationSchema: bookingSchema,

    onSubmit: (values) => {
      toast.success("Booking request sent successfully!");
      console.log(values);
    },
  });
  return (
    <section
      id='booking'
      name="booking"
      className='w-full bg-neutral-100 py-10 px-6 md:px-8 lg:px-10'
    >
      <div className='text-center'>
        <h1 className='font-bold text-lg md:text-2xl lg:text-3xl font playFair-font text-[#D4AF37]'>Book Your Stay</h1>
        <p className='font-semibold text-[#1F2937] leading-relaxed mb-6 my-4'>Choose your dates and reserve now.</p>
      </div>
      <div className='flex gap-10 lg:gap-16'>
        <form
          onSubmit={formik.handleSubmit}
          className='w-full lg:w-[45%] flex flex-col gap-5 text-[#1F2937] bg-white rounded-3xl shadow-2xl p-8'
        >
          <div className='flex flex-col gap-3'>
            <label htmlFor="checkIn" className='font-semibold text-[#1F2937] leading-relaxed'>Check In</label>
            <input
              id='checkIn'
              type="date"
              name='checkIn'
              onBlur={formik.handleBlur}
              value={formik.values.checkIn}
              onChange={formik.handleChange}
              className="input input-info w-full bg-neutral-100"
            />
            {formik.touched.checkIn && formik.errors.checkIn && (
              <p className="text-red-500 text-sm">
                {formik.errors.checkIn}
              </p>
            )}
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor="checkOut" className='font-semibold text-[#1F2937] leading-relaxed'>Check Out</label>
            <input
              id='checkOut'
              type="date"
              name='checkOut'
              onBlur={formik.handleBlur}
              value={formik.values.checkOut}
              onChange={formik.handleChange}
              className="input input-info w-full bg-neutral-100"
            />
            {formik.touched.checkOut && formik.errors.checkOut && (
              <p className="text-red-500 text-sm">
                {formik.errors.checkOut}
              </p>
            )}
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor="guests" className='font-semibold text-[#1F2937] leading-relaxed'>Guests</label>
            <input
              id='guests'
              type="number"
              name='guests'
              onBlur={formik.handleBlur}
              min='1'
              max='10'
              value={formik.values.guests}
              onChange={formik.handleChange}
              className="input input-info w-full focus:shadow-2xl transition-all text-black font-bold bg-neutral-100 placeholder:text-black placeholder:font-semibold"
            />
            {formik.touched.guests && formik.errors.guests && (
              <p className="text-red-500 text-sm">
                {formik.errors.guests}
              </p>
            )}
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor="roomType" className='font-semibold text-[#1F2937] leading-relaxed'>Room Type</label>
            <select
              id='roomType'
              name='roomType'
              onBlur={formik.handleBlur}
              value={formik.values.roomType}
              onChange={formik.handleChange}
              className="select select-info w-full focus:shadow-2xl transition-all text-black font-bold bg-neutral-100 placeholder:text-black placeholder:font-semibold"
            >
              <option value="" disabled>
                Select your room
              </option>
              <option value="Single">
                Single
              </option>
              <option value="Double">
                Double
              </option>
              <option value='Triple'>
                Triple
              </option>
              <option value='Family'>
                Family
              </option>
            </select>
            {formik.touched.roomType && formik.errors.roomType && (
              <p className="text-red-500 text-sm">
                {formik.errors.roomType}
              </p>
            )}
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor="request" className='font-semibold text-[#1F2937] leading-relaxed'>Special Request</label>
            <textarea
              id='request'
              name='request'
              onBlur={formik.handleBlur}
              value={formik.values.request}
              onChange={formik.handleChange}
              className="textarea textarea-info w-full focus:shadow-2xl transition-all text-black font-bold bg-neutral-100 placeholder:text-black placeholder:font-semibold mb-5"
              rows={5}
            />
            {formik.touched.request && formik.errors.request && (
              <p className="text-red-500 text-sm">
                {formik.errors.request}
              </p>
            )}
          </div>
          <button type='submit' className='btn btn-info text-white font-semibold w-full'>Book Now</button>
        </form>
        <div className='hidden lg:flex lg:w-[55%]'>
          <img
            src={king}
            className='rounded-3xl overflow-hidden shadow-2xl object-cover hover:scale-105 lg:w-full h-155 transition-all duration-500'
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
