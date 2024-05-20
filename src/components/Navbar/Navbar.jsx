import React from "react";
import logoImg from "./../../assets/images/Logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    const links = <>
        <li className="font-bold"><NavLink to={'/'}>Home</NavLink></li>
        <li className="font-bold"><NavLink to={'/queries'}>Queries</NavLink></li>
        <li className="font-bold"><NavLink to={'/recommendationsForme'}>Recommendations For Me</NavLink></li>
        <li className="font-bold"><NavLink to={'/myqueries'}>My Queries</NavLink></li>
        <li className="font-bold"><NavLink to={'/myrecommendations'}>My Recommendations</NavLink></li>
        
        
    </>

  return (
    <div className="bg-custom_Dark py-2">
      <div className="navbar  lg:max-w-7xl mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-custom_Dark rounded-box w-52 opacity-90" id="sidebar"
            >
              {/* links */}
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost ">
            <img src={logoImg} alt="" />
            <h1 className="text-2xl xl:text-3xl font-medium ml-1">Discy</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1" id="sidebar">
            {/* links */}
            {links}
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
