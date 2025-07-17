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
import Setting from "../pages/setting";
import Community from "../pages/Community";
import Coupons from "../pages/Coupons";
import Blog from "../pages/blog/Blog";
import BlogDetails from "../pages/blog/BlogDetails";
import CreateInstructor from "../pages/CreateInstructor";
import Notifications from "../pages/Notifications";
import Event from "../pages/event/Event";
import ApproveCourses from "../pages/ApprovedCourses";

const adminRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "message",
                element: <Message />
            },
            {

                path: "course",
                element: <Courses />
            },
            {
                path: "course/detail",
                element: <CourseDetails />,
            },
            {
                path: "review",
                element: <Reviews />
            },
            {
                path: "payment",
                element: <Payments />
            },
            {
                path: "category",
                element: <Category />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path:"setting",
                element: <Setting/>
            },
            {
                path: "community",
                element: <Community />
            },
            {
                path: "coupons",
                element: <Coupons/>
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "blogDetails/:blogId",
                element: <BlogDetails />
            },
            {
                 path: "create-instructor",
                 element: <CreateInstructor />
            },
            {
                 path: '/notification',
                 element: <Notifications />
            },
            {
                path: "event",
                element: <Event />
            }, {
                path: "/approve",
                element: <ApproveCourses />
            }

        ]
    }
])

export default adminRoutes

