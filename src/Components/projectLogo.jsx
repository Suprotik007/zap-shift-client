import React from 'react';
import logo from '.././assets/logo.png'
const ProjectLogo = () => {
    return (
        <div className='flex items-end '>
            <img src={logo} alt="" />
            <p className='font-semibold  text-3xl'>ZapShift</p>
        </div>
    );
};

export default ProjectLogo;