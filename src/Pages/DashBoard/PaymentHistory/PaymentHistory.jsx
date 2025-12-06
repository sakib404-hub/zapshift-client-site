import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth/useAuth';
import useAxios from '../../../Hooks/useAxios/useAxios';
import Loader from '../../../Components/Loader/Loader';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/payments?email=${user.email}`)
                return res.data
            }
            catch (error) {
                console.log(error);
            }
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    console.log([payments]);
    return (
        <div className="p-4 md:p-8">
            <h2 className="text-3xl font-semibold mb-6">Payment History</h2>


            <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200">
                <table className="min-w-full text-left text-sm">
                    <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Parcel ID</th>
                            <th className="px-4 py-3">Amount</th>
                            <th className="px-4 py-3">Currency</th>
                            <th className="px-4 py-3">Paid At</th>
                            <th className="px-4 py-3">Status</th>
                        </tr>
                    </thead>


                    <tbody className="divide-y divide-gray-200">
                        {payments.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 font-medium">{item.name}</td>
                                <td className="px-4 py-3 text-blue-600">{item.parcelId}</td>
                                <td className="px-4 py-3 font-semibold">${item.amount}</td>
                                <td className="px-4 py-3">{item.currency.toUpperCase()}</td>
                                <td className="px-4 py-3">{new Date(item.paidAt).toLocaleString()}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${item.paymentStatus === "paid"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {item.paymentStatus}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;