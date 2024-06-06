import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import todoDetails from "../services/todoDetails.service";

const TodoDetails = () => {
    const [todoDetail, setTodoDetail] = useState({});
    const params = useParams();
    const todoId = params.id;
    useEffect(() => {
        const fetchTodoDetails = async () => {
            const data = await todoDetails(todoId);
            if (data) {
                setTodoDetail(data);
            }
        };
        fetchTodoDetails();
    });
    return (
        <div className="bg-white p-2.5 border-[2px] border-[#e5e5e5] rounded-[10px]">
            <p className="text-[30px] font-bold">{todoDetail.title}</p>
            <p className="text-[18px] font-semibold">
                <span className="text-[#3f3f3f]">Due Date: </span>
                <span>{todoDetail.dueDate}</span>
            </p>
            <p>{todoDetail.description}</p>
        </div>
    );
};

export default TodoDetails;
// Path: webclient/src/pages/Todo.page.jsx
