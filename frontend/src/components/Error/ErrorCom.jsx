import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';


const ErrorCom = ({ errorCode = 503, errorMessage = "Service Unavailable" }) => {
    return (
        <div className="h-auto flex items-center justify-center px-4">
            <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full text-center">
                <h1
                    className="text-6xl font-extrabold text-red-500 drop-shadow-sm"
                >
                    <CountUp end={errorCode}/>
                </h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-700 uppercase">
                    {errorMessage}
                </h2>
                <p className="mt-2 text-gray-500 text-sm">
                    The server is temporarily unable to handle the request.<br />
                    This page might be under development or currently unreachable.
                </p>
                <div className="mt-6">
                    <a
                        href="/"
                        className="inline-block px-6 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition"
                    >
                        Go Back Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorCom;
