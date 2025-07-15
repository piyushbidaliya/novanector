import React, { useState } from "react";
import { FaStar, FaBook } from "react-icons/fa";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("published");

  const publishedCourses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      duration: "12 weeks",
      description: "Covers HTML, CSS, JavaScript, React.",
      lessons: 20,
      rating: 4.8,
      price: "₹ 4,999",
      image: "/photu.jpg",
    },
    {
      id: 2,
      title: "JavaScript Bootcamp",
      duration: "8 weeks",
      description: "Learn JS with real projects.",
      lessons: 18,
      rating: 4.7,
      price: "₹ 3,999",
      image: "/photu.jpg",
    },
    {
      id: 3,
      title: "React Native Basics",
      duration: "6 weeks",
      description: "Build mobile apps using React Native.",
      lessons: 14,
      rating: 4.6,
      price: "₹ 3,499",
      image: "/photu.jpg",
    },
    {
      id: 4,
      title: "Tailwind CSS Mastery",
      duration: "4 weeks",
      description: "Design beautiful responsive UIs.",
      lessons: 10,
      rating: 4.9,
      price: "₹ 2,999",
      image: "/photu.jpg",
    },
    {
      id: 5,
      title: "Node.js + Express",
      duration: "7 weeks",
      description: "Backend fundamentals with Node and Express.",
      lessons: 16,
      rating: 4.5,
      price: "₹ 3,499",
      image: "/photu.jpg",
    },
    // Add more if needed
  ];

  const pendingCourses = [
    {
      id: 6,
      title: "Firebase + React Project",
      duration: "5 weeks",
      description: "Realtime app using Firebase and React.",
      lessons: 12,
      rating: 4.4,
      price: "₹ 2,999",
      image: "/photu.jpg",
    },
    {
      id: 7,
      title: "Python for Beginners",
      duration: "9 weeks",
      description: "Learn Python from scratch.",
      lessons: 22,
      rating: 4.6,
      price: "₹ 4,199",
      image: "/photu.jpg",
    },
    {
      id: 8,
      title: "REST API Development",
      duration: "6 weeks",
      description: "Create APIs with Express and MongoDB.",
      lessons: 14,
      rating: 4.7,
      price: "₹ 3,899",
      image: "/photu.jpg",
    },
  ];

  const coursesToShow = activeTab === "published" ? publishedCourses : pendingCourses;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Courses</h2>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab("published")}
          className={`px-6 py-2 font-semibold border-b-2 transition ${
            activeTab === "published"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500"
          }`}
        >
          Published
        </button>
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-6 py-2 font-semibold border-b-2 transition ${
            activeTab === "pending"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500"
          }`}
        >
          Pending
        </button>
      </div>

      {/* Scrollable Grid Section */}
      <div className="max-h-[600px] overflow-y-auto pr-3 custom-scroll">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {coursesToShow.map((course) => (
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
        </div>
      </div>
    </div>
  );
};

export default Courses;
