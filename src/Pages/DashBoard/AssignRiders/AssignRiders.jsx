import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxios from '../../../Hooks/useAxios/useAxios';
import Swal from 'sweetalert2';

const AssignRiders = () => {
    const axiosSecure = useAxios();
    const riderModalRef = useRef();
    const [selectedPercel, setSelectedPercel] = useState(null);


    // loading information 
    const { data: percels = [], refetch } = useQuery({
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
    // console.log(!!selectedPercel);
    // console.log(selectedPercel);

    const { data: riders = [] } = useQuery({
        queryKey: ['riders', selectedPercel?.senderDistrict, 'available'],
        enabled: !!selectedPercel,
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/riders?status=approved&district=${selectedPercel?.senderDistrict}&workStatus=available`)
                return res.data
            } catch (error) {
                console.log(error);
            }
        }
    })

    const openModal = () => {
        riderModalRef.current.showModal();
    }
    const handleAssignRider = (rider) => {
        const riderAssignInfo = {
            riderId: rider._id,
            riderName: rider.riderName,
            riderEmail: rider.ridersEmail,
            percelId: selectedPercel._id
        }
        axiosSecure.patch(`/percel/${selectedPercel._id}`, riderAssignInfo)
            .then((res) => {
                if (res.data.modifiedCount) {
                    refetch();
                    riderModalRef.current.close();
                    Swal.fire({
                        title: "Rider Assigned!",
                        text: "The rider has been successfully assigned to this parcel.",
                        icon: "success",
                        confirmButtonText: "Done",
                        confirmButtonColor: "#16A34A", // Tailwind green-600
                        timer: 1800,
                        timerProgressBar: true,
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: "Assignment Failed!",
                    text: `Something went wrong while assigning the rider.${error.message}`,
                    icon: "error",
                    confirmButtonText: "Try Again",
                    confirmButtonColor: "#DC2626", // Tailwind red-600
                });
            })
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
                                                onClick={() => {
                                                    setSelectedPercel(percel)
                                                    openModal()
                                                }}
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
                    <h3 className="font-bold text-lg">Riders -- {riders.length}</h3>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    riders.map((rider, index) => {
                                        return <tr>
                                            <th>{index + 1}</th>
                                            <td>{rider.riderName}</td>
                                            <td>{rider.ridersEmail}</td>
                                            <td><button
                                                onClick={() => handleAssignRider(rider)}
                                                className='btn btn-primary text-black'>Find Riders</button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
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