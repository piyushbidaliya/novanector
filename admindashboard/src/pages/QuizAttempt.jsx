import React from "react";

const quiz = [
  {
    date: "March 26,2025",
    student: "Mice Jerry",
    course: "Speaking Korean for Beginners",
    status: "Running",
    question: "50",
  },
  {
    date: "March 26,2025",
    student: "Mice Jerry",
    course: "Speaking Korean for Beginners",
    status: "TimeOver",
    question: "50",
  },
  {
    date: "March 26,2025",
    student: "Mice Jerry",
    course: "Speaking Korean for Beginners",
    status: "Failed",
    question: "50",
  },
  {
    date: "March 26,2025",
    student: "Mice Jerry",
    course: "Speaking Korean for Beginners",
    status: "Cancel",
    question: "50",
  },
];

const statusColor = {
  Running: "text-green-600",
  TimeOver: "text-yellow-500",
  Failed: "text-red-500",
  Cancel: "text-blue-500"
};

const QuizAttempt = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Quiz Attempt</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="py-3 px-4 font-medium">Quiz Name</th>
              <th className="py-3 px-4 font-medium">Total Question</th>
              <th className="py-3 px-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {quiz.map((quiz, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
              >
                <td className="py-3 px-4">
                  <p className="text-sm mt-1">
                    {quiz.date}
                  </p>
                  <p className="font-medium">Course: {quiz.course}</p>
                  <p className="font-medium">Student: {quiz.student}</p>
                </td>
                <td className="py-3 px-4">{quiz.question} Questions</td>
                <td className={`py-3 px-4 ${statusColor[quiz.status]}`}>{quiz.status}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuizAttempt;
