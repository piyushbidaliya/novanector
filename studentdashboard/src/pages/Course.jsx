import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CourseCard from '../component/CourseCard';
import img from '../assets/courseimg1.png'

const courseDetails = [
    {
        id: 1,
        image: img,
        duration: "4 Months",
        lesson: "10",
        studentEnroll: "5K",
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        price: 11999,
        discountPrice: "4,999",
        rating: "4.5",
        completed: "0"
    },
    {
        id: 2,
        image: img,
        duration: "4 Months",
        lesson: "10",
        studentEnroll: "5K",
        title: "Python Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        price: 11999,
        discountPrice: "4,999",
        rating: "4.5",
        completed: "0"
    },
    {
        id: 3,
        image: img,
        duration: "4 Months",
        lesson: "10",
        studentEnroll: "5K",
        title: "Java Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        price: 11999,
        discountPrice: "4,999",
        rating: "4.5",
        completed: "20"
    },
    {
        id: 4,
        image: img,
        duration: "4 Months",
        lesson: "10",
        studentEnroll: "5K",
        title: "ML/AI",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        price: 11999,
        discountPrice: "4,999",
        rating: "4.5",
        completed: "20"
    },
    {
        id: 5,
        image: img,
        duration: "4 Months",
        lesson: "10",
        studentEnroll: "5K",
        title: "Data Science",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        price: 11999,
        discountPrice: "4,999",
        rating: "4.5",
        completed: "100"
    },
    {
        id: 6,
        image: img,
        duration: "4 Months",
        lesson: "10",
        studentEnroll: "5K",
        title: "Graphic designing",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        price: 11999,
        discountPrice: "4,999",
        rating: "4.5",
        completed: "100"
    },
]


function Enroll() {
  const enrollCourses = courseDetails.filter(course => course.completed === "0");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
      <CourseCard courses={enrollCourses} />
    </div>
  );
}

function Active() {
  const activeCourses = courseDetails.filter(course => {
    const c = parseInt(course.completed);
    return c > 0 && c < 100;
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
      <CourseCard courses={activeCourses} />
    </div>
  );
}

function Completed() {
  const completedCourses = courseDetails.filter(course => course.completed === "100");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
      <CourseCard courses={completedCourses} />
    </div>
  );
}



function Course() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab') || 'enroll';
  const [activeTab, setActiveTab] = useState(tabFromUrl);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  return (
    <section className=''>
      <h1 className='font-semibold text-[24px] text-[#1C2638] pb-6'>Course</h1>
      <div className='flex gap-4 p-0 sm:p-4 space-y-6 justify-evenly flex-wrap'>
        {['enroll', 'active', 'completed'].map((tab) => (
          <p
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`cursor-pointer font-semibold text-[18px] md:py-3 md:px-4 h-fit ${
              activeTab === tab
                ? 'border-[#4640DE] text-[#4640DE] border-b-2'
                : 'border-b-0 text-[#A0A0A0]'
            }`}
          >
            {tab === 'enroll' && 'Enroll Course'}
            {tab === 'active' && 'Active Course'}
            {tab === 'completed' && 'Completed Course'}
          </p>
        ))}
      </div>

      {activeTab === 'enroll' && <Enroll />}
      {activeTab === 'active' && <Active />}
      {activeTab === 'completed' && <Completed />}
    </section>
  );
}

export default Course;
