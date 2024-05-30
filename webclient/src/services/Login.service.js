const loginService = async (username, password) => {
    try {
        const response = await fetch("http://localhost:3001/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
            const data = await response.json();
            throw new Error(JSON.stringify({data: data, status: response.status}));
        }
        const data = await response.json();
        const token = data.token;
        // -TODO: Save the token in local storage or cookies
        console.log(token);
    } catch (error) {
        const { data, status } = JSON.parse(error.message);
        console.error(`Error: ${status}, Details:`, data);
    }
};

export default loginService;