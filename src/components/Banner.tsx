
import React from 'react';
import bannerImage from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                
                {/* Left Side */}
                <div>
                    <h1 className="text-4xl font-bold">
                        Build Your Ideal
                        <br />
                        Development Stack
                    </h1>

                    <p className="my-4">
                        Explore frontend, backend, database, and tooling options,
                        <br />
                        compare them side by side, and put together the stack that fits your
                        <br />
                        next project.
                    </p>

                    <div className="flex gap-3">
                        <p className="bg-cyan-500 px-2 py-1 rounded-md">
                            Explore Technologies
                        </p>

                        <p className="px-2 py-1">
                            Learn More
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div>
                    <img src={bannerImage} alt="Development Stack" />
                </div>

            </div>
        </div>
    );
};

export default Banner;

