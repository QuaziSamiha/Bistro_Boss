import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const cart = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <ul className="flex m-3 justify-center">
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4">
          <Link>Dashboard</Link>
        </li>
        <li className="px-4">
          <Link to="/menu">Our Menu</Link>
        </li>
        <li className="px-4">
          <Link to="/order/salad">Order Food</Link>
        </li>
        <li className="px-4">
          <Link to="/secret">Secret</Link>
        </li>
        <li className="px-4">
          <Link to="/">
            <button className="gap-2">
              <FaShoppingCart />
              <div className="">+{cart?.length} || 0</div>
            </button>
          </Link>
        </li>

        {/* <li className="px-4">
          <Link to="/login">Login</Link>
        </li> */}

        {user ? (
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
        )}
      </ul>
    </>
  );
  return (
    <>
      <nav className="fixed z-10 w-full right-9 left-9 text-white bg-black bg-opacity-30 ">
        {navOptions}
      </nav>
    </>
  );
};

export default NavBar;
