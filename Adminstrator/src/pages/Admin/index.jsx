import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
    existLocalstore,
    removeLocalstore,
    setLocalstore,
} from "../../helper/localstore";

const Admin = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // checking is the url ok
    useEffect(() => {
        if (searchParams.get("login") && searchParams.get("data")) {
            // store data to localstore
            setLocalstore("_login", {
                isLogged: true,
                toke: searchParams.get("data"),
            });

            if (existLocalstore("_login")) {
                navigate("/administrator", { replace: true });
            } else {
                navigate("/", { replace: true });
            }
        } else {
            if (existLocalstore("_login")) {
                removeLocalstore("_login");
            }
            // is the url not ok then redireact to login page
            navigate("/", { replace: true });
        }
    }, []);
};

export default Admin;
