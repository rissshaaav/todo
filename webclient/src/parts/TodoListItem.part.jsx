import React from "react";
import { Link } from "react-router-dom";
import { calendarIcon, trashIcon } from "../assets/icons";

const TodoListItem = ({ title, dueDate, id, status }) => {
    return (
        <li className="list-none flex items-start justify-center gap-x-[10px] border-[2px] border-[#e5e5e5] pl-2.5 rounded-[10px]">
            <input type="checkbox" className="h-[15px] w-[15px] mt-4" />
            <Link to={id} className="flex-1 flex flex-col py-2.5">
                <div className="text-[20px]">{title}</div>
                <div className="">
                    <div className="flex items-center gap-2.5">
                        {calendarIcon("15px")}
                        <span>{dueDate}</span>
                    </div>
                    <span className="block w-min text-[#f00] bg-[#e5e5e5] p-1 mt-1 rounded-lg">
                        {status}
                    </span>
                </div>
            </Link>

            <button className="align-center flex justify-center items-center p-1 w-[50px] h-full hover:bg-red-500 rounded-r-[10px]">
                {trashIcon("30px")}
            </button>
        </li>
    );
};

export default TodoListItem;
// Path: webclient/src/parts/AllTodos.part.jsx
