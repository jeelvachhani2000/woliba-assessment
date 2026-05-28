import { selectIsAuthenticated } from "@/store/authentications/authSelectors";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const GetIndexRoute = () => {
  const isLogged = useSelector(selectIsAuthenticated);
  return isLogged ? <Navigate to="/dashboard" replace /> : <Navigate to="/" replace />;
};

export const PrivateRoute = () => {
  const isLogged = useSelector(selectIsAuthenticated);
  return isLogged ? <Outlet /> : <Navigate to="/" replace />;
};

export const PublicRoute = () => {
  const isLogged = useSelector(selectIsAuthenticated);
  return isLogged ? <Navigate to="/dashboard" replace /> : <Outlet />;
};
