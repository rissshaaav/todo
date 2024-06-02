const authChecker = async() => {
    try {
        // send cookie to server to check if user is authenticated
        const response = await fetch('http://localhost:3001/user/checkCookie', {
            method: 'GET',
            credentials: 'include', // send cookies
        });

        const { isAuthenticated } = await response.json();

        return isAuthenticated;
    } catch (error) {
        console.error(error);
        // Handle the error (e.g., return false)
        return false;
    }
}

export default authChecker;