import React, { useState } from "react";
import { FaStar, FaBook } from "react-icons/fa";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Published");

  const courses = [
    // === PUBLISHED COURSES ===
    {
      id: 1,
      title: "Full Stack Web Development",
      duration: "12 weeks",
      description:
        "Learn front-end & back-end development with real-world projects using HTML, CSS, JS, and React.",
      lessons: 20,
      rating: 4.8,
      price: "₹ 4,999",
      image: "/Section.png",
      status: "Published",
    },
    {
      id: 2,
      title: "Frontend Bootcamp",
      duration: "10 weeks",
      description:
        "Master frontend technologies like HTML, CSS, JavaScript, and React to build amazing UIs.",
      lessons: 18,
      rating: 4.7,
      price: "₹ 3,499",
      image: "/Section.png",
      status: "Published",
    },
    {
      id: 3,
      title: "React JS Essentials",
      duration: "8 weeks",
      description:
        "Learn modern React from scratch including hooks, context, and component architecture.",
      lessons: 15,
      rating: 4.9,
      price: "₹ 2,999",
      image: "/Section.png",
      status: "Published",
    },

    // === PENDING COURSES ===
    {
      id: 4,
      title: "Node.js & Express Crash Course",
      duration: "9 weeks",
      description:
        "Understand backend development with Node.js and Express. Build REST APIs from scratch.",
      lessons: 16,
      rating: 4.6,
      price: "₹ 3,999",
      image: "/Section.png",
      status: "Pending",
    },
    {
      id: 5,
      title: "MongoDB for Beginners",
      duration: "6 weeks",
      description:
        "Get started with MongoDB, NoSQL databases, and CRUD operations in a hands-on course.",
      lessons: 12,
      rating: 4.5,
      price: "₹ 2,499",
      image: "/Section.png",
      status: "Pending",
    },
    {
      id: 6,
      title: "TypeScript Mastery",
      duration: "7 weeks",
      description:
        "Level up your JS skills by learning TypeScript, interfaces, types, and real-world use cases.",
      lessons: 14,
      rating: 4.7,
      price: "₹ 3,299",
      image: "/Section.png",
      status: "Pending",
    },
  ];

  const filteredCourses = courses.filter(
    (course) => course.status === activeTab
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>

      {/* Tabs */}
      <div className="flex justify-center mb-6 border-b border-gray-300">
        {["Published", "Pending"].map((tab) => (
          <button
            key={tab}
            className={`mx-4 pb-2 text-lg ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-xl transition-all duration-300"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                {course.duration}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{course.description}</p>

              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="flex items-center gap-1">
                  <FaBook className="text-blue-600" />
                  {course.lessons} Lessons
                </span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  {course.rating}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-green-600 font-bold">{course.price}</span>
                <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-500 hover:text-white transition">
                  View Detail
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredCourses.length === 0 && (
          <p className="text-center col-span-3 text-gray-500">
            No {activeTab} courses available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Courses;
