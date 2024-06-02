import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authChecker from "./utils/authChecker.utils";

const Layout = () => {
    const navigate = useNavigate();

    // check if user is authenticated
    useEffect(() => {
        const checkAuth = async () => {
            // call authChecker function to check if user is authenticated
            const isAuthenticated = await authChecker();
            if (!isAuthenticated) {
                navigate("/login");
            }
        };
        checkAuth();
    }, [navigate]);

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Layout;
