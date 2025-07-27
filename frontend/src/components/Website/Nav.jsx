import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Nav = () => {
    const { auth, logout } = useAuth();
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY < 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <header
                className={`fixed w-full z-50 p-4 transition-colors duration-300 ${isTop ? 'bg-transparent text-black shadow-none' : 'bg-black text-white shadow-md'
                    } flex justify-between items-center`}
            >
                <h1 className="text-2xl font-bold">BlueOcean Hotel</h1>
                <nav className="space-x-4">
                    <Link to="/" className="hover:text-blue-400">Home</Link>
                    <Link to="/rooms" className="hover:text-blue-400">Rooms</Link>
                    <Link to="/contact" className="hover:text-blue-400">Contact</Link>
                    {auth.token === null ? (
                        <>
                            <Link to="/login" className="hover:text-blue-400">Login</Link>
                            <Link to="/register" className="hover:text-blue-400">Register</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/admin/dashboard" className="hover:text-blue-400">Dashboard</Link>
                            <button onClick={logout} className="hover:text-red-400">Logout</button>
                        </>
                    )}
                </nav>
            </header>
        </div>
    );
};

export default Nav;
