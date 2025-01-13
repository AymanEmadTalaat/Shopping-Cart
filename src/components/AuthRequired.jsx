import { Outlet, Navigate, useLocation } from "react-router";

function AuthRequired() {
  const location = useLocation();
  const auth = localStorage.getItem("loggedin");

  if (!auth) {
    return <Navigate replace to="/signup" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default AuthRequired;
