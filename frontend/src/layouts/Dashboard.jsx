import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className="p-6">
            <h1 className="text-2xl">Welcome, {user.name}!</h1>
            <p>Your role: {user.role}</p>
            <button onClick={logout} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
