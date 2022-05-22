import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function ProtectedRoutes() {
  const token = cookies.get("token");

  return token ? <Outlet /> : <Navigate to="/login" />;
}
