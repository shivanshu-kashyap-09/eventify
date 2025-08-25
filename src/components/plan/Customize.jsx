import React from "react";
import { IoMdClose } from "react-icons/io";

const Customize = ({ onClose }) => {
  return (
    <div className="flex justify-center items-start min-h-screen px-4 py-12 relative">
      <div className="w-full max-w-md rounded-2xl shadow-2xl bg-sky-50 p-6 relative">
        {/* Close Button */}
        <button
  
  onClick={onClose}
  className="absolute top-3 right-3 p-2 rounded-full bg-sky-50 hover:bg-gray-200 text-black shadow-sm"
>
  <IoMdClose size={24} />
</button>



        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-sky-800 mb-2">
          Customize Your Event
        </h2>
        <p className="text-center text-indigo-400 text-md mb-6">
          Fill in your event details and preferences below
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Event Type */}
          <div>
            <label className="grid justify-items-start text-lg font-bold text-gray-800 mb-1">
              Event Type
            </label>
            <select
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 hover:border-sky-300 transition"
            >
              <option value="">Select Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="corporate">Corporate</option>
              <option value="concert">Concert</option>
            </select>
          </div>

          {/* Event Date */}
          <div>
            <label className="grid justify-items-start text-lg font-bold text-gray-800 mb-1">
              Event Date
            </label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 hover:border-sky-300 transition"
            />
          </div>

          {/* Guest Count */}
          <div>
            <label className="grid justify-items-start text-lg font-bold text-gray-800 mb-1">
              Guest Count
            </label>
            <input
              type="number"
              placeholder="Enter number of guests"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 hover:border-sky-300 transition"
            />
          </div>

          {/* Venue */}
          <div>
            <label className="grid justify-items-start text-lg font-bold text-gray-800 mb-1">
              Preferred Venue
            </label>
            <input
              type="text"
              placeholder="Enter venue/location"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 hover:border-sky-300 transition"
            />
          </div>

          {/* Special Requests */}
          <div>
            <label className="grid justify-items-start text-lg font-bold text-gray-800 mb-1">
              Special Requests
            </label>
            <textarea
              rows="3"
              placeholder="Theme, food preference, decoration..."
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 hover:border-sky-300 transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            style={{ backgroundColor: "#7294ebff" }}
            type="submit"
            className="w-full py-2 mt-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Customize;
