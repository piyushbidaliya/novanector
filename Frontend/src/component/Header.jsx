import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IoIosArrowDown, IoIosArrowUp, IoMdMenu } from "react-icons/io";
import { IoCartOutline, IoClose, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { useCart } from '../context/CartContext';
import AuthForm from './AuthForm';
import { useAuth } from '../context/AuthContext';
import MobileMenu from './MobileMenu';

function Header() {
    const { user, setUser } = useAuth()
    const [openMenu, setOpenMenu] = useState(false)
    const [openPages, setOpenPages] = useState(false)
    const close = () => setOpenPages(false)
    const closeMenu = () => setOpenMenu(false)
    const { cartCount, wishlistCount } = useCart();
    const [openAuth, setOpenAuth] = useState(false);
    const [authMode, setAuthMode] = useState('signup');

    const openModal = (mode) => {
        setAuthMode(mode);
        setOpenAuth(true);
    };

    const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    };

    return (
        <>
            <nav className='flex justify-between items-center px-4 md:px-12 lg:px-24 md:py-4 lg:py-6 shadow-md sticky bg-white top-0 z-50'>
                {/* logo image */}
                <div className='w-[200px] h-auto'>
                    <img src={logo} alt="" />
                </div>
                {/* desktop menu */}
                <div className='xl:flex gap-5 font-normal text-lg hidden'>
                    <NavLink to="/" className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`}>Home</NavLink>
                    <NavLink to="/course" className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`}>Courses</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`}>About Us</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`}>Contact Us</NavLink>
                    <div className='flex items-center gap-1'>
                        <p>Pages </p>
                        {openPages ? <IoIosArrowUp onClick={close} className='cursor-pointer' /> : <IoIosArrowDown onClick={() => setOpenPages(true)} className='cursor-pointer' />}
                    </div>
                </div>
                <div className='xl:flex gap-4.5 hidden'>
                    <NavLink to="/search" className={({ isActive }) => `bg-[#EFEFEF] p-2.5 rounded-full cursor-pointer ${isActive
                        ? 'text-[#296AD2]'
                        : 'text-[#292929]'
                        }`}>
                        <IoSearch className='w-5 h-5' />
                    </NavLink>
                    <NavLink to="/whislist" className={({ isActive }) => `bg-[#EFEFEF] p-2.5 rounded-full cursor-pointer ${isActive
                        ? 'text-[#296AD2]'
                        : 'text-[#292929]'
                        }`}>
                        <div className='relative'>
                            <FaRegHeart className='w-5 h-5' />
                            {wishlistCount > 0 && (
                                <div className="absolute -top-3 -right-2 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                                    <span>{wishlistCount}</span>
                                </div>
                            )}

                        </div>
                    </NavLink>
                    <div className='bg-[#EFEFEF] p-2.5 rounded-full cursor-pointer'>
                        <NavLink to="/cart" className={({ isActive }) => `relative ${isActive
                            ? 'text-[#296AD2]'
                            : 'text-[#292929]'
                            }`}>
                            <IoCartOutline className='w-5 h-5' />
                            {cartCount > 0 && (
                                <div className="absolute -top-3 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                                    <span>{cartCount}</span>
                                </div>
                            )}
                        </NavLink>
                    </div>
                </div>
                {/* signup/login */}
                {user ? (
                    <div className="hidden xl:flex items-center gap-3">
                        <img
                            src={user.image}
                            alt="user"
                            className="w-9 h-9 rounded-full object-cover border border-[#296AD2]"
                        />
                        <p className="text-[#296AD2] font-medium text-[16px]">{user.name}</p>
                        <button onClick={handleLogout} className="cursor-pointer text-[#296AD2] border rounded-[8px] py-1 px-3">
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="hidden xl:flex gap-4.5 text-[16px]">
                        <button onClick={() => openModal('signup')} className="px-6 py-3 text-[#296AD2] rounded-[8px] border border-[#296AD2] cursor-pointer">Sign Up</button>
                        <button onClick={() => openModal('login')} className="px-6 py-3 bg-[#296AD2] text-white rounded-[8px] cursor-pointer">Login</button>
                    </div>
                )}

                <div className='xl:hidden block' >
                    {openMenu ? <IoClose className='w-6 h-6' onClick={closeMenu} /> : <IoMdMenu className='w-6 h-6' onClick={() => setOpenMenu(true)} />}
                </div>


            </nav>
            {/* mobile menu */}
            {
                openMenu && (
                    <MobileMenu closeMenu={closeMenu} openModal={openModal} />
                )
            }
            {
                openPages && (
                    <div className='shadow-md px-8 md:py-4 lg:py-6 flex justify-center gap-8 absolute left-1/2 z-50 top-20 bg-white'>
                        <NavLink to="/internship" className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`} onClick={close}>Internship</NavLink>
                        <NavLink to="/news" className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`} onClick={close}>News</NavLink>
                        <NavLink to="/events" className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`} onClick={close}>Events</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => `hover:text-[#1C4ED9] ${isActive ? 'text-[#296AD2]' : 'text-[#292929]'}`} onClick={close}>Blog</NavLink>
                    </div>
                )
            }

            <AuthForm isOpen={openAuth} onClose={() => setOpenAuth(false)} defaultMode={authMode} />

        </>
    )
}

export default Header
