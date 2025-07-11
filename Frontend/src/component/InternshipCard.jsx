import React from 'react'
import internshipDetails from '../assets/internshipDetails'
import { IoIosStar, IoIosStarHalf } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function InternshipCard() {
    const navigate = useNavigate()
  return (
    <>
    {internshipDetails.map((internship, index)=>(
    <div key={index} className='flex w-full flex-col border border-[#E3E3E3] hover:border-[#1C4ED9] rounded-[8px]'>
      <div className=''>
        <img src={internship.image} alt="" className='rounded-t-[8px] w-full h-[250px]'/>
      </div>

      <div className='p-2 '>
        <h1 className='pb-4 font-medium text-[24px]'>{internship.title}</h1>
        <p className='pb-4 font-normal text-[16px] text-[#6F6F6F]'>{internship.description} <span className='text-[#296AD2] cursor-pointer'>see more...</span></p>
        <div className='pb-4 text-[#FDC300] flex justify-center items-center'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStarHalf />
            <p className='text-black'>({internship.rating})/5 Ratings</p>
        </div>
            <button onClick={()=>navigate(`/internshipDetails/${internship.id}`)} className='w-full bg-[#296AD2] text-white py-2 px-5 rounded-[4px] cursor-pointer'>Register Now</button>
      </div>
    </div>
        ))}

    </>
  )
}

export default InternshipCard
