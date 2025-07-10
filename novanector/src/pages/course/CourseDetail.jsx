import React, { useEffect, useState } from 'react';
import courseDetails from '../../assets/courseDetails';
import { useParams, useSearchParams } from 'react-router-dom';
import instructor1 from '../../assets/instructor1.jpg';
import { TbTag } from "react-icons/tb";
import { MdOutlineDateRange, MdOutlineQuiz } from "react-icons/md";
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa6';
import { IoBookmarkOutline, IoCartOutline, IoDocumentTextOutline, IoGlobeOutline, IoHeart, IoHeartOutline, IoStarOutline } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { VscBook } from "react-icons/vsc";

import Overview from './Overview';
import Curriculum from './Curriculum';
import Instructor from './Instructor';
import Reviews from './Reviews';

const tabDetails = [
  { icon: <IoBookmarkOutline />, title: "overview" },
  { icon: <IoDocumentTextOutline />, title: "curriculum" },
  { icon: <FaRegUser />, title: "instructor" },
  { icon: <IoStarOutline />, title: "reviews" }
];

const courseInfoList = [
  { icon: <FaRegUser />, label: 'Instructor', value: 'Kevin Perry' },
  { icon: <VscBook />, label: 'Lesson', value: '10' },
  { icon: <IoBookmarkOutline />, label: 'Course Level', value: 'Beginners' },
  { icon: <IoGlobeOutline />, label: 'Language', value: 'English' },
  { icon: <MdOutlineQuiz />, label: 'Quizzers', value: '05' },
  { icon: <LiaCertificateSolid />, label: 'Certificate', value: 'Yes' },
];

function CourseDetail() {
  const { courseId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab') || 'overview';

  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState(tabFromUrl);

  useEffect(() => {
    const selected = courseDetails.find(course => String(course.id) === courseId);
    setCourse(selected);
  }, [courseId]);

  const handleTabChange = (tabTitle) => {
    setActiveTab(tabTitle);
    setSearchParams({ tab: tabTitle });
  };

  return (
    <div className='px-4 md:px-12 lg:px-24 py-10 lg:py-18 h-full'>
      {course ? (
        <>
          {/* Top Section */}
          <div className='flex flex-col md:flex-row gap-6 pb-10'>
            <div className='flex-1 h-[278px]'>
              <img src={course.image} alt="Course" className='h-full w-full object-cover rounded-lg' />
            </div>
            <div className='flex-[0.5] space-y-5'>
              <h1 className='font-medium text-[30px] lg:text-[44px] leading-tight'>{course.title}</h1>

              <div className='flex flex-wrap gap-2'>
                {['Best Seller', 'Latest', 'Developer'].map((tag, i) => (
                  <p key={i} className='rounded-full py-2 px-4 bg-[#EBF5FF] text-[#296AD2] text-sm'>{tag}</p>
                ))}
              </div>

              <div className='flex justify-between flex-wrap gap-3 items-center'>
                <div className='flex gap-2 items-center'>
                  <img src={instructor1} alt="Instructor" className='w-8 h-8 rounded-full' />
                  <p className='text-[16px]'>Instructor: {course.instructor || "Kevin Perry"}</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <TbTag />
                  <p>{course.name || "Web Development"}</p>
                </div>
              </div>

              <div className='flex justify-between flex-wrap gap-3'>
                <div className='flex items-center gap-2'>
                  <MdOutlineDateRange />
                  <p>{course.date || "17, April, 2025"}</p>
                </div>
                <div className='flex items-center gap-2 text-[#FDC300]'>
                  {[...Array(4)].map((_, i) => <IoIosStar key={i} />)}
                  <IoIosStarHalf />
                  <p className='text-black'>({course.rating})</p>
                </div>
              </div>
            </div>
          </div>

          {/* Body Section */}
          <div className='flex flex-col lg:flex-row gap-6 items-start'>
            {/* Left - Tabs and Content */}
            <div className='w-full lg:w-3/4 border border-[#E3E3E3] p-5 rounded-2xl'>
              <div className='flex border border-[#E3E3E3] flex-wrap'>
                {tabDetails.map((tab, index) => (
                  <div
                    key={index}
                    onClick={() => handleTabChange(tab.title)}
                    className={`flex items-center gap-2 px-4 py-2.5 cursor-pointer flex-1 justify-center text-[18px] border-r-1 border-[#E3E3E3]
                      ${activeTab === tab.title
                        ? 'bg-[#E7F3FF] text-[#296AD2] font-normal'
                        : 'bg-[#F6F6F6] text-[#6F6F6F] hover:bg-gray-100'
                      }`}
                  >
                    {tab.icon}
                    {tab.title.charAt(0).toUpperCase() + tab.title.slice(1)}
                  </div>
                ))}
              </div>

              {/* Tab Content */}
              <div className='mt-4'>
                {activeTab === 'overview' && <Overview />}
                {activeTab === 'curriculum' && <Curriculum />}
                {activeTab === 'instructor' && <Instructor />}
                {activeTab === 'reviews' && <Reviews />}
              </div>


            </div>

            {/* Right - Sidebar */}
            <div className='w-full lg:w-1/4 border border-[#E3E3E3] p-5 rounded-2xl space-y-2'>
              <p className='font-normal text-[24px]'>Course Information</p>
              {courseInfoList.map((item, index) => (
                <div key={index}>
                  <div className='flex justify-between font-normal text-[16px] py-4'>
                    <div className='flex gap-2 items-center'>
                      {item.icon}
                      <p>{item.label}:</p>
                    </div>
                    <p>{item.value}</p>
                  </div>
                  {/* Divider except after last item */}
                  {index !== courseInfoList.length - 1 && (
                    <div className='border-b border-[#E3E3E3]'></div>
                  )}
                </div>
              ))}
              <div>
                <p className='font-medium text-[24px] pt-2'>Price</p>
                <div className='flex justify-between flex-wrap pb-4'>
                  <p className='font-medium text-[20px] text-[#479E2A]'>Rs. {course.discountPrice} +GST</p>
                  <p className='bg-[#296AD2] text-white rounded-[20px] py-1 px-2.5 text-[16px] font-normal'>58% off</p>
                </div>
              </div>

              <div className='flex gap-2 justify-center items-center border border-[#296AD2] text-[#296AD2] py-3 px-4 rounded-[4px]'>
                <IoHeartOutline className='w-6 h-6'/>
                <button className='font-normal text-[18px]'>Add to Whislist</button>
              </div>

              <div className='flex gap-2 justify-center items-center bg-[#296AD2] text-white py-3 px-4 rounded-[4px]'>
                <IoCartOutline className='w-6 h-6'/>
                <button className='font-normal text-[18px]'>Add to cart</button>
              </div>

            </div>
          </div>
        </>
      ) : (
        <p>Loading course details...</p>
      )}
    </div>
  );
}

export default CourseDetail;
