import React, { useState } from "react";
import { CiSliderHorizontal } from "react-icons/ci";
import Silver from "../components/plan/Silver";
import Gold from "../components/plan/Gold";
import Platinum from "../components/plan/Platinum";
import Customize from "../components/plan/Customize";

const Plan = () => {
  const [showCustomize, setShowCustomize] = useState(false);

  return (
    <>
      {/* Heading Section */}
      <div className="mt-2 px-4 sm:px-6 lg:px-8">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-500">
          PLANS
        </p>
        <p className="pt-2 text-base sm:text-lg md:text-xl text-center italic text-gray-700 max-w-2xl mx-auto">
          Choose the perfect plan for your event organizing needs
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid gap-0 mt-20 px-4 sm:px-6 lg:px-8
                   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                   max-w-7xl mx-auto place-items-center"
      >
        <Silver />
        <Gold className="scale-105 shadow-2xl bg-[#e0f7fa]" />
        <Platinum />
      </div>

      {/* Customize Button */}
      <div className="flex flex-col-reverse sm:flex-col items-center mt-6 px-4 text-center ">
        <p className="text-sm sm:text-base text-gray-700 max-w-xl md:text-lg mt-6">
          Need something different? Create a custom plan tailored to your specific needs.
        </p>
        <button
          onClick={() => setShowCustomize(true)}
          style={{ backgroundColor: "#94e4ff" }}
          className="flex items-center justify-center gap-2 text-black 
                     py-3 px-6 rounded-lg shadow-md font-semibold 
                     w-full sm:w-auto sm:min-w-[220px] text-center mt-6"
        >
          <CiSliderHorizontal size={22} />
          Customize Plan
        </button>
      </div>

      {/* Show Form */}
      {showCustomize && <Customize onClose={() => setShowCustomize(false)} />}
    </>
  );
};

export default Plan;
