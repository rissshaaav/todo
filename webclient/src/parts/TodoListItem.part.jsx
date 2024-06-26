import React from "react";
import { Link } from "react-router-dom";
import { calendarIcon, trashIcon } from "../assets/icons";
import deleteTodo from "../services/todoRelated/deleteTodo.service";
import { toast } from "react-toastify";
import StatusBadges from "../components/StatusBadges";

const TodoListItem = ({ title, dueDate, id, status }) => {
    const deleteTodoHandler = async () => {
        try {
            const response = await deleteTodo(id);
            toast.error(`${response.message}`);
        } catch (error) {
            console.log("TodoListItem -> ", error.message);
        }
    };
    return (
        <li className="list-none flex items-start justify-center gap-x-[10px] border-[2px] border-borderColor dark:border-borderColorDark pl-2.5 rounded-[10px] bg-foreground dark:bg-foregroundDark text-textMain dark:text-textMainDark">
            <input type="checkbox" className="h-[15px] w-[15px] mt-4" />
            <Link to={id} className="flex-1 flex flex-col py-2.5">
                <div className="text-[20px]">{title}</div>
                <div className="">
                    <div className="flex items-center gap-2.5">
                        {calendarIcon("15px", "#fff")}
                        <span>
                            {new Date(dueDate).toLocaleString().split(",")[0]}
                        </span>
                    </div>
                    <StatusBadges status={status} />
                </div>
            </Link>

            <button
                onClick={deleteTodoHandler}
                className="align-center flex justify-center items-center p-1 w-[50px] h-full hover:bg-warn rounded-r-[10px]"
            >
                {trashIcon("30px", "#fff")}
            </button>
        </li>
    );
};

export default TodoListItem;
// Path: webclient/src/parts/AllTodos.part.jsx
