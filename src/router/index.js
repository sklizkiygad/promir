import React from "react";
import {createBrowserRouter,} from "react-router-dom";
import MainPage from "../pages/MainPage";
import StreamPage from "../pages/StreamPage";
import CoursesPage from "../pages/CoursesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/stream",
        element: <StreamPage/>,
    },
    {
        path: "/courses",
        element: <CoursesPage/>,
    },
    {
        path: "*",
        element: <MainPage/>,
    },
]);
export default router;