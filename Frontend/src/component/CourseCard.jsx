import { SlCalender } from "react-icons/sl";
import { CgNotes } from "react-icons/cg";
import { FaRegUser} from 'react-icons/fa6';
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function CourseCard({ courseDetails }) {
  if (!Array.isArray(courseDetails)) return null;
  const navigate = useNavigate()
  return (
    <>
    {courseDetails.map((course, index)=>(
    <div key={index} className='flex w-full flex-col border border-[#E3E3E3] hover:border-[#1C4ED9] rounded-[8px]'>
      <div className='relative'>
        <img src={course.image} alt="" className='rounded-t-[8px] w-full h-[250px]'/>
        <div className='bg-[#296AD2] p-2 flex gap-2 items-center text-white w-fit absolute top-2 right-0'>
            <SlCalender />
            <p className=''>{course.duration}</p>
        </div>
      </div>

      <div className='p-2 '>
        <div className='flex gap-4 pb-4'>
            <div className='flex gap-1 items-center'>
                <CgNotes />
                <p className='text-[16px] font-normal'>Lesson {course.lesson}</p>
            </div>

            <div className='flex gap-1 items-center'>
                <FaRegUser />
                <p className='text-[16px] font-normal'>Student {course.studentEnroll}</p>
            </div>
        </div>
        <h1 className='pb-4 font-medium text-[24px]'>{course.title}</h1>
        <p className='pb-4 font-normal text-[16px] text-[#6F6F6F]'>{course.description} <span className='text-[#296AD2] cursor-pointer'>see more...</span></p>
        <div className='pb-4 text-[#FDC300] flex'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStarHalf />
            <p className='text-black'>({course.rating})/5 Ratings</p>
        </div>
        <div className='flex justify-between pb-4 items-center'>
            <p className='font-medium text-[20px]'>Rs.{course.discountPrice} <span className='text-[16px] text-[#D51919] font-normal line-through'>Rs.{course.price}</span></p>

            <button onClick={()=>navigate(`/courseDetailsOverview/${course.id}`)} className='hover:bg-[#296AD2] border-[#296AD2] border text-[#296AD2] hover:text-white py-2 px-5 rounded-[4px] cursor-pointer'>View Details</button>
        </div>
      </div>
    </div>
        ))}

    </>
  )
}

export default CourseCard
