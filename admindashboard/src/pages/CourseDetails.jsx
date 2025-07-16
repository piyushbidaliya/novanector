import React, { useState } from "react";
import {
  FaStar,
  FaBook,
  FaChalkboardTeacher,
  FaGlobe,
  FaStarHalfAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const CourseDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Overview");
  const [openSection, setOpenSection] = useState(null);

  const handleAccordion = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const curriculum = [
    {
      title: "Introduction",
      lessons: [
        { name: "Overview", time: "5 Minutes" },
        { name: "Basic", time: "10 Minutes" },
      ],
    },
    { title: "Structured Query Language (SQL)", lessons: [] },
    { title: "HTML, CSS & JavaScript Basics", lessons: [] },
    { title: "React.js (Frontend)", lessons: [] },
    { title: "Node.js & Express.js (Backend)", lessons: [] },
    { title: "MongoDB (Database)", lessons: [] },
    { title: "Deployment & DevOps", lessons: [] },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Image */}
      <div className="w-full h-64">
        <img
          src="/pic.png"
          alt="Course Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Title and Tags */}
        <h1 className="text-3xl font-bold mb-4">MERN Full-Stack Development</h1>
        <div className="flex gap-2 mb-4">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Best Seller</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Latest</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Developer</span>
        </div>

        {/* Meta Info */}
        <div className="flex justify-between items-center gap-4 text-sm text-gray-600 mb-6 flex-wrap">
          <div className="flex items-center gap-1">
            <FaChalkboardTeacher className="text-blue-600" />
            <span>Instructor: Kevin Perry</span>
          </div>
          <div className="flex items-center gap-1">
            <FaGlobe className="text-blue-600" />
            <span>Web Development</span>
          </div>
          <div className="flex items-center gap-1">
            <BiTimeFive className="text-blue-600" />
            <span>17, April, 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStarHalfAlt className="text-yellow-500" />
            <span>(4.5)</span>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="flex gap-6 pb-2 text-sm">
              {["Overview", "Curriculum", "Instructor", "Reviews"].map((tab) => (
                <button
                  key={tab}
                  className={`font-medium ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === "Overview" && (
              <>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Description</h2>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Rapidiously develop parallel e-markets via worldwide paradigms. Quickly synergize cutting-edge
                    scenarios and professional results. Assertively deliver cross-media results before client-centric
                    results. Uniquely initiate intuitive communities through process-centric internal or "organic"
                    sources.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">What Will You Learn?</h2>
                  <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                    <li>Synergize cutting-edge scenarios and professional results.</li>
                    <li>Deliver cross-media results before client-centric results.</li>
                    <li>Initiate communities through process-centric or organic sources.</li>
                    <li>Reinvent value via parallel services.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Certification</h2>
                  <p className="text-sm text-gray-700">
                    You will receive a certificate upon successful completion of the course and final quiz.
                  </p>
                  <button
                    onClick={() => navigate("/course")}
                    className="text-blue-600 text-sm mt-4 inline-block hover:underline"
                  >
                    ← Back to Courses
                  </button>
                </div>
              </>
            )}

            {/* Curriculum Tab */}
            {activeTab === "Curriculum" && (
              <div className="space-y-4">
                {curriculum.map((section, index) => (
                  <div key={index} className="border rounded-lg">
                    <button
                      className="w-full flex justify-between items-center p-4 font-medium text-left"
                      onClick={() => handleAccordion(index)}
                    >
                      {section.title}
                      {openSection === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {openSection === index && (
                      <div className="px-4 pb-4">
                        {section.lessons.length > 0 ? (
                          <ul className="list-disc pl-4 space-y-1 text-gray-700">
                            {section.lessons.map((lesson, i) => (
                              <li key={i} className="flex justify-between text-sm">
                                <span>{lesson.name}</span>
                                <span className="text-gray-500">{lesson.time}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-500 italic">No lessons added yet.</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
{activeTab === "Instructor" && (
  <div className=" shadow-sm bg-white max-w-3xl flex">
    {/* Left: Instructor Image */}
    <div className="p-4  w-[280px] flex items-center justify-center">
      <img
        src="/image.png" // Ensure this file is in public folder
        alt="Instructor"
        className="w-[280px] h-[306px] object-cover rounded-md"
      />
    </div>

    {/* Right: Instructor Text Info */}
    <div className="p-4 flex flex-col justify-center w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Mason D. Logan</h3>
      <p className="text-sm text-blue-600 font-medium mb-3">MERN Expert</p>
      <p className="text-sm text-gray-700 leading-relaxed">
        Master the essential skills and tools needed to create visually stunning and user-friendly web experiences.
        This course offers a perfect balance of theory, hands-on projects, and real-world applications. You'll learn to
        design with intent, apply modern frameworks, and tackle practical design challenges. By the end, you’ll be
        equipped to build responsive, accessible, and engaging digital products that stand out.
      </p>
    </div>
  </div>
)}



          </div>

          {/* Right Sidebar */}
          <div className="ml-5 p-4 shadow-sm space-y-3 text-sm h-fit">
            <h3 className="text-lg font-semibold mb-2">Course Information</h3>
            <p><span className="font-medium">Instructor:</span> Kevin Perry</p>
            <p><span className="font-medium">Lessons:</span> 10</p>
            <p><span className="font-medium">Course Level:</span> Beginners</p>
            <p><span className="font-medium">Language:</span> English</p>
            <p><span className="font-medium">Quizzes:</span> 05</p>
            <p><span className="font-medium">Certificate:</span> Yes</p>

            <div className="pt-2">
              <p className="text-sm font-semibold text-gray-700">Price</p>
              <p className="text-green-600 text-xl font-bold">
                Rs. 4,999 <span className="text-xs text-gray-500">+ GST</span>
              </p>
              <p className="text-blue-600 text-xs font-medium bg-blue-100 inline-block px-2 py-1 rounded mt-1">
                58% off
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
                Edit Course
              </button>
              <button className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white transition">
                Delete Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
