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
  const referralLink = "https://novanectar.com/referral/abcd123"; // Example

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-8">
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Referrals</h2>
        <p className="text-sm text-gray-500 mt-1">
          Invite your friends to NovaNectar. When they enroll in a course, both of you get rewards.
        </p>
      </div>

      {/* Referral Steps */}
      <div className="flex flex-wrap gap-6 justify-center sm:justify-between mb-10 text-center">
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
          <div
            key={idx}
            className="flex-1 min-w-[150px] max-w-[250px] px-2 flex flex-col items-center"
          >
            <div className="text-[#3461FF] text-4xl mb-3">{step.icon}</div>
            <p className="font-semibold text-base">{step.title}</p>
            <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Invite via Email */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700">Invite your friends</p>
        <p className="font-normal text-sm text-[#6F6F6F] mb-2">
          Insert your friends address and send them invitations to join NovaNectar!
        </p>
        <div className="flex flex-row items-center gap-3 border border-gray-300 rounded-full px-4 py-1 w-full">
          <input
            type="email"
            placeholder="Email address.."
            className="flex-1 outline-none text-sm py-2 w-full"
          />
          <button className="bg-[#3461FF] text-white p-3 rounded-full hover:bg-blue-700 transition">
            <BiSolidSend size={20} />
          </button>
        </div>
      </div>

      {/* Referral Link + Social Icons */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-700">Share the referral link</p>
        <p className="font-normal text-sm text-[#6F6F6F] mb-2">
          You can also share your referral link by copying and sending it on your social media.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
          {/* Link Box */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 bg-[#E7F0FF] rounded-full px-4 py-2 w-full sm:w-auto max-w-full overflow-hidden">
            <span className="text-blue-700 text-sm truncate max-w-[250px] sm:max-w-[300px]">
              {referralLink}
            </span>
            <button
              onClick={handleCopy}
              className="text-blue-700 hover:underline flex items-center gap-2 text-sm"
            >
              <FiCopy /> Copy link
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[FaWhatsapp, FaFacebook, FaInstagram].map((Icon, i) => (
              <div key={i} className="p-3 rounded-full bg-[#EBF5FF]">
                <Icon
                  size={20}
                  className={`cursor-pointer hover:scale-110 transition ${
                    i === 0
                      ? "hover:text-green-500"
                      : i === 1
                      ? "hover:text-blue-700"
                      : "hover:text-pink-500"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
