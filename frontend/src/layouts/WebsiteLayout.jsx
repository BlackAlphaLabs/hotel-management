import { Outlet, Link } from "react-router-dom";
import Nav from "../components/Website/Nav";

const WebsiteLayout = () => {


    return (
        <div className="min-h-screen flex flex-col font-sans">
            <div className="">
                <Nav />
            </div>


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
