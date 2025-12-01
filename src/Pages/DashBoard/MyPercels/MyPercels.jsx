import React from 'react';
import useAuth from '../../../Hooks/useAuth/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../Hooks/useAxios/useAxios';
import Loader from '../../../Components/Loader/Loader';

const MyPercels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();

    // const { data, isLoading } = useQuery({
    //     queryKey: ['myPercels', user?.email],
    //     queryFn: async () => {
    //         try {
    //             const res = await axiosSecure(`/myPercels?email=${user?.email}`)
    //             return res.data;
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // })
    const { data: percels = [], isLoading } = useQuery({
        queryKey: ['myPercels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/myPercels?email=${user?.email}`);
            return res.data;
        }
    })

    console.log(percels)
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <div className="bg-base-200 rounded-xl p-6 mb-6 shadow-sm">
                <h1 className="text-3xl font-bold mb-2">
                    📦 My Parcels
                </h1>

                <p className="text-sm">
                    You currently have
                    <span className="font-semibold ml-1">{percels.length}</span> parcels.
                </p>
            </div>
            <div>
                <div className="overflow-x-auto rounded-xl shadow-md">
                    <table className="table table-zebra w-full">
                        <thead className="bg-base-200">
                            <tr className="text-base font-semibold">
                                <th>SL</th>
                                <th>Parcel Name</th>
                                <th>Type</th>
                                <th>Weight (kg)</th>
                                <th>Sender</th>
                                <th>Receiver</th>
                                <th>Region</th>
                                <th>District</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {percels.map((item, index) => (
                                <tr key={item._id} className="hover:bg-base-100">
                                    <td>{index + 1}</td>

                                    {/* Parcel Name */}
                                    <td className="font-semibold">{item.percelName}</td>

                                    {/* Parcel Type */}
                                    <td className="capitalize">{item.parcelType}</td>

                                    {/* Weight */}
                                    <td>{item.percelWeight} kg</td>

                                    {/* Sender Info */}
                                    <td>
                                        <div>
                                            <p className="font-medium">{item.senderName}</p>
                                            <p className="text-xs text-gray-500">{item.senderEmail}</p>
                                        </div>
                                    </td>
                                    {/* Receiver Info */}
                                    <td>
                                        <div>
                                            <p className="font-medium">{item.receiverName}</p>
                                            <p className="text-xs text-gray-500">{item.receiverEmail}</p>
                                        </div>
                                    </td>
                                    {/* Region */}
                                    <td>{item.receiverRegion}</td>
                                    {/* District */}
                                    <td>{item.receiverDistrict}</td>
                                    {/* Actions */}
                                    <td>
                                        <button className="btn btn-sm btn-primary text-black mr-2">View</button>
                                        <button className="btn btn-sm btn-error">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyPercels;