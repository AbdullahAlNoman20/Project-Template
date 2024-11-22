import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 ">
            <div className="col-span-2"><Sidebar></Sidebar></div>
            <div className="col-span-10 p-12"><Outlet></Outlet></div>
        </div>
    );
};

export default DashboardLayout;