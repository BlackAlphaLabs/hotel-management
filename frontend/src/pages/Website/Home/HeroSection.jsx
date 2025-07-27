import React from 'react';

const HeroSection = () => {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(https://cdn.pixabay.com/photo/2020/08/18/16/11/berchtesgaden-5498653_960_720.jpg)`,
            }}
        >
            {/* Lighter dark transparent overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))]"></div>

            {/* Content */}
            <div className="relative z-10 xl:px-32 md:px-12 px-4 text-white p-8 py-72">
                <div className="xl:flex justify-between">
                    <div className="w-full">
                        <p className="font-bold text-xs tracking-[0.2rem] uppercase" style={{ fontWeight: 700 }}>This should definitely be bold</p>


                    </div>
                    <div className="w-full">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae perferendis quaerat ipsa recusandae, optio a ipsam quidem. Nesciunt illum, vel fugit minima explicabo doloribus dolor excepturi sed sit ea vitae.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
