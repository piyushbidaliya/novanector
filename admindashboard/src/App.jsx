import { Outlet } from "react-router-dom"
import ScrollToTop from "./component/ScrollToTop"
import Header from "./component/Header"
import Sidebar from "./component/Sidebar"
import UserBanner from "./component/UserBanner"
import CreateCourse from "./component/CreateCourse"
import AddModule from "./component/AddModule"
import { useState } from "react"
import UserBannerWrapper from "./component/WrapperUserBanner"




function App() {
  const [showCreateCourse, setShowCreateCourse] = useState(false);
  const [showAddModule, setShowAddModule] = useState(false);
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="w-full flex px-4 md:px-11 lg:px-21 py-4 gap-4">
        <div className=''><Sidebar containerStyle="w-64 bg-white py-8 px-4 border border-[#DEE0E4] lg:block hidden" /></div>
        <main className="w-full">
          <UserBannerWrapper/>
          <Outlet />
        </main>
      </div>
    </>
  )
}


export default App