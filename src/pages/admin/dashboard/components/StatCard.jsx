import React from 'react'

export default function StatCard({ title, number, icon: Icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 grid gap-5 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#102A43]" />
      </div>

      <h2 className="text-base md:text-lg text-gray-600">
        {title}
      </h2>

      <p className="text-2xl md:text-3xl font-bold">
        {number}
      </p>
    </div>
  );
}
