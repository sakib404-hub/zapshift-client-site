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
        <div>
            This is the Payment History!
            <h2 className='text-2xl'>Payment History :  {payments.length}</h2>
        </div>
    );
};

export default PaymentHistory;