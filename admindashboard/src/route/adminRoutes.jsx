import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Courses from "../pages/courses";
import CourseDetails from "../pages/CourseDetails";

const adminRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "course",
        element: <Courses />,
      },
      {
        path: "course/detail",
        element: <CourseDetails />,
      },
    ],
  },
]);

export default adminRoutes;
