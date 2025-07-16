import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import CourseDetails from "../pages/CourseDetails";
import Message from "../pages/message";
import Courses from "../pages/Courses";
import Reviews from "../pages/Reviews";
import Payments from "../pages/Payments";
import Category from "../pages/Category";
import Profile from "../pages/Profile";
import Blog from "../pages/blog/Blog";
import BlogDetails from "../pages/blog/BlogDetails";
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
                path: "message",
                element: <Message/>
            },
             {

                path:"course",
                element: <Courses/>
            },
            {
            path: "course/detail",
            element: <CourseDetails />,
            },
            {
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
                path:"blog",
                element: <Blog/>
            },
            {
                path: "blogDetails/:blogId",
                element: <BlogDetails/>
            },
        ]
    }
])

export default adminRoutes

