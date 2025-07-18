import React from "react";

const assignment = [
  {
    course: "Course: Speaking Korean for Beginners",
    marks: "80",
    obtain: "50",
    status: "Passed",
  },
  {
    course: "Course: Speaking Korean for Beginners",
    marks: "80",
    obtain: "50",
    status: "Failed",
  },
  {
    course: "Course: Speaking Korean for Beginners",
    marks: "80",
    obtain: "50",
    status: "Passed",
  },
  {
    course: "Course: Speaking Korean for Beginners",
    marks: "80",
    obtain: "50",
    status: "Failed",
  },
  {
    course: "Course: Speaking Korean for Beginners",
    marks: "80",
    obtain: "50",
    status: "Passed",
  },

];

const statusColor = {
  Passed: "text-green-600",
  Failed: "text-red-500",
};

const Assignments = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Assignment</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="py-3 px-4 font-medium">Assignment Name</th>
              <th className="py-3 px-4 font-medium">Total Marks</th>
              <th className="py-3 px-4 font-medium">Obtains</th>
              <th className="py-3 px-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {assignment.map((data, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
              >
                <td className="py-3 px-4">Course: {data.course} <br /> Course: Fundamental</td>
                <td className="py-3 px-4">{data.marks} Marks</td>
                <td className="py-3 px-4">{data.obtain}</td>
                <td className={`py-3 px-4 font-medium ${statusColor[data.status]}`}>
                  {data.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignments;
