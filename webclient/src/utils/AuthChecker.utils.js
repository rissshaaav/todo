async function authChecker() {
    try {
        const response = await fetch('http://localhost:3001/user/authenticator', {
            method: 'GET',
            credentials: 'include',
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