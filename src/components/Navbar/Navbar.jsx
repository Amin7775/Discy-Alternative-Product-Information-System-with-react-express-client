// import React from "react";
import logoImg from "./../../assets/images/Logo/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();
  // context
  const { user, logOut } = useContext(AuthContext);

  // handleLogout
  const handleLogout = () => {
    logOut()   
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Logout Success",
        showConfirmButton: false,
        timer: 1500
    })
    .then(()=>{
        navigate('/')
    })
  
  };

  const links = (
    <>
      <li className="font-bold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={"/queries"}>Queries</NavLink>
      </li>
      {user ? (
        <>
          <li className="font-bold">
            <NavLink to={"/recommendationsForme"}>
              Recommendations For Me
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink to={"/myqueries"}>My Queries</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to={"/myrecommendations"}>My Recommendations</NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="font-bold">
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </>
      )}
    </>
  );

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
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-custom_Dark rounded-box w-52 opacity-90"
              id="sidebar"
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
          {/* user */}
          <div className="dropdown dropdown-end">
            {user && (
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-btn"
              > 
              <div className="hidden md:block lg:hidden xl:block">

              <div className="flex flex-col justify-center items-start gap-1 ">
                <p className="text-xs opacity-50">Welcome </p>
                <p>{user?.displayName}</p>
              </div>
              </div>
                <div className="avatar p-1 border-2 rounded-full border-custom_blue relative">
                  <div className="w-10 md:w-9 rounded-full">
                    <img
                      src={
                        user?.photoURL
                          ? `${user.photoURL}`
                          : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      }
                    />
                  </div>
                  <FaArrowCircleDown className="absolute text-white bg-custom_blue rounded-full overflow-hidden right-0 bottom-0"></FaArrowCircleDown>
                </div>
              </div>
            )}
            {user && (
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[10] p-2 shadow rounded-box w-52 mt-4 bg-custom_Dark"
              >
                <li className="font-bold">
                  <Link to={"/myqueries"}>My Queries</Link>
                </li>
                <li className="font-bold">
                  <p onClick={handleLogout}>Logout</p>
                </li>
              </ul>
            )}
          </div>
          {/* login btn */}
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="bg-custom_blue px-7 py-1 rounded-sm hover:bg-[#1b1d20] transition-all duration-300 transform ease-in-out hover:scale-105 hover:border hover:border-white hidden md:block"
              >
                logout
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="bg-custom_blue px-7 py-1 rounded-sm hover:bg-[#1b1d20] transition-all duration-300 transform ease-in-out hover:scale-105 hover:border hover:border-white">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
