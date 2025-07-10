import React from 'react'
import { PiBookOpenText } from 'react-icons/pi'
import { RiContactsBook2Line, RiLightbulbFlashLine } from 'react-icons/ri'

const cardDetails = [
    {
        icon: <RiContactsBook2Line className='text-[#296AD2] w-12 h-12'/>,
        title: "World-Class Faculty",
        description: "Learn from industry-leading experts. combining real world experience with innovative teaching techniques.",
    },
    {
        icon: <RiContactsBook2Line className='text-[#296AD2] w-12 h-12'/>,
        title: "Direct Interaction",
        description: "Expert guidance with instant answers, personalized feedback and enhanced learning experience,",
    },
        {
        icon: <PiBookOpenText className='text-[#296AD2] w-12 h-12' />,
        title: "Cutting-Edge Curriculum",
        description: "Our Curriculum is updated regularly to align with the latest industry trends and demands.",
    },
    {
        icon: <RiLightbulbFlashLine className='text-[#296AD2] w-12 h-12' />,
        title: "Innovative Learning",
        description: "We provide an engaging learning environment enhanced by technology and modern resources.",
    },

]

function WhyChooseCard() {
  return (
    <>
    {cardDetails.map((data, index)=>(

        <div key={index} className='flex flex-col gap-2.5 p-5 shadow-md rounded-[8px] items-center'>
            {data.icon}
            <p className='font-medium text-[20px] text-center'>{data.title}</p>
            <p className='text-center font-normal text-[18px] text-[#6F6F6F]'>{data.description}</p>
        </div>
    ))}
    </>
  )
}

export default WhyChooseCard
