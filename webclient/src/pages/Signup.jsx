import React, { useState } from "react";
import Input from "../components/Input";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signup = () => {
        console.log(username, password);
        setPassword("");
        setUsername("");
    };
    return (
        <div className="min-w-screen min-h-screen flex justify-center items-center">
            <div className="bg-[#f3f4f6] min-w-md max-w-xl p-10 pt-3">
                <h1 className="text-2xl font-bold text-center pb-10">
                    Welcome to DoiT
                </h1>
                <Input
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
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
                    onClick={signup}
                    className="btn btn-[#6161ff] hover:bg-[#6161ff] btn-block btn-outline"
                >
                    Signup
                </button>
            </div>
        </div>
    );
};

export default Signup;
