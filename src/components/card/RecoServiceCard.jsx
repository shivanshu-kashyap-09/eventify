import React from "react";

const RecoServiceCard = ({ title, description, image }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 mx-auto">
      {/* Image */}
      <div className="rounded-t-2xl overflow-hidden">
        <img
          src={
            image ||
            "https://t3.ftcdn.net/jpg/07/36/96/96/360_F_736969693_81Hm9gJNf0GumgIOVASQVe4d1vdgXgSn.jpg"
          }
          alt={title}
          className="rounded-t-2xl w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};




export default RecoServiceCard;