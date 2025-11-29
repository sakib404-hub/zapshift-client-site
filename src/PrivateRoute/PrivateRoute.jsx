import React from 'react';
import useAuth from '../Hooks/useAuth/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Components/Loader/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log(location);

    //checking if the loading is true
    if (loading) {
        return <Loader></Loader>
    }
    //checking if the user does not exist
    if (!user) {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    //returning the path you wanted to go
    return children;

};

export default PrivateRoute;