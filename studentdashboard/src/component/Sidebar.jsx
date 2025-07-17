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
import { FaRegHeart } from "react-icons/fa";
import { TbClipboardText } from "react-icons/tb";
import { CgLoadbarDoc } from "react-icons/cg";
import { VscReferences } from "react-icons/vsc";


const navItems = [
  { icon: <RxDashboard />, path: "/", name: "Dashboard" },
  { icon: <FaRegUser />, path: "/profile", name: "My Profile" },
  { icon: <PiBookOpenText />, path: "/course", name: "Courses" },
  { icon: <FaRegHeart />, path: "/wishlist", name: "Whislist" },
  { icon: <PiChatText />, path: "/message", name: "Messages" },
  { icon: <MdOutlineQuiz />, path: "/quiz", name: "My Quiz" },
  { icon: <TbClipboardText />, path: "/assignments", name: "Assignments" },
  { icon: <VscReferences />, path: "/referral", name: "Referrals" },
  { icon: <HiOutlineUserGroup />, path: "/community", name: "Community" },
  { icon: <CgLoadbarDoc />, path: "/order", name: "Order History" },
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
