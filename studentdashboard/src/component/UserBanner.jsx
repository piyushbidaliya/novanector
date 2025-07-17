import React, { useEffect, useState } from 'react'
import { IoStar } from 'react-icons/io5'
import userimage from '../assets/userimage.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa'

function UserBanner({onOpenCreateCourse}) {

  return (
    <div style={{
        background: 'linear-gradient(90deg, #7F53ED 0%, #5674DB 59%, #2699C7 100%)',
        }} className='flex justify-center md:justify-between bg-red-500 w-full py-12 px-6 rounded-[12px] items-center text-white flex-col md:flex-row gap-4'
    >
      <div className='flex flex-col md:flex-row items-center gap-3'>
        <div className='bg-white rounded-full p-1 w-22 h-22'><img src={userimage} alt="" className='w-20 h-20 rounded-full'/></div>
        <div className='font-normal text-[16px] text-center md:text-start'>
            Hello
            <p className='text-[20px] font-medium'>Michle Obema</p>
        </div>
      </div>

      <div className='flex gap-2 items-center font-normal text-[16px]'>
        <IoStar className='text-[#FABF23]'/>
        4.0(120 Reviews)
      </div>

        <button onClick={onOpenCreateCourse} className='cursor-pointer border border-white bg-[#296AD2] py-3 px-4 rounded-[12px]'>Create a New Course <FaLongArrowAltRight className='inline ml-2'/></button>
    </div>
  )
}

export default UserBanner
