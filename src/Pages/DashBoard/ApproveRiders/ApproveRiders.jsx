import React from 'react';
import useAxios from '../../../Hooks/useAxios/useAxios';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../Components/Loader/Loader';

const ApproveRiders = () => {
    const axiosSecure = useAxios();
    const { data: riders = [], isLoading } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders')
            return res.data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-5">Pending Riders: {riders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className=" px-4 py-2">#</th>
                            <th className=" px-4 py-2">Rider Name</th>
                            <th className=" px-4 py-2">Region</th>
                            <th className=" px-4 py-2">District</th>
                            <th className=" px-4 py-2">Status</th>
                            <th className=" px-4 py-2">Created At</th>
                            <th className=" px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {riders.map((rider, index) => (
                            <tr key={rider._id || index} className="hover:bg-gray-50">
                                <td className=" px-4 py-2">{index + 1}</td>
                                <td className=" px-4 py-2">{rider.riderName}</td>
                                <td className=" px-4 py-2">{rider.ridersRegion}</td>
                                <td className=" px-4 py-2">{rider.ridersDistrict}</td>
                                <td className="flex items-center justify-center px-4 py-2">
                                    <span className={`px-2 py-1 rounded-full text-white font-semibold 
                                        ${rider.status === 'pending' ? 'bg-yellow-500' :
                                            rider.status === 'approved' ? 'bg-green-500' :
                                                'bg-red-500'}`}>
                                        {rider.status}
                                    </span>
                                </td>
                                <td className=" px-4 py-2">{new Date(rider.createdAt).toLocaleString()}</td>
                                <td className="flex items-center justify-center px-4 py-2 space-x-2">
                                    <button
                                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                    >
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRiders;