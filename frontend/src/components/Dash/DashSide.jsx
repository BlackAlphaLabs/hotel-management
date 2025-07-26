import React from 'react';

const DashSide = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Dashboard Menu</h2>
            <ul className="space-y-2">
                {Array.from({ length: 50 }).map((_, i) => (
                    <li
                        key={i}
                        className="p-2 hover:bg-gray-200 rounded cursor-pointer"
                    >
                        Menu Item {i + 1}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DashSide;
