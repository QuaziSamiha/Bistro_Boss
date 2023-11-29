import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
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
        {/* <li className="px-4">
          <Link to="/login">Login</Link>
        </li> */}
      </ul>

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
    </>
  );
  return (
    <>
      <nav className="fixed z-10 max-w-screen-xl mx-auto text-white bg-black bg-opacity-30 ">
        {navOptions}
      </nav>
    </>
  );
};

export default NavBar;
