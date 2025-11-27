import React, { use, useState } from 'react';
import authImg from '../../assets/authImage.png'
import { FaRegEnvelope, FaLock, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Login = () => {
    const { googleLogin } = use(AuthContext)
    const [lock, setLock] = useState(false);
    // console.log(googleLogin, loading);

    const handleFormSubmission = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log('Button Clicked!', email, password)

        // password validation 
        const lowerCase = /[a-z]/;
        const uppercase = /[A-Z]/;
        if (password < 8) {
            Swal.fire({
                icon: "error",
                title: "Invalid Password",
                text: "Password must be at least 8 characters long.",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
                position: "top-end",
                toast: true
            });
            return;
        }
        if (!lowerCase.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Password",
                text: "Password must include at least one lowercase letter.",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
                position: "top-end",
                toast: true
            });
            return;
        }
        if (!uppercase.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Password",
                text: "Password must include at least one uppercase letter.",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
                position: "top-end",
                toast: true
            });
            return;
        }


    }
    const handleEye = () => {
        console.log('Button is Clicked!');
        setLock(!lock)
    }

    // handling google login 
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Welcome, ${result.user.displayName}!`,
                    text: "You have logged in with Google.",
                    showConfirmButton: false,
                    timer: 2000,
                    toast: true,
                    timerProgressBar: true
                });
            })
            .then((error) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Login Failed!",
                    text: error.message,
                    showConfirmButton: false,
                    timer: 2000,
                    toast: true,
                    timerProgressBar: true
                });
            })
    }
    return (
        <div className="my-10 md:my-0 flex flex-col-reverse md:flex-row">
            <div className="h-auto flex bg-[#ffffff] items-center justify-center md:min-h-screen w-full md:w-1/2 p-5">
                <form
                    onSubmit={handleFormSubmission}>
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
                                    id='email'
                                    placeholder="Email Address"
                                    className="input input-bordered w-full p-4"
                                    required
                                />
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
                                    placeholder="Password"
                                    className="input input-bordered w-full p-4 pr-12"
                                    required
                                />

                                <div
                                    onClick={handleEye}
                                    className="absolute z-100 right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500">
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
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-3bg-white shadow-sm border border-gray-200 rounded-lg py-3 hover:bg-gray-100 transition-all duration-200">
                            <FcGoogle className="text-2xl" />
                            <span className="font-medium text-gray-700">Register with Google</span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center bg-[#fafdf0] h-auto md:min-h-screen w-full md:w-1/2 p-5">
                <img src={authImg} alt="" />
            </div>
        </div>
    );
};

export default Login;