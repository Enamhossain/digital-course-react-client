import { createBrowserRouter } from "react-router-dom";
import Login from "../Authtication/Login/Login";
import Registration from "../Authtication/registration/Registration";
import Blog from "../component/Blog/Blog";
import Courses from "../component/Courses/Courses";
import Home from "../component/Home/Home";

import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Courses/>
            },
            {
                path:'/course',
                element:<Courses/>
            },
            {
                path:'/Home',
                element:<Home/>
            },
            {
                path:'/Blog',
                element:<Blog/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Registration/>
            },
        ]
    },
   
])