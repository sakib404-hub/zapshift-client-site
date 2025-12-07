import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxios from '../../../Hooks/useAxios/useAxios';

const AssignRiders = () => {
    const axiosSecure = useAxios();
    const riderModalRef = useRef();
    const [selectedPercel, setSelectedPercel] = useState(null);


    // loading information 
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

    const openModal = (percel) => {
        riderModalRef.current.showModal();
        setSelectedPercel(percel);
    }

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
                                                onClick={() => openModal(percel)}
                                                className='btn btn-primary text-black'>Assign Rider</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AssignRiders;