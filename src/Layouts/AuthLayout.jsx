import React from 'react';
import ProjectLogo from '../Components/projectLogo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
const AuthLayout = () => {
    return (
        <div>
            <div className="">
                <div>
                    <ProjectLogo></ProjectLogo>
                </div>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={authImg}
      className="max-w-sm rounded-lg "
    />
    <div>
   <div className='flex-1'>
    <Outlet></Outlet>
   </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AuthLayout;