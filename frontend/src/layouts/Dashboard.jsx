import { useState } from "react";
import DashFooter from "../components/Dash/DashFooter";
import DashNav from "../components/Dash/DashNav";
import DashSide from "../components/Dash/DashSide";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Top nav for mobile/tablet */}
            <div className="lg:hidden">
                <DashNav />
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside
                    className={`fixed lg:static z-40 top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300
                        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                        lg:translate-x-0
                        flex-shrink-0
                    `}
                >
                    <div className="h-full max-h-screen overflow-y-auto">
                        <DashSide />
                    </div>
                </aside>

                {/* Backdrop for mobile */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-opacity-50 z-30 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main content */}
                <main className="flex-1 flex flex-col ml-0 lg:ml-0 overflow-hidden">
                    {/* Desktop Nav */}
                    <div className="hidden lg:block">
                        <DashNav />
                    </div>

                    {/* Toggle Sidebar Button */}
                    <div className="lg:hidden px-4 py-2">
                        <button
                            onClick={() => setSidebarOpen(!isSidebarOpen)}
                            className="bg-gray-800 text-white px-4 py-2 rounded"
                        >
                            {isSidebarOpen ? "Hide Menu" : "Show Menu"}
                        </button>
                    </div>

                    {/* Page content (non-scrolling sidebar) */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
                        <Outlet />
                    </div>

                    <DashFooter />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
