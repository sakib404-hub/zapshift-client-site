import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../Hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLoginButtonClick = () => {
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
                navigate('/');
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
        <div>
            <button
                onClick={handleGoogleLoginButtonClick}
                className="w-full mt-5 flex items-center justify-center gap-3bg-white shadow-sm border border-gray-200 rounded-lg py-3 hover:bg-gray-100 transition-all duration-200">
                <FcGoogle className="text-2xl" />
                <span className="font-medium text-gray-700">Register with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;