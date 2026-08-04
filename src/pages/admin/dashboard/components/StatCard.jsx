import React from 'react'

export default function StatCard({ title, number, icon: Icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 grid gap-5">
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#102A43]" />

      <h2 className="text-base md:text-lg text-gray-600">
        {title}
      </h2>

      <p className="text-2xl md:text-3xl font-bold">
        {number}
      </p>
    </div>
  );
}
