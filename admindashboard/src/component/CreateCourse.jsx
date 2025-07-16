import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { IoAdd, IoClose } from 'react-icons/io5'
import { MdDeleteOutline, MdOutlineNoteAlt, MdOutlineQuiz } from 'react-icons/md';
import { BiEdit } from "react-icons/bi";
import { PiBookOpenText } from 'react-icons/pi';

const coursemodule = [
    {title: "Introduction to JavaScript: What It Is and Why It Matters"},
    {title: "Introduction to JavaScript: What It Is and Why It Matters"},
    {title: "Introduction to JavaScript: What It Is and Why It Matters"},
]

function CreateCourse({close, onOpenAddModule, onOpenAddLesson, onOpenAddQuiz, onOpenAddAssignment}) {

    return (
        <>
            <div className='absolute bg-white text-[#292929] top-23 left-4 right-4 md:left-12 md:right-10 lg:left-89 lg:right-20 z-50'>
                <form action="" className='space-y-6'>
                    <div className='p-5 border border-[#E3E3E3] rounded-[8px] space-y-6'>
                        <IoClose className='float-right cursor-pointer' onClick={close}/>
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
                    </div>

                    {/* course intro video */}
                    <div className='p-5 border border-[#E3E3E3] rounded-[8px] space-y-6'>
                        <div className='flex justify-between items-center p-5'>
                            <h1 className='font-medium text-[20px]'>Course Intro Video</h1>
                            <FaAngleDown />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='font-normal text-[14px]'>Course Intro Video</label>
                            <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                            <p className='font-medium text-[12px] text-[#6F6F6F]'>Example: https://www.youtube.com/watch?v=yourvideoid</p>
                        </div>

                        <button className='py-2.5 px-5 rounded-[8px] bg-[#296AD2] text-white font-normal text-[14px] cursor-pointer'>Update Info</button>
                    </div>

                    {/* Course Module */}
                    <div className='p-5 border border-[#E3E3E3] rounded-[8px] space-y-6'>
                        <div className='flex justify-between items-center p-5'>
                            <h1 className='font-medium text-[20px]'>Course Module</h1>
                            <FaAngleDown />
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-5 border border-[#E3E3E3]'>
                                <p className='font-semibold text-[16px]'>Introduction to web development</p>
                                <FaAngleUp />
                            </div>
                            {coursemodule.map((data, index)=>(

                            <div key={index} className='flex justify-between items-center p-5 border border-[#E3E3E3]'>
                                <p className='font-normal text-[16px]'>{data.title}</p>
                                <div className='flex gap-3 items-center'>
                                    <BiEdit className='w-5 h-5'/>
                                    <MdDeleteOutline className='w-5 h-5'/>
                                </div>
                            </div>
                            ))}

                            <div className='flex gap-5 py-5 font-normal text-[14px] flex-wrap'>
                                <div onClick={onOpenAddLesson} className='cursor-pointer py-2 px-4 text-[#296AD2] border-[#296AD2] border rounded-sm flex items-center gap-2'>
                                    Lesson
                                    <PiBookOpenText/>
                                </div>
                                <div onClick={onOpenAddQuiz} className='cursor-pointer py-2 px-4 text-[#296AD2] border-[#296AD2] border rounded-sm flex items-center gap-2'>
                                    Quiz
                                    <MdOutlineQuiz/>
                                </div>
                                <div onClick={onOpenAddAssignment} className='cursor-pointer py-2 px-4 text-[#296AD2] border-[#296AD2] border rounded-sm flex items-center gap-2'>
                                    Assignment
                                    <MdOutlineNoteAlt />
                                </div>
                            </div>

                            <button type='button' onClick={onOpenAddModule} className='py-2.5 px-5 rounded-[8px] bg-[#296AD2] text-white font-normal text-[14px] cursor-pointer'>Add New Module +</button>
                        </div>
                    </div>


                    {/*Additional Information*/}
                    <div className='p-5 border border-[#E3E3E3] rounded-[8px] space-y-6'>
                        <div className='flex justify-between items-center p-5'>
                            <h1 className='font-medium text-[20px]'>Additional Information</h1>
                            <FaAngleDown />
                        </div>
                        <div className='flex items-center flex-wrap gap-2'>
                            <div className='flex-1 flex flex-col gap-2'>
                                <label htmlFor="" className='font-normal text-[14px]'>Language</label>
                                <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                            </div>
                            <div className='flex-1 flex flex-col gap-2'>
                                <label htmlFor="" className='font-normal text-[14px]'>Start Date</label>
                                <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                            </div>
                        </div>

                        <div className='flex items-center flex-wrap gap-2'>
                            <div className='flex-1 flex flex-col gap-2'>
                                <label htmlFor="" className='font-normal text-[14px]'>Requirements</label>
                                <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                            </div>
                            <div className='flex-1 flex flex-col gap-2'>
                                <label htmlFor="" className='font-normal text-[14px]'>Description</label>
                                <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                            </div>
                        </div>

                        <p className='font-normal text-[14px]'>Total Course Duration</p>
                        <div className='flex items-center flex-wrap gap-2'>
                            <div className='flex-1 flex flex-col gap-2'>
                                <label htmlFor="" className='font-normal text-[14px]'>Hour</label>
                                <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                            </div>
                            <div className='flex-1 flex flex-col gap-2'>
                                <label htmlFor="" className='font-normal text-[14px]'>Minute</label>
                                <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='font-normal text-[14px]'>Course Tags</label>
                            <input type="text" className='p-4 border border-[#E3E3E3] rounded-[8px] outline-none' />
                        </div>

                        <button className='py-2.5 px-5 rounded-[8px] bg-[#296AD2] text-white font-normal text-[14px] cursor-pointer'>Update Info</button>
                    </div>

                    {/* Certificate Template */}
                    <div className='p-5 border border-[#E3E3E3] rounded-[8px] space-y-6'>
                        <div className='flex justify-between items-center p-5'>
                            <h1 className='font-medium text-[20px]'>Certificate Template</h1>
                            <FaAngleDown />
                        </div>

                        <button className='py-2.5 px-5 rounded-[8px] bg-[#296AD2] text-white font-normal text-[14px] cursor-pointer'>Upload Certificate</button>
                    </div>

                </form>

            </div>
        </>
    )
}

export default CreateCourse
