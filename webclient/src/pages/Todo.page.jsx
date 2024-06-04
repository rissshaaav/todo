import React from "react";
import AllTodos from "../parts/AllTodos.part";
import { Outlet } from "react-router-dom";

const Todo = () => {
    return (
        <div className="flex-1 flex w-full">
            <AllTodos />
            <div className="flex flex-col gap-2.5 p-5 w-[40%]">
                <p className="text-[30px] font-bold">Todo Details</p>
                <Outlet />
            </div>
        </div>
    );
};

export default Todo;
