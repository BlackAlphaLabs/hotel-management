import React from 'react';
import AnimatedButton from '../../../components/Buttons/AnimatedButton';

const HeroSection = () => {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(https://cdn.pixabay.com/photo/2020/08/18/16/11/berchtesgaden-5498653_960_720.jpg)`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))]"></div>

            {/* Content */}
            <div className="relative z-10 xl:px-32 md:px-12 px-4 text-white p-8 xl:py-72 md:py-40 py-40 xl:text-left text-center">
                <div className="flex flex-col xl:flex-row justify-between gap-8">
                    {/* Left content */}
                    <div className="w-full">
                        <p className="font-bold text-[0.75rem] sm:text-sm tracking-[0.2rem] uppercase">
                            Discover the Essence of Comfort
                        </p>

                        <div className="uppercase mt-6 text-3xl sm:text-4xl md:text-5xl tracking-[0.3rem] font-medium">
                            <h1 className="py-2 sm:py-4">a unique place</h1>
                            <h1>to visit and stay</h1>
                        </div>

                        <div className="mt-8">
                            <AnimatedButton label={"View Rooms"} />
                        </div>

                    </div>

                    {/* Right content */}
                    <div className="w-full mt-8 xl:mt-0 text-sm sm:text-base leading-relaxed">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae perferendis quaerat ipsa recusandae, optio a ipsam quidem. Nesciunt illum, vel fugit minima explicabo doloribus dolor excepturi sed sit ea vitae.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
