import React from 'react'
import instructor2 from '../../assets/instructor2.png'
import { FaInstagram } from 'react-icons/fa6'
import { RiFacebookCircleLine } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";

function Instructor() {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='flex-[0.5] '>
            <div className='h-[322px]'>
                <img src={instructor2} alt="" className='w-full h-full object-cover'/>
            </div>
            <div className='flex items-center gap-2 py-4'>
                <p className='font-semibold text-[14px]'>Social Network:</p>
                <div className='p-2 bg-[#EBF5FF] rounded-full text-[#296AD2]'>
                    <FaInstagram />
                </div>
                <div className='p-2 bg-[#EBF5FF] rounded-full text-[#296AD2]'>
                    <RiFacebookCircleLine />
                </div>
                <div className='p-2 bg-[#EBF5FF] rounded-full text-[#296AD2]'>
                    <TfiTwitter />
                </div>
            </div>
        </div>

        <div className='space-y-5 md:p-6 flex-1'>
            <h1 className='font-normal text-[24px]'>Mason D. Logan</h1>
            <p className='font-normal text-[18px] text-[#296AD2]'>MERN Expert</p>
            <p className='font-normal text-[18px] text-[#6F6F6F]'>Master the essential skills and tools needed to create visually stunning and user-friendly web experiences. This course offers a perfect balance of theory, hands-on projects, and real-world applications. You’ll learn 
to design with intent, apply modern development practices, and solve practical design challenges. By the end, you'll be equipped to build responsive, accessible, and engaging digital products that stand out.</p>
        </div>
    </div>
  )
}

export default Instructor
