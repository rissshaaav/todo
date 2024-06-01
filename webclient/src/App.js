import React, { useState, useEffect } from 'react';
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

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const auth = await authChecker();
            setIsAuthenticated(auth);
        };
        checkAuth();
    }, []);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path="/"
                    element={
                        isAuthenticated ? <Layout /> : <Navigate to="/login" />
                    }
                >
                    <Route path="" element={<Home />} />
                </Route>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
            </>
        )
    );

    return (
        <RouterProvider router={router} />
    );
};

export default App;