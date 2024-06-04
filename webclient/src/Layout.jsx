import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authChecker from "./utils/authChecker.utils";
import Menu from "./parts/Menu.part";

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
            if(isAuthenticated && window.location.pathname === "/"){
                navigate("/todo");
            }
        };
        checkAuth();
    }, [navigate]);

    return (
        <div className="bg-[#f3f4f6] min-w-screen min-h-screen flex">
            <Menu/>
            <Outlet />
        </div>
    );
};

export default Layout;
