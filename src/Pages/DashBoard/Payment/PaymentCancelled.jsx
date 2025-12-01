import React from "react";
import { Link } from "react-router";

const PaymentCancelled = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full">

                <div className="text-red-500 text-6xl mb-4">
                    ✖
                </div>

                <h1 className="text-2xl font-bold mb-3">Payment Cancelled</h1>

                <p className="text-gray-600 mb-6">
                    Your payment was cancelled. If this was a mistake, you can try again at any time.
                </p>

                <div className="flex justify-center gap-4">
                    <Link
                        to="/dashboard"
                        className="px-5 py-2 bg-gray-300 rounded-lg font-medium hover:bg-gray-400 transition"
                    >
                        Go Back
                    </Link>
                    <Link
                        to="/dashboard/payment"
                        className="px-5 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition"
                    >
                        Try Again
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default PaymentCancelled;
