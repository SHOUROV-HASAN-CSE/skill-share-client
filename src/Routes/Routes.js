import { createBrowserRouter } from "react-router-dom";
import Category from "../component/Category/Category";
import Courses from "../component/Courses/Courses";
import Error from "../component/Error/Error";
import Home from "../component/Home/Home";
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
        element:<Courses/>
      },
      {
        path:'/category/:id',
        element:<Category/>
      },
   
    ]
  },
  {
    path:'*',
    element:<Error/>
  }
]);