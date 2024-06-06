import React from "react";
import {Link} from "react-router-dom";
import { calendarIcon } from "../assets/icons";

const TodoListItem = ({ title, dueDate, id }) => {
    return (
        <li className="list-none flex items-start gap-x-[10px] border-[2px] border-[#e5e5e5] p-2.5 rounded-[10px]">
            <input type="checkbox" className="h-[15px] w-[15px] mt-[5px]" />
            <Link to={id} className="flex flex-col">
                <div className="text-[20px]">{title}</div>
                <div className="flex items-center gap-2.5">
                    {calendarIcon("15px")}
                    <span>{dueDate}</span>
                </div>
            </Link>
        </li>
    );
};

export default TodoListItem;
// Path: webclient/src/parts/AllTodos.part.jsx
