import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from '../components/card/ServiceCard';

const Service = () => {
  const [apiServices, setApiServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/service-option/get/all");

        const mapped = response.data.map(item => ({
          id: item._id,
          title: item.serviceName,
          tagline: item.shortDesc,
          vendor: {
            name: item.companyName,
            description: item.longDesc,
            rating: item.rating,
            price: `₹ ${item.price}`,
            rawPrice: item.price,
            imageUrl: item.images?.[0] || "",
          }
        }));

        setApiServices(mapped);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

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
