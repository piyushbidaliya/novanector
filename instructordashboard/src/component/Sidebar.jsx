import React from 'react'
import { NavLink } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { PiBookOpenText, PiChatText } from "react-icons/pi";
import { MdOutlineLogout, MdOutlineReviews } from "react-icons/md";
import { MdOutlineQuiz } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbSettings } from "react-icons/tb";
import { GrAnnounce } from "react-icons/gr";


const navItems = [
  { icon: <RxDashboard />, path: "/", name: "Dashboard" },
  { icon: <FaRegUser />, path: "/profile", name: "My Profile" },
  { icon: <PiBookOpenText />, path: "/course", name: "Courses" },
  { icon: <PiChatText />, path: "/message", name: "Message" },
  { icon: <MdOutlineReviews />, path: "/review", name: "Reviews" },
  { icon: <MdOutlineQuiz />, path: "/quiz", name: "Quiz Attempt" },
  { icon: <GrAnnounce />, path: "/announcement", name: "Announcement" },
  { icon: <HiOutlineUserGroup />, path: "/community", name: "Community" },
  { icon: <TbSettings />, path: "/setting", name: "Setting" },
  { icon: <MdOutlineLogout />, path: "/logout", name: "Logout" },

]

function Sidebar({ containerStyle, close }) {
  return (
    <nav className={`${containerStyle}`}>
      <div className="space-y-3">
        {navItems.map((item, index) => (
          <div key={index}>
            {index === navItems.length - 2 && (
              <div className="border-b border-[#E3E3E3] mb-2"></div>
            )}

            <NavLink
              onClick={close}
              to={item.path}
              className={({ isActive }) =>
                `flex gap-3 items-center px-4 py-2 rounded-md transition-colors duration-200 ${isActive
                  ? 'bg-[#EBF5FF] text-[#296AD2]'
                  : 'hover:bg-[#EBF5FF] hover:text-[#296AD2]'
                }`
              }
            >
              {item.icon}
              <p className="font-normal text-[16px]">{item.name}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar
