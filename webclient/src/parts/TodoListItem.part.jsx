import React from "react";
import { calendarIcon } from "../assets/icons";

const TodoListItem = ({title, dueDate}) => {
    return (
        <li className="list-none flex items-start gap-x-[10px] border-[2px] border-[#f3f4f6] p-2.5 rounded-[10px]">
            <input type="checkbox" className="h-[15px] w-[15px] mt-[5px]" />
            <div className="flex flex-col">
                <div className="text-[20px]">{title}</div>
                <div className="flex items-center gap-2.5">
                    {calendarIcon("15px")}
                    <span>{dueDate}</span>
                </div>
            </div>
        </li>
    );
};

export default TodoListItem;
// Path: webclient/src/parts/AllTodos.part.jsx
