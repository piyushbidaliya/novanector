import React from 'react'
import { IoClose } from 'react-icons/io5'

function InternshipForm({close}) {
  return (
    <section className='fixed top-28 lg:top-0 bottom-0 left-0 right-0 px-4 bg-neutral-800/70 flex items-center justify-center'>
        <div className='bg-[#F7FAFC] max-w-xl w-full p-4 rounded space-y-1'>
            <div className='flex items-center justify-end'>
                <button onClick={close} className='w-fit block ml-auto cursor-pointer'>
                    <IoClose size={25}/>
                </button>
            </div>
            <div className='space-y-1'>
                <p className='font-medium text-[24px]'>Enroll in Internship</p>
                <p className='font-normal text-[16px] text-[#6F6F6F]'>6-month Python Programming Internship</p>
            </div>
            <div className='border border-[#DEE0E4] w-full'></div>
            <form action="" className='grid gap-2'>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-normal text-[14px]'>Full Name<span>*</span></label>
                    <input type="text" name='name' className='bg-white p-4 rounded-[4px] border border-[#DEE0E4] focus-within:outline-[#849DE1CC]'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-normal text-[14px]'>Email Address</label>
                    <input type="email" name='email' className='bg-white p-4 rounded-[4px] border border-[#DEE0E4] focus-within:outline-[#849DE1CC]' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-normal text-[14px]'>Phone Number</label>
                    <input type="text" name='phone' className='bg-white p-4 rounded-[4px] border border-[#DEE0E4] focus-within:outline-[#849DE1CC]'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-normal text-[14px]'>Select Internships Duration</label>
                    <select className='bg-white p-4 rounded-[4px] border border-[#DEE0E4] focus-within:outline-[#849DE1CC]'>
                        <option value="">6 months</option>
                        <option value="">3 months</option>
                        <option value="">1 months</option>
                    </select>
                </div>
                <div className='font-normal text-[14px]'>
                    <p className='text-[#6F6F6F]'>Selection duration: <span className='text-[#292929]'>6 Months</span></p>
                    <p className='text-[#6F6F6F]'>18% GST will include. <span className='text-[#292929]'>Total Price: 825 INR</span> </p>
                </div>

                <button className='py-3 px-6 bg-[#296AD2] text-white rounded-[8px]'>Proceed to Payment</button>

                <button className='py-3 px-6 text-[#296AD2] border border-[#296AD2] rounded-[8px]'>Cancel</button>

            </form>
        </div>
    </section>
  )
}

export default InternshipForm
