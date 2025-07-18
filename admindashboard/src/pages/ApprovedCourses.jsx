import React, { useState } from "react";
import { FaEye, FaEdit } from "react-icons/fa";
import EditCourseModal from "../component/EditCoursemodal";

const courseData = [
  { name: "Learning JavaScript with imagination", price: "₹ 4,999", status: "Approved" },
  { name: "Learning JavaScript with imagination", price: "₹ 4,999", status: "Pending" },
  { name: "Learning JavaScript with imagination", price: "₹ 4,999", status: "Approved" },
  { name: "Learning JavaScript with imagination", price: "₹ 4,999", status: "Failed" },
  { name: "Learning JavaScript with imagination", price: "₹ 4,999", status: "Approved" },
  { name: "Learning JavaScript with imagination", price: "₹ 4,999", status: "Pending" },
  { name: "Learning JavaScript with imagination", price: "₹ 4,999", status: "Failed" },
  { name: "Learning JavaScript with imagination", price: "₹ 4,999", status: "Approved" },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Approved":
      return "text-green-600 font-semibold";
    case "Pending":
      return "text-yellow-500 font-semibold";
    case "Failed":
      return "text-red-600 font-semibold";
    default:
      return "";
  }
};

const ApproveCourses = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEditClick = (course) => {
    setSelectedCourse(course);
    setShowEditModal(true);
  };

  return (
    <div className="py-6 min-h-screen flex flex-col gap-6">

      <div className="bg-white rounded-xl shadow p-6 overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Approve Courses</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4">Course Name</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((course, index) => (
              <tr
                key={index}
                className="even:bg-blue-50 odd:bg-white hover:bg-gray-100 transition"
              >
                <td className="py-3 px-4">{course.name}</td>
                <td className="py-3 px-4">{course.price}</td>
                <td className="py-3 px-4">
                  <span className={getStatusStyle(course.status)}>
                    {course.status}
                  </span>
                </td>
                <td className="py-3 px-4 flex gap-4 items-center">
                  <FaEye className="text-gray-700 hover:text-blue-500 cursor-pointer" />
                  <FaEdit
                    className="text-gray-700 hover:text-green-500 cursor-pointer"
                    onClick={() => handleEditClick(course)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
      <EditCourseModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        course={selectedCourse}
      />
    </div>
  );
};

export default ApproveCourses;
