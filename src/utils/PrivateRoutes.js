import { Outlet, Navigate } from 'react-router-dom';
const PrivateRoute = () => {
    const tokendata = window.localStorage.getItem("token");
    return (
        tokendata ? (
            <Outlet />
        ) : (
            <Navigate to="/login"/>
        )
    )
}

export default PrivateRoute;