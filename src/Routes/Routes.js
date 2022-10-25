import { createBrowserRouter } from "react-router-dom";
import Category from "../component/Category/Category";
import Courses from "../component/Courses/Courses";
import Error from "../component/Error/Error";
import Home from "../component/Home/Home";
import Login from "../component/share/Login/Login";
import Register from "../component/share/Register/Register";
import Main from "../layout/Main";



export const routes = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
       element:<Home/>
      },
      {
        path:'/course',
        element:<Courses/>,
        loader:() => fetch('http://localhost:5000/course')
      },
      {
        path:'/category/:id',
        element:<Category/>,
        loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`)
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      }
   
    ]
  },
  {
    path:'*',
    element:<Error/>
  }
]);