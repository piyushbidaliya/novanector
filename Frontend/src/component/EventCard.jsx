import React from 'react'
import { FaArrowRightLong, FaRegClock } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { MdOutlineDateRange } from 'react-icons/md'

function EventCard({eventDetails}) {
    const navigate = useNavigate()
  return (
    <>
    {eventDetails.map((event, index)=>(
    <div key={index} className='flex w-full flex-col border border-[#E3E3E3] hover:border-[#1C4ED9] rounded-[8px]'>
      <div className=''>
        <img src={event.image} alt="" className='rounded-t-[8px] w-full h-[250px]'/>
      </div>

      <div className='p-2 '>
        <div className='flex gap-4 pb-4'>
            <div className='flex gap-1 items-center'>
                <MdOutlineDateRange />
                <p className='text-[16px] font-normal'>{event.date}</p>
            </div>

            <div className='flex gap-1 items-center'>
                <FaRegClock />
                <p className='text-[16px] font-normal'>{event.time}</p>
            </div>
        </div>
        <h1 className='pb-4 font-medium text-[24px]'>{event.title}</h1>
        <p className='pb-4 font-normal text-[16px] text-[#6F6F6F]'>{event.description} <span className='text-[#296AD2] cursor-pointer'>see more...</span></p>
        <button onClick={()=>navigate(`/eventDetails/${event.id}`)} className='w-full py-4 text-[#296AD2] cursor-pointer font-normal text-[14px]'>View Details <FaArrowRightLong className='inline ml-2'/></button>
      </div>
    </div>
        ))}
    </>
  )
}

export default EventCard
