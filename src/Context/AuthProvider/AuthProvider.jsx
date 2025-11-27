import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // handling googleLogin 
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //handling the logOut
    const logOut = () => {
        return signOut(auth);
    }
    //handleCreateUser
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // setting up the observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser);
        })
        return () => {
            unsubscribe()
        }
    }, [])

    //context setting for the information
    const information = {
        user,
        setUser,
        loading,
        setLoading,
        googleLogin,
        createUser,
        logOut
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