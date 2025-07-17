import React from 'react'
import img from '../assets/courseimg1.png'
import CourseCard from '../component/CourseCard'

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
]

function Whislist() {
  return (
    <section>
      <h1 className='font-semibold text-[24px] text-[#1C2638] pb-6'>Whislist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        <CourseCard courses={courseDetails} />
      </div>
    </section>
  )
}

export default Whislist
