import { CgNotes } from "react-icons/cg";
import { FaRegClock, FaRegStar } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import img from '../assets/course.jpg'

const courseDetails = [
    {
        id: 1,
        image: img,
        duration: "12 weeks",
        lesson: "10",
        studentEnroll: "5K",
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        price: 11999,
        discountPrice: "4,999",
        rating: "4.5"
    },
    {
        id: 2,
        image: img,
        duration: "12 weeks",
        lesson: "10",
        studentEnroll: "5K",
        title: "Python Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        price: 11999,
        discountPrice: "4,999",
        rating: "4.5"
    },
    {
        id: 3,
        image: img,
        duration: "12 weeks",
        lesson: "10",
        studentEnroll: "5K",
        title: "Java Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        price: 11999,
        discountPrice: "4,999",
        rating: "4.5"
    },
]

function CourseCard() {
  if (!Array.isArray(courseDetails)) return null;
  const navigate = useNavigate()
  return (
    <>
    {courseDetails.map((course, index)=>(
    <div key={index} className='flex w-full flex-col border border-[#E3E3E3] hover:border-[#1C4ED9] rounded-[8px] p-4'>
      <div className='relative'>
        <img src={course.image} alt="" className='rounded-[8px] w-full h-[250px]'/>
        <div className='bg-[#296AD2] p-2 flex gap-2 items-center text-white w-fit absolute top-2 left-2 rounded-full'>
            <FaRegClock />
            <p className=''>{course.duration}</p>
        </div>
      </div>

      <div className='pt-2'>

        <h1 className='pb-4 font-medium text-[20px]'>{course.title}</h1>
        <p className='pb-4 font-normal text-[16px] text-[#6F6F6F]'>{course.description}</p>
        <div className='flex gap-4 pb-4 justify-between'>
            <div className='flex gap-1 items-center'>
                <CgNotes />
                <p className='text-[16px] font-normal'>Lesson {course.lesson}</p>
            </div>

            <div className='flex gap-1 items-center'>
                <FaRegStar className="text-[#FABF23E5]"/>
                <p className='text-[16px] font-normal'>{course.rating}</p>
            </div>
        </div>
        <div className='flex justify-between pb-4 items-center flex-wrap gap-2'>
            <p className='font-medium text-[20px] text-[#16C65F]'>Rs.{course.discountPrice}</p>

            <button onClick={()=>navigate(`/courseDetails/${course.id}`)} className='hover:bg-[#296AD2] border-[#296AD2] border text-[#296AD2] hover:text-white py-2 px-5 rounded-[4px] cursor-pointer'>View Details</button>
        </div>
      </div>
    </div>
        ))}

    </>
  )
}

export default CourseCard
