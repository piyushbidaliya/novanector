import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CourseCard from '../../component/CourseCard';


function Published() {
  return (
    <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center '>
      <CourseCard/>
    </div>
  )
}

function Pending() {
  return (
    <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center '>
      <CourseCard/>
    </div>
  )
}


function Draft() {
  return (
    <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center '>
      <CourseCard/>
    </div>
  )
}


function Course() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab') || 'published';
  const [activeTab, setActiveTab] = useState(tabFromUrl);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  return (
    <section className=''>
      <h1 className='font-semibold text-[24px] text-[#1C2638] pb-6'>Course</h1>
      <div className='flex gap-4 p-0 sm:p-4 space-y-6 justify-evenly flex-wrap'>
        {['published', 'pending', 'draft'].map((tab) => (
          <p
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`cursor-pointer font-semibold text-[18px] md:py-3 md:px-4 h-fit ${
              activeTab === tab
                ? 'border-[#4640DE] text-[#4640DE] border-b-2'
                : 'border-b-0 text-[#A0A0A0]'
            }`}
          >
            {tab === 'published' && 'Published'}
            {tab === 'pending' && 'Pending'}
            {tab === 'draft' && 'Draft'}
          </p>
        ))}
      </div>

      {activeTab === 'published' && <Published />}
      {activeTab === 'pending' && <Pending />}
      {activeTab === 'draft' && <Draft />}
    </section>
  );
}

export default Course;
