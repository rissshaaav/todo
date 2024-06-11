import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import todoDetails from "../services/todoRelated/todoDetails.service";
import updateTodo from "../services/todoRelated/updateTodo.service";
import newTodo from "../services/todoRelated/newTodo.service";

const TodoDetails = () => {
    const [todoDetail, setTodoDetail] = useState({
        title: "",
        description: "",
        dueDate: "",
    });
    const params = useParams();
    const todoId = params.id;
    useEffect(() => {
        const fetchTodoDetails = async () => {
            if (todoId === "new") {
                setTodoDetail({
                    title: "",
                    description: "",
                    dueDate: "",
                });
                return;
            }
            const data = await todoDetails(todoId);
            if (data) {
                setTodoDetail(data);
            }
        };
        fetchTodoDetails();
    }, [todoId]);
    useEffect(() => {
        const updateTodoDetails = async () => {
            if (todoId === "new") {
                await newTodo(todoDetail);
            } else {
                await updateTodo(todoDetail);
            }
        };

        const timeoutId = setTimeout(updateTodoDetails, 1500);

        return () => clearTimeout(timeoutId);
    }, [todoDetail, todoId]);
    return (
        <div className="h-full p-2.5 border-[2px] border-borderColor dark:border-borderColorDark rounded-[10px] bg-background dark:bg-foregroundDark ">
            <textarea
                className="text-[30px] font-bold w-full h-min focus:outline-none dark:bg-foregroundDark"
                placeholder="Enter Todo Title"
                value={todoDetail.title}
                onChange={(e) =>
                    setTodoDetail({ ...todoDetail, title: e.target.value })
                }
            ></textarea>
            <p className="text-[18px] font-semibold">
                <span className="text-[#9ca3af]">Due Date: </span>
                <span>
                    {todoDetail.dueDate ? (
                        new Date(todoDetail.dueDate).toLocaleString()
                    ) : (
                        <input
                            className="text-[#9ca3af]"
                            type="date"
                            value={todoDetail.dueDate}
                            onChange={(e) =>
                                setTodoDetail({
                                    ...todoDetail,
                                    dueDate: e.target.value,
                                })
                            }
                        />
                    )}
                </span>
            </p>
            <textarea
                className="w-full h-max focus:outline-none text-[18px] font-normal mt-2 dark:bg-foregroundDark"
                placeholder="Enter Todo Description"
                value={todoDetail.description}
                onChange={(e) =>
                    setTodoDetail({
                        ...todoDetail,
                        description: e.target.value,
                    })
                }
            ></textarea>
        </div>
    );
};

export default TodoDetails;
// Path: webclient/src/pages/Todo.page.jsx
