import { useState } from "react";
import { LayoutDashboard, Users, PackageSearch, Settings, ChevronDown, ChevronRight } from "lucide-react";
import { FaBuilding } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const links = [
    {
        name: "Home",
        to: "/dashboard/home",
        icon: <LayoutDashboard size={20} />
    },
    {
        name: "Users",
        icon: <Users size={20} />,
        submenu: [
            { name: "All Users", to: "/dashboard/users" },
            { name: "Add User", to: "/dashboard/users/new" },
        ]
    },
    {
        name: "Inventory",
        to: "/dashboard/inventory",
        icon: <PackageSearch size={20} />
    },
    {
        name: "Settings",
        to: "/dashboard/settings",
        icon: <Settings size={20} />
    }
];

const DashSide = () => {
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (menuName) => {
        setOpenMenus(prev => ({
            ...prev,
            [menuName]: !prev[menuName]
        }));
    };

    return (
        <div className="min-h-full text-indigo-900">
            <h3 className="pt-0 pb-4 text font-bold mb-6 pl-0 flex items-center gap-2 text-purple-700">
                <FaBuilding className="h-6 text-purple-500" />
                <span>Hotel Management</span>
            </h3>
            <ul className="space-y-2">
                {links.map(({ name, to, icon, submenu }) => (
                    <li key={name}>
                        {submenu ? (
                            <>
                                <button
                                    onClick={() => toggleMenu(name)}
                                    className={`w-full flex items-center justify-between px-4 py-2 rounded-xl transition text-sm font-semibold tracking-wide 
                                        hover:bg-purple-50 hover:text-purple-700 text-left ${openMenus[name]
                                            ? "bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 text-purple-800 shadow"
                                            : "text-gray-700"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        {icon}
                                        {name}
                                    </div>
                                    {openMenus[name] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                                </button>
                                {openMenus[name] && (
                                    <ul className="ml-2 mt-1 space-y-1 border-l border-purple-200 pl-4">
                                        {submenu.map(({ name: subName, to: subTo }) => (
                                            <li key={subName}>
                                                <NavLink
                                                    to={subTo}
                                                    className={({ isActive }) =>
                                                        `block px-3 py-2 rounded-lg text-sm font-medium transition
                                                        ${isActive
                                                            ? "bg-purple-100 text-purple-800"
                                                            : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"}`
                                                    }
                                                >
                                                    {subName}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        ) : (
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
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DashSide;
