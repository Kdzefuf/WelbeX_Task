import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
    const isAuthenticated = !!localStorage.getItem('userData');
    return isAuthenticated ? <Component /> : <Navigate to="/register" />;
};

export default ProtectedRoute;