import React from 'react';
import { X } from 'lucide-react';
import logo from '../../assets/logo/logo.jpg'

const VendorCard = ({ vendor, openModal }) => {
  // console.log(vendor);
  if (!vendor) return <p>No vendor available</p>;


  return (
    <div className="flex flex-col lg:flex-row p-4 bg-white rounded-xl shadow-xl">

      <div className="w-full lg:w-1/3 min-h-[150px] overflow-hidden rounded-lg bg-gray-200">
        <img
            src={vendor.images[0] || logo}
            alt={vendor.companyName}
            className="object-cover w-full h-full"
          />
      </div>

      <div className="w-full lg:w-2/3 p-4">
        <h3 className="text-xl font-bold">{vendor.companyName}</h3>
        <p className="mt-2">{vendor.shortDesc}</p>

        <div className="flex justify-between mt-4 border-t pt-3">
          <div>
            <h4>Price Range</h4>
            <p className="text-2xl font-bold">{vendor.price}</p>
          </div>

          {/* <button
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg"
            onClick={() => openModal(vendor)}
          >
            Change
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
