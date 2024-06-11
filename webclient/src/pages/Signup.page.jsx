import React, { useState, useEffect } from "react";
import signupService from "../services/userRelated/Signup.service";
import {
    nameIcon,
    emailIcon,
    usernameIcon,
    passwordIcon,
} from "../assets/icons";
import authChecker from "../utils/authChecker.utils";
import { Link, useNavigate } from "react-router-dom";
import { designConstants } from "../constants";
import Input from "../parts/Input";
import SubmitBtn from "../parts/SubmitBtn";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // signup function
    // ?FIXME: Handle response from signup service properly
    const signup = async () => {
        // call signup service with name, email, username, password
        await signupService(name, email, username, password);
        // clear all inputs
        setName("");
        setEmail("");
        setPassword("");
        setUsername("");
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
            className="min-w-screen min-h-screen flex justify-center items-center bg-background dark:bg-backgroundDark"
        >
            {/* Signup Box */}
            <div
                className="min-w-sm max-w-lg pb-[25px] sm:pb-[50px] flex flex-col gap-[25px] sm:gap-[50px] bg-foreground dark:bg-foregroundDark border-[2px] border-borderColor dark:border-borderColorDark shadow-custom"
                style={{
                    borderRadius: designConstants.borderRadius,
                }}
            >
                {/* Heading */}
                <div>
                    <h1 className="font-bold text-center text-[25px] sm:text-[50px] px-[25px] sm:px-[50px] mt-[10px] text-textMain dark:text-textMainDark">
                        DoiT ToDo
                    </h1>
                    <div className="w-full border-[1px] border-borderColor dark:border-borderColorDark" />
                </div>

                {/* Username and Password Inputs Container */}
                <div className="flex flex-col justify-center gap-[12.5px] sm:gap-[25px] px-[25px] sm:px-[50px]  w-full">
                    {/* Name Input */}
                    <Input
                        placeholder="name"
                        icon={nameIcon}
                        iconColor={window.matchMedia('(prefers-color-scheme: dark)').matches ? "#fff" : ""}
                        value={name}
                        setValue={setName}
                    />

                    {/* Email Input */}
                    <Input
                        placeholder="email"
                        icon={emailIcon}
                        iconColor={window.matchMedia('(prefers-color-scheme: dark)').matches ? "#fff" : ""}
                        value={email}
                        setValue={setEmail}
                    />

                    {/* Username Input */}
                    <Input
                        placeholder="username"
                        icon={usernameIcon}
                        iconColor={window.matchMedia('(prefers-color-scheme: dark)').matches ? "#fff" : ""}
                        value={username}
                        setValue={setUsername}
                    />

                    {/* Password Input */}
                    <Input
                        placeholder="password"
                        type="password"
                        icon={passwordIcon}
                        iconColor={window.matchMedia('(prefers-color-scheme: dark)').matches ? "#fff" : ""}
                        value={password}
                        setValue={setPassword}
                    />
                </div>

                {/* Login Button and Bottom Text Container*/}
                <div className="px-[25px] sm:px-[50px] w-full">
                    {/* Login Button */}
                    <SubmitBtn text="Signup" func={signup} />
                    {/* Bottom text */}
                    <p className="text-center mt-2 text-textMain dark:text-textMainDark">
                        Not new?{" "}
                        <Link
                            className="text-active"
                            to="/login"
                        >
                            Login Here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
