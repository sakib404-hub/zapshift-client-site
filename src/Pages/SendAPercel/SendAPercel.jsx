import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth/useAuth';
import { useLoaderData } from 'react-router';

const SendAPercel = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch } = useForm();

    //loading the service center information
    const serviceCenter = useLoaderData();
    //finding the districts no problem if dublicate district occures
    const dublicateRegions = serviceCenter.map((c) => c.region)
    //finding only the unique districts through set and converting it to an array
    const regions = [...new Set(dublicateRegions)];

    //getting district by region
    const districtByRegion = (region) => {
        const regionDistricts = serviceCenter.filter((sc) => sc.region === region);
        const district = regionDistricts.map((region) => region.district);
        return district;
    }
    const senderRegion = watch('senderRegion')

    const handleFormSubmission = (data) => {
        console.log('Form is Submitting!', data);
    }
    return (
        <div className='bg-[#ddf2ff] p-4 md:p-10'>
            <div className=' py-4'>
                <h3 className='text-3xl font-bold text-center'>Send A Percel</h3>
                <h4 className='text-2xl font-semibold text-center'>Enter Your Percel Details</h4>
            </div>
            <div className=' bg-white rounded-2xl shadow-2xl p-4 md:p-8'>
                <form
                    onSubmit={handleSubmit(handleFormSubmission)}>
                    {/* percel type  */}
                    <div className='flex flex-col md:flex-row gap-2 p-2 md:gap-5 md:p-5' >
                        <label htmlFor="document"
                            className='flex items-center gap-2 cursor-pointer font-semibold'>
                            <input
                                type="radio"
                                name="document"
                                value='document'
                                id='document'
                                {
                                ...register('parcelType')
                                }
                                className="radio radio-primary"
                                defaultChecked />
                            Document
                        </label>

                        <label
                            className='flex items-center cursor-pointer font-semibold'
                            htmlFor="non-document">
                            <input
                                type="radio"
                                name="non-document"
                                value='non-document'
                                id='non-document'
                                {
                                ...register('parcelType')
                                }
                                className="radio radio-primary mr-2"
                                defaultChecked />
                            Non-Document
                        </label>
                    </div>

                    {/* percel information : Name and weight  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 md:p-5 border-b-2 border-gray-300  p-4 border-dotted'>
                        <fieldset className="fieldset">
                            <label
                                htmlFor='percelName'
                                className="label">Percel Name</label>
                            <input
                                type="text"
                                {
                                ...register('percelName')
                                }
                                className="input w-full"
                                name='percelName'
                                id='percelName'
                                placeholder="Percel Name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label
                                htmlFor='percelWeight'
                                className="label">Percel Weight</label>
                            <input
                                type="number"
                                {
                                ...register('percelWeight')
                                }
                                className="input w-full"
                                name='percelWeight'
                                id='percelWeight'
                                placeholder="Percel Name" />
                        </fieldset>
                    </div>

                    {/* two colum sender information and receiver information  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 md:p-5'>
                        {/* sender information  */}
                        <div>
                            <h4 className='text-xl font-semibold'>Sender Details</h4>
                            {/* sender name  */}
                            <fieldset className="fieldset">
                                <label
                                    htmlFor='senderName'
                                    className="label">Sender Name</label>
                                <input
                                    type="text"
                                    {
                                    ...register('senderName')
                                    }
                                    defaultValue={user?.displayName}
                                    name='senderName'
                                    id='senderName'
                                    className="input w-full"
                                    placeholder="Sender Name" />
                                {/* sender address  */}
                                <label
                                    htmlFor='senderAddress'
                                    className="label">Sender Address</label>
                                <input
                                    type="text"
                                    {
                                    ...register('senderAddress')
                                    }
                                    name='senderAddress'
                                    id='senderAddress'
                                    className="input w-full"
                                    placeholder="Sender Address" />
                                {/* sender Email  */}
                                <label
                                    htmlFor='senderEmail'
                                    className="label">Sender Email</label>
                                <input
                                    type="text"
                                    {
                                    ...register('senderEmail')
                                    }
                                    name='senderEmail'
                                    id='senderEmail'
                                    className="input w-full"
                                    placeholder="Sender Email" />
                                {/* sender phone Number  */}
                                <label
                                    htmlFor='senderContact'
                                    className="label">Sender Contact</label>
                                <input
                                    type="number"
                                    {
                                    ...register('senderContact')
                                    }
                                    name='senderContact'
                                    id='senderContact'
                                    className="input w-full"
                                    placeholder="Sender Phone Number" />
                                {/* sender location */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Sender Region</legend>
                                    <select
                                        {
                                        ...register('senderRegion')
                                        }
                                        defaultValue="Pick a browser" className="select w-full">
                                        <option disabled={true}>Pick a Region</option>
                                        {
                                            regions.map((region, index) => {
                                                return <option
                                                    key={index}
                                                    value={region}>{region}</option>
                                            })
                                        }
                                    </select>
                                </fieldset>
                                {/* sender districts  */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Sender District</legend>
                                    <select
                                        {
                                        ...register('senderDistrict')
                                        }
                                        defaultValue="Pick a browser" className="select w-full">
                                        <option disabled={true}>Pick a District</option>
                                        {
                                            districtByRegion(senderRegion).map((region, index) => {
                                                return <option
                                                    key={index}
                                                    value={region}>{region}</option>
                                            })
                                        }
                                    </select>
                                </fieldset>
                            </fieldset>
                        </div>
                        {/* receiver information  */}
                        <div>
                            <fieldset className='fieldset'>
                                <h4 className='text-xl font-semibold'>Receiver Details</h4>
                                {/* receiver information  */}
                                <label
                                    htmlFor='receiverName'
                                    className="label">Receiver Name</label>
                                <input
                                    type="text"
                                    {
                                    ...register('receiverName')
                                    }
                                    name='receiverName'
                                    id='receiverName'
                                    className="input w-full"
                                    placeholder="Receiver Name" />
                                {/* sender address  */}
                                <label
                                    htmlFor='receiverAddress'
                                    className="label">Receiver Address</label>
                                <input
                                    type="text"
                                    {
                                    ...register('receiverAddress')
                                    }
                                    name='receiverAddress'
                                    id='receiverAddress'
                                    className="input w-full"
                                    placeholder="Receiver Address" />
                                {/* sender Email  */}
                                <label
                                    htmlFor='receiverEmail'
                                    className="label">Receiver Email</label>
                                <input
                                    type="text"
                                    {
                                    ...register('receiverEmail')
                                    }
                                    name='receiverEmail'
                                    id='receiverEmail'
                                    className="input w-full"
                                    placeholder="Receiver Email" />
                                {/* receiver contact information  */}
                                <label
                                    htmlFor='receiverContact'
                                    className="label">Receiver Contact</label>
                                <input
                                    type="number"
                                    {
                                    ...register('receiverContact')
                                    }
                                    name='receiverContact'
                                    id='receiverContact'
                                    className="input w-full"
                                    placeholder="Receiver Phone Number" />
                            </fieldset>
                        </div>
                    </div>

                    {/* submit button  */}
                    <div className='flex items-center justify-center font-bold my-5'>
                        <button type='submit' className='btn btn-primary text-black font-bold'>Send Percel</button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default SendAPercel;