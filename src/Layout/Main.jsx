import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  // console.log(location);
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {/* <NavBar /> */}
      {noHeaderFooter || <NavBar />}
      <Outlet></Outlet>
      {/* <Footer /> */}
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
