import { createBrowserRouter } from "react-router-dom";
import Login from "../Authtication/Login/Login";
import Registration from "../Authtication/registration/Registration";
import Blog from "../component/Blog/Blog";

import Courses from "../component/Courses/Courses";
import Readmore from "../component/readmore/Readmore";

import Categories from "../component/sideCategories/Categories";

import Main from "../layout/Main";
import PrivateRouter from "./PrivateRouter";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<PrivateRouter><Courses/></PrivateRouter>,
                loader:() => fetch ('https://digital-course-server-enamhossain.vercel.app/course')
            },
              
             {
                path:'/category/:id',
                element:<PrivateRouter><Categories></Categories></PrivateRouter>  ,
                loader: ({params}) => fetch (`https://digital-course-server-enamhossain.vercel.app/${params.id}`)
             },
        
            {
                path:'/course/:id',
                element:<PrivateRouter><Courses/></PrivateRouter>  ,
                loader:({params}) => fetch (`https://digital-course-server-enamhossain.vercel.app/course/${params.id}`)
            },
           
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/register',
                element:<Registration/>
            },
            
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/readmore/:id',
                element:<Readmore/>,
                loader:({params}) => fetch (`http://localhost:5000/course/${params.id}`)
            },
        ]
    },
    
   
])