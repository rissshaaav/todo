import React, { useEffect, useState } from "react";
import { addIcon } from "../assets/icons";
import TodoListItem from "./TodoListItem.part";
import allTodos from "../services/todoRelated/allTodos.service";
import { Link } from "react-router-dom";

const AllTodos = () => {
    const [receivedTodos, setReceivedTodos] = useState([]);
    useEffect(() => {
        const fetchAllTodos = async () => {
            const data = await allTodos();
            if (data) {
                setReceivedTodos(data);
            }
        };
        fetchAllTodos();
    }, []);
    return (
        <div className="bg-white min-w-[50%] w-[60%] h-full p-5 flex flex-col gap-10">
            <div className="text-[30px] font-bold">Todo</div>
            <div className="flex justify-between items-center">
                <div className="text-[20px] font-semibold">
                    <span>Today, </span>
                    <span>04/06/2024</span>
                </div>
                <Link to="new">
                    <button className="bg-[#6161ff] flex justify-between gap-2 p-2 rounded-[10px]">
                        {addIcon("25px")}
                        <span className="text-white">New Todo</span>
                    </button>
                </Link>
            </div>
            <ul
                className="flex flex-col gap-y-5 max-h-[570px] overflow-y-auto"
                style={{
                    MsOverflowStyle: "none",
                    scrollbarWidth: "none",
                }}
            >
                {receivedTodos.map((todo) => {
                    return (
                        <TodoListItem
                            id={todo._id}
                            title={todo.title}
                            dueDate={todo.dueDate}
                            key={todo._id}
                            status={todo.status}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default AllTodos;
// Path: webclient/src/pages/Todo.page.jsx
