import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth/useAuth';
import useAxios from '../../../Hooks/useAxios/useAxios';
import Loader from '../../../Components/Loader/Loader';

const DeliveryAssigned = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const { data: percels = [], isLoading } = useQuery({
        queryKey: ['percels', user?.email, 'driver-assigned'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/percels/riders?email=${user?.email}&deliveryStatus=driver-assigned`)
                return res.data
            } catch (error) {
                console.log(error);
            }
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h2 className="text-4xl text-center">Percels Pending PickUp</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>Name</th>
                            <th>PickUp Location</th>
                            <th>Delivery Instruction</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            percels.map((percel, index) => {
                                return <tr
                                    key={percel._id}>
                                    <th>{index + 1}</th>
                                    <td>{percel.percelName}</td>
                                    <td>{percel.senderDistrict}</td>
                                    <td>{percel.deliveryInstruction}</td>
                                    <td className='space-x-4'>
                                        <button className='btn btn-primary text-black'>
                                            Accept
                                        </button>
                                        <button className='btn btn-warning text-black'>
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default DeliveryAssigned;