import React from 'react'
import Hero from '../components/home/Hero'
import EventCard from '../components/card/EventCard'
import ServiceCard from '../components/card/ServiceCard'
import AboutUs from '../components/home/About'
import ChooseUs from '../components/home/ChooseUs'
import HowItWork from '../components/home/HowItWork'
import Testimonial from '../components/home/Testimonial'
import ContactUs from '../components/home/ContactUs'
import PrevArrow from '../design/service/PrevArrow'
import NextArrow from '../design/service/NextArrow'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
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

  const data = [
    { title: "Web Development", description: "Fast, scalable, and modern web apps tailored to your business." },
    { title: "Mobile App Development", description: "User-friendly mobile apps with smooth performance." },
    { title: "UI/UX Design", description: "Beautiful, intuitive, and modern design for all platforms." },
    { title: "SEO Optimization", description: "Boost your online visibility and rank higher on search engines." },
    { title: "Cloud Solutions", description: "Secure, reliable, and scalable cloud-based services." },
    { title: "AI & Automation", description: "Smart AI-driven solutions for business growth." },
  ];

  return (
    <>
      <Hero />
      <EventCard />

      {/* Recommended Services Section */}
      <div className="my-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-wide">
          RECOMMENDED SERVICES
        </h1>
        <p className="text-gray-600 text-lg font-medium mb-10">
          Popular Services Chosen By Our Clients
        </p>

        <div className="w-[95%] md:w-[90%] mx-auto">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="px-3">
                <ServiceCard title={item.title} description={item.description} />
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
  )
}

export default Home