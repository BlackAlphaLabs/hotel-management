import React from 'react';

const DashFooter = () => {
    return (
        <footer className="bg-white shadow px-4 py-3 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </footer>
    );
};

export default DashFooter;
