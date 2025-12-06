import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../../Hooks/useAxios/useAxios';
import Loader from '../../../Components/Loader/Loader';

const UserManagement = () => {
    const axiosSecure = useAxios();
    const { isLoading, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users`)
                return res.data;
            } catch (error) {
                console.log(error)
            }
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold text-gray-800">
                    User Administration Dashboard
                </h1>
                <span className="text-lg text-gray-600">
                    Total Users: {users.length}
                </span>
            </div>
        </div>
    );
};

export default UserManagement;