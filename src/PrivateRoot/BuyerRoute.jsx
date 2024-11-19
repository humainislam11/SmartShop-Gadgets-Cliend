/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";

const BuyerRoute = ({children}) => {
    const userData = useUserData();
    const { user, loading: Loading } = useAuth();
  const location = useLocation();

  // Combined loading state
  const isLoading = Loading || !userData;

  if (isLoading) {
    return (
      <span className="loading loading-spinner loading-lg ml-[650px] mt-10">
        Loading...
      </span>
    );
  }

  if (user && userData?.role === "buyer") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default BuyerRoute;