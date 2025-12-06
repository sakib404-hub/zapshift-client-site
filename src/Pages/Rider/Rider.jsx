import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import riderImg from '../../assets/agent-pending.png'
import useAuth from '../../Hooks/useAuth/useAuth';
import { useLoaderData } from 'react-router';
import useAxios from '../../Hooks/useAxios/useAxios';
import Swal from 'sweetalert2';

const Rider = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const { register, handleSubmit, control, reset } = useForm();
    const serviceCenter = useLoaderData();
    const senderRegion = useWatch({ control, name: 'ridersRegion' })
    const dublicateRegions = serviceCenter.map((c) => c.region)
    const regions = [...new Set(dublicateRegions)];
    const districtByRegion = (region) => {
        const regionDistricts = serviceCenter.filter((sc) => sc.region === region);
        const district = regionDistricts.map((region) => region.district);
        return district;
    }
    const handleRiderApplication = (data) => {
        axiosSecure.post('/riders', data)
            .then((res) => {
                Swal.fire({
                    title: "Success!",
                    text: "Your rider application has been submitted successfully, we will reach you within 145 days!",
                    icon: "success",
                    confirmButtonText: "Okay",
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false
                });
                console.log(res);
                reset();
            })
            .catch((error) => {
                Swal.fire({
                    title: "Oops!",
                    text: error.response?.data?.message || "Something went wrong. Please try again.",
                    icon: "error",
                    confirmButtonText: "Try Again",
                    color: "#fff",
                    background: "#d9534f",
                    confirmButtonColor: "#000",
                });
            })
    }
    return (
        <div className=' bg-white'>
            < div className='p-2 lg:p-10 max-w-2xl'>
                <h2 className='text-4xl text-secondary font-semibold'>Be a Rider</h2>
                <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div >
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='p-2 md:p-10'>
                    <h2 className='text-2xl font-semibold'>Tell Us about Yourself</h2>
                    <form
                        onSubmit={handleSubmit(handleRiderApplication)}>
                        <div className='p-2 md:p-5'>
                            {/* riders information  */}
                            <div>
                                {/* riders name  */}
                                <fieldset className="fieldset">
                                    <label
                                        htmlFor='riderName'
                                        className="label">Rider Name</label>
                                    <input
                                        type="text"
                                        {
                                        ...register('riderName')
                                        }
                                        defaultValue={user?.displayName}
                                        name='riderName'
                                        id='riderName'
                                        className="input w-full"
                                        placeholder="Riders Name"
                                        readOnly />
                                    {/* riders address  */}
                                    <label
                                        htmlFor='drivingLinscenceNumber'
                                        className="label">Riders Driving Liscence Number</label>
                                    <input
                                        type="text"
                                        {
                                        ...register('drivingLinscenceNumber')
                                        }
                                        name='drivingLinscenceNumber'
                                        id='drivingLinscenceNumber'
                                        className="input w-full"
                                        placeholder="Riders Driving Liscence Number" />
                                    {/* riders Email  */}
                                    <label
                                        htmlFor='ridersEmail'
                                        className="label">Riders Email</label>
                                    <input
                                        type="text"
                                        {
                                        ...register('ridersEmail')
                                        }
                                        name='ridersEmail'
                                        id='ridersEmail'
                                        defaultValue={user?.email}
                                        className="input w-full"
                                        placeholder="Riders Email"
                                        readOnly />
                                    {/* sender location */}
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Riders Region</legend>
                                        <select
                                            {
                                            ...register('ridersRegion')
                                            }
                                            defaultValue="Pick a browser" className="select w-full">
                                            <option >Pick a Region</option>
                                            {
                                                regions.map((region, index) => {
                                                    return <option
                                                        key={index}
                                                        value={region}>{region}
                                                    </option>
                                                })
                                            }
                                        </select>
                                    </fieldset>
                                    {/* riders districts  */}
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Riders District</legend>
                                        <select
                                            {
                                            ...register('ridersDistrict')
                                            }
                                            defaultValue="Pick a browser" className="select w-full">
                                            <option>Pick a District</option>
                                            {
                                                districtByRegion(senderRegion).map((region, index) => {
                                                    return <option
                                                        key={index}
                                                        value={region}>{region}</option>
                                                })
                                            }
                                        </select>
                                    </fieldset>
                                    {/* riders phone Number  */}
                                    <label
                                        htmlFor='nidNumber'
                                        className="label">Nid No</label>
                                    <input
                                        type="number"
                                        {
                                        ...register('nidNumber')
                                        }
                                        name='nidNumber'
                                        id='nidNumber'
                                        className="input w-full"
                                        placeholder="Riders Nid Card Number" />

                                    {/* riders phone Number  */}
                                    <label
                                        htmlFor='riderContact'
                                        className="label">Rider Contact</label>
                                    <input
                                        type="number"
                                        {
                                        ...register('riderContact')
                                        }
                                        name='riderContact'
                                        id='riderContact'
                                        className="input w-full"
                                        placeholder="Riders Phone Number" />
                                    <label
                                        htmlFor='bikesRegistratationNumber'
                                        className="label">Bikes Registratation Number</label>
                                    <input
                                        type="number"
                                        {
                                        ...register('bikesRegistratationNumber')
                                        }
                                        name='bikesRegistratationNumber'
                                        id='bikesRegistratationNumber'
                                        className="input w-full"
                                        placeholder="Bikes Registratation Number" />
                                    <label htmlFor='tellUsAboutYourSelf' className="label">
                                        <span className="label-text font-semibold">Tell Us About Yourself</span>
                                    </label>
                                    {/*riders phone Number*/}
                                    <textarea
                                        {...register('tellUsAboutYourSelf')}
                                        name="tellUsAboutYourSelf"
                                        id="tellUsAboutYourSelf"
                                        className="textarea textarea-bordered w-full h-32 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Tell us about Yourself"
                                    ></textarea>
                                </fieldset>
                            </div>
                        </div>

                        {/* submit button  */}
                        <div className='flex items-center justify-center font-bold my-5'>
                            <button type='submit' className='btn btn-primary text-black font-bold'>Apply as a Rider</button>
                        </div>
                    </form>
                </div>
                <div className=' flex items-center justify-center'>
                    <img src={riderImg} alt="" />
                </div>
            </div>
        </div >
    );
};


export default Rider;