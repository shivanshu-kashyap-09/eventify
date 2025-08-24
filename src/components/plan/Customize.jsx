import React from "react";
import { CiSliderHorizontal } from "react-icons/ci";

const Customize = () => {
  return (
    <div className="flex justify-center mt-6 px-4">
      <button
        style={{ backgroundColor: "#e9f5f9" }}
        className="flex items-center gap-2 text-black py-3 px-6 
                   rounded-lg shadow-md font-semibold 
                   w-full sm:w-auto sm:min-w-[220px] text-center"
      >
        <CiSliderHorizontal size={22} />
        Customize Plan
      </button>
    </div>
  );
};

export default Customize;
