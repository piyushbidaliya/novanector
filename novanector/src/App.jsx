import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import Footer from "./component/Footer"

function App() {

  return (
    <>
      <Header/>
      <main className="h-screen">
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App
