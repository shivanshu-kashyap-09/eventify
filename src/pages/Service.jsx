import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from '../components/card/ServiceCard';
import { useParams } from "react-router-dom";

const Service = () => {
  const { eventName } = useParams();
  const decodedEventName = decodeURIComponent(eventName);

  const [eventService, setEventService] = useState([]);
  const [serviceVendor, setServiceVendor] = useState([]);

  // STEP 1 — Get list of services
  const handleEvent = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/event/service/get/by/${decodedEventName}`
      );

      if (response.status === 200) {
        setEventService(response.data.services);
      }
    } catch (error) {
      console.error("Error in fetching event services:", error);
    }
  };

  // STEP 2 — For each service, fetch vendors
  const handleServices = async () => {
    try {
      const vendorsByService = {};

      for (const serviceName of eventService) {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/service-option/get/by/serivce/${serviceName}`
        );

        vendorsByService[serviceName] = response.data;
      }

      setServiceVendor(vendorsByService);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  useEffect(() => {
    handleEvent();
  }, []);

  useEffect(() => {
    if (eventService.length > 0) {
      handleServices();
    }
  }, [eventService]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 pb-0 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-24">

        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight sm:text-5xl uppercase">
            YOUR BUDGET WEDDING PLAN
          </h1>
          <p className="mt-3 text-xl text-gray-600 italic">
            Curated Vendors matching your budget
          </p>
        </header>

        <main>
          {/* Loading services */}
          {eventService.length === 0 && (
            <h2 className="text-center text-gray-500 text-xl">Loading services...</h2>
          )}

          {/* Loading vendors */}
          {eventService.length > 0 && Object.keys(serviceVendor).length === 0 && (
            <h2 className="text-center text-gray-500 text-xl">Loading vendors...</h2>
          )}

          {/* Data ready */}
          {eventService.length > 0 && Object.keys(serviceVendor).length > 0 && (
            eventService.map(service => (
              <ServiceCard
                key={service}
                service={service}
                vendors={serviceVendor[service]}
              />
            ))
          )}
        </main>


      </div>
    </div>
  );
};

export default Service;
