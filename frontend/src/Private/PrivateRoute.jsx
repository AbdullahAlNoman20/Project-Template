
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
// console.log(location.pathname)

  if (loading) {
    return <Loading></Loading>
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} replace={true} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;