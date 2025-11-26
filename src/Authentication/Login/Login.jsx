import React from 'react';
import authImg from '../../assets/authImage.png'
import { FaRegEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="h-auto flex bg-[#ffffff] items-center justify-center md:min-h-screen w-full md:w-1/2 p-5">
                <div className="w-full max-w-md space-y-6">

                    <h1 className="text-4xl font-bold">Welcome Back</h1>
                    <p className="text-gray-600">Login with ZapShift</p>

                    {/* Email */}
                    <label className="form-control w-full">
                        <span className="label-text font-medium">Email</span>
                        <div className="relative">
                            <FaRegEnvelope className="absolute left-3 top-3 text-gray-400 text-lg" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full pl-10"
                            />
                        </div>
                    </label>
                    {/* Password */}
                    <label className="form-control w-full">
                        <span className="label-text font-medium">Password</span>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-gray-400 text-lg" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full pl-10"
                            />
                        </div>
                    </label>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <Link className="text-sm text-blue-600 hover:underline">
                            Forget Password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button className="btn w-full bg-lime-400 hover:bg-lime-500 text-black">
                        Login
                    </button>

                    {/* Register */}
                    <p className="text-center text-sm text-gray-600">
                        Don’t have any account?
                        <Link className="text-green-600 font-medium ml-1">Register</Link>
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500">Or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Google Button */}
                    <button className="btn w-full bg-gray-100 hover:bg-gray-200 text-black flex items-center gap-3">
                        <FcGoogle className="text-2xl" />
                        Login with Google
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center bg-[#fafdf0] h-auto md:min-h-screen w-full md:w-1/2 p-5">
                <img src={authImg} alt="" />
            </div>
        </div>
    );
};

export default Login;