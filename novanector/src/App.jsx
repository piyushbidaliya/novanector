import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Contacts from "./pages/Contact"


function App() {

  return (
    <> 
      <main>
      <Header/>
      <main className="">
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App
