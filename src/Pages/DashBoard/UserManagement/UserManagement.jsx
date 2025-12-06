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
                const res = await axiosSecure.get('/users');
                return res.data;
            } catch (error) {
                console.error(error);
            }
        },
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-2 md:mb-0">
                    User Administration Dashboard
                </h1>
                <span className="text-lg text-gray-600">
                    Total Users: {users.length}
                </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* Head */}
                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Joined At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={user.photoURL} alt={user.displayName} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.displayName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    <span
                                        className={`badge badge-ghost ${user.role === 'admin'
                                                ? 'badge-success'
                                                : user.role === 'rider'
                                                    ? 'badge-warning'
                                                    : 'badge-primary'
                                            }`}
                                    >
                                        {user.role}
                                    </span>
                                </td>
                                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Details</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
