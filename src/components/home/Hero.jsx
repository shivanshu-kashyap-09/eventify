import React from 'react'

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

      {/* Tagline */}
      <div className="">

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 mb-40">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg ">
          TURNING MOMENT INTO MEMORIES 
        </h1>
        <p className="mt-3 text-lg md:text-2xl font-medium drop-shadow-md">
          From Planning to Perfection, Making Every Occasion Extraordinary
        </p>
      </div>

      {/* Search bar */}
      <div className="absolute mb-20 pr-1 bottom-50 left-1/2 transform -translate-x-1/2 flex items-center bg-white rounded-2xl shadow-lg overflow-hidden w-[90%] max-w-[450px]">
        {/* Search icon inside input */}
        <span className="pl-3 text-gray-500">
          <FiSearch size={20} />
        </span>

        <input
          type="search"
          placeholder="Search events..."
          className="flex-1 px-3 py-4 text-gray-700 focus:outline-none"
        />

        <button className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-all flex items-center gap-2">
          <FiSearch size={18} />
          Search
        </button>
      </div>
      </div>
    </div>
  )
}

export default Hero
