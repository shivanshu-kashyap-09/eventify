import React from "react";
import bg from "../../assets/bg.jpg";
import dj from "../../assets/dj.jpg";

const About = () => {
  return (
    <div className="w-full">
      {/* ✅ Desktop / Laptop / Tablet View */}
      <div
        className="hidden md:block w-full py-12"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Heading */}
        <div className="text-5xl lg:text-6xl text-black font-extrabold text-center drop-shadow-lg tracking-wide mb-10">
          <span className="text-blue-700">AB</span>
          <span className="text-white">OUT </span>
          <span className="text-blue-700">US</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-[60%_40%] w-full px-8 lg:px-20 gap-6 lg:gap-10">
          {/* Content Part */}
          <div className="text-gray-800 rounded-2xl shadow-xl p-6 lg:p-8 leading-relaxed">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Welcome to <span className="text-blue-700">Eventify</span>
            </h1>
            <h4 className="text-lg lg:text-xl text-gray-800 font-semibold mb-6">
              Your one-stop{" "}
              <span className="text-blue-700">destination for creating</span>{" "}
              unforgettable experiences.
            </h4>

            <div className="space-y-4 lg:space-y-6 text-justify px-4 lg:px-20">
              {/* ✅ iPad Mini - Short */}
              <p className="font-semibold text-base md:inline lg:hidden">
                At Eventify, we believe that every occasion deserves to be
                celebrated with creativity and passion. We provide event
                solutions tailored to unique requirements. Our philosophy is
                simple — attention to detail.
              </p>

              {/* ✅ iPad Air (slightly longer content) */}
              <p className="font-semibold text-base hidden md:inline lg:hidden">
                At Eventify, we believe that every occasion deserves to be
                celebrated with creativity and passion. We provide event
                solutions tailored to unique requirements. Our philosophy is
                simple — attention to detail. From décor to hospitality, every
                element is carefully managed for a smooth celebration.
              </p>

              {/* ✅ Laptop/Desktop - Full */}
              <p className="font-semibold text-base hidden lg:block">
                At Eventify, we believe that every occasion deserves to be
                celebrated with creativity and passion. We provide a wide range
                of event solutions tailored to suit the unique requirements of
                each client. Our philosophy is simple — attention to detail. We
                ensure every element, from the decoration to the hospitality,
                serves the purpose of your event, making each celebration truly
                unique and memorable.
              </p>

              {/* Second Paragraph (different lengths) */}
              <p className="font-semibold text-base md:inline lg:hidden">
                Eventify specializes in cultural celebrations, weddings,
                concerts, birthdays, and social gatherings that leave a mark of
                elegance and joy.
              </p>

              <p className="font-semibold text-base hidden md:inline lg:hidden">
                Eventify specializes in weddings, concerts, birthdays, and
                cultural gatherings. Our services respect your budget while
                maintaining quality, ensuring an elegant and joyful experience.
              </p>

              <p className="font-semibold text-base hidden lg:block">
                Eventify specializes in cultural celebrations, weddings,
                concerts, birthdays, and social gatherings that leave a mark of
                elegance and joy. Our customized services ensure that your
                budget is respected while still achieving the highest quality
                standards. You can rest assured that your event will not only
                meet but exceed expectations, creating experiences that remain
                in the hearts of your guests forever.
              </p>

              <p className="mt-6 text-center text-blue-700 font-bold text-xl lg:text-3xl">
                Turning your vision into unforgettable memories.
              </p>
            </div>
          </div>

          {/* ✅ Image Part */}
          <div className="hidden md:flex items-center justify-center">
            <img
              src="https://img.freepik.com/free-vector/appointment-booking-with-woman-smartphone_23-2148557484.jpg?t=st=1758183705~exp=1758187305~hmac=adf0a52bff68ebb20853141c06e2ea5276c16d7afb7ee33de3f09d6105bfccf4"
              alt="Event Showcase"
              className="rounded-2xl shadow-2xl w-full md:h-[90vh] lg:h-[90vh] object-cover opacity-90"
            />
          </div>
        </div>
      </div>

      {/* ✅ Mobile View */}
      <div className="block md:hidden px-4 py-8">
        {/* Heading */}
        <div className="text-4xl text-blue-700 font-extrabold text-center mb-6">
          ABOUT US
        </div>

        {/* Content */}
        <div className="text-gray-800 rounded-xl shadow-lg p-4 leading-relaxed">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Welcome to <span className="text-blue-700">Eventify</span>
          </h1>
          <h4 className="text-lg text-gray-800 font-semibold mb-4">
            Your one-stop{" "}
            <span className="text-blue-700">destination for creating</span>{" "}
            unforgettable experiences.
          </h4>

          <p className="font-semibold mb-4 text-justify">
            At Eventify, we believe that every occasion deserves to be celebrated
            with creativity and passion. We provide event solutions tailored to
            suit your needs.
          </p>

          <p className="font-semibold text-justify">
            Eventify specializes in weddings, concerts, birthdays, and cultural
            celebrations that create lasting memories.
          </p>

          <p className="mt-4 text-center text-blue-700 font-bold text-xl">
            Turning your vision into unforgettable memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
