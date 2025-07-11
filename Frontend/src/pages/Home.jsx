import React, { useState } from 'react'
import { FaArrowRightLong, FaCircleCheck } from 'react-icons/fa6';
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
import { BsGraphUpArrow, BsPlus } from "react-icons/bs";
import { FiDatabase } from "react-icons/fi";
import { LiaBullhornSolid } from "react-icons/lia";
import { RiContactsBook2Line } from "react-icons/ri";
import Heading from '../component/ThunderHeading';
import courseDetails from '../assets/courseDetails'
import WhyChooseCard from '../component/WhyChooseCard';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import sarah from '../assets/sarah.jpg'
import testimonials from '../assets/testimonials.png'
import NewsCard from '../component/NewsCard';
import contact from '../assets/contact.png'
import { IoClose } from 'react-icons/io5';
import newsDetails from '../assets/newsDetails';
import { Link } from 'react-router-dom';
const onlineStudent = [
    { image: img1, alt: "student" },
    { image: img2, alt: "student" },
    { image: img3, alt: "student" },
    { image: img4, alt: "student" },
    { image: img5, alt: "student" }
]

const categories = [
    { icon: <RiContactsBook2Line />, title: "Graphic Design", course: "30" },
    { icon: <PiCodeBold />, title: "Web Development", course: "20" },
    { icon: <FiDatabase />, title: "Data Science", course: "10" },
    { icon: <BsGraphUpArrow />, title: "Data Science", course: "25" },
    { icon: <LiaBullhornSolid />, title: "Data Science", course: "15" },
    { icon: <FiDatabase />, title: "Data Science", course: "10" },
    { icon: <BsGraphUpArrow />, title: "Data Science", course: "25" },
    { icon: <PiCodeBold />, title: "Data Science", course: "20" },

]

const faqs = [
    {
        question: "What courses do you offer?",
        answer:
            "We offer a wide range of courses in technology, business, design, marketing, and more—designed for all skill levels.",
    },
    {
        question: "How do I enroll in a course?",
        answer:
            "Simply browse the course catalog, select your desired course, and click the enroll button.",
    },
    {
        question: "Do I get a certificate after completion?",
        answer:
            "Yes, you’ll receive a certificate of completion after successfully finishing the course.",
    },
    {
        question: "Can I access the courses on mobile?",
        answer:
            "Absolutely! All our courses are mobile-friendly and accessible on any device.",
    },
    {
        question: "How long do I have access to a course after purchasing?",
        answer:
            "Once purchased, you’ll have lifetime access to the course materials.",
    },
    {
        question: "Do I need any prior experience to join a course?",
        answer:
            "No prior experience is required. Most courses start from the basics.",
    },
];


function Home() {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggle = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const topSixCourses = courseDetails.slice(0, 6)
    const topThree = newsDetails.slice(0, 3)
    return (
        <>
            {/* Hero */}
            <section className='px-4 md:px-12 lg:px-24 pt-10 lg:pt-20 bg-[#F4FAFF] h-full'>
                <div className='flex justify-between gap-6 flex-col lg:flex-row'>
                    <div className='flex-1'>
                        <Heading title="Welcome To Novanector" />
                        <h1 className='font-semibold text-[30px] md:text-[70px] leading-[100%] tracking-normal pb-6'>Empowering You to Learn, Grow, and Succeed</h1>
                        <p className='text-[#6F6F6F] font-normal text-[16px] md:text-[18px] leading-[100%] tracking-normal'>Unlock your potential with expert-led courses designed for every goal and learn at your own pace and gain the skills to succeed in career and life.</p>
                        <div className='pt-10 lg:py-10 flex gap-2 md:gap-7 text-[16px] flex-wrap'>
                            <Link to="/internship" className='bg-[#296AD2] text-white py-3 px-6 rounded-[4px] cursor-pointer'>Enroll Now <FaArrowRightLong className='inline ml-2' /></Link>
                            <Link to="/course" className='text-[#296AD2] border-[#296AD2] border py-3 px-6 rounded-[4px] cursor-pointer'>Explore Courses <FaArrowRightLong className='inline ml-2' /></Link>
                        </div>
                    </div>

                    <div className='flex-1'>
                        <div className='relative top-0 lg:top-10 xl:top-0'>
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

                            <div className='bg-white p-1 sm:p-3 rounded-[4px] w-fit flex items-center gap-2 absolute top-32 sm:top-20 right-0 md:right-8 lg:-right-8 lg:top-38 xl:top-20 xl:right-0'>
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
                    <Heading title="Top Categories" />
                    <h1 className='font-semibold text-[26px] md:text-[40px] '>Top Picks for you</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                    {categories.map((data) => (
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
                        <img src={homeabout2} alt="image" className='h-[241px] object-cover' />
                    </div>
                    <div>
                        <img src={homeabout1} alt="image" className='h-[241px] object-cover' />
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
                    <Heading title="About Us" />
                    <h1 className='font-medium text-[26px] md:text-[40px] leading-[100%] tracking-normal py-6'>Creating A Community Of Life Long Learners.</h1>
                    <p className='text-[16px] text-[#6F6F6F] leading-[24px] pb-6'>Compellingly enhance equity investment strategies through efficient process improvements and innovation.Actualize mission-critical partnerships by leveraging integrated digital portals.Drive performance and collaboration with seamless, tech-enabled solutions.</p>

                    <div className='flex gap-4 flex-wrap pb-6'>
                        <div className='flex gap-2 items-center'>
                            <FaCheckCircle className='text-[#0EA16B]' />
                            <p>Flexible Classes</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <FaCheckCircle className='text-[#0EA16B]' />
                            <p>Learn From Anywhere</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <FaCheckCircle className='text-[#0EA16B]' />
                            <p>Learn from Experts</p>
                        </div>
                    </div>
                    <Link to="/about" className='bg-[#296AD2] py-3 px-6 text-white font-normal text-[16px] rounded-[4px]'>Learn More About Us <FaArrowRightLong className='inline ml-2' /></Link>
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
                    <Heading title="Top Courses" />
                    <h1 className='font-semibold text-[26px] md:text-[40px] text-center'>Explore Featured Courses</h1>
                </div>
                <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
                    <CourseCard courseDetails={topSixCourses} />
                </div>
                <div className='flex justify-center items-center py-4'>
                    <Link to="/course" className='bg-[#296AD2] text-white py-3 px-6 rounded-[4px] font-normal text-[16px] cursor-pointer'>View All Courses <FaArrowRightLong className='inline ml-2' /></Link>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className='px-4 md:px-12 lg:px-24 h-full'>
                <div className='flex justify-center flex-col items-center'>
                    <Heading title="Why Choose Us" />
                    <h1 className='font-semibold text-[26px] md:text-[40px] text-center'>Explore Yourself All Over The World</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6 gap-6'>
                    <WhyChooseCard />
                </div>

                <div className='flex flex-col md:flex-row py-6'>
                    <div className='flex-1'>
                        <img src={testimonials} alt="image" className='h-full object-cover brightness-75 rotate-y-180' />
                    </div>
                    <div className='flex-1 bg-[#296AD2]'>
                        <div className='flex flex-col p-4 md:p-10'>
                            <Heading title="Testimonials" />
                            <h1 className='font-semibold text-[26px] md:text-[40px] text-white'>What Our Student Say</h1>
                            <div className='pb-4 text-[#FDC300] flex'>
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStarHalf />
                            </div>
                            <p className='text-white pb-4'>“ The UI UX Design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
                            <div className='flex gap-2 pb-4'>
                                <div className='w-12 h-12 rounded-full'>
                                    <img src={sarah} alt="" className='w-full h-full rounded-full' />
                                </div>
                                <div className=''>
                                    <p className='font-medium text-[20px] text-white'>Sarah</p>
                                    <p className='font-normal text-[16px] text-white/80'>UI/UX Designer</p>
                                </div>
                            </div>
                            <div className='border border-dashed border-white w-6'></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Instructor */}
            <section className='px-4 md:px-12 lg:px-24 h-full py-18'>
                <div className='flex justify-center flex-col items-center'>
                    <Heading title="Instructor" />
                    <h1 className='font-semibold text-[26px] md:text-[40px] '>Our Course Instructor</h1>
                </div>
                <div className="w-full mt-3">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                        <div className="">
                            <img className='w-full' src="/assets/images/instructor1.png" alt="" />
                            <div className="text-center my-4">
                                <h3 className="text-2xl font-semibold">
                                    Brendan Fraser
                                </h3>
                                <p>Graphic Designer</p>
                            </div>
                        </div>
                        <div className="">
                            <img className='w-full' src="/assets/images/instructor2.png" alt="" />
                            <div className="text-center my-4">
                                <h3 className="text-2xl font-semibold">
                                    Michaels Leonel
                                </h3>
                                <p>Web Designer</p>
                            </div>
                        </div>
                        <div className="">
                            <img className='w-full' src="/assets/images/instructor3.png" alt="" />
                            <div className="text-center my-4">
                                <h3 className="text-2xl font-semibold">
                                    Jenny Wilson
                                </h3>
                                <p>Data Science</p>
                            </div>
                        </div>
                        <div className="">
                            <img className='w-full' src="/assets/images/instructor4.png" alt="" />
                            <div className="text-center my-4">
                                <h3 className="text-2xl font-semibold">
                                    John Wick
                                </h3>
                                <p>Digital Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-3 items-center'>
                        <button className='bg-[#296AD2] py-3 px-6 rounded-[4px] text-white cursor-pointer font-normal text-[16px]'>View More <FaArrowRightLong className='inline ml-2' /> </button>
                    </div>
                </div>
            </section>

            {/* News */}
            <section className='px-4 md:px-12 lg:px-24 h-full py-6'>
                <div className='flex justify-center flex-col items-center'>
                    <Heading title="News" />
                    <h1 className='font-semibold text-[26px] md:text-[40px] '>Latest News</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6'>
                    <NewsCard newsDetails={topThree}/>
                </div>
                <div className='flex justify-center mt-3 items-center'>
                    <Link to="/news" className='bg-[#296AD2] py-3 px-6 rounded-[4px] text-white font-normal text-[16px]'>View All News <FaArrowRightLong className='inline ml-2' /></Link>
                </div>
            </section>

            {/* Contact Us */}
            <section className='px-4 md:px-12 lg:px-24 h-full py-6 flex flex-col md:flex-row gap-14 md:gap-0'>
                <div className='flex flex-col flex-1'>
                    <Heading title="Contact Us" />
                    <h1 className='font-semibold text-[26px] md:text-[40px] leading-[100%] tracking-normal py-4'>Transform Your Future with Excellence in Education</h1>
                    <ul>
                        <li className='flex gap-2 items-center pb-4'>
                            <FaCircleCheck className='text-[#0EA16B] w-5 h-5' />
                            <p>Unlock your potential with expert guidance.</p>
                        </li>
                        <li className='flex gap-2 items-center pb-4'>
                            <FaCircleCheck className='text-[#0EA16B] w-5 h-5' />
                            <p>Achieve your academic and personal goals.</p>
                        </li>
                        <li className='flex gap-2 items-center pb-4'>
                            <FaCircleCheck className='text-[#0EA16B] w-5 h-5' />
                            <p>Empower yourself with lifelong learning skills.</p>
                        </li>
                    </ul>
                    <div className=''>
                        <Link to="/contact"  className='bg-[#296AD2] py-3 px-6 rounded-[4px] text-white cursor-pointer font-normal text-[16px]'>Contact Us <FaArrowRightLong className='inline ml-2' /> </Link>
                    </div>
                </div>

                <div className='flex-[0.5]'>
                    <div className='relative justify-center flex'>
                        <div className='w-[262px] h-[262px] md:w-[362px] md:h-[362px] rounded-full bg-[#296AD2]'></div>
                        <div className='absolute -top-18 w-[363px] h-[363px] md:w-[463px] md:h-[463px]'>
                            <img src={contact} alt="" className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className='px-4 md:px-12 lg:px-24 h-full py-18'>
                <div className='flex justify-center flex-col items-center'>
                    <Heading title="FAQ" />
                    <h1 className='font-semibold text-[26px] md:text-[40px] pb-12 text-center'>Frequently Asked Questions</h1>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-6 px-4 md:px-10 hover:bg-[#EBF5FF] rounded-[12px] border border-[#E3E3E3]">
                            <div
                                className="flex justify-between items-center cursor-pointer gap-2"
                                onClick={() => toggle(index)}
                            >
                                <h3 className="text-[24px] font-medium text-gray-900 leading-[100%] tracking-normal">
                                    {faq.question}
                                </h3>
                                {activeIndex === index ? <IoClose className='w-10 h-10' /> : <BsPlus className='w-10 h-10' />}
                            </div>
                            {activeIndex === index && (
                                <p className="text-[18px] font-norma mt-7 transition-all duration-300">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home
