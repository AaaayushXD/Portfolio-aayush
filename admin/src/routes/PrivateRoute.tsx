import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../firebase/Auth";

export const PrivateRoutes: React.FC = () => {
  const { user } = useAuth();
  if (user?.user) {
    return user?.user.length > 1 ? <Outlet /> : <Navigate to={"/login"} />;
  } else {
    return <Navigate to={"/login"} />;
  }
};
