import React, { useEffect, useState } from 'react';
import courseDetails from '../../assets/courseDetails';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const selected = courseDetails.find(course => String(course.id) === courseId);
    setCourse(selected);
  }, [courseId]);

  return (
    <div className="p-6">
      {course ? (
        <>
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="mb-4 text-gray-600">{course.description}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Lessons:</strong> {course.lesson}</p>
          <p><strong>Students Enrolled:</strong> {course.studentEnroll}</p>
          <p><strong>Price:</strong> Rs. {course.discountPrice} <span className="line-through text-red-500">Rs. {course.price}</span></p>
        </>
      ) : (
        <p>Loading course details...</p>
      )}
    </div>
  );
}

export default CourseDetail;
