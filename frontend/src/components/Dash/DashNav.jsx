import React, { useState, useRef, useEffect } from "react";
import { FaUserCog, FaCog, FaPowerOff, FaUser, FaBell } from "react-icons/fa";

const DashNav = ({ username = "Jehan Kandy", role = "Admin", handleLogout }) => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [notifMenuOpen, setNotifMenuOpen] = useState(false);

    const userMenuRef = useRef();
    const notifMenuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target) &&
                notifMenuRef.current &&
                !notifMenuRef.current.contains(event.target)
            ) {
                setUserMenuOpen(false);
                setNotifMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-md">
            <h2 className="text-2xl font-extrabold text-indigo-700 tracking-tight">Dashboard</h2>

            <div className="flex items-center gap-6">
                {/* Notification bell */}
                <div className="relative" ref={notifMenuRef}>
                    <button
                        onClick={() => {
                            setNotifMenuOpen((prev) => !prev);
                            setUserMenuOpen(false);
                        }}
                        className="relative text-gray-600 hover:text-indigo-600 transition focus:outline-none"
                        aria-haspopup="true"
                        aria-expanded={notifMenuOpen}
                        aria-label="Notifications"
                    >
                        <FaBell size={22} />
                        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
                    </button>

                    {/* Notification dropdown */}
                    <div
                        className={`fixed top-16 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm sm:absolute sm:w-80 origin-top-right bg-white border border-indigo-200 shadow-lg rounded-xl overflow-hidden transition-all duration-200
                            ${notifMenuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
                    >
                        <div className="p-4 text-indigo-800 font-semibold border-b bg-indigo-50 select-none">
                            Notifications
                        </div>
                        <ul className="max-h-64 overflow-y-auto p-4 space-y-3">
                            <li className="bg-indigo-50 rounded-lg px-4 py-3 shadow-sm hover:shadow-md hover:bg-indigo-100 transition cursor-pointer">
                                You have 3 new messages
                            </li>
                            <li className="bg-indigo-50 rounded-lg px-4 py-3 shadow-sm hover:shadow-md hover:bg-indigo-100 transition cursor-pointer">
                                Your password was changed
                            </li>
                            <li className="bg-indigo-50 rounded-lg px-4 py-3 shadow-sm hover:shadow-md hover:bg-indigo-100 transition cursor-pointer">
                                New user registered
                            </li>
                        </ul>
                    </div>
                </div>

                {/* User menu unchanged */}
                <div className="relative" ref={userMenuRef}>
                    <button
                        onClick={() => {
                            setUserMenuOpen((prev) => !prev);
                            setNotifMenuOpen(false);
                        }}
                        className="flex items-center gap-2 focus:outline-none text-gray-700 hover:text-indigo-600 transition"
                    >
                        <FaUser className="h-10 w-10 rounded-full border border-gray-300 p-2 bg-gray-100 shadow" size={30} />
                        <span className="font-medium">{username}</span>
                    </button>

                    <div
                        className={`absolute right-0 mt-7 w-72 origin-top-right bg-white border border-indigo-200 shadow-lg rounded-3xl overflow-hidden transition-transform duration-200
                            ${userMenuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
                    >
                        <div className="p-5 border-b border-indigo-200 text-center bg-indigo-50">
                            <FaUser className="mx-auto mb-2 p-3 rounded-full border border-indigo-300 bg-white text-indigo-600 shadow-lg" size={60} />
                            <h2 className="pt-2 text-lg font-bold text-gray-900">{username}</h2>
                            <p className="text-xs text-indigo-600 uppercase font-semibold">{role}</p>
                        </div>
                        <div className="p-3 space-y-2">
                            <a href="/Dashboard/Profile" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-100 text-indigo-700 transition font-semibold">
                                <FaUserCog /> Profile
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-100 text-indigo-700 transition font-semibold">
                                <FaCog /> Settings
                            </a>
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 text-red-600 font-semibold transition"
                            >
                                <FaPowerOff /> Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DashNav;
