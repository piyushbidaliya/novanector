import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaRegClock } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { MdBookmark, MdOutlineCategory, MdOutlineDateRange } from 'react-icons/md';
import img from '../../assets/event1.png'
import EditEvent from './EditEvent';
const eventDetails = [
    {
        id: 1,
        image: img,
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        date: "10 November 2025",
        time: "09 AM - 11 AM"
    },
    {
        id: 2,
        image: img,
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        date: "10 November 2025",
        time: "09 AM - 11 AM"
    },
    {
        id: 3,
        image: img,
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        date: "10 November 2025",
        time: "09 AM - 11 AM"
    },
    {
        id: 4,
        image: img,
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        date: "10 November 2025",
        time: "09 AM - 11 AM"
    },
]


const eventInfoList = [
    { icon: <MdOutlineDateRange />, label: 'Date', value: '20 May 2025' },
    { icon: <FaRegClock />, label: 'Schedule', value: '09 AM - 11 AM' },
    { icon: <IoLocationOutline />, label: 'Location', value: 'Online Mode' },
    { icon: <MdOutlineCategory />, label: 'Category', value: 'Programming' },
    { icon: <MdBookmark />, label: 'Estimated Seats', value: '105' },
];

const outcomes = [
    "Understand Python Fundamentals",
    "Work with Data Structures",
    "Apply Object-Oriented Programming (OOP)",
    "Handle Files and Exceptions",
    "Develop Real-World Projects"
]

const requirements = [
    "Interest in Programming",
    "No Prior Coding Experience Needed",
    "Willingness to Practice"
]

function EventDetails() {
    const [openEditEvent, setOpenEditEvent] = useState(false)
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const selected = eventDetails.find(event => String(event.id) === eventId);
        setEvent(selected);
    }, [eventId]);
    return (
        <div className=' py-10 h-full'>
            {event ? (
                <>
                    {/* banner */}
                    <div className='h-[392px]'>
                        <img src={event.image} alt="" className='w-full h-full rounded-[8px] object-cover' />
                    </div>

                    {/* right + left sidebar */}
                    <div className='flex flex-col lg:flex-row gap-6 items-start py-4'>
                        {/* left section */}
                        <div className='w-full lg:flex-1 space-y-6'>
                            <h1 className='font-medium text-[28px]'>{event.title}</h1>
                            <h3 className='font-medium text-[20px]'>Overview</h3>
                            <p className='font-normal text-[18px] text-[#6F6F6F]'>{event.description} The Python Programming Masterclass Internship is designed to equip learners with hands-on experience in one of today’s most in-demand programming languages. This program blends in-depth learning with real-world project work, helping you master core Python concepts such as data structures, OOP, file handling, and APIs. Throughout the internship, you'll build practical applications, work on mini-projects, and gain insights into real coding workflows. Whether you're starting out or strengthening your skills, this internship prepares you for tech roles with confidence and industry relevance.</p>
                            <h3 className='font-medium text-[20px]'>Learning Outcomes</h3>
                            <ul className='list-disc px-4'>
                                {outcomes.map((outcome, index) => (<li key={index} className='text-[#07A069]'><p className='font-normal text-[18px] text-[#6F6F6F]'>{outcome}</p></li>))}
                            </ul>
                            <h3 className='font-medium text-[20px]'>Requirements</h3>
                            <ul className='list-disc px-4'>
                                {requirements.map((req, index) => (<li key={index} className='text-[#07A069]'><p className='font-normal text-[18px] text-[#6F6F6F]'>{req}</p></li>))}
                            </ul>
                        </div>
                        {/* right section */}
                        <div className='w-full lg:flex-[0.5] space-y-6'>

                            {/* top 1 */}
                            <div className='border border-[#E3E3E3] p-4 rounded-[8px] space-y-2'>
                                <p className='font-normal text-[24px]'>Course Information</p>
                                {eventInfoList.map((item, index) => (
                                    <div key={index}>
                                        <div className='flex justify-between font-normal text-[16px] py-4'>
                                            <div className='flex gap-2 items-center'>
                                                {item.icon}
                                                <p>{item.label}:</p>
                                            </div>
                                            <p>{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                                <div>
                                    <p className='font-medium text-[24px] pt-2'>Price</p>
                                    <div className='flex justify-between flex-wrap pb-4'>
                                        <p className='font-medium text-[20px] text-[#479E2A]'>Rs. {event.discountPrice} +GST</p>
                                        <p className='bg-[#296AD2] text-white rounded-[20px] py-1 px-2.5 text-[16px] font-normal'>58% off</p>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <button onClick={() => setOpenEditEvent(true)} className='border border-[#296AD2] bg-[#296AD2] text-white rounded-sm py-2 px-5 cursor-pointer'>Edit Event</button>
                                    <button className='border border-[#296AD2] text-[#296AD2] rounded-sm py-2 px-5 cursor-pointer'>Delete Event</button>
                                </div>
                            </div>


                        </div>
                    </div>

                    {openEditEvent && (<EditEvent close={() => setOpenEditEvent(false)} />)}
                </>
            ) : (
                <p>Loading course details...</p>

            )}

        </div>
    )
}

export default EventDetails
