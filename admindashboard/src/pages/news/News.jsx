import React, { useState } from 'react'
import NewsCard from '../../component/NewsCard'
import AddNews from './AddNews'

function News() {
    const [openAddNews, setOpenAddNews] = useState(false)
    
  return (
    <>
    <div className='pt-8 space-y-6'>
        <h1 className='font-medium text-[20px]'>News</h1>
        <button onClick={()=>setOpenAddNews(true)} className='py-2.5 px-5 rounded-[8px] bg-[#296AD2] text-white font-normal text-[14px] cursor-pointer'>+ Add New News</button>
        <div className='grid gird-cols-1 sm:grid-cols-2 gap-6 justify-center'>
            <NewsCard/>
        </div>
    </div>
    {openAddNews && (<AddNews close={()=>setOpenAddNews(false)}/>)}
    </>
  )
}

export default News
