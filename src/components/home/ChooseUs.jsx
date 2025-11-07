"use client";

import React from "react";
import Feature1 from "../../assets/WhyChooseUsImg/Feature1img.png";
import Feature2 from "../../assets/WhyChooseUsImg/Feature2img.png";
import Feature3 from "../../assets/WhyChooseUsImg/Feature3img.png";
import Feature4 from "../../assets/WhyChooseUsImg/Feature4img.png";
import Feature5 from "../../assets/WhyChooseUsImg/Feature5img.png";

const reasons = [
  {
    number: "*",
    icon: Feature1, 
    title: "GUARANTEED BOOKINGS",
    description: "Secure your vendor and date instantly with verified scheduling.",
  },
  {
    number: "*",
    icon: Feature2, 
    title: "SECURE PAYMENTS",
    description: "Multiple verified payment gateways for worry-free transactions.",
  },
  {
    number: "*",
    icon: Feature3, 
    title: "INSTANT SUPPORT",
    description: "24/7 dedicated planning assistance and quick vendor communication.",
  },
  {
    number: "*",
    icon: Feature4, 
    title: "VETTED VENDOR QUALITY",
    description: "Every vendor is certified and reviewed for premium service delivery.",
  },
  {
    number: "*",
    icon: Feature5, 
    title: "EASY CANCELLATION",
    description: "Transparent and hassle-free cancellation policies (subject to vendor agreement).",
  },
];

const ChooseUs = () => {
  return (
    <section className="py-0 md:pt-10 md:pb-30 bg-gradient-to-r from-sky-100 via-white to-sky-100 mt-0 mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h4 className="text-2xl md:text-3xl font-bold text-blue-800 tracking-wide">
            WHY CHOOSE US
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-extrabold text-gray-800 mt-2">
            Your Dream Event, Simplified & Stress-Free
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12 md:mt-20">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-50 right-0 h-0.5 bg-blue-500 hidden md:block w-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 relative mx-27">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center md:h-[400px]"
              >
                {/* Vertical line */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-500
                    ${index % 2 === 0 ? "bottom-1/2 h-12 md:h-15" : "top-1/2 h-12 md:h-15"}
                    hidden md:block`}
                ></div>

                {/* Circle */}
                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow">
                  {reason.number}
                </div>

                {/* Feature box */}
                <div
                  className={`relative w-full md:w-64 lg:w-70 h-auto md:h-44 bg-gradient-to-b from-sky-200 to-sky-100 hover:border-2 border-blue-400 hover:shadow-sky-300 rounded-2xl p-4 md:p-3
                    transition hover:scale-105 hover:shadow-lg
                    ${
                      index % 2 === 0
                        ? "mt-4 md:bottom-[calc(53%+3rem)] md:top-auto"
                        : "mt-4 md:top-[calc(49%+3rem)] md:bottom-auto"
                    } md:absolute md:left-1/2 md:transform md:-translate-x-1/2`}
                >
                  {/* Image icon */}
                  <div className="flex justify-center mb-2 mt-2">
                    <img
                      src={reason.icon}
                      alt={reason.title}
                      className="w-16 h-16 md:w-18 md:h-18 object-contain"
                    />
                  </div>

                  {/* Heading */}
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 text-center">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-[13px] text-gray-800 px-2 md:px-3 text-center">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;