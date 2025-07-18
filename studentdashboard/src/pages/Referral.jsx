import React from "react";
import {
  FaRegPaperPlane,
  FaUserPlus,
  FaTags,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { BiSolidSend } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";

const Referral = () => {
  const referralLink = "https://novanectar.com/ref-9876543";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-6 text-white max-w-4xl mx-auto mb-8 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Emily Hannah</h1>
            <p className="mt-1 text-sm">5 Courses Enrolled | 4 Certificates</p>
          </div>
          <button className="bg-white text-[#3461FF] px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">
            Enroll a New Course →
          </button>
        </div>
      </div>

      {/* Referral Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl mx-auto">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Refer and Earn</h2>
          <p className="text-sm text-gray-500 mt-1">
            Invite your friends to NovaNectar. When they enroll in a course, both of you get rewards.
          </p>
        </div>

        {/* Referral Steps */}
        <div className="flex flex-wrap gap-6 justify-between mb-10 text-center">
          {[
            {
              icon: <FaRegPaperPlane />,
              title: "Send Invite",
              desc: "Share your referral link and invite your friends.",
            },
            {
              icon: <FaUserPlus />,
              title: "Friend Joins",
              desc: "They sign up using your referral link.",
            },
            {
              icon: <FaTags />,
              title: "Get Rewards",
              desc: "You both earn exciting discounts!",
            },
          ].map((step, idx) => (
            <div key={idx} className="flex-1 min-w-[140px] px-2">
              <div className="text-[#3461FF] text-4xl mb-3">{step.icon}</div>
              <p className="font-semibold text-base">{step.title}</p>
              <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Invite via Email */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-2">Invite via Email</p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your friend's email"
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-[#3461FF] text-white p-3 rounded-full hover:bg-blue-700 transition">
              <BiSolidSend size={20} />
            </button>
          </div>
        </div>

        {/* Referral Link + Social Icons */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Or share your referral link</p>

          {/* Row: Link on left, Icons on right */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 rounded-xl p-4 gap-3">
            {/* Referral Link + Copy */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-blue-700 text-sm truncate">{referralLink}</span>
              <button
                onClick={handleCopy}
                className="text-blue-700 hover:underline flex items-center gap-70 text-sm sm:ml-0 sm:self-start"
              >
                <FiCopy /> Copy link
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-blue-600">
              <FaWhatsapp className="cursor-pointer hover:text-green-500 hover:scale-110 transition" size={20} />
              <FaFacebook className="cursor-pointer hover:text-blue-700 hover:scale-110 transition" size={20} />
              <FaInstagram className="cursor-pointer hover:text-pink-500 hover:scale-110 transition" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
