import React, { useEffect,useState } from "react";
import axios from 'axios';
import Hero from "../components/home/Hero";
import EventCard from "../components/card/EventCard";
import ServiceCard from "../components/card/ServiceCard";
import AboutUs from "../components/home/About";
import ChooseUs from "../components/home/ChooseUs";
import HowItWork from "../components/home/HowItWork";
import Testimonial from "../components/home/Testimonial";
import ContactUs from "../components/home/ContactUs";

import PrevArrow from '../design/service/PrevArrow'
import NextArrow from '../design/service/NextArrow'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import RecoServiceCard from "../components/card/RecoServiceCard";

const Home = () => {

  const[eventData,SeteventData] = useState([]);

  useEffect(()=>{

    const handleEvent=async()=>{
    const response=await axios.get('http://localhost:3000/event/get/all');
    // console.log(response);
    if(response.status==200){
      SeteventData(response.data);
    }
    }
    handleEvent();
  },[])
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
  // const eventsData = [
  //   {
  //     title: "Baby Shower ",
  //     description:
  //       "A heartwarming event to celebrate the beautiful journey of motherhood.",
  //     image: "",
  //   },
  //   {
  //     title: "Housewarming Party",
  //     description:
  //       "Turn your new house into a home filled with laughter and good company.",
  //     image: "",
  //   },
  //   {
  //     title: "Wedding Anniversary",
  //     description:
  //       "Celebrate your enduring love story with an elegant and memorable dinner.",
  //     image: "",
  //   },
  //   {
  //     title: "Naming Ceremony",
  //     description:
  //       "A beautiful, traditional ceremony to introduce your little one to the world.",
  //     image: "",
  //   },
  //   {
  //     title: "Diwali Card Party",
  //     description:
  //       "An exciting evening of card games, delicious food, and festive fun.",
  //     image: "",
  //   },
  //   {
  //     title: "Holi Celebration",
  //     description:
  //       "A vibrant explosion of colors, music, and joy for a lively celebration.",
  //     image: "",
  //   },
  //   {
  //     title: "Wedding Ceremony",
  //     description:
  //       "We handle every detail of your big day, from engagement to reception.",
  //     image: "",
  //   },
  //   {
  //     title: "Birthday Party",
  //     description:
  //       "Custom themes, fun activities, and lots of cake to make wishes come true.",
  //     image: "",
  //   },
  //   {
  //     title: "Corporate Gala",
  //     description:
  //       "A sophisticated and impressive gala for your company's employees and clients.",
  //     image: "",
  //   },
  //   {
  //     title: "Product Launch",
  //     description:
  //       "Make a powerful first impression with a professional product launch event.",
  //     image: "",
  //   },
  //   {
  //     title: "Graduation Party",
  //     description:
  //       "A fun and memorable party to celebrate a major academic milestone.",
  //     image: "",
  //   },
  //   {
  //     title: "Retirement Party",
  //     description:
  //       "Honor a distinguished career with a heartfelt and memorable send-off.",
  //     image: "",
  //   },
  //   {
  //     title: "Engagement Party",
  //     description:
  //       "Celebrate the start of your journey together with a engagement party.",
  //     image: "",
  //   },
  //   {
  //     title: "New Year's Eve Bash",
  //     description:
  //       "A spectacular party with music and lights to welcome the new year in style.",
  //     image: "",
  //   },
  //   {
  //     title: "Charity Fundraiser",
  //     description:
  //       "An impactful event to support a cause you're passionate about.",
  //     image: "",
  //   },
  //   {
  //     title: "Family Reunion",
  //     description:
  //       "A fun-filled day for the entire family to reconnect and create new memories.",
  //     image: "",
  //   },
  // ];
  return (
    <>
      <Hero />
      <div className="bg-slate-50 min-h-screen font-sans">
        <div className="container mx-auto px-6 sm:px-8 lg:px-35 py-15">
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
              {eventData.map((event, index) => (
                <EventCard
                  key={index}
                  eventName={event.eventName}
                  description={event.description}
                  image={event.image}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
      {/* <ServiceCard /> */}
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
                <RecoServiceCard title={item.title} description={item.description} />
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