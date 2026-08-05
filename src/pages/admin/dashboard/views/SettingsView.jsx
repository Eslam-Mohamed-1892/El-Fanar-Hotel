import React from 'react'

export default function SettingsView() {
  return (
    <div className='flex flex-col gap-5 md:gap-6 lg:gap-7 text-[#102A43]'>
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#102A43] text-center inter-font">Setting</h1>
      <div className='bg-white rounded-2xl shadow-xl flex flex-col gap-3 p-5 font-semibold w-full lg:max-w-md'>
        <h1 className="text-lg font-semibold text-[#102A43] border-b pb-2">Admin Profile</h1>
        <h1>
          Name:
          <span className="text-black font-semibold"> Eslam Mohamed
          </span>
        </h1>
        <h1>
          Email:
          <span className="text-black font-semibold break-all"> eslameldakhli189@gmail.com</span>
        </h1>
        <h1>
          Role:
          <span className="text-black font-semibold"> Receptionist</span>
        </h1>
        <button className='btn btn-info btn-outline text-[#102A43] active:text-white text-sm md:text-base'>Edit Profile</button>
      </div>
      <div className='bg-white rounded-2xl shadow-xl flex flex-col gap-3 p-5 font-semibold w-full lg:max-w-md'>
        <h1 className="text-lg font-semibold text-[#102A43] border-b pb-2"> Hotel Information</h1>
        <h1>
          Hotel Name:
          <span className="text-black font-semibold"> El Fanar hotel
          </span>
        </h1>
        <h1>
          Phone:
          <span className="text-black font-semibold break-all"> 01050838177</span>
        </h1>
        <h1>
          Address:
          <span className="text-black font-semibold"> Ain skhna, Egypt</span>
        </h1>
        <button className='btn btn-info btn-outline text-[#102A43] active:text-white text-sm md:text-base'>Edit hotel info</button>
      </div>
      <div className='bg-white rounded-2xl shadow-xl flex flex-col gap-3 p-5 font-semibold w-full lg:max-w-md'>
        <h1 className="text-lg font-semibold text-[#102A43] border-b pb-2">Preferences</h1>
        <h1>Dark Mode: </h1>
        <h1>Language: </h1>
      </div>
      <div className='bg-white rounded-2xl shadow-xl flex flex-col gap-3 p-5 w-full lg:max-w-md'>
        <h1 className="text-lg font-semibold text-[#102A43] border-b pb-2">Account</h1>
        <h1 className='text-black font-semibold'>elfanarhotel123@gmail.com</h1>
        <button className='btn btn-info btn-outline text-[#102A43] active:text-white text-sm md:text-base'>Change password</button>
      </div>
      <button className='btn btn-outline btn-error text-[#102A43] active:text-white text-sm md:text-base w-full lg:max-w-md'>Logout</button>
    </div>
  )
}
