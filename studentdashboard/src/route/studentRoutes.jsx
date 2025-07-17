import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Message from "../pages/Message";
import Community from "../pages/Community";
import MyQuiz from "../pages/MyQuiz";
import OrderHistory from "../pages/OrderHistory";
import Course from "../pages/Course";

const studentRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Dashboard/>
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
                path: "community",
                element: <Community/>
            },
            {
                path: "quiz",
                element: <MyQuiz/>
            },
            {
                path: "order",
                element: <OrderHistory/>
            },
            {
                path: "course",
                element: <Course/>
            }
        ]

    }
])

export default studentRoutes