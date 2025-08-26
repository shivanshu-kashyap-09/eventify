import React, { useState } from "react";
import Slider from "react-slick";
import { CiSliderHorizontal } from "react-icons/ci";
import Silver from "../components/plan/Silver";
import Gold from "../components/plan/Gold";
import Platinum from "../components/plan/Platinum";
import Customize from "../components/plan/Customize";

const Plan = () => {
  const [showCustomize, setShowCustomize] = useState(false);

  // Slider settings for mobile
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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

      {/* Mobile Slider */}
      <div className="mt-10 px-4 sm:px-6 lg:px-8 md:hidden ">
        <Slider {...settings}>
          <div className="flex justify-center">
            <div className="w-full max-w-[300px] h-full">
              <Silver />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-[300px] h-full">
              <Gold className="shadow-2xl bg-[#e0f7fa]" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-[300px] h-full">
              <Platinum />
            </div>
          </div>
        </Slider>
      </div>

      {/* Tablet & Desktop Grid */}
      <div className="hidden md:flex justify-center items-end mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-6 pt-8">
        {/* Silver Card */}
        <div className="z-0 md:scale-95 lg:scale-100">
          <Silver />
        </div>

        {/* Gold Card */}
        <div className="z-10 md:scale-105 lg:scale-110 xl:scale-115">
          <Gold className="shadow-2xl bg-[#e0f7fa]" />
        </div>

        {/* Platinum Card */}
        <div className="z-0 md:scale-95 lg:scale-100">
          <Platinum />
        </div>
      </div>

      {/* Customize Button */}
      <div className="flex flex-col-reverse sm:flex-col items-center mt-10 px-4 text-center">
        <p className="text-sm sm:text-base text-gray-700 max-w-xl md:text-lg mt-10">
          Need something different? Create a custom plan tailored to your specific needs.
        </p>
        <button
          onClick={() => setShowCustomize(true)}
          style={{ backgroundColor: "#94e4ff" }}
          className="flex items-center justify-center gap-2 text-black py-3 px-6 rounded-lg shadow-md font-semibold w-full sm:w-auto sm:min-w-[220px] text-center mt-6"
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
