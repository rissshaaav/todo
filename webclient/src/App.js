import React from "react";
import Layout from "./Layout";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import Login from "./pages/Login.page";
import Signup from "./pages/Signup.page";
import Home from "./pages/Home.page";

const App = () => {
    // create browser router
    const router = createBrowserRouter(
        // create routes from elements
        createRoutesFromElements(
            <>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                </Route>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
            </>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
