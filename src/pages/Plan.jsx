import React from "react";
import Customize from "../components/plan/Customize";
import Silver from "../components/plan/Silver";
import Gold from "../components/plan/Gold";
import Platinum from "../components/plan/Platinum";

const Plan = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="mt-6 px-4 sm:px-6 lg:px-8">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#3ba1c5]">
          Plans
        </p>
        <p className="pt-3 text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto">
          Choose the perfect plan for your event organizing needs
        </p>
      </div>

      {/* Responsive Grid Container */}
      <div
        className="grid gap-6 sm:gap-8 mt-10 px-4 sm:px-6 lg:px-8
                   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                   max-w-7xl mx-auto place-items-center"
      >
        {/* Side Cards */}
        <Silver />

        {/* Middle Highlighted Card */}
        <Gold className="scale-105 shadow-2xl bg-[#e0f7fa]" />

        {/* Side Card */}
        <Platinum />
      </div>

      {/* Customize Button */}
      <div className="mt-10 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full sm:w-auto">
          <Customize />
        </div>
      </div>
    </>
  );
};

export default Plan;
