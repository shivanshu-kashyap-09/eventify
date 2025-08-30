import React from "react";
import { FaChevronRight } from "react-icons/fa";

const NextArrow = ({ className, onClick }) => {
  return (
    <div
      className={`${className} absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition`}
      onClick={onClick}
    >
      <FaChevronRight className="text-gray-800 text-lg" />
    </div>
  );
};

export default NextArrow;
