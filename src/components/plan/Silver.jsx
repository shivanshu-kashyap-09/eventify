import React from "react";
import { Check } from "lucide-react";
import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Silver = ({eventName}) => {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-2xl sm:rounded-r-none shadow-md 
                 h-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px]
                 p-6 flex flex-col justify-between 
                 bg-gradient-to-br from-sky-200 via-sky-50 to-sky-200 
                 border-2 border-blue-800 transition"
    >
      {/* Heading */}
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#3ba1c5]">
          LUXURY PLAN
        </p>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base font-semibold">
          Price Range
        </p>
        <p className="flex items-center text-xl sm:text-2xl md:text-3xl font-extrabold text-black">
          <MdCurrencyRupee className="font-extrabold" />599 - <MdCurrencyRupee />1299
        </p>
      </div>

      {/* Features */}
      <div className="mt-6 space-y-2 sm:space-y-3 md:space-y-4 ml-3 sm:ml-6">
        {[
          "Luxury event setup",
          "Designer Decoration",
          "24/7 Dedicated support",
          "Unlimited guests",
        ].map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm sm:text-base">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <p>{feature}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-6 flex justify-center">
        <button
          style={{ backgroundColor: "#cef6ffff" }}
          className="text-black py-2 px-4 sm:px-6 rounded-lg shadow-md 
                     w-full sm:w-[260px] md:w-[280px] lg:w-[300px] border-2 border-sky-500"
                     onClick={() => {navigate(`/event/${eventName}`)}}
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default Silver;
