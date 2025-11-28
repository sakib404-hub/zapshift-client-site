import React from 'react';
import useAuth from '../Hooks/useAuth/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <p>Loading.....</p>
    }
    if (user) {
        return children;
    }

};

export default PrivateRoute;