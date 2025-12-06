import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from '../useAuth/useAuth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5015'
})
const useAxios = () => {
    const { user } = useAuth();
    //intercept request
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            if (user?.accessToken) {
                config.headers.authorization = `Bearer ${user.accessToken}`
                return config;
            }
        })
    }, [user])

    return axiosSecure;
};

export default useAxios;