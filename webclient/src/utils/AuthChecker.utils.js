function authChecker() {
    const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authToken="))
        ?.split("=")[1];

    // const isAuthenticated = !!authToken;
    const isAuthenticated = !!authToken;

    return isAuthenticated;
}

export default authChecker;
