// import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { ToastContainer, toast } from 'react-toastify';

const Nav = () => {
  const { user, logOut } = UseAuth();

  // Sign Out
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        // toast.warn("Logout Successfully");
        alert("LogOut Successfully");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navOption = (
    <>
      <NavLink to="/">
        <li>
          <a>
            {" "}
            <i className="fa-solid fa-house"></i> Home
          </a>
        </li>
      </NavLink>
      <NavLink to="/Products">
        <li>
          <a>
            <i className="fa fa-product-hunt" aria-hidden="true"></i> Products
          </a>
        </li>
      </NavLink>
      <NavLink to="/Contact">
        <li>
          <a>
            <i className="fa-solid fa-phone"></i> Contact Us
          </a>
        </li>
      </NavLink>
      <NavLink to="/About">
        <li>
          <a>
            <i className="fa fa-info" aria-hidden="true"></i> About
          </a>
        </li>
      </NavLink>
      <NavLink to="/dashboard/overview">
        <li>
          <a>
            <i className="fa fa-user" aria-hidden="true"></i> Dashboard
          </a>
        </li>
      </NavLink>
    </>
  );

  return (
    <div>
      <ToastContainer/>
      <section className="">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                {navOption}
              </ul>
            </div>
            <a className="text-3xl font-extrabold">Project Name</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOption}</ul>
          </div>
          <div className="p-2 navbar-end">
            {user ? (
              <div className="flex items-center">
                {/* <h1 className="mr-3">{user.email}</h1> */}
                <div className="avatar online w-12 mr-3">
                  <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <NavLink to="/Login">
                  <button
                    onClick={handleSignOut}
                    className="btn btn-outline btn-warning mr-3"
                  >
                    LogOut
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </button>
                </NavLink>
              </div>
            ) : (
              <NavLink to="/Login">
                <a className="btn btn-outline btn-warning">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i> Login
                </a>
              </NavLink>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
