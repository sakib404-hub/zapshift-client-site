import React, { useContext } from 'react';

const useAuth = () => {
    const authInfo = useContext();
    return authInfo;
};

export default useAuth;