import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { MdRateReview, MdPayments } from "react-icons/md";
import { FaCalendarAlt, FaHome, FaWallet } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BsMenuDown } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#d6904b] text-base-content text-center uppercase">
            <div className="uppercase mb-12">
              <p className="font-bold text-xl">bistro boss</p>
              <p className="tracking-[4px] text-sm font-semibold">Restourant</p>
            </div>
            {/* Sidebar content here */}
            <li>
              <NavLink>
                <IoHome /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink>
                <FaWallet />
                Payment History
              </NavLink>
            </li>
            <li>
              <NavLink>
                <FaCalendarAlt />
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink>
                <FaCartShopping /> My Cart
              </NavLink>
            </li>
            <li>
              <NavLink></NavLink>
            </li>

            <div className="divider"></div>

            <li>
              <NavLink>
                <FaHome />
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
