import React from 'react';
import { Star, StarHalf, X } from 'lucide-react';


const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-0.5">
      {Array(fullStars).fill().map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
      ))}
      {hasHalfStar && (
        <StarHalf key="half" className="w-4 h-4 text-yellow-500 fill-yellow-500" />
      )}
      {Array(emptyStars).fill().map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      ))}
      <span className="ml-2 text-sm text-gray-600">({rating.toFixed(1)})</span>
    </div>
  );
};

const VendorCard = ({ vendor }) => (
  <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-6 bg-white rounded-xl shadow-xl">
    <div className="w-full lg:w-1/3 min-h-[150px] overflow-hidden rounded-lg bg-gray-200">
      <img 
        src={vendor.imageUrl} 
        alt={vendor.name} 
        className="object-cover w-full h-full"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src="https://via.placeholder.com/300x200?text=Image+Not+Found";
        }}
      />
    </div>

    <div className="w-full lg:w-2/3 p-4 bg-gray-50 rounded-lg relative">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900">{vendor.name}</h3>
        <button className="p-1 text-gray-400 hover:text-gray-600 rounded-full bg-white transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="font-medium text-gray-800">Description</h4>
          <p className="text-sm text-gray-600 mt-1">{vendor.description}</p>
        </div>


        <div>
          <h4 className="font-medium text-gray-800">Rating</h4>
          <div className="mt-1">
            <RatingStars rating={vendor.rating} />
          </div>
        </div>

        <div className="flex justify-between items-end pt-2 border-t border-gray-200">
          <div>
            <h4 className="font-medium text-gray-800">Price Range</h4>
            <p className="text-2xl font-bold text-gray-900 mt-1">{vendor.price}</p> 
          </div>
          <button
            className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => console.log('Change service clicked')}
          >
            Change
          </button>
        </div>
      </div>
    </div>
  </div>
);




const ServiceCard = ({ service }) => {
  return (
    <div
      className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-10 space-y-8 lg:space-y-0"
    >
      <div
        className="flex flex-col justify-center lg:col-span-1"
      >
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
          {service.title}
        </h2>
        <p className="mt-4 text-md text-gray-600 max-w-md ">
          {service.tagline}
        </p>
      </div> 
      <div className="lg:col-span-2">
        <VendorCard vendor={service.vendor} />
      </div>
    </div>
  );
};

export default ServiceCard;