import { SlCalender } from "react-icons/sl";
import { CgNotes } from "react-icons/cg";
import { FaRegUser} from 'react-icons/fa6';
import { IoIosStar, IoIosStarHalf } from "react-icons/io";


function CourseCard({ courses }) {
  if (!Array.isArray(courses)) return null;

  return (
    <>
      {courses.map((course, index) => {
        const progress = parseInt(course.completed);
        return (
          <div
            key={index}
            className="flex w-full flex-col border border-[#E3E3E3] hover:border-[#1C4ED9] rounded-[8px]"
          >
            <div className="relative">
              <img src={course.image} alt="" className="rounded-t-[8px] w-full h-[250px]" />
              <div className="bg-[#296AD2] p-2 flex gap-2 items-center text-white w-fit absolute top-2 right-0">
                <SlCalender />
                <p>{course.duration}</p>
              </div>
            </div>

            <div className="p-2 space-y-4">
              <div className="flex gap-4">
                <div className="flex gap-1 items-center">
                  <CgNotes />
                  <p className="text-[16px] font-normal">Lesson {course.lesson}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <FaRegUser />
                  <p className="text-[16px] font-normal">Student {course.studentEnroll}</p>
                </div>
              </div>

              <h1 className="font-medium text-[24px]">{course.title}</h1>
              <p className="font-normal text-[16px] text-[#6F6F6F]">{course.description}</p>

              <div className="text-[#FDC300] flex items-center gap-1">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                <p className="text-black">({course.rating})/5 Ratings</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="font-normal text-[12px] text-[#ABABAB]">Completed</p>
                <p className="font-normal text-[12px] text-[#ABABAB]">{progress}%</p>
              </div>

              <div className="border border-[#E3E3E3] bg-[#E3E3E3] rounded-[20px] overflow-hidden">
                <div className="h-2 bg-[#296AD2]" style={{ width: `${progress}%` }}></div>
              </div>

              <button className="bg-[#296AD2] text-white py-2 px-5 rounded-xl cursor-pointer w-full">
                Start Now
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}


export default CourseCard
