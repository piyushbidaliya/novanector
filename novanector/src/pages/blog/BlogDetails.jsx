import React, { useEffect, useState } from 'react'
import blogDetails from '../../assets/blogDetails';
import { useParams } from 'react-router-dom';
import Heading from '../../component/ThunderHeading';
import BlogCard from '../../component/BlogCard';
import { MdOutlineCategory, MdOutlineDateRange, MdOutlineReviews } from 'react-icons/md';
import { CiGlobe } from 'react-icons/ci';
import { FaInstagram, FaRegClock, FaRegUser } from 'react-icons/fa6';
import { TfiTwitter } from 'react-icons/tfi';
import { LiaFacebook } from 'react-icons/lia';

const blogInfoList = [
  { icon: <FaRegUser />, label: 'Instructor', value: 'Kevin Perry' },
  { icon: <MdOutlineDateRange />, label: 'Date', value: '20 May 2025' },
  { icon: <FaRegClock />, label: 'Duration', value: '30m 36s' },
  { icon: <MdOutlineCategory />, label: 'Category', value: 'Design' },
  { icon: <CiGlobe />, label: 'Language', value: 'English' },
  { icon: <MdOutlineReviews />, label: 'Review', value: '4.5' },

];

function BlogDetails() {
  const topThree = blogDetails.slice(0, 3)
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const selected = blogDetails.find(blog => String(blog.id) === blogId);
    setBlog(selected);
  }, [blogId]);
  return (
    <div className='px-4 md:px-12 lg:px-24 py-10 h-full'>
      {blog ? (
        <>
          {/* banner */}
          <div className='h-[392px]'>
            <img src={blog.image} alt="" className='w-full h-full rounded-[8px] object-cover' />
          </div>

          {/* right + left sidebar */}
          <div className='flex flex-col lg:flex-row gap-6 items-start py-4'>
            {/* left section */}
            <div className='w-full lg:w-3/4 space-y-6'>
              <h1 className='font-medium text-[28px]'>{blog.title}</h1>
              <p>{blog.description} This course is designed to provide complete beginners with a strong foundation in JavaScript, one of the most essential and widely used programming languages on the web. You’ll learn how to write basic JavaScript code and make websites interactive by working alongside HTML and CSS. Through hands-on exercises and real-world examples, you'll explore key programming concepts like variables, functions, loops, conditionals, and events. The course focuses on practical learning to help you understand how JavaScript brings web pages to life. No prior coding experience is required—just curiosity and a willingness to learn. By the end of this course, you'll have the confidence to build dynamic web pages and continue your journey in web development.</p>

                <div className='flex justify-between flex-wrap gap-2 rounded-[8px] border border-[#E3E3E3] p-6'>
                    <div className='flex gap-2 font-medium text-[14px] items-center'>
                        <p className=''>Tags:</p>
                        <p className='text-[#393939] bg-[#F1F1F1] py-2 px-3'>Education</p>
                        <p className='text-[#393939] bg-[#F1F1F1] py-2 px-3'>Branding</p>
                        <p className='text-[#393939] bg-[#F1F1F1] py-2 px-3'>JavaScript</p>
                    </div>

                    <div>
                        <div className='flex gap-2 font-medium text-[14px] items-center'>
                            <p className=''>Social Network:</p>
                            <p className='bg-[#F1F1F1] p-2 rounded-full'><CiGlobe className='w-5 h-5'/></p>
                            <p className='bg-[#F1F1F1] p-2 rounded-full'><FaInstagram className='w-5 h-5'/></p>
                            <p className='bg-[#F1F1F1] p-2 rounded-full'><LiaFacebook className='w-5 h-5'/></p>
                            <p className='bg-[#F1F1F1] p-2 rounded-full'><TfiTwitter className='w-5 h-5'/></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* right section */}
            <div className='w-full lg:w-1/4 space-y-6'>

              {/* top 1 */}
              <div className='border border-[#E3E3E3] p-4 rounded-[8px] space-y-2'>
                <p className='font-normal text-[24px]'>Blog Information</p>
                {blogInfoList.map((item, index) => (
                  <div key={index}>
                    <div className='flex justify-between font-normal text-[16px] py-4'>
                      <div className='flex gap-2 items-center'>
                        {item.icon}
                        <p>{item.label}:</p>
                      </div>
                      <p>{item.value}</p>
                    </div>
                    {/* Divider except after last item */}
                    {index !== blogInfoList.length - 1 && (
                      <div className='border-b border-[#E3E3E3]'></div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* blog updated */}
          <div className='py-10'>
            <div className='flex justify-center flex-col items-center'>
              <Heading title="Blogs" />
              <h1 className='font-medium text-[26px] md:text-[40px] pb-6'>Blog Updates</h1>
            </div>
            <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center'>
              <BlogCard blogDetails={topThree} />
            </div>
          </div>
        </>
      ) : (
        <p>Loading course details...</p>

      )}

    </div>
  )
}

export default BlogDetails
