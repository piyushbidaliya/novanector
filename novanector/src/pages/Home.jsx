import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import hero from '../assets/hero.png'
import { PiCertificateBold } from "react-icons/pi";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import { MdMonitor } from "react-icons/md";
import homeabout1 from '../assets/homeabout1.png'
import homeabout2 from '../assets/homeabout2.png'
import { FaCheckCircle } from "react-icons/fa";
import CourseCard from '../component/CourseCard';
import { PiCodeBold } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FiDatabase } from "react-icons/fi";
import { LiaBullhornSolid } from "react-icons/lia";
import { RiContactsBook2Line } from "react-icons/ri";
import Heading from '../component/ThunderHeading';
import courseDetails from '../assets/courseDetails'

const onlineStudent = [
    { image: img1, alt: "student" },
    { image: img2, alt: "student" },
    { image: img3, alt: "student" },
    { image: img4, alt: "student" },
    { image: img5, alt: "student" }
]

const categories = [
    { icon: <RiContactsBook2Line />, title: "Graphic Design", course: "30"},
    { icon: <PiCodeBold />, title: "Web Development", course: "20"},
    { icon: <FiDatabase />, title: "Data Science", course: "10"},
    { icon: <BsGraphUpArrow />, title: "Data Science", course: "25"},
    { icon: <LiaBullhornSolid />, title: "Data Science", course: "15"},
    { icon: <FiDatabase />, title: "Data Science", course: "10"},
    { icon: <BsGraphUpArrow />, title: "Data Science", course: "25"},
    { icon: <PiCodeBold />, title: "Data Science", course: "20"},

]


function Home() {
    const topSixCourses = courseDetails.slice(0, 6)
    return (
        <>
            {/* Hero */}
            <section className='px-4 md:px-12 lg:px-24 pt-10 lg:pt-20 bg-[#F4FAFF] h-full'>
                <div className='flex justify-between gap-6 flex-col lg:flex-row'>
                    <div className='flex-1'>
                        <Heading title="Welcome To Novanector"/>
                        <h1 className='font-semibold text-[30px] md:text-[70px] leading-[100%] tracking-normal pb-6'>Empowering You to Learn, Grow, and Succeed</h1>
                        <p className='text-[#6F6F6F] font-normal text-[16px] md:text-[18px] leading-[100%] tracking-normal'>Unlock your potential with expert-led courses designed for every goal and learn at your own pace and gain the skills to succeed in career and life.</p>
                        <div className='pt-10 flex gap-2 md:gap-7 text-[16px] flex-wrap'>
                            <button className='bg-[#296AD2] text-white py-3 px-6 rounded-[4px] cursor-pointer'>Enroll Now <FaArrowRightLong className='inline ml-2' /></button>
                            <button className='text-[#296AD2] border-[#296AD2] border py-3 px-6 rounded-[4px] cursor-pointer'>Explore Courses <FaArrowRightLong className='inline ml-2' /></button>
                        </div>
                    </div>

                    <div className='flex-1'>
                        <div className='relative top-0 lg:top-17 xl:top-0'>
                            <img src={hero} alt="hero" className='h-[350px] sm:h-[500px] object-cover' />
                            <div className='bg-white p-1 sm:p-3 rounded-[4px] w-fit flex items-center gap-0 sm:gap-2 absolute top-26 left-0 sm:top-30 sm:-left-16 md:-left-6 lg:-left-16 '>
                                <div className='bg-[#296AD2] p-2 rounded-full'>
                                    <PiCertificateBold className='text-white' />
                                </div>
                                <div className='font-normal text-[12px] md:text-[16px]'>
                                    <p className='text-center text-[#296AD2] '>100%</p>
                                    <p>Statisfied Learner</p>
                                </div>
                            </div>

                            <div className='bg-white p-1 sm:p-3 rounded-[4px] w-fit flex items-center gap-2 absolute top-32 sm:top-20 right-0 md:right-8 lg:right-0'>
                                <div className='font-normal text-[12px] md:text-[16px]'>
                                    <p className='text-[#296AD2] '>10K+</p>
                                    Online Students
                                    <div className='flex flex-row'>

                                        {onlineStudent.map((student) => (
                                            <div className='h-5 w-5 md:w-8 md:h-8 rounded-full'>
                                                <img src={student.image} alt={student.alt} className='w-full h-full rounded-full' />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What you Gain */}
            <div className='bg-[#296AD2] py-12 px-4 md:px-12 lg:px-24 flex md:flex-row flex-col justify-between gap-8 flex-wrap'>
                <div className='flex gap-2 flex-1'>
                    <div className='bg-white p-2 rounded-full h-fit'>
                        <MdMonitor className='w-7 h-7' />
                    </div>
                    <p className='text-white'>Gain expertise with access to over 24,000 video courses.</p>
                </div>

                <div className='flex gap-2 flex-1'>
                    <div className='bg-white p-2 rounded-full h-fit'>
                        <MdMonitor className='w-7 h-7' />
                    </div>
                    <p className='text-white'>Gain expertise with access to over 24,000 video courses.</p>
                </div>
                <div className='flex gap-2 flex-1'>
                    <div className='bg-white p-2 rounded-full h-fit'>
                        <MdMonitor className='w-7 h-7' />
                    </div>
                    <p className='text-white'>Gain expertise with access to over 24,000 video courses.</p>
                </div>
            </div>

            {/* top Categories */}
            <section className='px-4 md:px-12 lg:px-24 py-10 lg:py-18 h-full'>
                <div className='flex justify-center flex-col items-center'>
                    <Heading title="Top Categories"/>
                    <h1 className='font-semibold text-[26px] md:text-[48px] '>Top Picks for you</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                    {categories.map((data)=>(
                    <div className='flex gap-3 hover:bg-[#296AD2] py-5 px-7.5 rounded-[8px] items-center border border-[#E3E3E3] cursor-pointer hover:text-white'>
                        <div className='bg-[#EFEFEF] p-2 rounded-full text-black h-fit'>
                            {data.icon}
                        </div>
                        <div className=''>
                            <p className='font-medium text-[18px]'>{data.title}</p>
                            <p className='font-light text-[14px] '>{data.course} Courses</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>

            {/* about us */}
            <section className='px-4 md:px-12 lg:px-24 py-10 lg:py-18 flex lg:flex-row flex-col justify-between gap-8'>
                {/* image div */}
                <div className='grid grid-cols-2 flex-1 gap-2'>
                    <div className='flex justify-center items-center flex-col bg-[#296AD2] text-white p-4'>
                        <p>50+</p>
                        <p>Online Courses</p>
                    </div>
                    <div className=''>
                        <img src={homeabout2} alt="image" className='h-[241px]'/>
                    </div>
                    <div>
                        <img src={homeabout1} alt="image" className='h-[241px]'/>
                    </div>
                    <div className='font-normal text-[12px] md:text-[16px] flex justify-center items-center flex-col bg-[#F2F8FF]'>
                        <p className='text-[#296AD2] '>10K+</p>
                        Online Students
                        <div className='flex flex-row'>

                            {onlineStudent.map((student) => (
                                <div className='h-5 w-5 md:w-8 md:h-8 rounded-full'>
                                    <img src={student.image} alt={student.alt} className='w-full h-full rounded-full' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* content div */}
                <div className='flex-1'>
                    <Heading title="About Us"/>
                    <h1 className='font-medium text-[26px] md:text-[40px] leading-[100%] tracking-normal py-6'>Creating A Community Of Life Long Learners.</h1>
                    <p className='text-[16px] text-[#6F6F6F] leading-[24px] pb-6'>Compellingly enhance equity investment strategies through efficient process improvements and innovation.Actualize mission-critical partnerships by leveraging integrated digital portals.Drive performance and collaboration with seamless, tech-enabled solutions.</p>
                    
                    <div className='flex gap-4 flex-wrap pb-6'>
                        <div className='flex gap-2 items-center'>
                            <FaCheckCircle className='text-[#0EA16B]'/>
                            <p>Flexible Classes</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <FaCheckCircle className='text-[#0EA16B]'/>
                            <p>Learn From Anywhere</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <FaCheckCircle className='text-[#0EA16B]'/>
                            <p>Learn from Experts</p>
                        </div>
                    </div>
                    <button className='bg-[#296AD2] py-3 px-6 text-white font-normal text-[16px] rounded-[4px]'>Learn More About Us <FaArrowRightLong className='inline ml-2'/></button>
                </div>
            </section>

            {/* number of course, student, certificate, instructor */}
            <div className='bg-[#296AD2] py-4 px-4 md:px-20 lg:px-30 flex justify-between text-[white] flex-col md:flex-row gap-4'>
                <div>
                    <p className='text-center font-semibold text-[24px]'>50+</p>
                    <p className='text-[20px] font-medium text-center'>Online Courses</p>
                </div>

                <div className='border-r-1 border-[#92BCFF]'></div>

                <div>
                    <p className='text-center font-semibold text-[24px]'>20K+</p>
                    <p className='text-[20px] font-medium text-center'>Active Students</p>
                </div>

                <div className='border-r-1 border-[#92BCFF]'></div>

                <div>
                    <p className='text-center font-semibold text-[24px]'>15K+</p>
                    <p className='text-[20px] font-medium text-center'>Certificate Earned</p>
                </div>

                <div className='border-r-1 border-[#92BCFF]'></div>

                <div>
                    <p className='text-center font-semibold text-[24px]'>200+</p>
                    <p className='text-[20px] font-medium text-center'>Instructors</p>
                </div>
            </div>

            {/* top courses */}
            <section className='px-4 md:px-12 lg:px-24 py-10 lg:py-18 h-full'>
                <div className='flex justify-center flex-col items-center'>
                    <Heading title="Top Courses"/>
                    <h1 className='font-semibold text-[26px] md:text-[48px] '>Explore Featured Courses</h1>
                </div>
                <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
                    <CourseCard courseDetails={topSixCourses}/>
                </div>
                <div className='flex justify-center items-center py-4'>
                    <button className='bg-[#296AD2] text-white py-3 px-6 rounded-[4px] font-normal text-[16px] cursor-pointer'>View All Courses <FaArrowRightLong className='inline ml-2'/></button>
                </div>
            </section>
        </>
    )
}

export default Home
