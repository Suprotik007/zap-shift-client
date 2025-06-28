import {createBrowserRouter} from "react-router";
import RootLayout from "./src/Layouts/RootLayout";
import Home from "./src/Pages/Home";
import Login from "./src/Pages/Login";
import AuthLayout from "./src/Layouts/AuthLayout";
import Register from "./src/Pages/Register";
import Coverage from "./src/Pages/Coverage";
import SendParcel from "./src/Pages/SendParcel";
import MyParcels from "./src/Pages/DashBoard/MyParcels";
import DashboardLayout from "./src/Layouts/DashboardLayout";
import Payment from "./src/Pages/DashBoard/Payment/Payment";
import PaymentHistory from "./src/Pages/DashBoard/Payment/PaymentHistory/PaymentHistory";
import TrackParcel from "./src/Pages/TrackParcel/TrackParcel";
import BeARider from "./src/Pages/DashBoard/BeARider";

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
  },
     {
        path: '/beARider',
        // element: <PrivateRoute,><BeARider></BeARider>,
        Component: BeARider,
        loader: () => fetch('./public/serviceCenter.json.json')
      },
{
    path:'/sendParcel',
    Component:SendParcel,
    loader: () => fetch('./public/serviceCenter.json.json')
   
  },
]},
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
path:'/login',
Component:Login
      },
      {
path:'/register',
Component:Register
      },
    ]
  },
 {
    path: '/dashboard',
   Component:DashboardLayout,
  
    children: [
      {
        path: 'myParcels',
        Component: MyParcels
      },
      {
        path:'payment/:parcelId',
        Component: Payment
      },
       {
        path: 'paymentHistory',
        Component: PaymentHistory
      },
      {
        path: 'track',
        Component: TrackParcel
      }
    ]
  }
    
  
]); 