import React from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { PiBookOpenText } from 'react-icons/pi'
import { TbMoneybag } from "react-icons/tb";
import CourseEnrollmentChart from '../component/CourseEnrollmentChart';
import { MdCurrencyRupee, MdOutlineReviews } from 'react-icons/md';
import img from '../assets/instructor1.jpg'
import { IoStar } from 'react-icons/io5';

const summary = [
  { icon: <PiBookOpenText className='w-6 h-6' />, number: "27", text: "Total Courses" },
  { icon: <FaRegUser className='w-6 h-6' />, number: "80", text: "Total Students" },
  { icon: <TbMoneybag className='w-6 h-6' />, number: "12K", text: "Total Earning" },
]

const instructor = [
  {
    image: img,
    name: "Sanki Jho",
    review: "25,895",
    course: "15+",
    student: "692"
  },
  {
    image: img,
    name: "Sanki Jho",
    review: "25,895",
    course: "15+",
    student: "692"
  },
  {
    image: img,
    name: "Sanki Jho",
    review: "25,895",
    course: "15+",
    student: "692"
  },
  {
    image: img,
    name: "Sanki Jho",
    review: "25,895",
    course: "15+",
    student: "692"
  },
  {
    image: img,
    name: "Sanki Jho",
    review: "25,895",
    course: "15+",
    student: "692"
  },
]

const notify = [
  {
    notification: "Account has been created successfully.",
    time: "1 Hour Ago"
  },
  {
    notification: "Account has been created successfully.",
    time: "1 Hour Ago"
  },
  {
    notification: "Account has been created successfully.",
    time: "1 Hour Ago"
  },
  {
    notification: "Account has been created successfully.",
    time: "1 Hour Ago"
  },
  {
    notification: "Account has been created successfully.",
    time: "1 Hour Ago"
  },
]

const feedback = [
  {
    coursename: "JavaScript",
    enrolled: "1,200",
    rating: "4.1"
  },
  {
    coursename: "JavaScript",
    enrolled: "1,200",
    rating: "4.1"
  },
  {
    coursename: "JavaScript",
    enrolled: "1,200",
    rating: "4.1"
  },
  {
    coursename: "JavaScript",
    enrolled: "1,200",
    rating: "4.1"
  },
]

function Dashboard() {
  return (
    <>
      {/* Summary */}
      <section className='space-y-5 pt-8'>
        <h1 className='font-medium text-[20px]'>Summary</h1>
        <div className='flex gap-5 flex-wrap'>
          {
            summary.map((data, index) => (
              <div key={index} className='flex border border-[#E3E3E3] rounded-[12px] py-4 px-5 flex-1 gap-4 items-center'>
                <div className='bg-[#296AD2] rounded-full text-white p-3'>
                  {data.icon}
                </div>
                <div className='font-medium text-[24px]'>
                  {data.number}
                  <p className='font-normal text-[16px]'>{data.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      {/* Course Enrolled Status */}
      <section className='py-5'>
        <CourseEnrollmentChart />
      </section>

      {/* Instructor + notification */}
      <section className='py-5 flex gap-4 flex-col md:flex-row'>
        <div className='flex border border-[#E3E3E3] rounded-[12px] py-4 px-5 w-3/4'>
          <div className='space-y-5'>
            <div className='flex justify-between py-2 border-b border-[#EEEEEE]'>
              <h1 className='font-medium text-[20px]'>Popular Instructor</h1>
              <p className='font-normal text-[16px] text-[#5F6C76]'>See More...</p>
            </div>
            {instructor.map((data, index) => (
              <div key={index} className='py-4 flex gap-2 border-b border-[#EEEEEE]'>
                <img src={data.image} alt="" className='w-15 h-15 rounded-full' />
                <div className='space-y-1'>
                  <p>{data.name}</p>
                  <div className='flex items-center gap-2 flex-wrap'>
                      <MdOutlineReviews />
                      <p>{data.review} Reviews</p>
                      <PiBookOpenText className='ml-2'/>
                      <p>{data.course} Courses</p>
                      <FaRegUser className='ml-2'/>
                      <p>{data.student} Students</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className='space-y-5 border border-[#E3E3E3] rounded-[12px] py-4 px-5 w-1/2'>
            <div className='flex justify-between py-2 border-b border-[#EEEEEE]'>
              <h1 className='font-medium text-[20px]'>Notification</h1>
              <p className='font-normal text-[16px] text-[#5F6C76]'>See More...</p>
            </div>
            {notify.map((data)=>(
            <div className='border-b border-[#EEEEEE] py-4'>
              <p>{data.notification}</p>
              <p>{data.time}</p>
            </div>
            ))}
        </div>
      </section>

      {/* Recent Feedbacks */}
      <section className='w-full border border-[#E3E3E3] rounded-md p-5 my-5 space-y-4'>
        <div className='flex justify-between py-2 border-b border-[#EEEEEE]'>
          <h1 className='font-medium text-[20px]'>Recent Feedbacks</h1>
          <p className='font-normal text-[16px] text-[#5F6C76]'>See More...</p>
        </div>
            <div>

              {/* Header Row */}
              <div className="hidden md:flex justify-between items-center bg-[#EBF5FF] p-5 rounded-t-md">
                <p className="w-2/3 font-medium text-[#292929]">Course Name</p>
                <p className="w-1/6 font-medium text-[#292929] text-center">Enrolled</p>
                <p className="w-1/6 font-medium text-[#292929] text-center">Rating</p>
              </div>

              {/* Content Row */}
              {feedback.map((data, index)=>(

              <div key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#EBF5FF]'} rounded-md mb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-5`}>

                {/* Course Info */}
                <div className="w-full md:w-2/3 flex flex-col sm:flex-row gap-4 items-start sm:items-center ">
                    <h3 className="font-semibold text-lg text-[#292929] pb-1">{data.coursename}</h3>
                </div>

                {/* Price */}
                <div className="w-full md:w-1/6 flex items-center text-lg text-[#232323] justify-start md:justify-center">
                  <MdCurrencyRupee className="text-[20px]" />
                  <p className="text-[18px]">{data.enrolled}</p>
                </div>

                {/* Remove */}
                <div className="w-full md:w-1/6 flex justify-start md:justify-center items-center gap-2">
                  <IoStar className='text-[#FABF23]'/>
                  <p>{data.rating}</p>
                </div>
              </div>
                        ))}    
            </div>

   
      </section>
    </>
  )
}

export default Dashboard
