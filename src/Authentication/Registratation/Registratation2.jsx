import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaLock, FaRegEnvelope, FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Registratation2 = () => {
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, updateInformation, setUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    //Handling the eye toogle
    const handleEyeToggle = () => {
        setShowPass(!showPass);
    };
    const handleRegister = async (data) => {
        const profile = {};
        try {
            //? 1. Getting the image from the Form
            const profileImage = data.photo[0];
            //? 2. Preaparing the image for upload
            const formData = new FormData();
            formData.append('image', profileImage)
            //? 3. posting the image to imageBB
            const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

            const res = await axios.post(url, formData)
            profile.photoURL = res.data.data.url;
        } catch (error) {
            console.log(error.message)
        }
        profile.displayName = data.name;

        //creating the User
        createUser(data.email, data.password)
            .then((result) => {
                updateInformation(profile)
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Welcome, ${data.name}!`,
                            text: "Your account has been created successfully.",
                            showConfirmButton: false,
                            timer: 2500,
                            toast: true,
                            timerProgressBar: true
                        });
                        setUser(result.user)
                        reset();
                        navigate(location.state || '/');
                    })
                    .catch((error) => {
                        Swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: "profile Updation Failed!!",
                            text: error.message,
                            showConfirmButton: false,
                            timer: 2500,
                            toast: true,
                            timerProgressBar: true
                        });
                    })
            })
            .catch((error) => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Signup Failed!",
                    text: error.message,
                    showConfirmButton: false,
                    timer: 2500,
                    toast: true,
                    timerProgressBar: true
                });
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="w-full max-w-md space-y-4">

                    <h1 className="text-4xl font-bold">Create an Account</h1>
                    <p className="text-gray-600">Register with ZapShift</p>

                    {/* User Icon */}
                    <div className="flex justify-start">
                        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shadow">
                            <FaUser className="text-gray-500 text-2xl" />
                        </div>
                    </div>

                    {/* Name */}
                    <label className="form-control w-full">
                        <span className="label-text font-medium">Name</span>
                        <div className="relative">
                            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                                type="text"
                                name="name"
                                {
                                ...register('name', { required: true })
                                }
                                placeholder="Your Name"
                                className="input input-bordered w-full p-4"
                            />
                        </div>
                        {
                            errors.name?.type === 'required' && <p className='text-sm text-red-500'>Name is required!</p>
                        }
                    </label>

                    {/* imagField */}
                    <label
                        htmlFor='photo'
                        className="form-control w-full">
                        <span className="label-text font-medium">Profile Picture</span>
                        <div className="relative">
                            <input
                                name='photo'
                                id='photo'
                                type="file"
                                className="file-input file-input-md"
                                {
                                ...register('photo', { required: true })
                                } />
                        </div>
                        {
                            errors.photo?.type === 'required' && <p className='text-sm text-red-500'>Name is required!</p>
                        }
                    </label>

                    {/* Email */}
                    <label className="form-control w-full">
                        <span className="label-text font-medium">Email</span>
                        <div className="relative">
                            <FaRegEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                                type="email"
                                name="email"
                                {
                                ...register('email', { required: true })
                                }
                                placeholder="Email Address"
                                className="input input-bordered w-full p-4"
                            />

                        </div>
                        {
                            errors.email?.type === 'required' && <p className='text-sm text-red-500'>Email is required!</p>
                        }
                    </label>

                    {/* Password */}
                    <label className="form-control w-full">
                        <span className="label-text font-medium">Password</span>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                                type={showPass ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                {
                                ...register('password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                                })
                                }
                                className="input input-bordered w-full p-4"
                            />
                            <div
                                onClick={handleEyeToggle}
                                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 z-100">
                                {showPass ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>
                        {
                            errors.password?.type === 'required' && <p className='text-sm text-red-500'>Password is Required!</p>
                        }
                        {
                            errors.password?.type === 'minLength' && <p className='text-sm text-red-500'>Password Must be Six Characters or Longer!</p>
                        }
                        {
                            errors.password?.type === 'pattern' && <p className='text-sm text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
                        }
                    </label>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="btn mt-6 w-full bg-lime-400 hover:bg-lime-500 text-black">
                        Register
                    </button>

                    {/* Already have account */}
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?
                        <Link
                            state={location.state}
                            to="/login" className="text-green-600 ml-1 font-medium">
                            Login
                        </Link>
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500">Or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                </div>
            </form>
            {/* Google Button */}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registratation2;