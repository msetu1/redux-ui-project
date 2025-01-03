import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Users from "@/components/Users/Users";

const Routes =createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'/users',
            element:<Users/>
        },
      ]
    },
    {
        path:'/login',
        element: <Login/>
    }
  ]);

export default Routes;