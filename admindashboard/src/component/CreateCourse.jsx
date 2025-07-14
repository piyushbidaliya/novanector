import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";

function CreateCourse() {
    return (
        <>
            <div className='absolute bg-white text-[#292929] top-23 left-4 right-4 md:left-12 md:right-10 lg:left-89 lg:right-20 space-y-6'>
                <form action="" className='p-5 border border-[#E3E3E3] rounded-[8px] space-y-6'>
                    <div className='flex justify-between items-center p-5'>
                        <h1 className='font-medium text-[20px]'>Course Info</h1>
                        <FaAngleDown />
                    </div>
                    {/* course Info */}
                    <div className='flex items-center flex-wrap gap-2'>
                        <div className='flex-1 flex flex-col gap-2'>
                            <label htmlFor="" className='font-normal text-[14px]'>Course Title</label>
                            <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <label htmlFor="" className='font-normal text-[14px]'>Course Slug</label>
                            <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                        </div>
                    </div>

                    {/* about course */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='font-normal text-[14px]'>About Course</label>
                        <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                    </div>

                    {/* course price */}
                    <div className='p-5 space-y-6 bg-[#F4F4F4] rounded-[12px]'>
                        <h1 className='font-medium text-[18px]'>Course Price</h1>
                        <div className='flex items-center flex-wrap gap-2'>
                            <div className='flex-1 flex flex-col gap-2'>
                                <label htmlFor="" className='font-normal text-[14px]'>Regular Price()</label>
                                <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                            </div>
                            <div className='flex-1 flex flex-col gap-2'>
                                <label htmlFor="" className='font-normal text-[14px]'>Discount Price()</label>
                                <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                            </div>
                        </div>
                    </div>

                    {/* choose categories */}
                    <div className='flex flex-col gap-2'>
                        <p className='font-normal text-[14px]'>Choose Categories</p>
                        <label htmlFor="" className='p-4 border border-[#E3E3E3] rounded-[8px] flex justify-between items-center'>
                            <input type="select" className='w-full outline-none' placeholder='Design, Development' />
                            <FaAngleDown />
                        </label>
                    </div>

                    {/* choose thumbnail */}
                    <div className='flex flex-col gap-2'>
                        <p className='font-normal text-[14px]'>Course Thumbnail</p>
                        <label className='flex flex-col items-center border border-[#4640DE] border-dashed p-4 cursor-pointer'>
                            <FiUpload className='text-[#4640DE] text-2xl' />
                            <p className='font-medium text-[16px] text-[#212D44]'>Choose a File</p>
                            <input type="file" className='hidden' />
                        </label>
                        <p className='font-medium text-[12px] text-[#6F6F6F]'>Size:700*430 pixels, File Support: JPG,JPEG,PNG,GIF,WEBP</p>
                    </div>

                    <button className='py-2.5 px-5 rounded-[8px] bg-[#296AD2] text-white font-normal text-[14px] cursor-pointer'>Update Info</button>
                </form>
                            {/* course intro video */}
                <div className='p-5 border border-[#E3E3E3] rounded-[8px] space-y-6'>
                    <form action="" >
                        <div className='flex justify-between items-center p-5'>
                            <h1 className='font-medium text-[20px]'>Course Intro Video</h1>
                            <FaAngleDown />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='font-normal text-[14px]'>Course Intro Video</label>
                            <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                            <p className='font-medium text-[12px] text-[#6F6F6F]'>Example: https://www.youtube.com/watch?v=yourvideoid</p>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default CreateCourse
