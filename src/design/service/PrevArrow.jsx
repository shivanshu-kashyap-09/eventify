import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const PrevArrow = ({ className, onClick }) => {
  return (
    <div
      className={`${className} absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition`}
      onClick={onClick}
    >
      <FaChevronLeft className="text-gray-800 text-lg" />
    </div>
  );
};

export default PrevArrow;
