import React from 'react';
import useAuth from '../../../Hooks/useAuth/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../Hooks/useAxios/useAxios';
import Loader from '../../../Components/Loader/Loader';

const MyPercels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();

    const { data, isLoading } = useQuery({
        queryKey: ['myPercels', user?.email],
        queryFn: async () => {
            try {
                const res = await axiosSecure(`/myPercels?email=${user?.email}`)
                return res.data;
            } catch (error) {
                console.log(error)
            }
        }
    })
    console.log(data)
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            This is My Percels : {data.length}
        </div>
    );
};

export default MyPercels;