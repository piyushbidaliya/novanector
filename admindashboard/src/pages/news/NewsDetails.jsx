import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaRegClock, FaRegUser } from 'react-icons/fa6';
import { CiGlobe } from "react-icons/ci";
import { MdOutlineCategory, MdOutlineDateRange } from 'react-icons/md';
import img from '../../assets/news.png'
import EditNews from './EditNews';
const newsDetails = [
    {
        id: 1,
        image: img,
        name: "Alice Johnson",
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        date: "10 November 2025",
        time: "09 AM - 11 AM"
    },
    {
        id: 2,
        image: img,
        name: "Alice Johnson",
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        date: "10 November 2025",
        time: "09 AM - 11 AM"
    },
    {
        id: 3,
        image: img,
        name: "Alice Johnson",
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        date: "10 November 2025",
        time: "09 AM - 11 AM"
    },
    {
        id: 4,
        image: img,
        name: "Alice Johnson",
        title: "Mern Full-Stack Development",
        description: "Develop robust web applications with MongoDB, Express, React, and",
        date: "10 November 2025",
        time: "09 AM - 11 AM"
    },
]

const newsInfoList = [
    { icon: <FaRegUser />, label: 'Instructor', value: 'Kevin Perry' },
    { icon: <MdOutlineDateRange />, label: 'Date', value: '20 May 2025' },
    { icon: <FaRegClock />, label: 'Duration', value: '30m 36s' },
    { icon: <MdOutlineCategory />, label: 'Category', value: 'Design' },
    { icon: <CiGlobe />, label: 'Language', value: 'English' },
];

const outcomes = [
    {
        text: "User-Centered Design (UCD)",
        subPoints: [
            "Focus on designing for the needs, goals, and behavior of your users.",
        ],
    },
    {
        text: "Visual Hierarchy",
        subPoints: [
            "Guide user attention through layout, typography, size, and color.",
        ],
    },
    {
        text: "Visual Hierarchy",
        subPoints: [
            "Guide user attention through layout, typography, size, and color.",
        ],
    },
    {
        text: "Consistency and Standards",
        subPoints: [
            "Maintain uniformity in UI elements for predictability and familiarity.",
        ],
    },
    {
        text: "Accessibility",
        subPoints: [
            "Design interfaces that are inclusive and usable for all users, including those with disabilities.",
        ],
    },
    {
        text: "Navigation and Information Architecture",
        subPoints: [
            "Organize content logically and create intuitive navigation flows.",
        ],
    },
    {
        text: "Simplicity and Clarity",
        subPoints: [
            "Minimize complexity—make interfaces easy to understand and interact with.",
        ],
    },

];

function NewsDetails() {
    const { newsId } = useParams();
    const [news, setNews] = useState(null);
    const [openEditNews, setOpenEditNews] = useState(false)

    useEffect(() => {
        const selected = newsDetails.find(news => String(news.id) === newsId);
        setNews(selected);
    }, [newsId]);
    return (
        <div className='py-10 h-full'>
            {news ? (
                <>
                    {/* banner */}
                    <div className='h-[392px]'>
                        <img src={news.image} alt="" className='w-full h-full rounded-[8px] object-cover' />
                    </div>

                    {/* right + left sidebar */}
                    <div className='flex flex-col lg:flex-row gap-6 items-start py-4'>
                        {/* left section */}
                        <div className='w-full lg:flex-1 space-y-6'>
                            <h1 className='font-medium text-[28px]'>{news.title}</h1>
                            <h3 className='font-medium text-[20px]'>Overview</h3>
                            <ul className="list-disc px-4">
                                {outcomes.map((outcome, index) => (
                                    <li key={index} className="text-[#07A069] mb-2">
                                        <p className="font-normal text-[18px] text-[#6F6F6F]">{outcome.text}</p>

                                        {outcome.subPoints && (
                                            <ul className="mt-1">
                                                {outcome.subPoints.map((point, subIndex) => (
                                                    <li key={subIndex} className="text-[#6F6F6F] text-[16px] font-normal">
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>

                        </div>
                        {/* right section */}
                        <div className='w-full lg:flex-[0.5] space-y-6'>

                            {/* top 1 */}
                            <div className='border border-[#E3E3E3] p-4 rounded-[8px] space-y-2'>
                                <p className='font-normal text-[24px]'>News Information</p>
                                {newsInfoList.map((item, index) => (
                                    <div key={index}>
                                        <div className='flex justify-between font-normal text-[16px] py-4'>
                                            <div className='flex gap-2 items-center'>
                                                {item.icon}
                                                <p>{item.label}:</p>
                                            </div>
                                            <p>{item.value}</p>
                                        </div>
                                        {/* Divider except after last item */}
                                        {index !== newsInfoList.length - 1 && (
                                            <div className='border-b border-[#E3E3E3]'></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <button onClick={() => setOpenEditNews(true)} className='border border-[#296AD2] bg-[#296AD2] text-white rounded-sm py-2 px-5 cursor-pointer'>Edit News</button>
                                <button className='border border-[#296AD2] text-[#296AD2] rounded-sm py-2 px-5 cursor-pointer'>Delete News</button>
                            </div>

                        </div>
                    </div>

                    {openEditNews && (<EditNews close={()=>setOpenEditNews(false)} />)}
                </>
            ) : (
                <p>Loading course details...</p>

            )}

        </div>
    )
}

export default NewsDetails
