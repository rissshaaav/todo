import React, { useState } from "react";
import { Link } from "react-router-dom";
import signupService from "../services/Signup.service";
import {
    nameIcon,
    emailIcon,
    usernameIcon,
    passwordIcon,
} from "../assets/icons";
import { colorConstants, designConstants } from "../constants";
import Input from "../parts/Input";
import SubmitBtn from "../parts/SubmitBtn";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signup = async () => {
        await signupService(name, email, username, password);
        setName("");
        setEmail("");
        setPassword("");
        setUsername("");
    };
    return (
        <div
            className={`min-w-screen min-h-screen flex justify-center items-center`}
            style={{ backgroundColor: colorConstants.background }}
        >
            {/* Signup Box */}
            <div
                className="min-w-sm max-w-lg pb-[25px] sm:pb-[50px] flex flex-col gap-[25px] sm:gap-[50px]"
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

                {/* Username and Password Inputs Container */}
                <div className="flex flex-col justify-center gap-[12.5px] sm:gap-[25px] px-[25px] sm:px-[50px]  w-full">
                    {/* Name Input */}
                    <Input
                        placeholder="name"
                        icon={nameIcon}
                        value={name}
                        setValue={setName}
                    />

                    {/* Email Input */}
                    <Input
                        placeholder="email"
                        icon={emailIcon}
                        value={email}
                        setValue={setEmail}
                    />

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

                {/* Login Button and Bottom Text Container*/}
                <div className="px-[25px] sm:px-[50px]">
                    {/* Login Button */}
                    <SubmitBtn text="Signup" func={signup} />
                    {/* Bottom text */}
                    <p className="text-center mt-2">
                        Not new?{" "}
                        <Link to="/login" style={{ color: `${colorConstants.active}` }}>
                            Login Here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
