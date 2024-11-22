import { NavLink } from "react-router-dom";
import UseUserData from "../Hooks/UseUserData";
import UseAuth from "../Hooks/UseAuth";

const Sidebar = () => {
  const userData = UseUserData();
  console.log(userData);

  const { logOut } = UseAuth();
  return (
    <div className="bg-orange-300 border-r border-black min-h-full px-8 py-12 flex flex-col justify-between gap-2">
      <div className="">
        <h1 className="text-3xl font-bold mb-8">Project Name</h1>
        <ul className="flex flex-col gap-4">
          <li className="btn ">
            <NavLink to="/dashboard/overview">
              <i className="fas fa-chart-area    "></i> Overview
            </NavLink>
          </li>

          {/* {userData.role === "seller" && (
            <>
              <li className="btn">
                <NavLink to="/dashboard/myProducts">
                  <i className="fa fa-list" aria-hidden="true"></i> My Products
                </NavLink>
              </li>
            </>
          )} */}
          <li className="btn">
                <NavLink to="/dashboard/myProducts">
                  <i className="fa fa-list" aria-hidden="true"></i> My Products
                </NavLink>
              </li>

          <li className="btn">
            <NavLink to="/dashboard/addProducts">
              <i className="fa fa-plus" aria-hidden="true"></i> Add Products
            </NavLink>
          </li>
          <li className="btn">
            <NavLink to="/">
              <i className="fa fa-home" aria-hidden="true"></i> Home
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="">
        <button onClick={() => logOut()} className="btn btn-outline">
          <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
