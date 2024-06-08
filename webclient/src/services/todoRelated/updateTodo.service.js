const updateTodo = async(todoDetail)=>{
    try {
        const response = await fetch(`http://localhost:3001/todo/update/${todoDetail._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todoDetail),
            credentials: 'include',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error.message);
    }
}
export default updateTodo;