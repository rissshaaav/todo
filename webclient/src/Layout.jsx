import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authChecker from "./utils/authChecker.utils";
import Menu from "./parts/Menu.part";
import { ToastContainer } from "react-toastify";

const Layout = () => {
    const navigate = useNavigate();

    // check if user is authenticated
    useEffect(() => {
        const checkAuth = async () => {
            // call authChecker function to check if user is authenticated
            const isAuthenticated = await authChecker();
            // if user is not authenticated, navigate to login page
            if (!isAuthenticated) {
                navigate("/login");
            }
            // if user is authenticated and on home page, navigate to todo page
            if (isAuthenticated && window.location.pathname === "/") {
                navigate("/todo");
            }
        };
        checkAuth();
    }, [navigate]);

    return (
        <div className="bg-[#f3f4f6] min-w-screen min-h-screen flex">
            <ToastContainer />
            <Menu />
            {/* Outlet is placeholder for nested routes */}
            <Outlet />
        </div>
    );
};

export default Layout;
