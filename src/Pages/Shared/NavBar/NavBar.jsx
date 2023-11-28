import { Link } from "react-router-dom";

const NavBar = () => {
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
      </ul>
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
