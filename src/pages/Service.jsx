import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from '../components/card/ServiceCard';
import { useParams } from "react-router-dom";

const Service = () => {
  const [apiServices, setApiServices] = useState([]);
  const { eventName } = useParams();
  const decodedEventName = decodeURIComponent(eventName);
  console.log(decodedEventName);

  const [eventService, setEventService] = useState([]);
  const [serviceVendor, setServiceVendor] = useState({});

  const handleEvent = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/event/service/get/by/${decodedEventName}`);
      if (response.status === 200) {
        console.log(response.data.services);
        
        setEventService(response.data.services);
      }
    } catch (error) {
      console.error("Error occured in fetching the event service : " + error);
    }
  }

  const handleServices = async () => {
    try {
      for (let i = 0; i < eventService.length; i++) {
        const serviceName = eventService[i];

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/service-option/get/by/serivce/${serviceName}`
        );

        if (response.status === 200) {
          console.log(response.data);
          
          setServiceVendor(prev => [...prev, response.data]);
        }
      }
    } catch (error) {
      console.error("Error in getting service vendors: ", error);
    }
  };

  useEffect(() => {
  if (eventService.length > 0) {
    handleServices();
  }
}, [eventService]);



  useEffect(() => {
    handleEvent();
  }, [])

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

        <main className="space-y-16">
          {apiServices.length > 0 ? (
            apiServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))
          ) : (
            <h2 className="text-center text-gray-500 text-xl">Loading services...</h2>
          )}
        </main>

      </div>
    </div>
  );
};

export default Service;
