import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Message from "../pages/Message";
import Reviews from "../pages/Reviews";
import QuizAttempt from "../pages/QuizAttempt";
import Community from "../pages/Community";
import Course from "../pages/course/Course";
import CourseDetails from "../pages/course/CourseDetails";
import Setting from "../pages/setting";
import Notifications from "../pages/Notifications";

const instructorRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: "message",
                element: <Message/>
            },
            {
                path: "review",
                element: <Reviews/>
            },
            {
                path: "quiz",
                element: <QuizAttempt/>
            },
            {
                path: "community",
                element: <Community/>
            },
            {
                path: "course",
                element: <Course/>
            },
            {
                path: "courseDetails/:courseId",
                element: <CourseDetails/>
            },
            {
                path: "setting",
                element: <Setting/>
            },
            {
                path: "notification",
                element: <Notifications/>
            }
        ]
    }
])

export default instructorRoutes