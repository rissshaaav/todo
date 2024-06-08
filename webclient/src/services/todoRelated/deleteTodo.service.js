const deleteTodo = async(todoId) => {
    try {
        const response = await fetch(`http://localhost:3001/todo/delete/${todoId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("deleteTodoService -> ", error.message);
    }
}

export default deleteTodo;