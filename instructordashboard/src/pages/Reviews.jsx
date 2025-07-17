import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const reviews = [
  {
    student: "John Lock",
    date: "January 30, 2025",
    course: "Speaking Korean for Beginners",
    rating: 5,
    text: "Good",
  },
  {
    student: "John Robi",
    date: "June 30, 2024",
    course: "PHP for Beginners",
    rating: 4,
    text: "Good",
  },
  {
    student: "Mice Jerry",
    date: "April 30, 2025",
    course: "WordPress for Beginners",
    rating: 4.5,
    text: "Good",
  },
  {
    student: "Mice Jerry",
    date: "October 30, 2021",
    course: "Speaking Korean for Beginners",
    rating: 4,
    text: "Good",
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const totalStars = hasHalfStar ? fullStars + 1 : fullStars;

  return (
    <div className="flex items-center text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {hasHalfStar && <FaStarHalfAlt />}
      {[...Array(5 - totalStars)].map((_, i) => (
        <FaStar key={i + totalStars} className="text-gray-300" />
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Reviews</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="py-3 px-4 font-medium">Student</th>
              <th className="py-3 px-4 font-medium">Date</th>
              <th className="py-3 px-4 font-medium">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
              >
                <td className="py-3 px-4">{review.student}</td>
                <td className="py-3 px-4">{review.date}</td>
                <td className="py-3 px-4">
                  <p>Course: {review.course}</p>
                  <div className="flex items-center gap-2">
                    {renderStars(review.rating)}
                    <span className="text-gray-600 text-sm">(10 Reviews)</span>
                  </div>
                  <p className="text-blue-600 underline cursor-pointer text-sm mt-1">
                    {review.text}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
