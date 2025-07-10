import React from 'react'
import Heading from '../../component/ThunderHeading'
import blogDetails from '../../assets/blogDetails'
import BlogCard from '../../component/BlogCard'

function Blog() {
  return (
    <section className='px-4 md:px-12 lg:px-24 py-10 lg:py-18 h-full'>
        <div className='flex justify-center flex-col items-center'>
            <h1 className='font-medium text-[26px] md:text-[40px]'>Blogs</h1>
            <p className='text-[16px] font-normal text-[#6F6F6F] text-center px-4 md:px-24 pb-10'>Discover insightful articles, practical tips, and inspiring stories designed to support your learning and career growth. Our blog keeps you informed and 
motivated with fresh content from industry experts, helping you stay ahead in your journey.</p>
            <Heading title="Our Blogs"/>
            <h1 className='font-medium text-[26px] md:text-[40px] pb-6'>Knowledge Center</h1>
        </div>
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center'>
            <BlogCard blogDetails={blogDetails}/>
        </div>
    </section>
  )
}

export default Blog
