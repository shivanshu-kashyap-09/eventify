import React from 'react'
import { Check } from "lucide-react"
import { MdCurrencyRupee } from "react-icons/md";

const Platinum = () => {
  return (
    <div className=" rounded-2xl shadow-md h-auto w-70 p-6 flex flex-col justify-between bg-[#e9f5f9]">


      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl font-extrabold text-[#3ba1c5]">Standard Plan</p>
        <p className="text-gray-600 text-sm font-semibold">Price Range</p>
       <p className="flex items-center  text-2xl font-extrabold text-black">
  <MdCurrencyRupee  className='font-extrabold'/>399 - <MdCurrencyRupee />599
</p>

      </div>


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

export default Platinum