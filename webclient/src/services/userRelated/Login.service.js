const loginService = async (username, password) => {
    try {
        // send login request to server
        const response = await fetch("http://localhost:3001/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", // send cookies
            body: JSON.stringify({ username, password }), // send username and password
        });

        // if response is not ok, throw error
        if (!response.ok) {
            const data = await response.json();
            throw new Error(
                JSON.stringify({ data: data, status: response.status })
            );
        }
        // if response is ok, return message and status
        const data = await response.json();
        return { status: response.status, data: data.message };
    } catch (error) {
        // if error, return error status and message
        const { data, status } = JSON.parse(error.message);
        return { status, data: data.message };
    }
};

export default loginService;
