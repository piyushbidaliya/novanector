import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import Reviews from "../pages/Reviews";
import Payments from "../pages/Payments";
import Category from "../pages/Category";
import Profile from "../pages/Profile";
import Community from "../pages/Community";
import Coupons from "../pages/Coupons";
const adminRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Dashboard/>
            },
            {
                path:"course",
                element: <Courses/>
            },{
               path:"review",
               element: <Reviews/> 
            },
            {
                path:"payment",
                element: <Payments/>
            },
            {
                path:"category",
                element: <Category/>
            },
            {
                path:"profile",
                element: <Profile/>
            },
            {
                path: "community",   
                element: <Community />
            },
            {
                path: "coupons",
                element: <Coupons/>
            }
        ]
    }
])

export default adminRoutes

