import React from 'react'
import Hero from '../components/home/Hero'
import EventCard from '../components/card/EventCard'
import ServiceCard from '../components/card/ServiceCard'
import AboutUs from '../components/home/About'
import ChooseUs from '../components/home/ChooseUs'
import HowItWork from '../components/home/HowItWork'
import Testimonial from '../components/home/Testimonial'
import ContactUs from '../components/home/ContactUs'

const Home = () => {
  return (
    <>
    <Hero />
    <EventCard />
    <ServiceCard />
    <AboutUs />
    <ChooseUs />
    <HowItWork />
    <Testimonial />
    <ContactUs/>
    </>
  )
}

export default Home