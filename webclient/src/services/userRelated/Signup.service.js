const signupService = async (name, email, username, password) => {
    try {
        const response = await fetch("http://localhost:3001/user/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, username, password }),
        });
        if (!response.ok) {
            const data = await response.json();
            throw new Error(
                JSON.stringify({ data: data, status: response.status })
            );
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        const { data, status } = JSON.parse(error.message);
        console.error(`Error: ${status}, Details:`, data.message);
    }
};
export default signupService;
