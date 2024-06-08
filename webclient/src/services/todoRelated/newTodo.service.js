const newTodo = async (todoDetail) => {
    try {
        const reponse = await fetch("http://localhost:3001/todo/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todoDetail),
            credentials: "include",
        });
        const data = await reponse.json();
        return data;
    } catch (error) {
        console.log("Error:", error.message);
    }
};

export default newTodo;
