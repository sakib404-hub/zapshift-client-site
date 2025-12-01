import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import Loader from '../../../Components/Loader/Loader';
import useAxios from '../../../Hooks/useAxios/useAxios';

const Payment = () => {
    const axiosSecure = useAxios();
    // getting that particular unique id 
    const { parcelId } = useParams();

    //getting the information using tanStackQuery
    const { data: parcel, isLoading } = useQuery({
        queryKey: ['parcel', parcelId],
        queryFn: async () => {
            try {
                const res = await axiosSecure(`/percels/${parcelId}`)
                return res.data;
            }
            catch (error) {
                console.log(error.message)
            };
        }
    })

    const handlePayment = async () => {
        const paymentInfo = {
            cost: parcel.cost,
            percelId: parcel._id,
            senderEmail: parcel.senderEmail,
            percelName: parcel.percelName
        }

        try {
            const res = await axiosSecure.post('/create-checkout-session', paymentInfo)
            window.location.href = res.data.url;
        } catch (error) {
            console.log(error.message)
        }
    }

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <p>
                Please Pay <span> ${parcel.cost}</span> for  : <strong>{parcel.percelName}</strong>
            </p>
            <button
                onClick={handlePayment}
                className="px-4 bg-primary py-2 rounded-xl font-semibold hover:scale-110 transition transform duration-200 inline-block">
                Proceed to Pay
            </button>
        </div>
    );
};

export default Payment;