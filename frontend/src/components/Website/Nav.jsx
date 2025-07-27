import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { navdata } from './NavData';
import { Menu, X, ChevronDown } from 'lucide-react';

const Nav = () => {
    const { auth, logout } = useAuth();
    const [isTop, setIsTop] = useState(true);
    const [openSubmenuId, setOpenSubmenuId] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setIsTop(window.scrollY < 50);
        window.addEventListener('scroll', handleScroll);

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenSubmenuId(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleSubmenu = (id) => {
        setOpenSubmenuId(prev => (prev === id ? null : id));
    };

    const renderSubmenu = (submenu, parentId) => (
        <ul
            className={`mt-5 absolute left-0 top-full bg-white text-stone-900 shadow-xl rounded-lg mt-2 py-2 min-w-[180px] z-50 transition-all duration-200
                ${openSubmenuId === parentId ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
            `}
        >
            {submenu.map((item) => {
                if (item.name === 'Logout') {
                    return (
                        <li key={item.id}>
                            <button
                                onClick={() => {
                                    logout();
                                    setOpenSubmenuId(null);
                                }}
                                className="block w-full text-left px-4 py-2 hover:bg-amber-100 text-sm text-stone-700"
                            >
                                Logout
                            </button>
                        </li>
                    );
                }

                return (
                    <li key={item.id}>
                        <Link
                            to={item.link}
                            className="block px-4 py-2 hover:bg-amber-100 text-sm text-stone-700"
                            onClick={() => setOpenSubmenuId(null)}
                        >
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );

    const renderNavItems = (isMobile = false) =>
        navdata.flatMap((item) => {
            const isAccount = item.name === 'My Account';

            let submenu = item.submenu;
            if (isAccount) {
                submenu = item.submenu.filter((sub) =>
                    auth.token
                        ? sub.name !== 'Login' && sub.name !== 'Register'
                        : sub.name !== 'Dashboard' && sub.name !== 'Logout'
                );
            }

            const hasSubmenu = submenu && submenu.length > 0;

            if (!isMobile && hasSubmenu) {
                return (
                    <div key={item.id} className="relative" ref={navRef}>
                        <button
                            className="flex items-center gap-1 hover:text-amber-700 text-lg"
                            onClick={() => toggleSubmenu(item.id)}
                            type="button"
                        >
                            {item.name}
                            <ChevronDown
                                size={16}
                                className={`transition-transform text-stone-700 ${openSubmenuId === item.id ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        {renderSubmenu(submenu, item.id)}
                    </div>
                );
            }

            if (isMobile && hasSubmenu) {
                return [
                    <div key={item.id} className="text-sm font-semibold text-stone-800 mt-4">
                        {item.name}
                    </div>,
                    ...submenu.map((sub) => (
                        <Link
                            key={sub.id}
                            to={sub.link}
                            className="block text-sm ml-3 text-stone-600 hover:text-amber-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {sub.name}
                        </Link>
                    )),
                ];
            }

            return (
                <Link
                    key={item.id}
                    to={item.link}
                    className={`text-lg  ${isMobile ? 'block text-stone-800' : 'hover:text-amber-700'}`}
                    onClick={() => {
                        setMobileMenuOpen(false);
                        setOpenSubmenuId(null);
                    }}
                >
                    {item.name}
                </Link>
            );
        });

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-5 xl:px-32 py-4
                ${isTop ? 'bg-transparent text-white text-xl' : 'bg-white text-stone-900 shadow-md'}
            `}
        >
            <div className="flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
                    JehanKandy Hotels
                </h1>

                {/* Desktop Menu: visible ONLY on xl screens */}
                <nav className="hidden xl:flex gap-8 items-center">{renderNavItems()}</nav>

                {/* Mobile/Tablet Toggle Button (below xl) */}
                <div className="xl:hidden mt-3">
                    <button onClick={() => setMobileMenuOpen((prev) => !prev)} className="focus:outline-none text-stone-900">
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (shows everything flat) */}
            {mobileMenuOpen && (
                <div className="fixed top-0 left-0 h-full bg-white text-stone-900 shadow-xl p-5 space-y-2 max-w-xs w-full z-50 overflow-y-auto">
                    {renderNavItems(true)}
                </div>
            )}
        </header>
    );
};

export default Nav;
