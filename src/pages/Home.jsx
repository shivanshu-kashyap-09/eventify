import React from 'react'
import Hero from '../components/home/Hero'
import EventCard from '../components/card/EventCard'
import ServiceCard from '../components/card/ServiceCard'
import AboutUs from '../components/home/About'
import ChooseUs from '../components/home/ChooseUs'
import HowItWork from '../components/home/HowItWork'
import Testimonial from '../components/home/Testimonial'
import ContactUs from '../components/home/ContactUs'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
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
  const data = [
    { title: "Service 1", description: "This is a sample description for Service 1." },
    { title: "Service 2", description: "This is a sample description for Service 2." },
    { title: "Service 3", description: "This is a sample description for Service 3." },
    { title: "Service 4", description: "This is a sample description for Service 4." },
    { title: "Service 5", description: "This is a sample description for Service 5." },
    { title: "Service 6", description: "This is a sample description for Service 6." },
  ];
  return (
    <>
    <Hero />
    <EventCard />
    <div className="my-12 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-wide">
        RECOMMENDED SERVICES
      </h1>
      <p className="text-gray-600 text-lg font-medium mb-8">
        Popular Services Chosen By Our Clients
      </p>

      <div className="w-[90%] mx-auto">
        <Slider {...settings}>
          {data.map((item, index) => (
            <ServiceCard key={index} title={item.title} description={item.description} />
          ))}
        </Slider>
      </div>
    </div>
    <AboutUs />
    <ChooseUs />
    <HowItWork />
    <Testimonial />
    <ContactUs/>
    </>
  )
}

export default Home
