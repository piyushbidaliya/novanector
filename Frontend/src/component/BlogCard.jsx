import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import img from '../assets/blog.png'
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


function BlogCard({blogDetails}) {
    const navigate = useNavigate()
  return (
    <>
    {blogDetails.map((blog, index)=>(

        <div key={index} className='rounded-[8px] border border-[#D2D2D2] '>
            <div>
                <img src={blog.image} alt="" className='rounded-[8px]'/>
            </div>

            <div className='px-4 pt-1 pb-5'>
                <div className='flex items-center gap-2'>
                    <MdOutlineDateRange className='w-3 h-3'/>
                    <p className='font-normal text-[16px]'>{blog.date}</p>
                </div>

                <p className='pb-5 font-medium text-[24px]'>{blog.title}</p>
                <p className='pb-5 font-normal text-[16px] text-[#6F6F6F]'>{blog.description}</p>

                <div className='flex justify-center'>
                    <button onClick={()=>navigate(`/blogDetails/${blog.id}`)} className='cursor-pointer text-center text-[#296AD2] font-normal text-[14px]'>Read More <FaArrowRightLong className='inline ml-2'/> </button>
                </div>
            </div>
        
        </div>
    ))}

    </>
  )
}

export default BlogCard
