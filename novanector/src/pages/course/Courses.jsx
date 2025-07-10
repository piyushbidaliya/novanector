import React from 'react'
import CourseCard from '../../component/CourseCard'
import Heading from '../../component/ThunderHeading'
import courseDetails from '../../assets/courseDetails'

function Courses() {
  return (
    <section className='px-4 md:px-12 lg:px-24 py-10 lg:py-18 h-full'>
        <div className='flex justify-center flex-col items-center'>
            <h1 className='font-medium text-[26px] md:text-[40px]'>Courses</h1>
            <p className='text-[16px] font-normal text-[#6F6F6F] text-center px-4 md:px-24 pb-10'>Kickstart your career with hands-on internship opportunities designed to apply what you’ve learned. Gain real-world experience, build your confidence, and grow into your professional journey.</p>
            <Heading title="Top Courses"/>
            <h1 className='font-medium text-[26px] md:text-[40px] pb-6'>Explore Featured Courses</h1>
        </div>
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center'>
            <CourseCard courseDetails={courseDetails}/>
        </div>
    </section>
  )
}

export default Courses
