import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { auth, logout } = useAuth();
    return (
        <div className="p-6">
            <h1 className="text-2xl">Welcome, {auth.user?.email || auth.user}!</h1>
            <p className="">{auth.role}</p>
            <button
                onClick={logout}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
            >
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
