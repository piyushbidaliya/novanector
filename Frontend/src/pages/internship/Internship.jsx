import React from 'react'
import Heading from '../../component/ThunderHeading'
import InternshipCard from '../../component/InternshipCard'
import { Link } from 'react-router-dom'

function Internship() {
  return (
    <section className=''>
        <div className='flex justify-center flex-col items-center'>
            <div className='px-4 md:px-12 lg:px-24 py-10 lg:pt-18 h-full'>
                <h1 className='font-medium text-[26px] md:text-[40px] text-center'>Internships</h1>
                <p className='text-[16px] font-normal text-[#6F6F6F] text-center px-4 md:px-24 pb-10 '>Kickstart your career with hands-on internship opportunities designed to apply what you’ve learned. Gain real-world experience,
    build your confidence, and grow into your professional journey.</p>
            </div>

            <div className='bg-[#EBF5FF] px-4 md:px-12 lg:px-24 py-10 lg:py-18 w-full flex justify-between flex-wrap'>
                <h1 className='text-[#296AD2] font-medium text-[26px] md:text-[36px]'>Internship also Available in Offline Mode</h1>
                <Link to="/contact" className='text-[#296AD2] rounded-[8px] border-2 border-[#296AD2] py-2 px-6 font-medium text-[18px]'>Contact Us</Link>
            </div>

            <div className='px-4 md:px-12 lg:px-24 py-10 h-full flex flex-col items-center'>
                <Heading title="Internship Online"/>
                <h1 className='font-medium text-[26px] md:text-[40px] pb-0 sm:pb-6 text-center'>Want to kick start your Journey</h1>
            </div>

        </div>
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center px-4 md:px-12 lg:px-24 pb-10 lg:pb-18 h-full'>
            <InternshipCard/>
        </div>
    </section>
  )
}

export default Internship
