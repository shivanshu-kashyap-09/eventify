import React, { useState } from "react";
import bgimg from "../../assets/ContactUs/ContactUsBg.jpg";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/contact/create`,
        formData
      );

      if (response.status === 201) {
        toast.success("Form submitted successfully!");

        // **Reset form**
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />

      <div
        className="min-h-screen  p-4 pt-20 pb-20 flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="
          relative
          w-lg
          bg-gradient-to-b from-sky-50 to-sky-50
          border-4 border-blue-400
          shadow-[0_0_60px_0_rgba(56,189,248,0.5)]
          rounded-3xl
          overflow-hidden
          m-2
          md:ml-150
          md-mr-100
        "
        >
          <div className="m-0 px-0">
            <h3 className="text-3xl font-semibold mb-6 mt-10 text-blue-600 text-center md:text-center">
              Customer Support
            </h3>

            <form className="space-y-3 px-10 py-15 pt-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-lg text-gray-800">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full mt-1 p-2 bg-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-lg pt-2 text-gray-800">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email address"
                  className="w-full mt-1 p-2 bg-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-lg pt-2 text-gray-800">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Enter your phone number"
                  className="w-full mt-1 p-2 bg-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-lg pt-2 text-gray-800">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your issue in detail"
                  className="w-full mt-1 p-2 bg-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-md bg-blue-500 text-white font-semibold py-2 rounded-md shadow transition hover:bg-blue-900"
              >
                SUBMIT
              </button>

              <div className="mt-4 text-center text-sm text-gray-600">
                We'll review your request and get back to you within 24-48 hours.
                If it's urgent, please contact us at{" "}
                <span className="text-blue-600">support@Kickify.com</span>.
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
