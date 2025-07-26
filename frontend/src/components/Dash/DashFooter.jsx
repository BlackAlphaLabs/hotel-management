const DashFooter = () => {
    return (
        <footer className="bg-white/70 backdrop-blur-md border-t border-purple-200 text-center py-4 text-sm text-gray-500 shadow-inner">
            © {new Date().getFullYear()}{" "}
            <a
                href="https://blackalphalabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
            >
                BlackAlphaLabs PVT(LTD)
            </a>{" "}
            · All Rights Reserved.
        </footer>
    );
};

export default DashFooter;
