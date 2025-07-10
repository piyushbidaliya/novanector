import React, { useEffect, useState } from 'react'
import eventDetails from '../../assets/eventDetails';
import { useParams } from 'react-router-dom';
import { FaRegClock } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { MdBookmark, MdOutlineCategory, MdOutlineDateRange } from 'react-icons/md';
import Heading from '../../component/ThunderHeading';
import img1 from '../../assets/instructor1.png'
import img2 from '../../assets/instructor2.png'
import img3 from '../../assets/instructor3.png'
import img4 from '../../assets/instructor4.png'
import EventCard from '../../component/EventCard';
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
    const topThree = eventDetails.slice(0, 3)
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const selected = eventDetails.find(event => String(event.id) === eventId);
        setEvent(selected);
    }, [eventId]);
    return (
        <div className='px-4 md:px-12 lg:px-24 py-10 h-full'>
            {event ? (
                <>
                {/* banner */}
                    <div className='h-[392px]'>
                        <img src={event.image} alt="" className='w-full h-full rounded-[8px] object-cover' />
                    </div>

                {/* right + left sidebar */}
                    <div className='flex flex-col lg:flex-row gap-6 items-start py-4'>
                        {/* left section */}
                        <div className='w-full lg:w-3/4 space-y-6'>
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
                        <div className='w-full lg:w-1/4 space-y-6'>

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

                                <button className='w-full font-normal text-[18px] bg-[#296AD2] text-white py-3 px-4 rounded-[4px]'>Enroll Now</button>
                            </div>
                            
                            {/* bottom 1 */}
                            <div className='border border-[#E3E3E3] p-4 rounded-[8px] space-y-2'>
                                <p className='font-medium text-[24px]'>Book Your Seat</p>
                                <form action="" className='grid gap-2'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="" className='font-normal text-[14px]'>Full Name<span>*</span></label>
                                        <input type="text" name='name' className='bg-white p-2 rounded-[4px] border border-[#DEE0E4] focus-within:outline-[#849DE1CC]'/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="" className='font-normal text-[14px]'>Email Address</label>
                                        <input type="email" name='email' className='bg-white p-2 rounded-[4px] border border-[#DEE0E4] focus-within:outline-[#849DE1CC]' />
                                    </div>
                                    <div className='flex flex-col pb-4'>
                                        <label htmlFor="" className='font-normal text-[14px]'>Phone Number</label>
                                        <input type="text" name='phone' className='bg-white p-2 rounded-[4px] border border-[#DEE0E4] focus-within:outline-[#849DE1CC]'/>
                                    </div>
                                    <button className='w-full py-3 px-6 bg-[#296AD2] text-white rounded-[8px]'>Reserve Your Spot Now</button>

                                </form>
                            </div>

                        </div>
                    </div>
                    
                {/* event speakers */}
                    <div className='py-10'>
                        <div className='flex justify-center flex-col items-center'>
                            <Heading title="Our Speakers"/>
                            <h1 className='font-medium text-[26px] md:text-[40px] pb-6'>Events Speakers</h1>
                        </div>
                        <div className="w-full mt-3">
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                                <div className="">
                                    <img className='w-full' src={img1} alt="" />
                                    <div className="text-center my-4">
                                        <h3 className="text-2xl font-semibold">
                                            Brendan Fraser
                                        </h3>
                                        <p>Graphic Designer</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img className='w-full' src={img2} alt="" />
                                    <div className="text-center my-4">
                                        <h3 className="text-2xl font-semibold">
                                            Michaels Leonel
                                        </h3>
                                        <p>Web Designer</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img className='w-full' src={img3} alt="" />
                                    <div className="text-center my-4">
                                        <h3 className="text-2xl font-semibold">
                                            Jenny Wilson
                                        </h3>
                                        <p>Data Science</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img className='w-full' src={img4} alt="" />
                                    <div className="text-center my-4">
                                        <h3 className="text-2xl font-semibold">
                                            John Wick
                                        </h3>
                                        <p>Digital Marketing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* event Insights */}
                    <div >
                        <div className='flex justify-center flex-col items-center'>
                            <Heading title="Event Insights"/>
                            <h1 className='font-medium text-[26px] md:text-[40px] pb-6'>Upcoming Event</h1>
                        </div>
                        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center'>
                            <EventCard eventDetails={topThree}/>
                        </div>
                    </div>


                </>
            ) : (
                <p>Loading course details...</p>

            )}

        </div>
    )
}

export default EventDetails
