import React from 'react';
import useAuth from '../../../Hooks/useAuth/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../Hooks/useAxios/useAxios';
import Loader from '../../../Components/Loader/Loader';
import { RiDeleteBinFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { MdViewWeek } from "react-icons/md";
import Swal from 'sweetalert2';

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
    const { data: percels = [], isLoading, refetch } = useQuery({
        queryKey: ['myPercels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/myPercels?email=${user?.email}`);
            return res.data;
        }
    })

    //handling the payment
    const handlepayment = async (parcel) => {

        const paymentInfo = {
            percelId: parcel._id,
            cost: parcel.cost,
            percelName: parcel.percelName,
            senderEmail: parcel.senderEmail
        }
        try {
            const res = await axiosSecure.post('payment-checkout-sesssion', paymentInfo)
            // console.log(res.data.url);
            // window.location.href = res.data.url;
            window.location.assign(res.data.url);
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Delete Parcel?",
            text: "This action cannot be undone. Do you really want to delete it?",
            icon: "warning",
            iconColor: "#f87171",
            showCancelButton: true,
            confirmButtonText: "Yes, Delete",
            cancelButtonText: "Cancel",
            focusCancel: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6b7280",
            buttonsStyling: true,
            customClass: {
                popup: "rounded-xl",
                confirmButton: "px-5 py-2 text-white rounded-lg",
                cancelButton: "px-5 py-2 bg-gray-200 text-gray-700 rounded-lg"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/percels/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "The parcel has been removed successfully.",
                                icon: "success",
                                iconColor: "#22c55e",
                                confirmButtonColor: "#22c55e",
                                customClass: {
                                    popup: "rounded-xl"
                                }
                            });
                        }
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: "Error!",
                            text: error.message,
                            icon: "error",
                            iconColor: "#ef4444",
                            confirmButtonText: "Okay",
                            confirmButtonColor: "#ef4444",
                            customClass: {
                                popup: "rounded-xl",
                                confirmButton: "px-5 py-2 text-white rounded-lg"
                            }
                        });
                    })
            }
        });
    }

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
                                <th>Payment Status</th>
                                <th>Weight (kg)</th>
                                <th>Sender</th>
                                <th>Receiver</th>
                                <th>Tracking Id</th>
                                <th>Delivery Status</th>
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
                                    <td className="capitalize">
                                        {
                                            item.paymentStatus === 'paid' ? <p className='text-green-500'>Paid</p> : <button
                                                onClick={() => handlepayment(item)}
                                                className="px-4 bg-primary py-2 rounded-xl font-semibold hover:scale-110 transition transform duration-200 inline-block">
                                                Proceed to Payment
                                            </button>
                                        }
                                    </td>

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
                                    <td>{item?.trackingId}</td>
                                    {/* District */}
                                    <td>{item?.deliveryStatus}</td>
                                    {/* Actions */}
                                    <td>
                                        <button className="btn btn-sm hover:bg-primary hover:text-black">
                                            <MdViewWeek className='size-4' />
                                        </button>
                                        <button className="btn btn-sm r hover:bg-primary hover:text-black mx-2">
                                            <FaEdit className='size-4' />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-sm hover:bg-primary hover:text-black">
                                            <RiDeleteBinFill className='size-4' />
                                        </button>
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