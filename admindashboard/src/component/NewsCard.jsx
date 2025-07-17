import React from 'react'
import { FaArrowRightLong, FaRegUser } from 'react-icons/fa6'
import img from '../assets/news.png'
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const newsDetails = [
    {
        id: 1,
        image: img,
        name: "Alice Johnson",
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        date: "10 November 2025",
        time: "09 AM - 11 AM"
    },
    {
        id: 2,
        image: img,
        name: "Alice Johnson",
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        date: "10 November 2025",
        time: "09 AM - 11 AM"
    },
    {
        id: 3,
        image: img,
        name: "Alice Johnson",
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        date: "10 November 2025",
        time: "09 AM - 11 AM"
    },
    {
        id: 4,
        image: img,
        name: "Alice Johnson",
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        date: "10 November 2025",
        time: "09 AM - 11 AM"
    },
]

function NewsCard() {
    const navigate = useNavigate()
  return (
    <>
    {newsDetails.map((news, index)=>(

        <div key={index} className='rounded-[8px] border border-[#D2D2D2] '>
            <div>
                <img src={news.image} alt="" className='rounded-[8px]'/>
            </div>

            <div className='px-4 pt-1 pb-5'>
                <div className='flex gap-6 pb-5'>
                    <div className='flex items-center gap-2'>
                        <FaRegUser className='w-3 h-3'/>
                        <p className='font-normal text-[16px]'>{news.name}</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <MdOutlineDateRange className='w-3 h-3'/>
                        <p className='font-normal text-[16px]'>{news.date}</p>
                    </div>
                </div>


                <p className='pb-5 font-medium text-[24px]'>{news.title}</p>
                <p className='pb-5 font-normal text-[16px] text-[#6F6F6F]'>{news.description}</p>

                <div className='flex justify-center'>
                    <button onClick={()=>navigate(`/newsDetails/${news.id}`)} className='cursor-pointer text-center text-[#296AD2] font-normal text-[14px]'>Read More <FaArrowRightLong className='inline ml-2'/> </button>
                </div>
            </div>
        
        </div>
    ))}

    </>
  )
}

export default NewsCard
