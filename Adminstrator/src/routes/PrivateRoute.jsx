import { Navigate, Outlet } from "react-router-dom";
import { existLocalstore } from "../helper/localstore";

const PrivateRoute = () => {
    return existLocalstore("_login") ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
