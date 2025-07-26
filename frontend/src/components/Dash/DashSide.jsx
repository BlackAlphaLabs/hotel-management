import { LayoutDashboard, Users, PackageSearch, Settings } from "lucide-react";
import { FaBuilding } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const links = [
    { name: "Home", to: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Users", to: "/dashboard/users", icon: <Users size={20} /> },
    { name: "Inventory", to: "/dashboard/inventory", icon: <PackageSearch size={20} /> },
    { name: "Settings", to: "/dashboard/settings", icon: <Settings size={20} /> },
];

const DashSide = () => {
    return (
        <div className="min-h-full text-indigo-900">
            <h3 className="py-4 text-xl font-bold mb-6 pl-2 flex items-center gap-2 text-purple-700">
                <FaBuilding className="h-6 text-purple-500" />
                <span>Hotel Management</span>
            </h3>
            <ul className="space-y-3">
                {links.map(({ name, to, icon }) => (
                    <li key={name}>
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-xl transition text-sm font-semibold tracking-wide
                                ${isActive
                                    ? "bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 text-purple-800 shadow-md"
                                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"}`
                            }
                        >
                            {icon}
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DashSide;
