import { Navigate, Outlet } from "react-router-dom";
import { existLocalstore } from "../helper/localstore";

const PublicRoute = () => {
    return existLocalstore("_login") ? (
        <Navigate to="/administrator" />
    ) : (
        <Outlet />
    );
};

export default PublicRoute;
