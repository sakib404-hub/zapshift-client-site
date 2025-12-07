import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxios from '../../../Hooks/useAxios/useAxios';
import Loader from '../../../Components/Loader/Loader';
import { FaUserShield, FaUserSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { IoSearch } from 'react-icons/io5';

const UserManagement = () => {
    const axiosSecure = useAxios();
    const [searchText, setSearchText] = useState('');

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users?searchText=${searchText}`);
                return res.data;
            } catch (error) {
                console.error(error);
            }
        },
    });

    // if (isLoading) {
    //     return <Loader />;
    // }

    const handleToogleUser = (user) => {
        Swal.fire({
            title: `Promote ${user.displayName} to Admin?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Promote!',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                const roleInfo = { role: 'admin' };
                axiosSecure
                    .patch(`/users/${user._id}`, roleInfo)
                    .then((res) => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                icon: 'success',
                                title: 'User Promoted!',
                                text: `${user.displayName} is now an Admin.`,
                                confirmButtonColor: '#3085d6',
                            });
                        }
                    })
                    .catch((error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!',
                            text: `Something went wrong. Please try again. ${error.message}`,
                            confirmButtonColor: '#d33',
                        });
                    });
            }
        });
    };

    const removeFromAdmin = (user) => {
        Swal.fire({
            title: `Remove Admin Access from ${user.displayName}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Remove!',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                const updateInfo = { role: 'user' };
                axiosSecure
                    .patch(`/users/${user._id}`, updateInfo)
                    .then((res) => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                icon: 'success',
                                title: 'Admin Removed!',
                                text: `${user.displayName} is no longer an Admin.`,
                                confirmButtonColor: '#3085d6',
                            });
                        }
                    })
                    .catch((error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!',
                            text: `Something went wrong. Please try again. ${error.message}`,
                            confirmButtonColor: '#d33',
                        });
                    });
            }
        });
    };

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
            <div className='flex items-center justify-center my-5'>
                <div className="join">
                    <div>
                        <label
                            htmlFor='name'
                            className="input validator join-item">
                            <IoSearch />
                            <input
                                type="text"
                                name='name'
                                placeholder="Search User"
                                onChange={(event) => setSearchText(event.target.value)}
                            />
                        </label>
                    </div>
                    <button
                        type='button'
                        className="btn btn-primary join-item text-black font-semibold">Search</button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* Head */}
                    <thead>
                        <tr>
                            <th className='text-center'>Sl No.</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Role</th>
                            <th className='text-center'>Joined At</th>
                            <th className='text-center'>Admin Action</th>
                            <th className='text-center'>Others Action</th>
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
                                <td className='text-3xl text-center space-x-2'>
                                    {
                                        user.role === 'admin' ? <button
                                            className='btn bg-red-300'
                                            onClick={() => removeFromAdmin(user)}>
                                            <FaUserSlash></FaUserSlash>
                                        </button> : <button
                                            className='btn bg-green-300'
                                            onClick={() => handleToogleUser(user)}>
                                            <FaUserShield></FaUserShield>
                                        </button>
                                    }
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
