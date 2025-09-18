import React from 'react';

// Main App Component containing all logic
export default function ServiceCard() {
  // Data for the services stored in an array of objects
  const servicesData = [
    {
      id: 1,
      title: "Service 1 (Heading)",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      description: "High-quality web development services to build fast, responsive, and modern websites for your business.",
      rating: 4,
      price: "1,250",
    },
    {
      id: 2,
      title: "Service 2 (Heading)",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      description: "Professional digital marketing solutions to boost your online presence and drive customer engagement.",
      rating: 5,
      price: "850",
    },
  ];

  // Helper component for a single star, defined inside App
  const StarIcon = ({ filled }) => (
    <svg
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <div className="bg-gray-100 min-h-screen font-sans flex items-center justify-center p-4">
      <div className="w-full">
        {/* Map through the servicesData array to render each card */}
        {servicesData.map((service) => (
          <div key={service.id} className="mb-8"
            onClick={() => {
              console.log("hello");
            }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-2xl mx-auto border border-gray-200">
              <div className="flex flex-col md:flex-row">
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2">
                  <img
                    className="h-full w-full object-cover"
                    src={service.imageUrl}
                    alt={service.title}
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Image'; }}
                  />
                </div>

                {/* Right Side: Details */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between relative">
                  {/* Close Button */}
                  <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Description</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Rating Section */}
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-700">Rating</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon key={index} filled={index < service.rating} />
                        ))}
                      </div>
                    </div>

                    {/* Price and Change Button Section */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-700">Price</p>
                        <p className="text-2xl font-bold text-gray-900">${service.price}</p>
                      </div>
                      <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log("change");
                        }}
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}