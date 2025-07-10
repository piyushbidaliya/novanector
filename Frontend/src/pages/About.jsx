import React from 'react'

const About = () => {
  return (
    <div className='py-12 px-4 md:px-12 lg:px-24'>
        <div className="w-full text-center">
            <h1 className="text-4xl font-semibold">About Us</h1>
            <p className='text-[#6F6F6F] my-4'>At Novanectar Courses, we equip learners with practical, career-ready skills through flexible, expert-led training.Learn at your own pace, anytime and anywhere, and grow with confidence toward your professional goals.
            </p>
        </div>

        <div className="my-8 w-full grid md:grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-4">
 

                <img className='w-full' src="/assets/images/about-1.png" alt="" />
                <img className='w-full row-span-2 rounded-md' src="/assets/images/about-2.png" alt="" />
                <img className='w-full row-span-2 rounded-md' src="/assets/images/about-3.png" alt="" />
                <img className='w-full' src="/assets/images/about-4.png" alt="" />
                
            </div>
            <div className="my-auto ">
                <div className="max-md:text-center ">
                    <span className="border rounded-full border-[#E3E3E3] inline-block py-2 px-4 ">
                    <img className='inline-block mr-2' src="/assets/icons/bolt.png" alt="" />
                    <span>About Us</span>
                    </span>
                </div>
                <h2 className="text-4xl max-md:text-center font-semibold my-4">Creating A Community Of Life Long Learners.</h2>
                <p className='text-[#6F6F6F]'>Compellingly enhance equity investment strategies through efficient process improvements and innovation.Actualize mission-critical partnerships by leveraging integrated digital portals.Drive performance and collaboration with seamless, tech-enabled solutions.</p>

                <div className="md:flex gap-4 my-6">
                    <div className="">
                        <img className='inline-block' src="/assets/icons/checked.png" alt="" />
                        <span className='ml-2'>Flexible Classes</span>
                    </div>
                    <div className="">
                        <img className='inline-block' src="/assets/icons/checked.png" alt="" />
                        <span className='ml-2'>Learn From Anywhere</span>
                    </div>
                    <div className="">
                        <img className='inline-block' src="/assets/icons/checked.png" alt="" />
                        <span className='ml-2'>Learn from Experts</span>
                    </div>
                </div>

                <button className='bg-[#296AD2] cursor-pointer text-white px-4 py-2 rounded-sm'>Learn More About Us <img className='inline-block' src="/assets/icons/arrow-right.png" alt="" /></button>
            </div>
        </div>

{/* OUR ACHIEVEMENTS */}
        <div className="bg-[#296AD2] py-8 grid mt-14 md:grid-cols-4 max-md:gap-8">
            <div className="text-center text-white md:border-r max-md:border-b max-md:pb-8 max-md:mx-6">
                <p className='text-2xl mb-2'>50+</p>
                <p>Online Courses</p>
            </div>
            <div className="text-center text-white md:border-r max-md:border-b max-md:pb-8 max-md:mx-6">
                <p className='text-2xl mb-2'>50+</p>
                <p>Online Courses</p>
            </div>
            <div className="text-center text-white md:border-r max-md:border-b max-md:pb-8 max-md:mx-6">
                <p className='text-2xl mb-2'>50+</p>
                <p>Online Courses</p>
            </div>
            <div className="text-center text-white ">
                <p className='text-2xl mb-2'>50+</p>
                <p>Online Courses</p>
            </div>    
        </div>

{/* EXPLORE YOURSELF */}
        <div className="w-full mt-14">
            <div className="text-center my-8">
                <span className="border rounded-full border-[#E3E3E3] inline-block py-2 px-4 ">
                    <img className='inline-block mr-2' src="/assets/icons/bolt.png" alt="" />
                    <span>Why Choose Us</span>
                </span>
                    <h2 className="text-3xl">Explore Yourself All Over The World</h2>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                <div className="shadow-[0_2px_10px_0_#296AD240] text-center justify-items-center p-8">
                    <img className='' src="/assets/icons/explore1.png" alt="" />
                    <h3 className='text-xl font-semibold my-4'>World-Class Faculty</h3>
                    <p className='text-[#6F6F6F]'>Learn from industry-leading experts. combining real world experience with innovative teaching techniques.</p>
                </div>
                <div className="shadow-[0_2px_10px_0_#296AD240] text-center justify-items-center p-8">
                    <img className='' src="/assets/icons/explore2.png" alt="" />
                    <h3 className='text-xl font-semibold my-4'>Direct Interaction</h3>
                    <p className='text-[#6F6F6F]'>Expert guidance with instant 
                    answers, personalized 
                    feedback and enhanced 
                    learning experience,</p>
                </div>
                <div className="shadow-[0_2px_10px_0_#296AD240] text-center justify-items-center p-8">
                    <img className='' src="/assets/icons/explore3.png" alt="" />
                    <h3 className='text-xl font-semibold my-4'>Cutting-Edge Curriculum</h3>
                    <p className='text-[#6F6F6F]'>Our Curriculum is updated regularly to align with 
                    the latest industry trends 
                    and demands.</p>
                </div>
                <div className="shadow-[0_2px_10px_0_#296AD240] text-center justify-items-center p-8">
                    <img className='' src="/assets/icons/explore4.png" alt="" />
                    <h3 className='text-xl font-semibold my-4'>Innovative Learning</h3>
                    <p className='text-[#6F6F6F]'>We provide an engaging learning environment enhanced by technology 
                    and modern resources.</p>
                </div>
            </div>
        </div>

{/* CORE PRINCIPLES */}
        <div className="w-full mx-auto mt-14">
            <div className="text-center my-8">
                <span className="border rounded-full border-[#E3E3E3] inline-block py-2 px-4 ">
                    <img className='inline-block mr-2' src="/assets/icons/bolt.png" alt="" />
                    <span>Principle</span>
                </span>
                    <h2 className="text-3xl">Core Principles</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="">
                    <img className='w-full' src="/assets/images/value.png" alt="" />
                </div>
                <div className="grid gap-4">
                    <div className="bg-[#E6F2FF] rounded-md p-4">
                        <span className="inline-block bg-white py-2 px-4">Our Vision</span>
                        <p className='mt-2'>
                            To empower learners worldwide by providing accessible, high-quality, and industry-relevant online courses that foster personal growth, professional development, and lifelong learning.
                        </p>
                    </div>
                    <div className="bg-[#E6F2FF] rounded-md p-4">
                        <span className="inline-block bg-white py-2 px-4">Our Vision</span>
                        <p className='mt-2'>
                            To empower learners worldwide by providing accessible, high-quality, and industry-relevant online courses that foster personal growth, professional development, and lifelong learning.
                        </p>
                    </div>

                </div>
            </div>
        </div>

{/* OUR COURSE INSTRUCTOR */}
        <div className="w-full mt-14">
            <div className="text-center my-8">
                <span className="border rounded-full border-[#E3E3E3] inline-block py-2 px-4 ">
                    <img className='inline-block mr-2' src="/assets/icons/bolt.png" alt="" />
                    <span>Instructor</span>
                </span>
                    <h2 className="text-3xl">Our Course Instructor</h2>
            </div>

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
        </div>

{/* TESTIMONIALS */}

        <div className="grid md:grid-cols-2 mt-12 w-full">
            <div className="">
                <img src="/assets/images/testimonials.png" alt="" className="w-full" />
            </div>
            <div className="bg-[#296AD2] px-12 py-8">
                <div className=" my-8 text-white">
                    <span className="border rounded-full border-[#E3E3E3] bg-white inline-block py-2 px-4 ">
                        <img className='inline-block mr-2' src="/assets/icons/bolt.png" alt="" />
                        <span className='text-black'>Testimonials</span>
                    </span>
                    <h2 className="text-3xl mt-4">What Our Student Say</h2>
                </div>

                <div className="text-white">
                    <img src="/assets/icons/Rating.png" alt="" />
                    <p className='my-4'>
                        <span className='text-2xl font-semibold'>“</span> The UI UX Design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
                    </p>
                </div>
                <div className="flex gap-4 items-center">
                    <img src="/assets/images/avatar.png" alt="" />
                    <div className="text-white">
                        <h3 className='text-xl font-semibold'>Sarah</h3>
                        <p>UI UX Designer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
