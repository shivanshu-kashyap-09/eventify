import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ onClose, onSelect }) => {
  const vendor = [
    {
      imageUrl: "https://images.pexels.com/photos/34514019/pexels-photo-34514019.jpeg",
      name: "Rohan",
      description: "Decoration service available",
      price: "10000"
    },
    {
      imageUrl: "https://images.pexels.com/photos/318274/pexels-photo-318274.jpeg",
      name: "Amit",
      description: "DJ and music services",
      price: "15000"
    }
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-[900px] relative border">

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 p-1 bg-gray-200 rounded-full hover:bg-gray-300"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        {vendor.map((v, i) => (
          <div key={i} className="flex flex-col lg:flex-row p-4 bg-white rounded-xl shadow-xl mb-4">

            <div className="w-full lg:w-1/3 min-h-[150px] overflow-hidden rounded-lg bg-gray-200">
              <img
                src={v.imageUrl}
                alt={v.name}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="w-full lg:w-2/3 p-4 bg-gray-50 rounded-lg">

              <h3 className="text-xl font-bold">{v.name}</h3>

              <p className="mt-2 text-gray-600">{v.description}</p>

              <div className="flex justify-between items-end mt-4 border-t pt-3">
                <div>
                  <h4 className="font-medium">Price Range</h4>
                  <p className="text-2xl font-bold">{v.price}</p>
                </div>

                <button
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  onClick={() => onSelect(v)}   // 🔥 Add button → update card
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
