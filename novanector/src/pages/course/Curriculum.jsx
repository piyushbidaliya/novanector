import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const curriculum = [
    {
        title: "Introduction",
        type: "Overview",
        level: "Basic",
        typeTime: "5",
        levelTime: "10"
    },
    {
        title: "Structured query language (SQL)",
        type: "Overview",
        level: "Basic",
        typeTime: "5",
        levelTime: "10"
    },
    {
        title: "HTML, CSS & JavaScript Basics",
        type: "Overview",
        level: "Basic",
        typeTime: "5",
        levelTime: "10"
    },
    {
        title: "React.js (Frontend)",
        type: "Overview",
        level: "Basic",
        typeTime: "5",
        levelTime: "10"
    },
    {
        title: "Node.js & Express.js (Backend)",
        type: "Overview",
        level: "Basic",
        typeTime: "5",
        levelTime: "10"
    },
    {
        title: "MongoDB (Database)",
        type: "Overview",
        level: "Basic",
        typeTime: "5",
        levelTime: "10"
    },
    {
        title: "Deployment & DevOps",
        type: "Overview",
        level: "Basic",
        typeTime: "5",
        levelTime: "10"
    }
];

function Curriculum() {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggle = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };
    return (
        <div className="space-y-4">
            {curriculum.map((data, index) => (
                <div key={index} className="py-6 px-4 md:px-10 hover:bg-[#EBF5FF] rounded-[12px] border border-[#E3E3E3]">
                    <div
                        className="flex justify-between items-center cursor-pointer gap-2"
                        onClick={() => toggle(index)}
                    >
                        <h3 className="text-[20px] font-medium text-gray-900 leading-[100%] tracking-normal">
                            {data.title}
                        </h3>
                        {activeIndex === index ? <IoIosArrowUp className='w-6 h-16' /> : <IoIosArrowDown className='w-6 h-6' />}
                    </div>
                    {activeIndex === index && (
                        <div className='flex justify-between items-center'>
                            <p className="text-[18px] font-normal mt-7 transition-all duration-300">
                                {data.type}
                            </p>
                            <p className='text-[18px] font-normal mt-7 transition-all duration-300'>{data.typeTime} Minutes</p>
                        </div>
                    )}
                    {activeIndex === index && (
                        <div className='flex justify-between items-center'>
                            <p className="text-[18px] font-normal mt-7 transition-all duration-300">
                                {data.level}
                            </p>
                            <p className='text-[18px] font-normal mt-7 transition-all duration-300'>{data.levelTime} Minutes</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Curriculum
