import {createBrowserRouter} from "react-router";
import RootLayout from "./src/Layouts/RootLayout";
import Home from "./src/Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
  Component:RootLayout,
  children:[{
    index:true,
    Component:Home
  }]
  },
]); 