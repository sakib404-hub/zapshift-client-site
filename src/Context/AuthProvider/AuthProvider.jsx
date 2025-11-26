import React, { useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    //context setting for the information
    const information = {
        user,
        setUser,
        loading,
        setLoading
    }
    return (
        <AuthContext value={information}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;