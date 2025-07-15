import React from 'react';
import images1 from "../assets/message1.jpg";
import images2 from "../assets/message2.jpg";
import images3 from "../assets/message3.jpg";
import images4 from "../assets/message4.jpg";
import images5 from "../assets/message5.jpg";
import images6 from "../assets/message6.jpg";
import images7 from "../assets/message7.jpg";
import { MdInsertLink } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { IoSend } from "react-icons/io5";

const messages = [
  { id: 1, img: images1, title: "John Mayer", time: "12 mins ago", role: "We want to invite you for a qui...", active: true },
  { id: 2, img: images4, title: "Joe Bartmann", time: "3:40 pm ago", role: "We want to invite you for a qui..." },
  { id: 3, img: images7, title: "Ally Wales", time: "3:40 pm ago", role: "We want to invite you for a qui..." },
  { id: 4, img: images3, title: "Allison Geidt", time: "3:40 pm ago", role: "We want to invite you for a qui..." },
  { id: 5, img: images4, title: "Joe Bartmann", time: "3.40 pm ago", role: "We want to invite you for a qui..." },
  { id: 6, img: images6, title: "Ally Wales", time: "3:40 pm ago", role: "We want to invite you for a qui..." },
  { id: 7, img: images3, title: "Allison Geidt", time: "3.40 pm ago", role: "We want to invite you for a qui..." },
];

function Message() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-white">
        {/* first child */}
      <div className="flex-1 border-r border-gray-200 p-4">
        <input
          type="text"
          placeholder="Search Message"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul className="mt-5 space-y-2">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className={`flex items-center p-4 rounded-lg transition ${msg.active ? "bg-blue-100" : "hover:bg-gray-100"}`}
            >
              <img src={msg.img} alt="" className="w-10 h-10 rounded-full" />
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-900">{msg.title}</h4>
                  <span className="text-sm text-gray-500">{msg.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{msg.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/*  */}

      <div className="flex-1 px-10 py-6 space-y-10">
        <div className="flex items-center gap-4">
          <img className="w-12 h-12 rounded-full" src={images1} alt="John Mayer" />
          <div>
            <h4 className="text-lg font-semibold">John Mayer</h4>
            <p className="text-gray-400 text-sm">UI/UX Designer</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <img className="h-10 w-10 rounded-full mt-1" src={images2} alt="Joe Bartmann" />
          <div className="p-4 bg-blue-50 rounded-xl w-full">
            <h4 className="text-sm font-semibold text-gray-800 mb-1">Joe Bartmann</h4>
            <p className="text-sm text-gray-800 leading-snug">
              we’re moving into Frontend Development now—HTML, CSS, and JavaScript. But honestly, I’m a bit lost.
            </p>
            <p className="text-sm    text-gray-800 leading-snug mt-4">
              Do I really need to learn all three?
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">You</span>
            <img className="h-10 w-10 rounded-full" src={images4} alt="You" />
          </div>
          <div className=" text-gray-800 p-4   bg-blue-50 max-w-lg rounded-xl">
            <p className="text-sm font-normal leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum id dicta quos! Recusandae reiciendis consequuntur doloremque reprehenderit minima, tempore odit similique ex veniam dignissimos qui culpa non obcaecati autem.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-3 border rounded-md ">
          <div className="flex items-center flex-grow space-x-2">
            <MdInsertLink className="text-2xl text-gray-500" />
            <input
              type="text"          
              placeholder="Reply message"
              className="flex-grow px-3 border-none py-2 text-sm  focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <CiFaceSmile className="text-2xl mx-4 " />
            <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              <IoSend className="mr-1" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
