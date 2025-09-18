import React from 'react';


const EventCard = ({ title, description, image }) => {
  return (
    <div className="  bg-sky-50 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out border border-gray-100 ">
      <div className="h-40 flex-shrink-0 relative">
        <img 
          className="w-full h-full object-cover" 
          src={image}
          alt={title} 
        />
        <h3 className="absolute bottom-0 left-0 right-0 p-4 pb-2 text-2xl font-bold text-white bg-gradient-to-t from-black/100 to-transparent">
          {title}
        </h3>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-gray-700 text-[14px]  overflow-hidden">
            {description}
          </p>
        </div>
        <div className="mt-3 text-center ">
          <button className=" bg-indigo-600 text-white font-bold py-1 px-7  rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105">
            BOOK EVENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
