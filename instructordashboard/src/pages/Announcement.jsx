import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Announcement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const announcements = [
    { date: "March 26, 2025", time: "10.00am", title: "Announcement Title", course: "Course: Fundamentals 101" },
    { date: "March 26, 2025", time: "10.00am", title: "Announcement Title", course: "Course: Fundamentals 101" },
    { date: "March 26, 2025", time: "10.00am", title: "Announcement Title", course: "Course: Fundamentals 101" },
    { date: "March 26, 2025", time: "10.00am", title: "Announcement Title", course: "Course: Fundamentals 101" },
    { date: "March 26, 2025", time: "10.00am", title: "Announcement Title", course: "Course: Fundamentals 101" },
    { date: "March 26, 2025", time: "10.00am", title: "Announcement Title", course: "Course: Fundamentals 101" },
    { date: "March 26, 2025", time: "10.00am", title: "Announcement Title", course: "Course: Fundamentals 101" },
    { date: "March 26, 2025", time: "10.00am", title: "Announcement Title", course: "Course: Fundamentals 101" },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-xl font-semibold">Announcement</h1>

      {/* Top Card */}
      <div className="bg-blue-50 p-4 rounded flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h2 className="text-lg font-semibold">Notify your all students.</h2>
          <p className="text-gray-600">Create Announcement</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-3 md:mt-0 hover:bg-blue-700 transition"
        >
          Add New Announcement
        </button>
      </div>

      {/* Announcement Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-blue-50 text-left">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Announcements</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((item, index) => (
              <tr
                key={index}
                className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-blue-50"}`}
              >
                <td className="p-3">{item.date}<br /><span className="text-xs text-gray-500">{item.time}</span></td>
                <td className="p-3">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.course}</p>
                </td>
                <td className="p-3 text-red-500 cursor-pointer hover:underline">Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[800px] p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <IoClose size={24} />
            </button>

            <h2 className="text-lg font-semibold mb-4">Add New Announcement</h2>

            <div className="space-y-4">
              {/* Announcement Title */}
              <div>
                <label className="block text-gray-700 mb-1">Announcement Title</label>
                <input
                  type="text"
                  placeholder="Write title name"
                  className="w-full border rounded px-3 py-2 focus:outline-blue-500"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Schedule Date</label>
                  <input
                    type="date"
                    className="w-full border rounded px-3 py-2 focus:outline-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Schedule Time</label>
                  <input
                    type="time"
                    className="w-full border rounded px-3 py-2 focus:outline-blue-500"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="border px-4 py-2 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Upload Announcement
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
