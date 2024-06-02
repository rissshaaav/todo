import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authChecker from "../utils/authChecker.utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usernameIcon, passwordIcon } from "../assets/icons";
import { colorConstants, designConstants } from "../constants";
import SubmitBtn from "../parts/SubmitBtn";
import Input from "../parts/Input";
import loginService from "../services/Login.service";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // login function
    const login = async () => {
        // calls login service which sends username and password to server
        const { status, data } = await loginService(username, password);
        // if status is 200, clear inputs and navigate to home page
        if (status === 200) {
            setPassword("");
            setUsername("");
            navigate("/");
        } else {
            // if status is not 200, show error message
            toast.error(`${status}: ${data}`);
            console.log(status, data);
        }
    };

    // check if user is authenticated
    useEffect(() => {
        const checkAuth = async () => {
            // call authChecker function to check if user is authenticated
            const isAuthenticated = await authChecker();
            if (isAuthenticated) {
                navigate("/");
            }
        };
        checkAuth();
    }, [navigate]);
    return (
        <div
            className={`min-w-screen min-h-screen flex justify-center items-center`}
            style={{ backgroundColor: colorConstants.background }}
        >
            <ToastContainer />
            {/* Login Box */}
            <div
                className="min-w-sm max-w-md pb-[25px] sm:pb-[50px] flex flex-col gap-[25px] sm:gap-[50px]"
                style={{
                    backgroundColor: colorConstants.main,
                    borderRadius: designConstants.borderRadius,
                    boxShadow: designConstants.boxShadow,
                    border: `2px solid ${designConstants.borderColor}`,
                }}
            >
                {/* Heading */}
                <div>
                    <h1 className="font-bold text-center text-[25px] sm:text-[50px] px-[25px] sm:px-[50px] mt-[10px]">
                        DoiT ToDo
                    </h1>
                    <div className="divider m-0 p-0" />
                </div>

                {/* Username and Password Inputs */}
                <div className="flex flex-col justify-center gap-[12.5px] sm:gap-[25px] px-[25px] sm:px-[50px]">
                    {/* Username Input */}
                    <Input
                        placeholder="username"
                        icon={usernameIcon}
                        value={username}
                        setValue={setUsername}
                    />

                    {/* Password Input */}
                    <Input
                        placeholder="password"
                        type="password"
                        icon={passwordIcon}
                        value={password}
                        setValue={setPassword}
                    />
                </div>

                {/* Login Button and bottom text container */}
                <div className="px-[25px] sm:px-[50px] w-full">
                    {/* Login Button */}
                    <SubmitBtn text="Login" func={login} />
                    {/* bottom text */}
                    <p className="text-center mt-2">
                        New here?{" "}
                        <Link
                            to="/signup"
                            style={{ color: `${colorConstants.active}` }}
                        >
                            Signup here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
