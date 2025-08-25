import React from 'react'
import { Check } from "lucide-react"
import { MdCurrencyRupee } from "react-icons/md";

const Platinum = () => {
  return (
    <div className="rounded-2xl lg:rounded-l-none shadow-md h-auto w-72 p-6 flex flex-col justify-between 
                    bg-gradient-to-bl from-sky-200 via-sky-50 to-sky-200 
                    hover:shadow-2xl border-2 border-blue-800 transition">
      
      {/* Heading */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl font-extrabold text-[#3ba1c5]">STANDARD PLAN</p>
        <p className="text-gray-600 text-sm font-semibold">Price Range</p>
        <p className="flex items-center text-2xl font-extrabold text-black">
          <MdCurrencyRupee className="font-extrabold" />399 - <MdCurrencyRupee />599
        </p>
      </div>

      {/* Features */}
      <div className="mt-6 space-y-3 ml-6">
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-400" />
          <p>Premium event setup</p>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-400" />
          <p>Custom Decoration</p>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-400" />
          <p>Priority support</p>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-400" />
          <p>Up to 150 guests</p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 flex justify-center border-2 border-sky-500 rounded-lg">
        <button
          style={{ backgroundColor: "#cef6ffff" }}
          className="text-black py-2 rounded-lg shadow-md w-[260px] sm:w-[300px]"
        >
          EXPLORE
        </button>
      </div>
    </div>
  )
}

export default Platinum
