import React, { useEffect, useState } from "react";
import Hero from "../components/home/Hero";
import EventCard from "../components/card/EventCard";
import ServiceCard from "../components/card/ServiceCard";
import RecoServiceCard from "../components/card/RecoServiceCard";
import AboutUs from "../components/home/About";
import ChooseUs from "../components/home/ChooseUs";
import HowItWork from "../components/home/HowItWork";
import Testimonial from "../components/home/Testimonial";
import ContactUs from "../components/home/ContactUs";
import PrevArrow from '../design/service/PrevArrow'
import NextArrow from '../design/service/NextArrow'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import axios from 'axios'


const Home = () => {
  const[service, setService] = useState([]);
  const[event, setEvent] = useState([]);

  const settings = {
    dots: false,
    infinite: true, 
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, 
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, 
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handleEvents = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/event/get/all`);
      if(response.status === 200){
        setEvent(response.data);
      }
    } catch (error) {
      console.error("error occured in events : ",error);
      
    }
  }
  
  const handleServices = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/service/get/all`);
      if(response.status === 200){
        setService(response.data)
        // console.log(response.data);
      }
    } catch (error) {
      console.error("error occured in Services. ",error);
      
    }
  }
  useEffect(() => {
    handleServices();
    handleEvents();
  },[]);

  return (
    <>
      <Hero />
      <div className="bg-slate-50 min-h-screen font-sans">
        <div className="container mx-auto px-6 sm:px-8 lg:px-35 py-4">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
              Our Events
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of celebration services
            </p>
          </header>
          <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {event.map((item, index) => (
                <EventCard
                  key={index}
                  title={item.eventName}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
      {/* <ServiceCard /> */}
      {/* Recommended Services Section */}
      <div className="my-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-wide">
          RECOMMENDED SERVICES
        </h1>
        <p className="text-gray-600 text-lg font-medium mb-10">
          Popular Services Chosen By Our Clients
        </p>

        <div className="w-[95%] md:w-[85%] mx-auto">
          <Slider {...settings}>
            {service.map((item, index) => (
              <div key={index} className="px-3">
                <RecoServiceCard title={item.serviceName} description={item.description} image={item.image} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <AboutUs />
      <ChooseUs />
      <HowItWork />
      <Testimonial />
      <ContactUs />
    </>
  );
};

export default Home;