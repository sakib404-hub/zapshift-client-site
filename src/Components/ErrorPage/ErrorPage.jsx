import React from "react";
import { Link } from "react-router";
import errorImg from "../../assets/error.png";
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-5">

            <img
                src={errorImg}
                alt="Error"
                className="w-full max-w-md mb-8 drop-shadow-lg animate-pulse"
            />

            <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>

            <p className="text-gray-300 mb-6 text-center max-w-md">
                The page you're looking for might be removed, unavailable, or temporarily down.
            </p>

            <Link
                to="/"
                className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
