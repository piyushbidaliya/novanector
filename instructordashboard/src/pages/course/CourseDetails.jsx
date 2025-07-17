import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import instructor1 from '../../assets/instructor1.jpg';
import { TbTag } from "react-icons/tb";
import { MdOutlineDateRange, MdOutlineQuiz } from "react-icons/md";
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa6';
import img from '../../assets/course.jpg'
import { IoBookmarkOutline, IoDocumentTextOutline, IoGlobeOutline, IoStarOutline } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { VscBook } from "react-icons/vsc";

import Overview from './Overview';
import Curriculum from './Curriculum';
import Instructor from './Instructor';
import Reviews from './Reviews';
import EditOverview from './EditOverview';
import EditCurriculum from './EditCurriculum';
import EditInstructor from './EditInstructor';

const courseDetails = [
    {
        id: 1,
        image: img,
        duration: "12 weeks",
        lesson: "10",
        studentEnroll: "5K",
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        price: 11999,
        discountPrice: "4,999",
        rating: "4.5"
    },
    {
        id: 2,
        image: img,
        duration: "12 weeks",
        lesson: "10",
        studentEnroll: "5K",
        title: "Python Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        price: 11999,
        discountPrice: "4,999",
        rating: "4.5"
    },
    {
        id: 3,
        image: img,
        duration: "12 weeks",
        lesson: "10",
        studentEnroll: "5K",
        title: "Java Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        price: 11999,
        discountPrice: "4,999",
        rating: "4.5"
    },
]


const tabDetails = [
    { icon: <IoBookmarkOutline />, title: "overview" },
    { icon: <IoDocumentTextOutline />, title: "curriculum" },
    { icon: <FaRegUser />, title: "instructor" },
    { icon: <IoStarOutline />, title: "reviews" }
];

const courseInfoList = [
    { icon: <FaRegUser />, label: 'Instructor', value: 'Kevin Perry' },
    { icon: <VscBook />, label: 'Lesson', value: '10' },
    { icon: <IoBookmarkOutline />, label: 'Course Level', value: 'Beginners' },
    { icon: <IoGlobeOutline />, label: 'Language', value: 'English' },
    { icon: <MdOutlineQuiz />, label: 'Quizzers', value: '05' },
    { icon: <LiaCertificateSolid />, label: 'Certificate', value: 'Yes' },
];

function CourseDetail() {
    const { courseId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const tabFromUrl = searchParams.get('tab') || 'overview';

    const [course, setCourse] = useState(null);
    const [activeTab, setActiveTab] = useState(tabFromUrl);
    const [openEditCourse, setOpenEditCourse] = useState(false);


    useEffect(() => {
        const selected = courseDetails.find(course => String(course.id) === courseId);
        setCourse(selected);
    }, [courseId]);

    const handleTabChange = (tabTitle) => {
        setActiveTab(tabTitle);
        setSearchParams({ tab: tabTitle });
    };

    if (!course) return <p>Loading course details...</p>;


    return (
        <>
            <div className='pt-8 h-full'>
                <div className='h-[354px]'>
                    <img src={course.image} alt="Course" className='h-full w-full object-cover rounded-lg' />
                </div>
                <div className='space-y-5'>
                    <h1 className='font-medium text-[30px] lg:text-[44px] leading-tight'>{course.title}</h1>
                    <div className='flex flex-wrap gap-6'>
                        {['Best Seller', 'Latest', 'Developer'].map((tag, i) => (
                            <p key={i} className='rounded-full py-2 px-4 bg-[#EBF5FF] text-[#296AD2] text-sm'>{tag}</p>
                        ))}
                    </div>
                    <div className='flex justify-between flex-wrap gap-3 items-center pb-10'>
                        <div className='flex gap-2 items-center'>
                            <img src={instructor1} alt="Instructor" className='w-8 h-8 rounded-full' />
                            <p className='text-[16px]'>Instructor: {course.instructor || "Kevin Perry"}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <TbTag />
                            <p>{course.name || "Web Development"}</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <MdOutlineDateRange />
                            <p>{course.date || "17, April, 2025"}</p>
                        </div>
                        <div className='flex items-center gap-2 text-[#FDC300]'>
                            {[...Array(4)].map((_, i) => <IoIosStar key={i} />)}
                            <IoIosStarHalf />
                            <p className='text-black'>({course.rating})</p>
                        </div>
                    </div>
                </div>
                {/* left section */}
                <div className='flex flex-col lg:flex-row gap-6 items-start'>
                    <div className='w-full lg:flex-1 border border-[#E3E3E3] p-4 rounded-2xl'>
                        <div className='flex border border-[#E3E3E3] flex-wrap'>
                            {tabDetails.map((tab, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleTabChange(tab.title)}
                                    className={`flex items-center gap-2 px-4 py-2.5 cursor-pointer flex-1 justify-center text-[18px] border-r-1 border-[#E3E3E3]
                  ${activeTab === tab.title
                                            ? 'bg-[#E7F3FF] text-[#296AD2] font-normal'
                                            : 'bg-[#F6F6F6] text-[#6F6F6F] hover:bg-gray-100'}
                `}
                                >
                                    {tab.icon}
                                    {tab.title.charAt(0).toUpperCase() + tab.title.slice(1)}
                                </div>
                            ))}
                        </div>

                        <div className='mt-4'>
                            {activeTab === 'overview' && <Overview />}
                            {activeTab === 'curriculum' && <Curriculum />}
                            {activeTab === 'instructor' && <Instructor />}
                            {activeTab === 'reviews' && <Reviews />}
                        </div>
                    </div>
                    {/* right section */}
                    <div className='w-full lg:flex-[0.5] border border-[#E3E3E3] p-5 rounded-2xl space-y-2'>
                        <p className='font-normal text-[24px]'>Course Information</p>
                        {courseInfoList.map((item, index) => (
                            <div key={index}>
                                <div className='flex justify-between font-normal text-[16px] py-4'>
                                    <div className='flex gap-2 items-center'>
                                        {item.icon}
                                        <p>{item.label}:</p>
                                    </div>
                                    <p>{item.value}</p>
                                </div>
                                {index !== courseInfoList.length - 1 && (
                                    <div className='border-b border-[#E3E3E3]'></div>
                                )}
                            </div>
                        ))}

                        <div>
                            <p className='font-medium text-[24px] pt-2'>Price</p>
                            <div className='flex justify-between flex-wrap pb-4'>
                                <p className='font-medium text-[20px] text-[#479E2A]'>Rs. {course.discountPrice} +GST</p>
                                <p className='bg-[#296AD2] text-white rounded-[20px] py-1 px-2.5 text-[16px] font-normal'>58% off</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <button onClick={() => setOpenEditCourse(true)} className='border border-[#296AD2] bg-[#296AD2] text-white rounded-sm py-2 px-5 cursor-pointer'>Edit Course</button>
                            <button className='border border-[#296AD2] text-[#296AD2] rounded-sm py-2 px-5 cursor-pointer'>Delete Course</button>
                        </div>
                    </div>
                </div>
            </div>
            {openEditCourse && activeTab === 'overview' && (
                <EditOverview close={() => setOpenEditCourse(false)} />
            )}

            {openEditCourse && activeTab === 'curriculum' && (
                <EditCurriculum close={() => setOpenEditCourse(false)} />
            )}

            {openEditCourse && activeTab === 'instructor' && (
                <EditInstructor close={() => setOpenEditCourse(false)} />
            )}

        </>
    );
}

export default CourseDetail;
