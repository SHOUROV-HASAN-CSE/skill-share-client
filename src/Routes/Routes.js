import { createBrowserRouter } from "react-router-dom";
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
      }
    ]
  }
]);