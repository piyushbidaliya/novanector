import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IoIosArrowDown, IoIosArrowForward, IoMdMenu } from "react-icons/io";
import { IoCartOutline, IoClose, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";

function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <nav className='flex justify-between items-center px-4 md:px-12 lg:px-24 md:py-4 lg:py-6'>
                {/* logo image */}
                <div className='w-[200px] h-auto'>
                    <img src={logo} alt="" />
                </div>
                {/* desktop menu */}
                <div className='lg:flex gap-5 font-normal text-lg hidden'>
                    <Link to="/" className='hover:text-[#1C4ED9]'>Home</Link>
                    <Link to="/course" className='hover:text-[#1C4ED9]'>Courses</Link>
                    <Link to="/about" className='hover:text-[#1C4ED9]'>About Us</Link>
                    <Link to="/contact" className='hover:text-[#1C4ED9]'>Contact Us</Link>
                    <div className='flex items-center gap-1 cursor-pointer'>
                        <p>Pages </p>
                        <IoIosArrowDown />
                    </div>
                </div>
                <div className='lg:flex gap-4.5 hidden'>
                    <div className='bg-[#EFEFEF] p-2.5 rounded-full'>
                        <IoSearch className='w-5 h-5' />
                    </div>
                    <div className='bg-[#EFEFEF] p-2.5 rounded-full'>
                        <FaRegHeart className='w-5 h-5' />
                    </div>
                    <div className='bg-[#EFEFEF] p-2.5 rounded-full'>
                        <IoCartOutline className='w-5 h-5' />
                    </div>
                </div>
                {/* signup/login */}
                <div className='hidden lg:flex gap-4.5 text-[16px]'>
                    <button className='px-6 py-3 text-[#296AD2] rounded-[8px] border border-[#296AD2]'>Sign Up</button>
                    <button className='px-6 py-3 bg-[#296AD2] text-white rounded-[8px]'>Login</button>
                </div>

                <div className='lg:hidden block' >
                    {openMenu ? <IoClose className='w-6 h-6' onClick={() => setOpenMenu(false)} /> : <IoMdMenu className='w-6 h-6' onClick={() => setOpenMenu(true)} />}
                </div>


            </nav>
            {/* mobile menu */}
            {
                openMenu && (
                    <div className=' block px-6 font-normal text-lg lg:hidden absolute top-14 bg-white w-full z-50'>
                        <div className='flex items-center gap-2 border-b-1 border-[#E3E3E3]'>
                            <IoSearch/>
                            <input type="text" name="" id="" placeholder='Search here'/>
                        </div>
                        <ul>
                            <li className='py-3'>
                                <Link to="/" className='hover:text-[#1C4ED9]'>Home</Link>
                            </li>
                            <li className='pb-3'>
                                <Link to="/course" className='hover:text-[#1C4ED9]'>Courses</Link>
                            </li>
                            <li className='pb-3'>
                                <Link to="/about" className='hover:text-[#1C4ED9]'>About Us</Link>
                            </li>
                            <li className='pb-3'>
                                <Link to="/contact" className='hover:text-[#1C4ED9]'>Contact Us</Link>
                            </li>
                            <li className='flex justify-between items-center gap-1 cursor-pointer pb-3'>
                                <p>Pages </p>
                                <IoIosArrowForward />
                            </li>
                            <li className='pb-3'>
                                <Link to="/internship" className='hover:text-[#1C4ED9]'>Internship</Link>
                            </li>
                            <li className='pb-3'>
                                <Link to="/blog" className='hover:text-[#1C4ED9]'>Blog</Link>
                            </li>
                            <li className='pb-3'>
                                <Link to="/event" className='hover:text-[#1C4ED9]'>Event</Link>
                            </li>
                            <li className='pb-3'>
                                <Link to="/news" className='hover:text-[#1C4ED9]'>News</Link>
                            </li>


                        </ul>
                        <div className='flex gap-4.5 lg:hidden pb-3'>
                            <div className='bg-[#EFEFEF] p-2.5 rounded-full'>
                                <IoSearch className='w-5 h-5' />
                            </div>
                            <div className='bg-[#EFEFEF] p-2.5 rounded-full'>
                                <FaRegHeart className='w-5 h-5' />
                            </div>
                            <div className='bg-[#EFEFEF] p-2.5 rounded-full'>
                                <IoCartOutline className='w-5 h-5' />
                            </div>
                        </div>
                        <div className='lg:hidden flex gap-4.5 text-[16px]'>
                            <button className='px-6 py-2 w-full text-[#296AD2] border-[#296AD2] border rounded-[8px]'>Login</button>

                            <button className='px-6 w-full py-2  bg-[#296AD2] text-white rounded-[8px] '>Sign Up</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Header
