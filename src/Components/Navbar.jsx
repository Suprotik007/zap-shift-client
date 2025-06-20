import React from 'react';
import { NavLink } from 'react-router';
import ProjectLogo from './projectLogo';

const Navbar = () => {
  const navLinks=<>
  <NavLink>Services</NavLink>
  <NavLink>Coverage</NavLink>
  <NavLink>About Us</NavLink>
  <NavLink>Pricing</NavLink>
  <NavLink>Be a Rider</NavLink>
  </>


  
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu gap-4 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-black"><ProjectLogo></ProjectLogo></a>
  </div>
  <div className="navbar-center justify-around  hidden lg:flex">
   <ul className='menu menu-horizontal gap-8 px-1'>
{navLinks}
   </ul>
   
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;