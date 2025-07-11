import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoMdMenu } from "react-icons/io";
import { IoCartOutline, IoClose, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { useCart } from '../context/CartContext';

function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openPages, setOpenPages] = useState(false)
    const close = ()=>setOpenPages(false)
    const closeMenu = ()=>setOpenMenu(false)
    const { cartCount, wishlistCount } = useCart();
    return (
        <>
            <nav className='flex justify-between items-center px-4 md:px-12 lg:px-24 md:py-4 lg:py-6 shadow-md sticky bg-white top-0'>
                {/* logo image */}
                <div className='w-[200px] h-auto'>
                    <img src={logo} alt="" />
                </div>
                {/* desktop menu */}
                <div className='xl:flex gap-5 font-normal text-lg hidden'>
                    <Link to="/" className='hover:text-[#1C4ED9]'>Home</Link>
                    <Link to="/course" className='hover:text-[#1C4ED9]'>Courses</Link>
                    <Link to="/about" className='hover:text-[#1C4ED9]'>About Us</Link>
                    <Link to="/contact" className='hover:text-[#1C4ED9]'>Contact Us</Link>
                    <div className='flex items-center gap-1'>
                        <p>Pages </p>
                        { openPages ? <IoIosArrowUp onClick={close} className='cursor-pointer'/> : <IoIosArrowDown onClick={()=>setOpenPages(true)} className='cursor-pointer'/>}
                    </div>
                </div>
                <div className='xl:flex gap-4.5 hidden'>
                    <Link to="/search" className='bg-[#EFEFEF] p-2.5 rounded-full cursor-pointer'>
                        <IoSearch className='w-5 h-5' />
                    </Link>
                    <Link to="/whislist" className='bg-[#EFEFEF] p-2.5 rounded-full'>
                        <div className='relative'>
                            <FaRegHeart className='w-5 h-5' />
                            {wishlistCount > 0 && (
                                <div className="absolute -top-3 -right-2 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                                    <span>{wishlistCount}</span>
                                </div>
                            )}

                        </div>
                    </Link>
                    <div className='bg-[#EFEFEF] p-2.5 rounded-full cursor-pointer'>
                        <div className='relative'>
                            <IoCartOutline className='w-5 h-5' />
                            {cartCount > 0 && (
                                <div className="absolute -top-3 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                                    <span>{cartCount}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* signup/login */}
                <div className='hidden xl:flex gap-4.5 text-[16px]'>
                    <button className='px-6 py-3 text-[#296AD2] rounded-[8px] border border-[#296AD2] cursor-pointer'>Sign Up</button>
                    <button className='px-6 py-3 bg-[#296AD2] text-white rounded-[8px] cursor-pointer'>Login</button>
                </div>

                <div className='xl:hidden block' >
                    {openMenu ? <IoClose className='w-6 h-6' onClick={closeMenu} /> : <IoMdMenu className='w-6 h-6' onClick={() => setOpenMenu(true)} />}
                </div>


            </nav>
            {/* mobile menu */}
            {
                openMenu && (
                    <div className=' block px-6 md:px-12 lg:px-24 pb-10 font-normal text-lg xl:hidden absolute top-14 md:top-20 lg:top-24 bg-white w-full z-50 sticky top-0'>
                        <Link to="/search" className='flex items-center gap-2 border-b-1 border-[#E3E3E3]'>
                            <IoSearch/>
                            <input type="text" name="" id="" placeholder='Search here'/>
                        </Link>
                        <ul>
                            <li className='py-3'>
                                <Link to="/" onClick={closeMenu} className='hover:text-[#1C4ED9]'>Home</Link>
                            </li>
                            <li className='pb-3'>
                                <Link to="/course" onClick={closeMenu} className='hover:text-[#1C4ED9]'>Courses</Link>
                            </li>
                            <li className='pb-3'>
                                <Link to="/about" onClick={closeMenu} className='hover:text-[#1C4ED9]'>About Us</Link>
                            </li>
                            <li className='pb-3'>
                                <Link to="/contact" onClick={closeMenu} className='hover:text-[#1C4ED9]'>Contact Us</Link>
                            </li>
                            <li className='flex justify-between items-center gap-1 cursor-pointer pb-3'>
                                <p>Pages </p>
                                <IoIosArrowForward />
                            </li>
                            <li className='pb-3'>
                                <Link to="/internship" onClick={closeMenu} className='hover:text-[#1C4ED9]'>Internship</Link>
                            </li>
                            <li className='pb-3'>
                                <Link to="/blog" onClick={closeMenu} className='hover:text-[#1C4ED9]'>Blog</Link>
                            </li>
                            <li className='pb-3'>
                                <Link to="/events" onClick={closeMenu} className='hover:text-[#1C4ED9]'>Event</Link>
                            </li>
                            <li className='pb-3'>
                                <Link to="/news" onClick={closeMenu} className='hover:text-[#1C4ED9]'>News</Link>
                            </li>


                        </ul>
                        <div className='flex gap-4.5 lg:hidden pb-3'>
                            <Link to="/search" onClick={closeMenu} className='bg-[#EFEFEF] p-2.5 rounded-full'>
                                <IoSearch className='w-5 h-5' />
                            </Link>
                            <Link to="/whislist" onClick={closeMenu} className='bg-[#EFEFEF] p-2.5 rounded-full'>
                                <FaRegHeart className='w-5 h-5' />
                            </Link>
                            <Link to="/cart" onClick={closeMenu} className='bg-[#EFEFEF] p-2.5 rounded-full'>
                                <IoCartOutline className='w-5 h-5' />
                            </Link>
                        </div>
                        <div className='xl:hidden flex gap-4.5 text-[16px]'>
                            <button onClick={()=>{closeMenu()}} className='px-6 py-2 w-full text-[#296AD2] border-[#296AD2] border rounded-[8px]' >Login</button>

                            <button onClick={()=>{closeMenu()}} className='px-6 w-full py-2  bg-[#296AD2] text-white rounded-[8px] '>Sign Up</button>
                        </div>
                    </div>
                )
            }
            {
                openPages && (
                    <div className='shadow-md px-8 md:py-4 lg:py-6 flex justify-center gap-8 absolute left-1/2 z-50 top-20 bg-white'>
                        <Link to="/internship" onClick={close}>Internship</Link>
                        <Link to="/news" onClick={close}>News</Link>
                        <Link to="/events" onClick={close}>Events</Link>
                        <Link to="/blog" onClick={close}>Blog</Link>
                    </div>
                )
            }
        </>
    )
}

export default Header
