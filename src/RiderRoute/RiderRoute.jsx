import React from 'react';
import useAuth from '../Hooks/useAuth/useAuth';
import useRole from '../Hooks/useRole/useRole';
import Loader from '../Components/Loader/Loader';
import ForbiddenAccess from '../Components/ForbiddenAccess/ForbiddenAccess';

const RiderRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role, isLoading } = useRole();
    if (loading || isLoading) {
        return <Loader></Loader>
    }
    if (role !== 'rider') {
        return <ForbiddenAccess></ForbiddenAccess>
    }
    return children;
};

export default RiderRoute;