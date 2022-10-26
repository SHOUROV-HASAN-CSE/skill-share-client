import { createBrowserRouter } from "react-router-dom";
import Category from "../component/Category/Category";
import Checkout from "../component/Courses/Checkout";
import CourseDetails from "../component/Courses/CourseDetails";
import Courses from "../component/Courses/Courses";
import Error from "../component/Error/Error";
import Home from "../component/Home/Home";
import Login from "../component/share/Login/Login";
import PrivateRoute from "../component/share/PrivateRoute/PrivateRoute";
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
        loader:() => fetch('https://skillshare-server.vercel.app/course')
      },
      {
        path:'/category/:id',
        element:<Category/>,
        loader:({params}) => fetch(`https://skillshare-server.vercel.app/category/${params.id}`)
      },
      {
        path:'/coursedetails/:id',
        element:<CourseDetails/>,
        loader:({params}) => fetch(`https://skillshare-server.vercel.app/category/${params.id}`)
      },
      {
        path:'/checkout/:id',
        element:<PrivateRoute><Checkout/></PrivateRoute>
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