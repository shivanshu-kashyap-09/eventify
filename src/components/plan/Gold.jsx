import React from 'react'
import { Check } from "lucide-react"

import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Gold = ({eventName}) => {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-2xl shadow-xl 
        h-auto sm:h-[424px] w-[90%] sm:w-[300px] 
        p-6 flex flex-col justify-between
        bg-gradient-to-b from-blue-900 via-sky-500 to-blue-900
        border border-[#e7dbda] 
        scale-100 sm:scale-110 z-10"
    >
      {/* Line with Popular text */}
      <div className="relative flex items-center w-full mx-auto mb-4">
        <div className="w-full"></div>
        <span
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          bg-[#b1f2f8ff] px-4 py-1 rounded-full text-sm font-bold text-gray-700 
          bottom-0.2  border border-blue-900"
        >
          Popular
        </span>
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl font-extrabold text-[#b1f2f8ff]">BUDGET PLAN</p>
        <p className="text-gray-600 text-sm text-white font-semibold">Price Range</p>
        <p className="flex items-center text-2xl font-extrabold text-black">
          <MdCurrencyRupee className="font-extrabold" />99 - <MdCurrencyRupee />299
        </p>
      </div>

      {/* Features */}
      <div className="text-sky-100 mt-2 space-y-3 ml-6">
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-400" />
          <p>Basic event setup</p>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-400" />
          <p>Standard Decoration</p>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-400" />
          <p>Email support</p>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-400" />
          <p>Up to 50 guests</p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 flex justify-center">
        <button
          style={{ backgroundColor: "#35e9f9ff" }}
          className="text-black py-2 rounded-lg shadow-md w-full sm:w-[250px] hover:bg-white"
          onClick={() => {navigate(`/event/${eventName}`)}}
        >
          EXPLORE
        </button>
      </div>
    </div>
  )
}

export default Gold