import React from 'react'

export default function StatCard({ title, number, icon: Icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-6">
      <Icon className="w-6 h-6 text-[#102A43]" />

      <h2 className="text-sm text-gray-600">
        {title}
      </h2>

      <p className="text-2xl font-bold">
        {number}
      </p>
    </div>
  );
}
