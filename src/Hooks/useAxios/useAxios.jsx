import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from '../useAuth/useAuth';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5015'
})
const useAxios = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    //intercept request
    useEffect(() => {
        const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
            if (user?.accessToken) {
                config.headers.authorization = `Bearer ${user.accessToken}`
                return config;
            }
        })
        //interceptor response
        const responseInterceptors = axiosSecure.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            const statuseCode = error.status;
            if (statuseCode === 401 || statuseCode === 403) {
                logOut()
                    .then(() => {
                        navigate('/login');
                    })
            }
            return Promise.reject(error)
        })
        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptors)
        }
    }, [user, logOut, navigate])

    return axiosSecure;
};

export default useAxios;