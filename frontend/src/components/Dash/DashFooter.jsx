const DashFooter = () => {
    return (
        <footer className="bg-white/70 backdrop-blur-md border-t border-purple-200 text-center py-4 text-sm text-gray-500 shadow-inner">
            © {new Date().getFullYear()} Jehan Kandy · All Rights Reserved.
        </footer>
    );
};

export default DashFooter;
