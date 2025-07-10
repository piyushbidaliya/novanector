import React from 'react';
import { FaBoltLightning, FaWhatsapp } from "react-icons/fa6";
import { BsCheckCircleFill, BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { CgMail } from "react-icons/cg";
import { CiGlobe } from "react-icons/ci";
import Student from "../assets/student.png";
import laptop from "../assets/laptop.jpg";
import logo from "../assets/logoN.png";

function Contacts() {
  return (
    <>
      {/* Header Section */}
      <div className='text-[#292929] font-medium text-[30px] leading-[100%] text-center px-4'>
        <h1>Contact Us</h1>
        <p className='font-normal text-[#6F6F6F] text-[14px] mt-3 leading-6'>
          At Novanectar Courses, we're here to help you at every step of your learning journey. Whether you have questions, feedback,<br className="hidden sm:block" />
          or need support, feel free to reach out—we’re just a message away.
        </p>
      </div>

      {/* Top Contact Button */}
      <div className='px-4 sm:px-8 md:px-10'>
        <button className="flex mt-10 gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm">
          <div className="bg-blue-100 p-2 rounded-full">
            <FaBoltLightning className="text-blue-600 w-4 h-4" />
          </div>
          <span className="text-[#292929] text-lg">Contact Us</span>
        </button>
      </div>

      {/* Intro Grid */}
      <div className='grid sm:grid-cols-2 grid-cols-1 px-4 sm:px-8 md:px-12 gap-8 items-center '>
        <div className='space-y-4 h-[320px]'>
          <h2 className='text-2xl sm:text-4xl font-bold text-[#1F1F1F]'>
            Transform Your Future with Excellence<br />in Education
          </h2>
          <div className='flex items-start gap-3'>
            <BsCheckCircleFill className='text-green-500 w-5 h-5 mt-1' />
            <span>Unlock your potential with expert guidance.</span>
          </div>
          <div className='flex items-start gap-3'>
            <BsCheckCircleFill className='text-green-500 w-5 h-5 mt-1' />
            <span>Achieve your academic and personal goals.</span>
          </div>
          <div className='flex items-start gap-3'>
            <BsCheckCircleFill className='text-green-500 w-5 h-5 mt-1' />
            <span>Empower yourself with lifelong learning skills.</span>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 md:hidden rounded-md font-medium hover:bg-blue-700 transition">
            Contact Us <span className="text-xl">→</span>
          </button>
        </div>

        <div className="w-full  mx-auto flex justify-center items-center relative ">
          <div className="absolute top-8 w-[230px] h-[230px] bg-blue-500 rounded-full z-0 mt-8 mx-30" />
          <img src={Student} alt="Student" className="relative  w-full max-w-[460px]  mb-33 object-contain" />
        </div>
      </div>

      {/* Message Grid */}

      <div className="flex flex-col-reverse md:flex-row p-6 md:p-12 gap-8 -mt-20">

        <div className="md:w-1/2">
          <img src={laptop} alt="Support" className="rounded-lg shadow-md w-full h-auto object-cover" />
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
          <button className="flex mt-10 gap-2 bg-white border border-gray-300 px-4 py-2 mb-3 rounded-full shadow-sm">
            <div className="bg-blue-100 p-2 rounded-full ">
              <FaBoltLightning className="text-blue-600 w-4 h-4" />
            </div>
            <span className="text-[#292929] text-lg ">Send Us Message</span>
          </button>

          <h2 className="text-3xl font-bold mb-6 text-[#1F1F1F]">Need Help? Message.</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Enter your first name" className="border rounded p-2 w-full" />
              <input type="text" placeholder="Enter your last name" className="border rounded p-2 w-full" />
              <input type="tel" placeholder="Enter your phone number" className="border rounded p-2 w-full" />
              <input type="email" placeholder="Enter your email address" className="border rounded p-2 w-full" />
            </div>

            <input type="text" placeholder="Enter subject" className="border rounded p-2 w-full" />
            <input type="text" placeholder="Enter your address" className="border rounded p-2 w-full" />
            <textarea placeholder="Type message here..." className="border rounded p-2 w-full h-24"></textarea>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>


      {/* Contact Cards */}
      <div className="p-6  h-auto -mt-10">
        <div className="text-center mb-6">
          <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm mx-auto">
            <div className="bg-blue-100 p-2 rounded-full">
              <FaBoltLightning className="text-blue-600 w-4 h-4" />
            </div>
            <span className="text-[#292929] text-lg">Get in Touch</span>
          </button>
          <h3 className="text-2xl mt-2 text-[#292929] font-semibold">Clear guidance, quick responses — every time</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto pb-10">
          {/* Address */}
          <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col items-center max-w-[240px] mx-auto">
            <div className="bg-white text-blue-500 w-10 h-10 flex items-center justify-center rounded-full text-2xl mb-2">
              <GoLocation />
            </div>
            <h3 className="text-lg font-semibold mb-1">Dehradun Office</h3>
            <p className="text-sm text-center">GMS Road Dehradun,<br />Uttarakhand, India</p>
          </div>

          {/* Phone */}
          <div className="bg-white text-center rounded-lg p-6 shadow border border-gray-300 max-w-[240px] mx-auto">
            <div className="bg-blue-100 text-blue-500 text-2xl w-10 h-10 flex items-center justify-center rounded-full mb-2 mx-auto">
              <BsTelephone />
            </div>
            <h3 className="text-lg font-semibold mb-1">Call Us</h3>
            <p className="text-sm text-gray-700">+91 897 989 1703<br />+91 897 989 1703</p>
          </div>

          {/* Email */}
          <div className="bg-white text-center rounded-lg p-6 shadow border border-gray-300 max-w-[240px] mx-auto">
            <div className="bg-blue-100 text-blue-500 text-2xl w-10 h-10 flex items-center justify-center rounded-full mb-2 mx-auto">
              <CgMail />
            </div>
            <h3 className="text-lg font-semibold mb-1">Email Us</h3>
            <p className="text-sm text-gray-700">info@novanectar.co.in</p>
          </div>

          {/* Website */}
          <div className="bg-white text-center rounded-lg p-6 shadow border border-gray-300 max-w-[240px] mx-auto">
            <div className="bg-blue-100 text-blue-500 text-2xl w-10 h-10 flex items-center justify-center rounded-full mb-2 mx-auto">
              <CiGlobe />
            </div>
            <h3 className="text-lg font-semibold mb-1">Visit Our Website</h3>
            <p className="text-sm text-gray-700">www.novanectar.com</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className='px-4 sm:px-8 mb-12'>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d110204.72538042432!2d78.01713464999997!3d30.32542845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1751650761622!5m2!1sen!2sin"
          className="w-full h-[300px] sm:h-[450px] rounded-lg border border-gray-600"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen=""
        ></iframe>
      </div>

      {/* Footer */}
      










    </>
  );
}

export default Contacts;
