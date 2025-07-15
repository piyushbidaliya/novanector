import React from "react";

const payments = [
  {
    id: "#5478",
    student: "Liam Patel",
    course: "UI/UX Design",
    date: "January 27, 2024",
    price: "₹ 4,999",
    status: "Success",
  },
  {
    id: "#5450",
    student: "Sophia Kim",
    course: "Java Programming",
    date: "January 12, 2024",
    price: "₹ 4,999",
    status: "Pending",
  },
  {
    id: "#5410",
    student: "Noah Ahmed",
    course: "Graphic Design",
    date: "March 20, 2025",
    price: "₹ 4,999",
    status: "Failed",
  },
  {
    id: "#5450",
    student: "Chloe Fernandez",
    course: "UI/UX Design",
    date: "January 12, 2024",
    price: "₹ 4,999",
    status: "Pending",
  },
  {
    id: "#5478",
    student: "Ethan Liu",
    course: "Java Programming",
    date: "January 27, 2024",
    price: "₹ 4,999",
    status: "Success",
  },
  {
    id: "#5450",
    student: "Isabella Rossi",
    course: "Graphic Design",
    date: "January 12, 2024",
    price: "₹ 4,999",
    status: "Pending",
  },
  {
    id: "#5410",
    student: "Mia Nguyen",
    course: "UI/UX Design",
    date: "March 20, 2025",
    price: "₹ 4,999",
    status: "Failed",
  },
  {
    id: "#5450",
    student: "Ryan Garcia",
    course: "Java Programming",
    date: "January 12, 2024",
    price: "₹ 4,999",
    status: "Pending",
  },
];

const statusColor = {
  Success: "text-green-600",
  Pending: "text-yellow-500",
  Failed: "text-red-500",
};

const Payments = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Payment History</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="py-3 px-4 font-medium">Payment ID</th>
              <th className="py-3 px-4 font-medium">Student Name</th>
              <th className="py-3 px-4 font-medium">Courses Name</th>
              <th className="py-3 px-4 font-medium">Date</th>
              <th className="py-3 px-4 font-medium">Price</th>
              <th className="py-3 px-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((pay, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
              >
                <td className="py-3 px-4">{pay.id}</td>
                <td className="py-3 px-4">{pay.student}</td>
                <td className="py-3 px-4">{pay.course}</td>
                <td className="py-3 px-4">{pay.date}</td>
                <td className="py-3 px-4">{pay.price}</td>
                <td className={`py-3 px-4 font-medium ${statusColor[pay.status]}`}>
                  {pay.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
