import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import About from "../pages/About"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "About",
                element: <About/>
            },
        ]
    }
])

export default routes