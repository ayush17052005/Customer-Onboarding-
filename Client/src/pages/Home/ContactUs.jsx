import React from "react";
import { assets } from "../../assets/assets";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 items-center h-fit  mx-10 md:mx-0">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 hidden md:flex justify-center md:justify-end mb-8 md:mb-0 ">
        <img
          src={assets.contact}
          alt="Contact Us"
          className="w-full h-auto object-cover  md:overflow-hidden"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2  py-20 px-10 mx-20 rounded-lg shadow-lg bg-neutral-200 ">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 bg-neutral-100"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

  );
};

export default ContactUs;
