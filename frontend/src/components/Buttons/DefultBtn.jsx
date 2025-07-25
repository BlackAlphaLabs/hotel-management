import React from 'react'

const DefaultBtn = ({ label = "Click the Button", onClick, type = "button", disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`mt-6 px-6 py-2 rounded-md transition text-white font-medium
                ${disabled
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-700 hover:bg-green-800'}
            `}
        >
            {label}
        </button>
    )
}

export default DefaultBtn
