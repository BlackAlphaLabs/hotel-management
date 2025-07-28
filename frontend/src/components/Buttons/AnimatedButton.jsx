import React from 'react';

const AnimatedButton = ({ label, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`relative px-10 py-2 border border-white overflow-hidden group text-white ${className}`}
        >

            <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></span>


            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                {label}
            </span>
        </button>
    );
};

export default AnimatedButton;
