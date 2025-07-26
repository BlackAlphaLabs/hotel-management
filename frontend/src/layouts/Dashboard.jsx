import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DashNav from "../components/Dash/DashNav";
import DashSide from "../components/Dash/DashSide";
import DashFooter from "../components/Dash/DashFooter";

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-200 via-indigo-100 to-sky-100">
            {/* Top Navigation for Mobile/Tablet */}
            <div className="lg:hidden">
                <DashNav />
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside
                    className={`
                        fixed lg:static z-40 top-0 left-0 h-screen w-64 
                        bg-white/70 backdrop-blur-md border-r border-purple-200 shadow-2xl 
                        transition-transform duration-300 ease-in-out
                        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                        lg:translate-x-0 flex-shrink-0 rounded-tr-3xl
                    `}
                >
                    <div className="h-full max-h-screen overflow-y-auto p-6">
                        <DashSide />
                    </div>
                </aside>

                {/* Backdrop */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 z-30 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col overflow-hidden">
                    {/* Desktop Nav */}
                    <div className="hidden lg:block">
                        <DashNav />
                    </div>

                    <div className="lg:hidden fixed top-4 left-4 z-50">
                        <button
                            onClick={() => setSidebarOpen(!isSidebarOpen)}
                            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded-lg shadow-md hover:scale-105 transition"
                            aria-label="Toggle sidebar"
                        >
                            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {/* Page Content */}
                    <div className="flex-1 overflow-y-auto p-6 bg-white/90 rounded-t-3xl shadow-inner border-t border-indigo-100">
                        <Outlet />
                    </div>

                    {/* Footer */}
                    <DashFooter />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
