import React, { useState } from "react";
import { CalendarDays, ListChecks, BookOpen, CreditCard } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Selected an Event",
    desc: "Choose an arbitrary event according to you.",
    icon: <CalendarDays size={32} />,
  },
  {
    id: 2,
    title: "Choose a Service",
    desc: "Choose services you want and easily add or reduce according to your budget.",
    icon: <ListChecks size={32} />,
  },
  {
    id: 3,
    title: "Click the Book Event",
    desc: "After choosing the event and services press the book button.",
    icon: <BookOpen size={32} />,
  },
  {
    id: 4,
    title: "Payment",
    desc: "You can easily pay with any UPI.",
    icon: <CreditCard size={32} />,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className="py-4 px-4 sm:px-6 md:px-12 lg:px-30 bg-gradient-to-b from-white to-blue-50 w-full">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-15">
        <span className="px-3 py-1 text-xs sm:text-xl rounded-full bg-blue-100 text-blue-700 font-medium">
          How it works
        </span>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">
          How Our <span className="text-blue-600">website</span> Works
        </h2>
        <p className="mt-3 text-gray-600 text-base sm:text-lg font-medium">
          Our <span className="text-blue-700">Events and services are simple</span> to choose and book events
        </p>
      </div>

      {/* Steps */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`relative flex flex-col items-center text-center p-6 rounded-2xl shadow-md transition-all duration-300 cursor-pointer w-full ${
              activeStep === step.id
                ? "bg-white border-2 text-blue-600 shadow-lg scale-105"
                : "bg-white border border-gray-200 hover:shadow-lg hover:scale-105"
            }`}
          >
            {/* Step Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span
                className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow ${
                  activeStep === step.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-blue-600"
                }`}
              >
                Step {step.id}
              </span>
            </div>

            {/* Icon */}
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full mb-4 ${
                activeStep === step.id
                  ? "bg-gradient-to-tr from-blue-400 to-blue-500 text-white"
                  : "bg-blue-100 text-blue-500"
              }`}
            >
              {step.icon}
            </div>

            {/* Title & Desc */}
            <h3 className="text-base sm:text-xl  text-blue-800 font-bold">
              {step.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600 font-sans">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;