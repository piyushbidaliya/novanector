import React, { useState } from 'react'
import banner from '../../assets/internship1.jpg'
import Heading from '../../component/ThunderHeading'
import { MdAppRegistration } from 'react-icons/md'


const journey = [
    {heading: "Offer Letter", content: "Offer letter within 24 hour"},
    {heading: "Elementary Task", content: "Finish required foundational tasks"},
    {heading: "Certification & LOR", content: "Get certified with recommendation letter"},
]

const journey2 = [
    {heading: "Enrollment Process", content: "Confirm duration and complete enrollment"},
    {heading: "Orientation Session", content: "Comprehensive program and tech orientation"},
    {heading: "Live Projects", content: "Real-world projects with experts"},
    {heading: "Career Growth", content: "Stipend and full-time opportunity"},
]

const durationCard = [
    {
        type: "Starter Internship (1 Mon)",
        discountPrice: "99 INR",
        price: "199 INR",
        description: "Get a quick hands-on industry experience.",
        point1: "Hands-on Projects",
        point2: "Certificate Provided",
        point3: "Flexible Timings"
    },
    {
        type: "Starter Internship (1 Mon)",
        discountPrice: "99 INR",
        price: "199 INR",
        description: "Get a quick hands-on industry experience.",
        point1: "Hands-on Projects",
        point2: "Certificate Provided",
        point3: "Flexible Timings"
    },
    {
        type: "Starter Internship (1 Mon)",
        discountPrice: "99 INR",
        price: "199 INR",
        description: "Get a quick hands-on industry experience.",
        point1: "Hands-on Projects",
        point2: "Certificate Provided",
        point3: "Flexible Timings"
    },
]

function InternshipDetail() {
    const [openEnrollForm, setOpenEnrollForm] = useState(false)
  return (
    <>
    {/* banner section */}
        <section className='px-4 md:px-12 lg:px-24 py-10 h-full'>
            <div className='w-full bg-red-400 h-[356px]'>
                <img src={banner} alt="" className='w-full h-full '/>
            </div>
            <div className='py-7 space-y-1'>
                <h1 className='font-medium text-[28px]'>Python Programming Internship</h1>
                <p className='font-normal text-[16px]'>Master Python programming from basics to advanced concepts, including web development, data analysis, and automation. Build real-world projects using Django, Flask, and
libraries like Pandas and NumPy to boost your career opportunities as a professional Python developer.</p>
            </div>

        </section>

        {/* Journey section */}
        <section className='px-4 md:px-12 lg:px-24 h-full'>
            <div className='flex justify-center flex-col items-center pb-18'>
                <Heading title=" Journey" />
                <h1 className='font-semibold text-[26px] md:text-[40px] '>Your Internship Journey</h1>
            </div>

            <div className='flex justify-center items-center gap-15 pb-6'>
                {journey.map((data, index)=>(
                <div key={index} className='w-[163px]' >
                    <p className='font-normal text-[18px] text-center'>{data.heading}</p>
                    <p className='font-light text-[16px] text-[#6F6F6F] text-center'>{data.content}</p>
                </div>
                ))}
            </div>
            
            {/* circles */}
            <div className='flex justify-center items-center pb-6 gap-2'>
                <div className='p-1 border-b-4 border-[#296AD2] rounded-full'>
                    <div className='p-8 bg-[#DDEEFF] text-[#387DEB] rounded-full'>
                        <MdAppRegistration className='w-7 h-7'/>
                    </div>
                </div>
                <div className='p-1 border-t-4 border-[#296AD2] rounded-full'>
                    <div className='p-8 bg-[#DDEEFF] text-[#387DEB] rounded-full'>
                        <MdAppRegistration className='w-7 h-7'/>
                    </div>
                </div>
                <div className='p-1 border-b-4 border-[#296AD2] rounded-full'>
                    <div className='p-8 bg-[#DDEEFF] text-[#387DEB] rounded-full'>
                        <MdAppRegistration className='w-7 h-7'/>
                    </div>
                </div>
                <div className='p-1 border-t-4 border-[#296AD2] rounded-full'>
                    <div className='p-8 bg-[#DDEEFF] text-[#387DEB] rounded-full'>
                        <MdAppRegistration className='w-7 h-7'/>
                    </div>
                </div>
                <div className='p-1 border-b-4 border-[#296AD2] rounded-full '>
                    <div className='p-8 bg-[#DDEEFF] text-[#387DEB] rounded-full'>
                        <MdAppRegistration className='w-7 h-7'/>
                    </div>
                </div>
                <div className='p-1 border-t-4 border-[#296AD2] rounded-full'>
                    <div className='p-8 bg-[#DDEEFF] text-[#387DEB] rounded-full'>
                        <MdAppRegistration className='w-7 h-7'/>
                    </div>
                </div>
                <div className='p-1 border-b-4 border-[#296AD2] rounded-full'>
                    <div className='p-8 bg-[#DDEEFF] text-[#387DEB] rounded-full'>
                        <MdAppRegistration className='w-7 h-7'/>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center gap-15 pb-6'>
                {journey2.map((data, index)=>(
                <div key={index} className='w-[163px]' >
                    <p className='font-normal text-[18px] text-center'>{data.heading}</p>
                    <p className='font-light text-[16px] text-[#6F6F6F] text-center'>{data.content}</p>
                </div>
                ))}
            </div>
        </section>

        {/* internship duration section */}
        <section className='px-4 md:px-12 lg:px-24 py-10 h-full'>
            <div className='flex justify-center flex-col items-center pb-18'>
                <Heading title=" Internship Duration" />
                <h1 className='font-semibold text-[26px] md:text-[40px] '>Choose Your Internship Duration</h1>
            </div>

            <div className='flex flex-wrap gap-3'>
                {durationCard.map((data, index)=>(

                <div key={index} className='py-6 px-5 space-y-4 flex-1 border border-[#E3E3E3] rounded-[12px] hover:shadow-2xl hover:border-0 shadow-[#849DE1CC]'>
                    <p className='font-medium text-[24px] text-center'>{data.type}</p>
                    <p className='font-semibold text-[40px] text-[#296AD2] text-center'>{data.discountPrice} <span className='font-normal text-[#D51919] text-[20px] line-through'>{data.price}</span></p>
                    <p className='font-normal text-[24px] text-center'>"{data.description}"</p>
                    <ul className='list-disc space-y-8 px-5'>
                        <li>{data.point1}</li>
                        <li>{data.point2}</li>
                        <li>{data.point3}</li>
                    </ul>
                    <button className='w-full cursor-pointer py-4 px-6 border border-[#296AD2] text-[#296AD2] hover:text-white hover:bg-[#296AD2]'>Enroll Now</button>
                </div>
                ))}
            </div>
        </section>

        {
            
        }
    </>
  )
}

export default InternshipDetail
