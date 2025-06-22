import {createBrowserRouter} from "react-router";
import RootLayout from "./src/Layouts/RootLayout";
import Home from "./src/Pages/Home";
import Login from "./src/Pages/Login";
import AuthLayout from "./src/Layouts/AuthLayout";
import Register from "./src/Pages/Register";
import Coverage from "./src/Pages/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
  Component:RootLayout,
  children:[{
    index:true,
    Component:Home
  },
{
    path:'/coverage',
    Component:Coverage,
    loader:()=>  fetch('./public/serviceCenter.json.json'),
  }]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
path:'login',
Component:Login
      },
      {
path:'register',
Component:Register
      },
    ]
  },
  
]); 