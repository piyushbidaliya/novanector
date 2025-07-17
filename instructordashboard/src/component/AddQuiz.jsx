import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

function AddQuiz({ close }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])
    return (
        <div className='fixed inset-0 px-4 bg-neutral-800/70 flex items-center justify-center z-50'>
            <div className='bg-[#F7FAFC] max-w-3xl w-full max-h-[90vh] overflow-y-auto px-4 rounded '>
                <div className='flex items-center justify-between p-5 sticky top-0 bg-[#F7FAFC] z-10'>
                    <p className='font-medium text-[20px]'>Add Quiz</p>
                    <button onClick={close} className='w-fit block ml-auto cursor-pointer'>
                        <IoClose size={25} />
                    </button>
                </div>
                <form className='space-y-4'>
                    <div className='flex flex-col'>
                        <label className='font-normal text-[14px]'>Write Your Question</label>
                        <input type='text' className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                    </div>

                    <div className='flex flex-col'>
                        <label className='font-normal text-[14px]'>Select Your Question Type</label>
                        <select name="" id="" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none'>
                            <option value="">True/False</option>
                            <option value="">MCQ</option>
                        </select>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-normal text-[14px]'>Write Your Answer</label>
                        <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-normal text-[14px]'>Lesson Summary</label>
                        <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-normal text-[14px]'>Short Answer Characters Limit</label>
                        <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                    </div>

                    <div className=''>
                        <p>Quiz Feedback Mode</p>
                        <form action="" className='space-y-4'>
                            <div className='rounded-lg p-5 border border-[#DEE0E4] flex gap-4 items-center'>
                                <input type="radio" name='feedback' className='cursor-pointer' />
                                <label htmlFor="" className='font-medium text-[#989898]'> Default <br /> Answer Shown After Quiz Is Finished. </label>
                            </div>
                            <div className='rounded-lg p-5 border border-[#DEE0E4]  flex gap-4 items-center'>
                                <input type="radio" name='feedback' className='cursor-pointer' />
                                <label htmlFor="" className='font-medium text-[#989898]'> Reveal <br /> Show Result After the Attempt.</label>

                            </div>
                            <div className='rounded-lg p-5 border border-[#DEE0E4]  flex gap-4 items-center'>
                                <input type="radio" className='cursor-pointer' name='feedback' />
                                <label htmlFor="" className='font-medium text-[#989898]'> Retry Mode <br /> Reattempt Quiz Any Number Of Times. Define Attempts Allowed Below.</label>
                            </div>
                        </form>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-normal text-[14px]'>Max Question Allowed To Answer</label>
                        <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                    </div>

                    <div className='font-normal text-[14px] flex gap-3 justify-end pb-5'>
                        <button type='button' onClick={close} className='border border-[#296AD2] text-[#296AD2] rounded-sm py-2 px-5 cursor-pointer'>Cancel</button>
                        <button className='border border-[#296AD2] bg-[#296AD2] text-white rounded-sm py-2 px-5 cursor-pointer'>Upload Quiz</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddQuiz
