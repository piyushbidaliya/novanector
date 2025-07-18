import userimage from '../assets/userimage.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { PiBookOpenTextDuotone } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";

function UserBanner({onOpenCreateCourse}) {

  return (
    <div style={{
        background: 'linear-gradient(90deg, #7F53ED 0%, #5674DB 59%, #2699C7 100%)',
        }} className='flex justify-center md:justify-between bg-red-500 w-full py-6 md:pt-30 md:pb-12 px-6 rounded-[12px] items-center text-white flex-col md:flex-row gap-4'
    >
      <div className='flex flex-col md:flex-row items-center gap-3'>
        <div className='bg-white rounded-full p-1 w-22 h-22'><img src={userimage} alt="" className='w-20 h-20 rounded-full'/></div>
        <div className='font-normal text-[16px] text-center md:text-start'>
            <p className='text-[20px] font-medium'>Michle Obema</p>
            <div className='flex flex-col md:flex-row gap-2 font-normal text-[16px] items-center'>
              <PiBookOpenTextDuotone />
              <p>5 Courses Enrolled</p>
              <LiaCertificateSolid />
              <p>4 Certificate</p>
            </div>
        </div>
      </div>


        <button onClick={onOpenCreateCourse} className='cursor-pointer border border-white bg-[#296AD2] py-3 px-4 rounded-[12px]'>Create a New Course <FaLongArrowAltRight className='inline ml-2'/></button>
    </div>
  )
}

export default UserBanner
