import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../../Hooks/useAxios/useAxios';

const AssignRiders = () => {
    const axiosSecure = useAxios();
    const { data: percels = [] } = useQuery({
        queryKey: ['percels', 'pending-pickup'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/myPercels?deliveryStatus=pending-pickup`);
                return res.data;
            } catch (error) {
                console.log(error);
            }
        }
    })
    return (
        <div>
            <h2 className='text-3xl'>  Assign Riders : {percels.length}</h2>
            <div>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th> SL No</th>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>PickUp District</th>
                                <th>Transaction Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                percels.map((percel, index) => {
                                    return <tr
                                        key={index}>
                                        <th>{index + 1}</th>
                                        <td>{percel.percelName}</td>
                                        <td>{percel.cost}</td>
                                        <td>
                                            {percel.senderDistrict}
                                        </td>
                                        <td>{percel.trackingId}</td>
                                        <td>
                                            <button
                                                className='btn btn-primary text-black'>Assign Rider</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AssignRiders;