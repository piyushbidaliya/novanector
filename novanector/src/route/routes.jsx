import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import About from "../pages/About"
import Whislist from "../pages/Whislist"
import Courses from "../pages/course/Courses"
import CourseDetail from "../pages/course/CourseDetail"
import Internship from "../pages/internship/Internship"
import InternshipDetail from "../pages/internship/InternshipDetail"

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
            }
        ]
    }
])

export default routes