const navdata = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'Rooms',
        submenu: [
            { id: 1, name: 'Standard Room', link: '/standard' },
            { id: 2, name: 'Deluxe Room', link: '/deluxe' }
        ]
    },
    {
        id: 3,
        name: 'Spa',
        link: '/spa'
    },
    {
        id: 4,
        name: 'Suites',
        submenu: [
            { id: 1, name: 'Family Suite', link: '/family-suite' },
            { id: 2, name: 'Presidential Suite', link: '/presidential-suite' },
            { id: 3, name: 'Junior Suite', link: '/junior' },
            { id: 4, name: 'Executive Suite', link: '/executive' },
            { id: 5, name: 'Honeymoon Suite', link: '/honeymoon' },
            { id: 6, name: 'Royal Suite', link: '/royal' }
        ]
    },
    {
        id: 5,
        name: 'Restaurant',
        link: '/restaurant'
    },
    {
        id: 6,
        name: 'More',
        submenu: [
            { id: 1, name: 'News', link: '/news' },
            { id: 2, name: 'Blog', link: '/blog' }
        ]
    },
    {
        id: 7,
        name: 'Contact',
        link: '/contact'
    },
    {
        id: 8,
        name: 'My Account',
        submenu: [
            { id: 1, name: 'Login', link: '/login' },
            { id: 2, name: 'Register', link: '/register' },
            { id: 3, name: 'Dashboard', link: '/dashboard/home' },
            { id: 4, name: 'Logout', link: '' }
        ]
    }
];

export { navdata };
