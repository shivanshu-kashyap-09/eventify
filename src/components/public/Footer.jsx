import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import logo from "../../assets/logo/logo.jpg"

const Footer = () => {
  return (
    <footer className="relative bg-[#2C6EF6] text-white py-12 px-4 overflow-hidden">
      <div className="absolute top-[-40px] right-[-70px] w-40 h-40 bg-gradient-to-br from-blue-300 to-transparent rounded-full z-0"></div>
      <div className="absolute bottom-[-40px] left-[-70px] w-40 h-40 bg-gradient-to-tl from-blue-300 to-transparent rounded-full z-0"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-6 text-center lg:text-left relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-3xl font-bold h-5 w-5"><img src={logo} alt="" /></div>
            <span className="text-xl font-semibold">Eventify</span>
          </div>
          <p className="text-sm leading-relaxed mb-4 max-w-xs">
            we believe that every occasion deserves to be celebrated with creativity and passion. We provide a wide range of event solutions tailored to suit the unique requirements of each client. Our philosophy is simple — attention to detail.
          </p>
          <p className="text-sm font-medium flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                fill="currentColor"
              />
            </svg>
            <a href="mailto:nirmaniix@gmail.com" className="hover:underline">xyz@gmail.com</a>
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-center">
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-center text-sm">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#events" className="hover:underline">Events</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#choose" className="hover:underline">Choose Us</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-center">
          <h4 className="font-semibold mb-3">Follow Us On</h4>
          <div className="flex gap-4 text-white text-lg mb-3">
            <a href="#" className="hover:text-blue-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-200"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-200"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer