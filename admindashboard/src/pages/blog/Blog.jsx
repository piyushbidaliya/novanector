import React, { useState } from 'react'
import BlogCard from '../../component/BlogCard'
import AddBlog from './AddBlog'

function Blog() {
    const [openAddBlog, setOpenAddBlog] = useState(false)

  return (
    <>
    <div className='pt-8 space-y-6'>
        <h1 className='font-medium text-[20px]'>Blogs</h1>
        <button onClick={()=>setOpenAddBlog(true)} className='py-2.5 px-5 rounded-[8px] bg-[#296AD2] text-white font-normal text-[14px] cursor-pointer'>+ Add New Blog</button>
        <div className='grid gird-cols-1 sm:grid-cols-2 gap-6 justify-center'>
            <BlogCard/>
        </div>
    </div>
    {openAddBlog && (<AddBlog close={()=>setOpenAddBlog(false)}/>)}
    </>
  )
}

export default Blog
