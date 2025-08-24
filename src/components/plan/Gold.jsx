import React from 'react'
import { Check } from "lucide-react"
import { MdCurrencyRupee } from "react-icons/md";

const Gold = () => {
  return (
    <div className="rounded-2xl shadow-md h-[420px] w-[300px] p-6 flex flex-col justify-between bg-[#eed9d9]">
      
      {/* Heading */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl font-extrabold text-[#3ba1c5]">Budget Plan</p>
        <p className="text-gray-600 text-sm font-semibold">Price Range</p>
        <p className="flex items-center text-2xl font-extrabold text-black">
          <MdCurrencyRupee className="font-extrabold" />99 - <MdCurrencyRupee />299
        </p>
      </div>

      {/* Features */}
      <div className="mt-2 space-y-3 ml-6">
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
          style={{ backgroundColor: "#f2adad" }}
          className="text-black py-2 rounded-lg shadow-md w-[300px]"
        >
          SELECT
        </button>
      </div>
    </div>
  )
}

export default Gold
