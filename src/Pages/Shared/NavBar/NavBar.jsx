import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const cart = useCart();
  // console.log(cart.length);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <ul className="lg:flex justify-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to="/menu">Our Menu</Link>
        </li>
        <li>
          <Link to="/order/salad">Order Food</Link>
        </li>
        <li>
          <Link to="/secret">Our Shop</Link>
        </li>
        <li>
          <Link to="/dashboard/mycart">
            <button className="gap-2">
              <div className="flex">
                <FaShoppingCart className="mt-1 mr-2" />
                <div className="badge badge-secondary">
                  +{cart?.length || 0}
                </div>
              </div>
            </button>
          </Link>
        </li>

        {/* {user ? (
          <>
            <span>{user?.displayName}</span>
            <li onClick={handleLogOut} className="px-4">
              <Link to="/logout">Log Out</Link>
            </li>
          </>
        ) : (
          <>
            <li className="px-4">
              <Link to="/login">Login</Link>
            </li>
          </>
        )} */}
      </ul>
    </>
  );
  return (
    <>
      <nav className="fixed z-10 w-[1260px] text-white bg-black bg-opacity-30 uppercase">
        <div className="navbar px-12">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <FaBars />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-full"
              >
                {navOptions}
              </ul>
            </div>
            <div className="uppercase">
              <p className="font-bold text-xl">bistro boss</p>
              <p className="tracking-[4px] text-sm font-semibold">Restourant</p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <span>{user?.displayName}</span>
                <button onClick={handleLogOut} className="px-4 uppercase">
                  <Link to="/logout">sing Out</Link>
                </button>
              </>
            ) : (
              <>
                <button className="px-4 uppercase">
                  <Link to="/login">sing in</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
