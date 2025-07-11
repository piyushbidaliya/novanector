import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
function Header() {
  return (
    <header className='flex justify-between items-center px-4 md:px-11 lg:px-21 py-4 sticky bg-white top-0 z-50'>
        <div>
            <img src={logo} alt="" className='w-[150px] h-auto'/>
        </div>

        <div>
            <Link to="/search">
                icon
            </Link>
        </div>
    </header>
  )
}

export default Header
