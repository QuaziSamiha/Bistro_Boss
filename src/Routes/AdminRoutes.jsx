import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

// ------------============IT WILL ACT LIKE PRIVATE ROUTE===============-------------------------
// ------------IF SOMEONE IS NOT AN ADMIN, THEN IT WILL REDIRECT TO HOME PAGE INSTEAD OF ADMIN ROUTES--------------------------

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  // state={{ from: location }} --- setting dynamically so two {} curly braces --- passing as props
  return <Navigate to="/" state={{ from: location }}></Navigate>;
};

export default AdminRoutes;
