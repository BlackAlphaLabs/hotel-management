import React from 'react';

const DashNav = () => {
    return (
        <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
            <h1 className="text-lg font-bold">Dashboard</h1>
            <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                Logout
            </button>
        </nav>
    );
};

export default DashNav;
