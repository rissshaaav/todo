const userDataService = async () => {
    try {
        // fetch user data from server
        const response = await fetch("http://localhost:3001/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", // send cookies along with request
        });
        // if response is not ok, throw error containing response status and data
        if (!response.ok) {
            const data = await response.json();
            throw new Error(
                JSON.stringify({ data: data, status: response.status })
            );
        }
        // return response data
        const data = await response.json();
        return { status: response.status, data: data };
    } catch (error) {
        const { data, status } = JSON.parse(error.message);
        return { status, data: data.message };
    }
};

export default userDataService;
// used in Menu.part.jsx
