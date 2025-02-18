import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  // state={{ from: location }} --- setting dynamically so two {} curly braces --- passing as props
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
}

export default PrivateRoute;
