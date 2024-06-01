import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
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

const isAuthenticated = true;

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={isAuthenticated ? <App/> : <Navigate to="/login"/>}>
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
