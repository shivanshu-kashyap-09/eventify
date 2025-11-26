import React from 'react';
import { X } from 'lucide-react';

const VendorCard = ({ vendor, onClose, openModal }) => {
  return (
    <div className="flex flex-col lg:flex-row p-4 bg-white rounded-xl shadow-xl">

      <div className="w-full lg:w-1/3 min-h-[150px] overflow-hidden rounded-lg bg-gray-200">
        <img
          src={vendor.imageUrl}
          alt={vendor.name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-full lg:w-2/3 p-4 bg-gray-50 rounded-lg relative">
        
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{vendor.name}</h3>

          <button
            className="p-1 rounded-full bg-white hover:bg-gray-200"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-2 text-gray-600">{vendor.description}</p>

        <div className="flex justify-between items-end mt-4 border-t pt-3">
          <div>
            <h4 className="font-medium">Price Range</h4>
            <p className="text-2xl font-bold">{vendor.price}</p>
          </div>

          <button
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            onClick={() => openModal(vendor)}  // 🔥 Correct way
          >
            Change
          </button>
        </div>

      </div>
    </div>
  );
};

export default VendorCard;
