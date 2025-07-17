import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IoClose, IoSearch } from "react-icons/io5";
import { MdMenu, MdOutlineNotificationsNone } from 'react-icons/md';
import Sidebar from './Sidebar';

function Header() {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <header className='flex justify-between items-center px-4 md:px-11 lg:px-21 py-4 sticky bg-white top-0 z-50'>
        <div>
            <img src={logo} alt="" className='w-[150px] h-auto'/>
        </div>

        <div className='flex items-center gap-4'>
            <Link to="/search">
                <IoSearch className='w-5 h-5'/>
            </Link>
              <Link to="/notification">
                <MdOutlineNotificationsNone className='w-6 h-6'/>
            </Link>
                <div className='hidden lg:flex gap-4.5 text-[16px]'>
                    <button className='px-6 py-1 bg-[#296AD2] text-white rounded-[8px] cursor-pointer'>Login</button>
                </div>
                {
                  openSidebar ? (
                  <div className='block lg:hidden cursor-pointer' onClick={()=>setOpenSidebar(false)}>
                      <IoClose className='w-5 h-5'/>
                  </div>
                ):
                (
                  <div className='block lg:hidden cursor-pointer' onClick={()=>setOpenSidebar(true)}>
                    <MdMenu className='w-5 h-5'/>
                  </div>
                )
                }

        </div>
        {
          openSidebar && (
            <Sidebar containerStyle="block lg:hidden absolute w-full h-[calc(100vh-4rem)] overflow-y-auto z-50 top-16 bg-white" close={()=>setOpenSidebar(false)}/>
          )
        }
    </header>
  )
}

export default Header
