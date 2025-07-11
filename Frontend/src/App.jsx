import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import Footer from "./component/Footer"
import ScrollToTop from "./component/ScrollToTop"



function App() {
  return (
    <>
      <ScrollToTop />
      <Header/>
      <main className="">
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}


export default App
