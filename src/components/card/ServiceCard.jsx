// import React from 'react';
// import Sneakers from "../assets/shoescategoryimg/image.png";

// const eventsData = [
//   {
//     title: "Baby Shower ",
//     description: "A heartwarming event to celebrate the beautiful journey of motherhood.",
//     image: Sneakers
//   },
//   {
//     title: "Housewarming Party",
//     description: "Turn your new house into a home filled with laughter and good company.",
//     image: Sneakers
//   },
//   {
//     title: "Wedding Anniversary",
//     description: "Celebrate your enduring love story with an elegant and memorable dinner.",
//     image: Sneakers
//   },
//   {
//     title: "Naming Ceremony",
//     description: "A beautiful, traditional ceremony to introduce your little one to the world.",
//     image: Sneakers
//   },
//   {
//     title: "Diwali Card Party",
//     description: "An exciting evening of card games, delicious food, and festive fun.",
//     image: Sneakers
//   },
//   {
//     title: "Holi Celebration",
//     description: "A vibrant explosion of colors, music, and joy for a lively celebration.",
//     image: Sneakers
//   },
//   {
//     title: "Wedding Ceremony",
//     description: "We handle every detail of your big day, from engagement to reception.",
//     image: Sneakers
//   },
//   {
//     title: "Birthday Party",
//     description: "Custom themes, fun activities, and lots of cake to make wishes come true.",
//     image: Sneakers
//   },
//   {
//     title: "Corporate Gala",
//     description: "A sophisticated and impressive gala for your company's employees and clients.",
//     image: Sneakers
//   },
//   {
//     title: "Product Launch",
//     description: "Make a powerful first impression with a professional product launch event.",
//     image: Sneakers
//   },
//   {
//     title: "Graduation Party",
//     description: "A fun and memorable party to celebrate a major academic milestone.",
//     image: Sneakers
//   },
//   {
//     title: "Retirement Party",
//     description: "Honor a distinguished career with a heartfelt and memorable send-off.",
//     image: Sneakers
//   },
//   {
//     title: "Engagement Party",
//     description: "Celebrate the start of your journey together with a engagement party.",
//     image: Sneakers
//   },
//   {
//     title: "New Year's Eve Bash",
//     description: "A spectacular party with music and lights to welcome the new year in style.",
//     image: Sneakers
//   },
//   {
//     title: "Charity Fundraiser",
//     description: "An impactful event to support a cause you're passionate about.",
//     image: Sneakers
//   },
//   {
//     title: "Family Reunion",
//     description: "A fun-filled day for the entire family to reconnect and create new memories.",
//     image: Sneakers
//   }
// ];


// const EventCar = ({ title, description, image }) => {
//   return (
//     <div className="  bg-sky-50 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out border border-gray-100 ">
//       <div className="h-40 flex-shrink-0 relative">
//         <img 
//           className="w-full h-full object-cover" 
//           src={image} 
//           alt={title} 
//         />
//         <h3 className="absolute bottom-0 left-0 right-0 p-4 pb-2 text-2xl font-bold text-white bg-gradient-to-t from-black/100 to-transparent">
//           {title}
//         </h3>
//       </div>
//       <div className="p-4 flex flex-col flex-grow">
//         <div className="flex-grow">
//           <p className="text-gray-700 text-[14px]  overflow-hidden">
//             {description}
//           </p>
//         </div>
//         <div className="mt-3 text-center ">
//           <button className=" bg-indigo-600 text-white font-bold py-1 px-7  rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105">
//             BOOK EVENT
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function EventCard() {
//   return (
//     <div className="bg-slate-50 min-h-screen font-sans">
//       <div className="container mx-auto px-6 sm:px-8 lg:px-35 py-15">
//         <header className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
//             Our Events
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Choose from our wide range of celebration services
//           </p>
//         </header>
//         <main>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//             {eventsData.map((event, index) => (
//               <EventCar
//                 key={index}
//                 title={event.title}
//                 description={event.description}
//                 image={event.image}
//               />
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


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
          <div key={service.id} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-2xl mx-auto border border-gray-200">
              <div className="flex flex-col md:flex-row">
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2">
                  <img
                    className="h-full w-full object-cover"
                    src={service.imageUrl}
                    alt={service.title}
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/4a5568?text=Image'; }}
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
                      <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
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