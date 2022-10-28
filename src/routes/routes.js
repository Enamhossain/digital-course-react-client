import { createBrowserRouter } from "react-router-dom";
import Login from "../Authtication/Login/Login";
import Registration from "../Authtication/registration/Registration";
import Blog from "../component/Blog/Blog";

import Courses from "../component/Courses/Courses";

import Categories from "../component/sideCategories/Categories";

import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Courses/>,
                loader:() => fetch ('http://localhost:5000/course')
            },
              
             {
                path:'/category/:id',
                element:<Categories></Categories>,
                loader: ({params}) => fetch (`http://localhost:5000/category/${params.id}`)
             },
        
            {
                path:'/course/:id',
                element:<Courses/>,
                loader:({params}) => fetch (`http://localhost:5000/course/${params.id}`)
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
        ]
    },
    
   
])