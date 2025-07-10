import React from 'react'
import Heading from '../../component/ThunderHeading'
import NewsCard from '../../component/NewsCard'
import newsDetails from '../../assets/newsDetails'

function News() {
  return (
    <section className='px-4 md:px-12 lg:px-24 py-10 lg:py-18 h-full'>
        <div className='flex justify-center flex-col items-center'>
            <h1 className='font-medium text-[26px] md:text-[40px]'>News</h1>
            <p className='text-[16px] font-normal text-[#6F6F6F] text-center px-4 md:px-24 pb-10'>Stay informed with the latest updates, announcements, and stories from our learning community. From platform features to success stories—explore what’s new and noteworthy.</p>
            <Heading title="Our News"/>
            <h1 className='font-medium text-[26px] md:text-[40px] pb-6'>Latest Updates</h1>
        </div>
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center'>
            <NewsCard newsDetails={newsDetails}/>
        </div>
    </section>
  )
}

export default News
