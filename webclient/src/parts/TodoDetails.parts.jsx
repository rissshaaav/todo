import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import todoDetails from "../services/todoRelated/todoDetails.service";
import updateTodo from "../services/todoRelated/updateTodo.service";
import newTodo from "../services/todoRelated/newTodo.service";

const TodoDetails = () => {
    // State to store the todo details
    const [todoDetail, setTodoDetail] = useState({
        title: "",
        description: "",
        dueDate: "",
    });

    // Get the todoId from the URL
    const params = useParams();
    const todoId = params.id;

    // Fetch the todo details
    useEffect(() => {
        const fetchTodoDetails = async () => {
            // If the todoId is "new", means user clicked on new todo button, then set the todoDetail to default
            if (todoId === "new") {
                setTodoDetail({
                    title: "",
                    description: "",
                    dueDate: "",
                });
                return;
            }
            // Fetch the todo details by calling the todoDetails service with the todoId
            const data = await todoDetails(todoId);
            if (data) {
                setTodoDetail(data);
            }
        };
        fetchTodoDetails();
    }, [todoId]);

    // Update the todo details or create a new todo
    useEffect(() => {
        // function to update a todo or create a new todo based on the todoId
        const updateTodoDetails = async () => {
            // If the todoId is "new", means user clicked on new todo button,
            // then create a new todo by calling the newTodo service
            if (todoId === "new") {
                await newTodo(todoDetail);
            }
            // Else update the todo by calling the updateTodo service
            else {
                await updateTodo(todoDetail);
            }
        };
        // Set a timeout to update the todo details after 1.5 seconds of inactivity
        const timeoutId = setTimeout(updateTodoDetails, 1500);
        // Clear the timeout if the component is unmounted
        return () => clearTimeout(timeoutId);
    }, [todoDetail, todoId]);
    return (
        // Todo Details Container
        <div className="h-full p-2.5 border-[2px] border-borderColor dark:border-borderColorDark rounded-[10px] bg-background dark:bg-foregroundDark ">
            {/* Todo Title */}
            <textarea
                className="text-[30px] font-bold w-full h-min focus:outline-none dark:bg-foregroundDark"
                placeholder="Enter Todo Title"
                value={todoDetail.title}
                onChange={(e) =>
                    setTodoDetail({ ...todoDetail, title: e.target.value })
                }
            ></textarea>
            {/* Due Date */}
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
            {/* Todo Description */}
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
