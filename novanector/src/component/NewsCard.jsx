import React from 'react'
import { FaArrowRightLong, FaRegUser } from 'react-icons/fa6'
import img from '../assets/news.png'
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from 'react-router-dom';

const cardDetails = [
    {
        image: img,
        name: "Alice Johnson",
        date: "10 November 2025",
        title: "UI/UX Design Principles",
        description: "Discover the must-have books of the season from thrilling mysteries to inspiring..."
    },
    {
        image: img,
        name: "Alice Johnson",
        date: "10 November 2025",
        title: "UI/UX Design Principles",
        description: "Discover the must-have books of the season from thrilling mysteries to inspiring..."
    },
    {
        image: img,
        name: "Alice Johnson",
        date: "10 November 2025",
        title: "UI/UX Design Principles",
        description: "Discover the must-have books of the season from thrilling mysteries to inspiring..."
    },
]

function NewsCard() {
  return (
    <>
    {cardDetails.map((data, index)=>(

        <div key={index} className='rounded-[8px] border border-[#D2D2D2] '>
            <div>
                <img src={data.image} alt="" className='rounded-[8px]'/>
            </div>

            <div className='px-4 pt-1 pb-5'>
                <div className='flex gap-6 pb-5'>
                    <div className='flex items-center gap-2'>
                        <FaRegUser className='w-3 h-3'/>
                        <p className='font-normal text-[16px]'>{data.name}</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <MdOutlineDateRange className='w-3 h-3'/>
                        <p className='font-normal text-[16px]'>{data.date}</p>
                    </div>
                </div>


                <p className='pb-5 font-medium text-[24px]'>{data.title}</p>
                <p className='pb-5 font-normal text-[16px] text-[#6F6F6F]'>{data.description}</p>

                <Link to="/news"><p className='text-center text-[#296AD2] font-normal text-[14px]'>Read More <FaArrowRightLong className='inline ml-2'/> </p></Link>
            </div>
        
        </div>
    ))}

    </>
  )
}

export default NewsCard
