import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import About from "../pages/About"
import Whislist from "../pages/Whislist"
import Courses from "../pages/course/Courses"
import CourseDetail from "../pages/course/CourseDetail"
import Internship from "../pages/internship/Internship"
import InternshipDetail from "../pages/internship/InternshipDetail"
import Contacts from "../pages/Contact"
import Event from "../pages/event/Event"
import EventDetails from "../pages/event/EventDetails"
import News from "../pages/news/News"
import NewsDetails from "../pages/news/NewsDetails"
import Blog from "../pages/blog/Blog"
import BlogDetails from "../pages/blog/BlogDetails"

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

                path: "about",
                element: <About/>
            },
            {

                path: "contact",
                element: <Contacts/>
            },
            {
                path: "whislist",
                element: <Whislist/>
            },
            {
                path: "course",
                element: <Courses/>                    
            },
            {
                path: "courseDetailsOverview/:courseId",
                element: <CourseDetail/>
            },
            {
                path: "internship",
                element: <Internship/>
            },
            {
                path: "internshipDetails/:internshipId",
                element: <InternshipDetail/>
            },
            {
                path: "events",
                element: <Event/>
            },
            {
                path: "eventDetails/:eventId",
                element: <EventDetails/>
            },
            {
                path: "news",
                element: <News/>
            },
            {
                path: "newsDetails/:newsId",
                element: <NewsDetails/>
            },
            {
                path: "blog",
                element: <Blog/>
            },
            {
                path: "blogDetails/:blogId",
                element: <BlogDetails/>
            },
        ]
    }
])

export default routes