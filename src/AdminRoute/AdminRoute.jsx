import React from 'react';
import useAuth from '../Hooks/useAuth/useAuth';
import Loader from '../Components/Loader/Loader';
import useRole from '../Hooks/useRole/useRole';
import ForbiddenAccess from '../Components/ForbiddenAccess/ForbiddenAccess';

const AdminRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role, isLoading } = useRole();
    if (loading || isLoading) {
        return <Loader></Loader>
    }
    if (role !== 'admin') {
        return <ForbiddenAccess></ForbiddenAccess>
    }
    return children;
};

export default AdminRoute;