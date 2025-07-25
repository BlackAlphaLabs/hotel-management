import { Outlet, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const WebsiteLayout = () => {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen flex flex-col font-sans">
            {/* ✅ Header */}
            <header className="bg-white shadow-md p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">BlueOcean Hotel</h1>
                <nav className="space-x-4">
                    <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                    <Link to="/rooms" className="text-gray-700 hover:text-blue-600">Rooms</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                    {!user ? (
                        <>
                            <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                            <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/admin/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
                            <button onClick={logout} className="text-red-500 hover:underline">Logout</button>
                        </>
                    )}
                </nav>
            </header>

            {/* ✅ Main Content */}
            <main className="flex-1 px-4 py-6 bg-gray-50">
                <Outlet />
            </main>

            {/* ✅ Footer */}
            <footer className="bg-blue-600 text-white text-center py-4">
                &copy; {new Date().getFullYear()} BlueOcean Hotel. All rights reserved.
            </footer>
        </div>
    );
};

export default WebsiteLayout;
