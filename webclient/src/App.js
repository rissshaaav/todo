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
import AllTodos from "./pages/AllTodos.page";
import Profile from "./pages/Profile.page";
import Inbox from "./pages/Inbox.page";
import Calendar from "./pages/Calendar.page";
import Trash from "./pages/Trash.page";

const App = () => {
    // create browser router
    const router = createBrowserRouter(
        // create routes from elements
        createRoutesFromElements(
            <>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<AllTodos/>} />
                    <Route path="profile" element={<Profile/>} />
                    <Route path="inbox" element={<Inbox/>} />
                    <Route path="calendar" element={<Calendar/>} />
                    <Route path="trash" element={<Trash />} />
                </Route>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
            </>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
