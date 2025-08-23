import React from 'react'

const ServiceCard = ({ title, description }) => {
  return (
    <div className="w-80 h-auto rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 mx-auto">
      {/* Image */}
      <div className="rounded-t-2xl overflow-hidden">
        <img
          src="https://t3.ftcdn.net/jpg/07/36/96/96/360_F_736969693_81Hm9gJNf0GumgIOVASQVe4d1vdgXgSn.jpg"
          alt={title}
          className="rounded-t-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4 px-2">{description}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors duration-300">
          Explore
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
        

