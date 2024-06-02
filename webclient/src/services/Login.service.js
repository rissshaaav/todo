const loginService = async (username, password) => {
    try {
        const response = await fetch("http://localhost:3001/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
            const data = await response.json();
            throw new Error(
                JSON.stringify({ data: data, status: response.status })
            );
        }
        const data = await response.json();
        return data.token ? true : false;
    } catch (error) {
        const { data, status } = JSON.parse(error.message);
        console.error(`Error: ${status}, Details:`, data);
    }
};

export default loginService;

// Path: webclient/src/pages/Login.page.jsx