import React from 'react'
import { IoClose } from 'react-icons/io5'

function AddModule({close}) {
  return (
    <div className='fixed top-28 lg:top-0 bottom-0 left-0 right-0 px-4 bg-neutral-800/70 flex items-center justify-center z-50'>
        <div className='bg-[#F7FAFC] max-w-3xl w-full p-4 rounded space-y-4'>
            <div className='flex items-center justify-between p-5'>
                <p className='font-medium text-[20px]'>Add Module</p>
                <button onClick={close} className='w-fit block ml-auto cursor-pointer'>
                    <IoClose size={25}/>
                </button>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-normal text-[14px]'>Module Name</label>
                <input type="text" className='border border-[#E3E3E3] p-4 w-full rounded-lg outline-none'/>
            </div>
            <div className='font-normal text-[14px] flex gap-3 justify-end'>
                <button onClick={close} className='border border-[#296AD2] text-[#296AD2] rounded-sm py-2 px-5 cursor-pointer'>Cancel</button>
                <button className='border border-[#296AD2] bg-[#296AD2] text-white rounded-sm py-2 px-5 cursor-pointer'>Upload Module</button>
            </div>
        </div>
    </div>
  )
}

export default AddModule
