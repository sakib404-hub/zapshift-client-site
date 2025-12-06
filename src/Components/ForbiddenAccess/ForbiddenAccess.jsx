import React from 'react';
import { FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router';

const ForbiddenAccess = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 p-6">
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-600">
                    <FiLock className="h-10 w-10" />
                </div>

                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
                    Access Forbidden
                </h1>

                <p className="text-sm sm:text-base text-gray-600 mb-6">
                    You don’t have permission to view this page. If you believe this is a mistake,
                    contact your administrator or request access.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:shadow-sm transition"
                        aria-label="Go back"
                    >
                        ← Back
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                        aria-label="Go to home"
                    >
                        Go to Home
                    </button>
                </div>

                <small className="block mt-6 text-xs text-gray-400">
                    Need help? Email <a href="mailto:support@example.com" className="text-gray-600 underline">support@example.com</a>
                </small>
            </div>
        </div>
    );
};

export default ForbiddenAccess;
