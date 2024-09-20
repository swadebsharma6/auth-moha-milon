import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error.message)
    })
  }


  const menus = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive}) => isActive ? "active" : ""
          }
        >
         Home
        </NavLink>
      </li>
     {user && <li>
        <NavLink
          to="/order"
          className={({ isActive}) => isActive ? "active" : ""
          }
        >
       Orders
        </NavLink>
      </li>}
      <li>
        <NavLink
          to="/register"
          className={({ isActive}) => isActive ? "active" : ""
          }
        >
         Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menus}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Auth-Moha</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menus}</ul>
      </div>
      <div className="navbar-end">
       {
       user ? <>  <span>{user?.email}</span>
        <a onClick={handleLogOut} className="btn btn-secondary">Sign Out</a> </> 
        :
        <Link to='/login'><button className="btn btn-primary">Login</button></Link>
       }
       
      </div>
    </div>
  );
};

export default Navbar;
