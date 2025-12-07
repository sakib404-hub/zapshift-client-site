import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../useAuth/useAuth';
import useAxios from '../useAxios/useAxios';

const useRole = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const { data: role = 'user', isLoading } = useQuery({
        queryKey: ['user-role', user?.email],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users/${user.email}/role`)
                return res.data.role
            } catch (error) {
                console.log(error);
            }
        }
    })
    // console.log(role);
    // console.log(role);
    return { role, isLoading };
};

export default useRole;