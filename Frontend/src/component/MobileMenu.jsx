import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoMdMenu } from "react-icons/io";
import { IoCartOutline, IoClose, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { useAuth } from '../context/AuthContext';

function MobileMenu({ closeMenu, openModal }) {
    const { user } = useAuth()

    return (
        <div className=' block px-6 md:px-12 lg:px-24 pb-10 font-normal text-lg xl:hidden top-14 md:top-20 lg:top-24 bg-white w-full z-50 sticky'>
            <NavLink to="/search" className='flex items-center gap-2 border-b-1 border-[#E3E3E3]'>
                <IoSearch />
                <input type="text" name="" id="" placeholder='Search here' />
            </NavLink>
            <ul>
                <li className='py-3'>
                    <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`}>Home</NavLink>
                </li>
                <li className='pb-3'>
                    <NavLink to="/course" onClick={closeMenu} className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`}>Courses</NavLink>
                </li>
                <li className='pb-3'>
                    <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`}>About Us</NavLink>
                </li>
                <li className='pb-3'>
                    <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`}>Contact Us</NavLink>
                </li>
                <li className='flex justify-between items-center gap-1 cursor-pointer pb-3'>
                    <p>Pages </p>
                    <IoIosArrowForward />
                </li>
                <li className='pb-3'>
                    <NavLink to="/internship" onClick={closeMenu} className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`}>Internship</NavLink>
                </li>
                <li className='pb-3'>
                    <NavLink to="/blog" onClick={closeMenu} className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`}>Blog</NavLink>
                </li>
                <li className='pb-3'>
                    <NavLink to="/events" onClick={closeMenu} className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`}>Event</NavLink>
                </li>
                <li className='pb-3'>
                    <NavLink to="/news" onClick={closeMenu} className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`}>News</NavLink>
                </li>


            </ul>
            <div className='flex gap-4.5 lg:hidden pb-3'>
                <NavLink to="/search" onClick={closeMenu} className={({ isActive }) => `bg-[#EFEFEF] p-2.5 rounded-full cursor-pointer ${isActive
                    ? 'text-[#296AD2]'
                    : 'text-[#292929]'
                    }`}>
                    <IoSearch className='w-5 h-5' />
                </NavLink>
                <NavLink to="/whislist" onClick={closeMenu} className={({ isActive }) => `bg-[#EFEFEF] p-2.5 rounded-full cursor-pointer ${isActive
                    ? 'text-[#296AD2]'
                    : 'text-[#292929]'
                    }`}>
                    <FaRegHeart className='w-5 h-5' />
                </NavLink>
                <NavLink to="/cart" onClick={closeMenu} className={({ isActive }) => `bg-[#EFEFEF] p-2.5 rounded-full cursor-pointer ${isActive
                    ? 'text-[#296AD2]'
                    : 'text-[#292929]'
                    }`}>
                    <IoCartOutline className='w-5 h-5' />
                </NavLink>
            </div>
            {user ? (
                <div className="xl:hidden flex items-center gap-3">
                    <img
                        src={user.image}
                        alt="user"
                        className="w-9 h-9 rounded-full object-cover border border-[#296AD2]"
                    />
                    <p onClick={handleLogout} className="cursor-pointer text-[#296AD2] font-medium text-[16px]">{user.name}</p>
                </div>) : (
                <div className='xl:hidden flex gap-4.5 text-[16px]'>
                    <button onClick={() => {
                        closeMenu()
                        openModal('login')
                    }} className='px-6 py-2 w-full text-[#296AD2] border-[#296AD2] border rounded-[8px]' >Login</button>

                    <button onClick={() => {
                        closeMenu()
                        openModal('signup')
                    }} className='px-6 w-full py-2  bg-[#296AD2] text-white rounded-[8px] '>Sign Up</button>
                </div>
            )}
        </div>
    )
}

export default MobileMenu
