import React, { useState } from "react";
import Input from "../components/Input";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = () => {
        console.log(username, password);
        setPassword("");
        setUsername("");
    };
    return (
        <div className="min-w-screen min-h-screen flex justify-center items-center">
            <div className="bg-[#f3f4f6] min-w-md max-w-md p-10 pt-3">
                <h1 className="text-2xl font-bold text-center pb-10">
                    Welcome back to DoiT
                </h1>
                <Input
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={login}
                    className="btn btn-[#6161ff] hover:bg-[#6161ff] btn-block btn-outline"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
