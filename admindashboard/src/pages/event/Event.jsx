import React, { useState } from 'react'
import EventCard from '../../component/EventCard'
import AddEvent from './AddEvent'


function Event() {
    const [openAddEvent, setOpenAddEvent] = useState(false)
    
  return (
    <>
    <div className='pt-8 space-y-6'>
        <h1 className='font-medium text-[20px]'>Events</h1>
        <button onClick={()=>setOpenAddEvent(true)} className='py-2.5 px-5 rounded-[8px] bg-[#296AD2] text-white font-normal text-[14px] cursor-pointer'>+ Add New Event</button>
        <div className='grid gird-cols-1 sm:grid-cols-2 gap-6 justify-center'>
            <EventCard/>
        </div>
    </div>
    {openAddEvent && (<AddEvent close={()=>setOpenAddEvent(false)}/>)}
    </>
  )
}

export default Event
