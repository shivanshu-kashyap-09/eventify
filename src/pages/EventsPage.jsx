import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function EventsPage() {
  const [events, setEvents] = useState([]); // ✅ array, not string

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/event/get/all");
        console.log(response.data);
        if (response.status === 200) {
          setEvents(response.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents(); // ✅ call inner async function
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Upcoming Events
      </h1>

      <div className="flex flex-col gap-10 max-w-5xl mx-auto">
        {events.length > 0 ? (
          events.map((event, index) => (
            <motion.div
              key={event.id || index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
            >
              {/* Left Image Section */}
              <div className="relative sm:w-1/2">
                <img
                  src={event.image}
                  alt={event.name}
                  className="object-cover h-64 sm:h-full w-full"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2 text-lg font-semibold tracking-wide">
                  {event.name}
                </div>
              </div>

              {/* Right Content Section */}
              <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {event.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="self-start px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-lg font-medium transition-all duration-300"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">
            Loading events...
          </p>
        )}
      </div>
    </div>
  );
}
