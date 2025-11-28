import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaLock, FaRegEnvelope } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login2 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [lock, setLock] = useState(false);
    const handleEye = () => {
        console.log('Button is Clicked!');
        setLock(!lock)
    }
    const handleLogin = (data) => {
        console.log('button is clicked!', data.email, data.password);
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit(handleLogin)}>
                <div className="w-full max-w-md space-y-4">

                    <h1 className="text-4xl font-bold">Welcome Back</h1>
                    <p className="text-gray-600">Login with ZapShift</p>

                    {/* Email */}
                    <label
                        htmlFor='email'
                        className="form-control w-full">
                        <span className="label-text font-medium">Email</span>
                        <div className="relative">
                            <FaRegEnvelope className="absolute left-3 top-3 text-gray-400 text-lg" />
                            <input
                                type="email"
                                name='email'
                                {
                                ...register('email', { required: true })
                                }
                                id='email'
                                placeholder="Email Address"
                                className="input input-bordered w-full p-4"
                            />
                            {
                                errors.email?.type === 'required' && <p className='text-red-500 text-sm'>Email is required!</p>
                            }
                        </div>
                    </label>
                    {/* Password */}
                    <label
                        htmlFor='password'
                        className="form-control w-full">
                        <span className="label-text font-medium">Password</span>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                            <input
                                type={lock ? 'text' : 'password'}
                                name='password'
                                id='password'
                                {
                                ...register('password', { required: true, minLength: 6, })
                                }
                                placeholder="Password"
                                className="input input-bordered w-full p-4 pr-12"
                                required
                            />
                            {
                                errors.password?.type === 'required' && <p className='text-red-500 text-sm'>PassWord is required!</p>
                            }
                            {
                                errors.password?.type == 'minLength' && <p className='text-red-500 text-sm'>PassWord Must be six Characters or Longer!</p>
                            }
                            <div
                                onClick={handleEye}
                                className="absolute z-100 right-4 top-5 -translate-y-1/2 cursor-pointer text-gray-500">
                                {lock ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>
                    </label>


                    {/* Forgot Password */}
                    <div className="text-right">
                        <Link className="text-sm text-blue-600 hover:underline">
                            Forget Password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type='submit'
                        className="btn w-full bg-lime-400 hover:bg-lime-500 text-black">
                        Login
                    </button>

                    {/* Register */}
                    <p className="text-center text-sm text-gray-600">
                        Don’t have any account?
                        <Link
                            to={'/register'}
                            className="text-green-600 font-medium ml-1">Register</Link>
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500">Or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Google Button */}
                    <button
                        className="w-full flex items-center justify-center gap-3bg-white shadow-sm border border-gray-200 rounded-lg py-3 hover:bg-gray-100 transition-all duration-200">
                        <FcGoogle className="text-2xl" />
                        <span className="font-medium text-gray-700">Register with Google</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login2;