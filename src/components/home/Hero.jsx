import React from "react";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh]">
      {/* Background video */}
      <video
        src="https://videocdn.cdnpk.net/videos/18e3a9c2-a896-587f-aa85-6ebc57b686b9/horizontal/previews/watermarked/large.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
        {/* Tagline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
          TURNING MOMENT INTO MEMORIES
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-2xl font-medium drop-shadow-md max-w-2xl">
          From Planning to Perfection, Making Every Occasion Extraordinary
        </p>

        {/* Search bar */}
        <div className="absolute bottom-48 sm:bottom-16 md:bottom-44 left-1/2 transform -translate-x-1/2 flex w-[95%] sm:w-[90%] md:max-w-[500px] mt-6 shadow-lg">
          {/* Input wrapper */}
          <div className="flex items-center flex-1 bg-white rounded-l-2xl px-3">
            <FiSearch size={20} className="text-gray-500" />
            <input
              type="search"
              placeholder="Search events..."
              className="flex-1 px-2 py-3 sm:py-4 text-gray-700 text-sm sm:text-base focus:outline-none"
            />
          </div>

          {/* Search button */}
          <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-blue-700 transition-all flex items-center gap-2 text-sm sm:text-base rounded-r-2xl">
            <FiSearch size={18} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
