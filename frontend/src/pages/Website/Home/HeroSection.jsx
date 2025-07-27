import React from 'react';

const HeroSection = () => {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(https://cdn.pixabay.com/photo/2018/11/08/22/29/lake-3803443_1280.jpg)`,
            }}
        >
            {/* Lighter dark transparent overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))]"></div>

            {/* Content */}
            <div className="relative z-10 text-white p-8">
                
            </div>
        </div>
    );
};

export default HeroSection;
