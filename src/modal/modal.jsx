import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ vendors = [], onClose, onSelect }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
      <div className="bg-white rounded-xl shadow-xl p-6 w-[900px] relative border">
        
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-3 right-3 p-1 bg-gray-200 rounded-full hover:bg-gray-300"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        {vendors.map((v) => (
          <div key={v._id} className="flex flex-col lg:flex-row p-4 rounded-xl shadow mb-4">

            <div className="w-full lg:w-1/3 min-h-[150px] overflow-hidden rounded-lg bg-gray-200">
              <img
                src={v.images?.[0]}
                alt={v.companyName}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="w-full lg:w-2/3 p-4 bg-gray-50 rounded-lg">

              <h3 className="text-xl font-bold">{v.companyName}</h3>
              <p className="mt-2 text-gray-600">{v.shortDesc}</p>

              <div className="flex justify-between items-end mt-4 border-t pt-3">
                <div>
                  <h4 className="font-medium">Price Range</h4>
                  <p className="text-2xl font-bold">
                    ₹{v.price || "N/A"}
                  </p>
                </div>

                <button
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  onClick={() => onSelect(v)}
                >
                  Add
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Modal;
