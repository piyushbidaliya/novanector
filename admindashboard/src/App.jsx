import { Outlet } from "react-router-dom"
import ScrollToTop from "./component/ScrollToTop"
import Header from "./component/Header"
import Sidebar from "./component/Sidebar"



function App() {
  return (
    <>
      <ScrollToTop />
      <Header/>
      <div className="w-full flex">
        <div className=''><Sidebar containerStyle="w-64 bg-white border-r-1 border-[#DEE0E4] lg:block hidden h-full"/></div>
          <main className="">
            <Outlet/>
          </main>
      </div>
    </>
  )
}


export default App
