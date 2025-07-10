import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'
import { LuMail, LuTwitter } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { RiFacebookCircleLine } from "react-icons/ri";

function Footer() {
    return (
        <footer className='flex bg-[#1F2A38] px-4 md:px-12 lg:px-24 py-6 items-left sm:items-center justify-between sm:flex-wrap flex-col sm:flex-row'>
            <div className='w-[250px] sm:w-[335px] h-[241px]'>
                <img src={logo} alt="" className='w-[335px] h-auto' />
                <p className='text-white font-normal text-[16px]'>NovaNectar Services is a Dehradun-based IT company delivering smart digital solutions like web development, app design, and marketing to drive business growth.</p>
            </div>

            <div className='h-[241px]'>
                <p className='text-white font-normal text-[24px] pb-2'>Links</p>
                <ul className='font-light text-white/50 text-[16px] grid gap-2'>
                    <li>
                        <Link className='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link className='/course'>Courses</Link>
                    </li>
                    <li>
                        <Link className='/internship'>Internships</Link>
                    </li>
                    <li>
                        <Link className='/blog'>Blogs</Link>
                    </li>
                    <li>
                        <Link className='/event'>Events</Link>
                    </li>
                </ul>
            </div>

            <div className='h-[241px]'>
                <p className='text-white font-normal text-[24px] pb-2'>Courses</p>
                <ul className='font-light text-white/50 text-[16px] grid gap-2'>
                    <li>
                        <Link className='/about'>Web Development</Link>
                    </li>
                    <li>
                        <Link className='/course'>Marketing</Link>
                    </li>
                    <li>
                        <Link className='/internship'>Ui/Ux Designer</Link>
                    </li>
                    <li>
                        <Link className='/blog'>Data Science</Link>
                    </li>
                    <li>
                        <Link className='/event'>Python</Link>
                    </li>
                </ul>
            </div>

            <div className='h-[241px]'>
                <p className='text-white font-normal text-[24px] pb-2'>Contact Us</p>
                <ul className='font-light text-white/50 text-[16px] grid gap-2 pb-4'>
                    <li className='flex items-center gap-1'>
                        <FaWhatsapp className='text-white' />
                        <p>8979891703</p>
                    </li>
                    <li className='flex items-center gap-1'>
                        <IoLocationOutline className='text-white' />
                        <p>GMS Road Dehradun, Uttarakhand, India</p>
                    </li>
                    <li className='flex items-center gap-1'>
                        <LuMail className='text-white' />
                        <p>info@novanectar.co.in</p>
                    </li>
                </ul>
                <div className='flex gap-3 text-white'>
                    <div className='border border-[#C5C5C5] p-2 rounded-[4px]'>
                        <RiFacebookCircleLine />
                    </div>
                    <div className='border border-[#C5C5C5] p-2 rounded-[4px]'>
                        <FaInstagram />
                    </div>
                    <div className='border border-[#C5C5C5] p-2 rounded-[4px]'>
                        <LuTwitter />
                    </div>
                    <div className='border border-[#C5C5C5] p-2 rounded-[4px]'>
                        <CiLinkedin />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
