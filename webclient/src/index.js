import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import authChecker from "./utils/AuthChecker.utils";
import Layout from "./Layout";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Navigate,
} from "react-router-dom";
import Login from "./pages/Login.page";
import Signup from "./pages/Signup.page";
import Home from "./pages/Home.page";

const isAuthenticated = authChecker();

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={isAuthenticated ? <Layout/> : <Navigate to="/login"/>}>
                <Route path="" element={<Home />} />
            </Route>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
        </>
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
