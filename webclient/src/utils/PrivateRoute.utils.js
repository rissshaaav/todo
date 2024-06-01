import { Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PrivateRoute({ path, element }) {
    const isAuthenticated = false; // Add your authentication logic here
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    return <Route path={path} element={isAuthenticated ? element : null} />;
}

export default PrivateRoute;
