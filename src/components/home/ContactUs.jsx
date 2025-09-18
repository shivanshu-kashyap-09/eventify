import React from "react";
import bgimg from "../../assets/ContactUs/ContactUsBg.jpg";

export default function ContactUs() {
  return (
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

          <form className="space-y-3 px-10 py-15 pt-5">
            <div>
              <label className="block text-lg text-gray-800">Name</label>
              <input
                type="text"
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
                placeholder="Enter your email address"
                className="w-full mt-1 p-2 bg-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              {/* <div className="md:w-1/2"> */}
                <label className="block text-lg pt-2 text-gray-800">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full mt-1 p-2 bg-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {/* <div className="md:w-1/2 mt-3 md:mt-0">
                <label className="block text-lg pt-2 text-gray-800">
                  Issue Type
                </label>
                <select
                  defaultValue=""
                  className="w-full mt-1 p-2 bg-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900"
                >
                  <option value="" disabled hidden>
                    Select
                  </option>
                  <option>Order Status Inquiry</option>
                  <option>Size or Exchange Request</option>
                  <option>Return or Refund Request</option>
                  <option>Product Feedback</option>
                  <option>Other</option>
                </select>
              </div> */}
            {/* </div> */}

            <div>
              <label className="block text-lg pt-2 text-gray-800">
                Message
              </label>
              <textarea
                rows="3"
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
  );
}