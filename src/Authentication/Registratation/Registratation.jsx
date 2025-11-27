import React, { use, useState } from "react";
import { FaRegEnvelope, FaLock, FaEyeSlash, FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import authImg from "../../assets/authImage.png";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { googleLogin, createUser } = use(AuthContext)
    const [showPass, setShowPass] = useState(false);

    const handleEyeToggle = () => {
        setShowPass(!showPass);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


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

        createUser(email, password)
            .then((res) => {
                updateProfile(res.user, { displayName: name })
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Welcome, ${name}!`,
                            text: "Your account has been created successfully.",
                            showConfirmButton: false,
                            timer: 2500,
                            toast: true,
                            timerProgressBar: true
                        });
                        e.target.reset();

                    })
                    .catch((error) => {
                        Swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: "Profile Update Failed!",
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
    };

    //handling the google login
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
            {/* Left Side Form */}
            <div className="h-auto flex bg-white items-center justify-center md:min-h-screen w-full md:w-1/2 p-5">
                <form onSubmit={handleRegister}>
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
                                    placeholder="Your Name"
                                    className="input input-bordered w-full p-4 pl-10"
                                    required
                                />
                            </div>
                        </label>

                        {/* Email */}
                        <label className="form-control w-full">
                            <span className="label-text font-medium">Email</span>
                            <div className="relative">
                                <FaRegEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="input input-bordered w-full p-4 pl-10"
                                    required
                                />
                            </div>
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
                                    className="input input-bordered w-full p-4 pl-10 pr-12"
                                    required
                                />
                                <div
                                    onClick={handleEyeToggle}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500">
                                    {showPass ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
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
                            <Link to="/login" className="text-green-600 ml-1 font-medium">
                                Login
                            </Link>
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

            {/* Right Side Image */}
            <div className="flex items-center justify-center bg-[#fafdf0] h-auto md:min-h-screen w-full md:w-1/2 p-5">
                <img src={authImg} alt="Register Illustration" />
            </div>
        </div>
    );
};

export default Register;
