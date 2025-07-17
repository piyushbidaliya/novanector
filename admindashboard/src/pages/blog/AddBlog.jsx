import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

function AddBlog({close}) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])
  return (
        <div className='fixed inset-0 px-4 bg-neutral-800/70 flex items-center justify-center z-50'>
            <div className='bg-[#F7FAFC] max-w-3xl w-full max-h-[90vh] overflow-y-auto px-4 rounded'>
                <div className='flex items-center justify-between p-5 sticky top-0 bg-[#F7FAFC] z-10'>
                    <p className='font-medium text-[20px]'>Add Blog</p>
                    <button onClick={close} className='w-fit block ml-auto cursor-pointer'>
                        <IoClose size={25} />
                    </button>
                </div>
                <form action="" className='space-y-4'>
                    <div className='flex flex-col'>
                        <label className='font-normal text-[14px]'>Blog Title</label>
                        <input type='text' className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                    </div>

                    <div className='flex flex-col'>
                        <label className='font-normal text-[14px]'>Blog Description</label>
                        <input type='text' className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-normal text-[14px]'>Blog Instructor</label>
                        <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-normal text-[14px]'>Add Tags</label>
                        <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                    </div>

                    
                    <div className='flex gap-4 flex-wrap'>
                        <div className='flex flex-col flex-1'>
                            <label htmlFor="" className='font-normal text-[14px]'>Date</label>
                            <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <label htmlFor="" className='font-normal text-[14px]'>Time</label>
                            <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-normal text-[14px]'>Category</label>
                        <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-normal text-[14px]'>Language</label>
                        <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                    </div>

                    <div className='flex flex-col '>
                        <p className='font-normal text-[14px]'>Social Network</p>
                        <label htmlFor="" className='space-y-4'>
                            <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' placeholder='Dribble'/>
                            <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' placeholder='LinkedIn'/>
                            <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' placeholder='Facebook'/>
                            <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' placeholder='Twitter'/>
                        </label>
                    </div>
                    
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-normal text-[14px]'>Review</label>
                        <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none' />
                    </div>

                    <div className='font-normal text-[14px] flex gap-3 justify-end pb-5'>
                        <button onClick={close} className='border border-[#296AD2] text-[#296AD2] rounded-sm py-2 px-5 cursor-pointer'>Cancel</button>
                        <button className='border border-[#296AD2] bg-[#296AD2] text-white rounded-sm py-2 px-5 cursor-pointer'>Upload Blog</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AddBlog
