import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";
import { router } from '../router.jsx';
import 'aos/dist/aos.css'; 
import Aos from 'aos';
import AuthProvider from './Contexts/AuthProvider.jsx';


Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='urbanist'>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
   </div>
 
  </StrictMode>,
)
