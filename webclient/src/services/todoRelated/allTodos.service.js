const allTodos = async () => {
    try {
        const response = await fetch("http://localhost:3001/todo/all", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export default allTodos;
