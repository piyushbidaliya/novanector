import React from 'react'
import Heading from '../../component/ThunderHeading'
import EventCard from '../../component/EventCard'
import eventDetails from '../../assets/eventDetails'

function Event() {
  return (
    <section className='px-4 md:px-12 lg:px-24 py-10 lg:py-18 h-full'>
        <div className='flex justify-center flex-col items-center'>
            <h1 className='font-medium text-[26px] md:text-[40px]'>Events</h1>
            <p className='text-[16px] font-normal text-[#6F6F6F] text-center px-4 md:px-24 pb-10'>Stay updated with our latest workshops, webinars, and special learning events. These live sessions offer valuable opportunities to connect with peers and
industry experts. Expand your knowledge, grow your skills, and stay ahead in your learning journey.</p>
            <Heading title="Our Events"/>
            <h1 className='font-medium text-[26px] md:text-[40px] pb-6'>Live Events</h1>
        </div>
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center'>
            <EventCard eventDetails={eventDetails}/>
        </div>
    </section>
  )
}

export default Event
