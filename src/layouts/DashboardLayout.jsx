import {Outlet} from "react-router-dom";
import Sidebar from "../Components/dashboard/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="grid lg:grid-cols-12">
            <div className="col-span-2">
            <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-slate-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
         <Sidebar></Sidebar>
        }
      </ul>
    </div>
              <div className="hidden lg:flex">
              <Sidebar className=""></Sidebar>
              </div>
            </div>



            <div className="col-span-10 pl-7 lg:p-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;