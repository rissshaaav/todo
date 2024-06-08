import React, { useEffect, useState } from "react";
import { addIcon } from "../assets/icons";
import TodoListItem from "./TodoListItem.part";
import allTodos from "../services/todoRelated/allTodos.service";
import { Link } from "react-router-dom";

const AllTodos = () => {
    // State to store all todos in array of objects
    const [receivedTodos, setReceivedTodos] = useState([]);
    const [filterByStatus, setFilterByStatus] = useState("all");
    const [filterByTitle, setFilterByTitle] = useState("");
    const [filteredTodos, setFilteredTodos] = useState([]);

    // Fetch all todos by calling allTodos service
    useEffect(() => {
        const fetchAllTodos = async () => {
            const data = await allTodos();
            if (data) {
                setReceivedTodos(data); // Set received todos to the state
            }
        };
        fetchAllTodos();
    }, []); // Empty dependency array to run only once

    useEffect(() => {
        let filtered = receivedTodos;
        if (filterByStatus !== "all") {
            filtered = filtered.filter(
                (todo) => todo.status === filterByStatus
            );
        }
        if (filterByTitle !== "") {
            filtered = filtered.filter((todo) =>
                todo.title.toLowerCase().includes(filterByTitle.toLowerCase())
            );
        }
        setFilteredTodos(filtered);
    }, [filterByStatus, filterByTitle, receivedTodos]);
    return (
        <div className="bg-white min-w-[50%] w-[60%] h-full p-5 flex flex-col gap-10">
            {/* Title -> TODO */}
            <h1 className="text-[30px] font-bold">Todo</h1>

            {/* Header -> Today's Date and New Todo Button */}
            <header className="flex justify-between items-center">
                {/* Today's Date */}
                <div className="text-[20px] font-semibold">
                    <span>Status:</span>
                    <select
                        defaultValue="all"
                        className="text-[20px] font-semibold"
                        onChange={(e) => setFilterByStatus(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search by title"
                    className="p-2 border-[1px] rounded-[10px] w-[30%] text-[20px] font-semibold"
                    onChange={(e) => setFilterByTitle(e.target.value)}
                />

                {/* New Todo Button */}
                {/* Navigates to /todo/new */}
                <Link to="new">
                    <button className="bg-[#6161ff] flex justify-between gap-2 p-2 rounded-[10px]">
                        {addIcon("25px")}
                        <span className="text-white">New Todo</span>
                    </button>
                </Link>
            </header>

            {/* List of Todos */}
            {/* Scrollable list of TodoListItem */}
            <ul
                className="flex flex-col gap-y-5 max-h-[570px] overflow-y-auto"
                style={{
                    MsOverflowStyle: "none",
                    scrollbarWidth: "none",
                }}
            >
                {/* render todos from state using map function */}
                {filteredTodos.map((todo) => {
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
