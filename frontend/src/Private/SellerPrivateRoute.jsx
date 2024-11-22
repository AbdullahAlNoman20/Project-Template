import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Pages/Loading";
import UseUserData from "../Hooks/UseUserData";

const SellerPrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const userData = UseUserData()
    const location = useLocation();
  // console.log(location.pathname)
  
    if (loading || !userData.role) {
      return <Loading></Loading>
    }
    if (user && userData.role === "seller") {
      return children;
    }
    return <Navigate to="/" state={{from:location}} replace={true} ></Navigate>;
  };

export default SellerPrivateRoute;