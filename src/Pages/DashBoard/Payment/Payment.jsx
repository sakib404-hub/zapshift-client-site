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
    console.log(parcel);
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            This is the Payment Options!
        </div>
    );
};

export default Payment;