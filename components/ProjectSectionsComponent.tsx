'use client'
import React from 'react';
import { Dot } from '@phosphor-icons/react';

const ProjectSectionsComponent: React.FC = () => {
    return (
        <div className="max-w-[1180px] mx-auto mb-20">
            {/* First Section: What We’ve Done */}
            <div className="flex flex-col md:flex-row mt-20">
                <div className="w-full md:w-1/3">
                    <div className="mb-4 text-left">
                        <h3 className="text-[22px] font-semibold tracking-normal capitalize-none flex items-center">
                            What We’ve Done
                            <span className="ml-2 h-[1px] flex-grow "></span>
                        </h3>
                    </div>
                </div>
                <div className="w-full md:w-2/3 pb-[35px]">
                    <div className="text-left text-[16px] pb-0">
                        <p>
                            <span className="text-[22px]">
                                <span className="text-[#3039ac]">We provide buy-side</span>, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, <strong>to assist in delivering</strong> high performance trading and settlement
                            </span>
                        </p>
                        <p className="mt-5">
                            More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include
                        </p>
                    </div>
                </div>
            </div>

            {/* Second Section: Our Process */}
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3">
                    <div className="mb-4 text-left">
                        <h3 className="text-[22px] font-semibold tracking-normal capitalize-none flex items-center">
                            Our Process
                            <span className="ml-2 h-[1px] flex-grow "></span>
                        </h3>
                    </div>
                </div>
                <div className="w-full md:w-2/3 pb-[35px]">
                    <div className="text-left text-[16px] pb-[6px]">
                        <p>
                            We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include
                        </p>
                    </div>
                    <div className="pb-[10px]">
                        <ul>
                            <li className=" flex items-center py-2">
                                <div
                                    className={`w-4 h-4 rounded-full transition-all duration-300 relative border-2 border-[#313787]`}
                                    aria-label={`Go to slide 1`}
                                >
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#313787] rounded-full"></div>
                                </div>
                                <span className="text-[16px] ml-4">Amet Sollicitudin Quam Dolor Mollis</span>
                            </li>
                            <li className=" flex items-center py-2">
                                <div
                                    className={`w-4 h-4 rounded-full transition-all duration-300 relative border-2 border-[#313787]`}
                                    aria-label={`Go to slide 1`}
                                >
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#313787] rounded-full"></div>
                                </div>
                                <span className="text-[16px] ml-4">Diipiscing Vestibulum Nullam Venenatis</span>
                            </li>
                            <li className=" flex items-center py-2">
                                <div
                                    className={`w-4 h-4 rounded-full transition-all duration-300 relative border-2 border-[#313787]`}
                                    aria-label={`Go to slide 1`}
                                >
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#313787] rounded-full"></div>
                                </div>
                                <span className="text-[16px] ml-4">Diipiscing Vestibulum Nullam Venenatis</span>
                            </li>
                            <li className=" flex items-center py-2">
                                <div
                                    className={`w-4 h-4 rounded-full transition-all duration-300 relative border-2 border-[#313787]`}
                                    aria-label={`Go to slide 1`}
                                >
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#313787] rounded-full"></div>
                                </div>
                                <span className="text-[16px] ml-4">Vehicula Vulputate Ligula Mollis</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Third Section: Feedback From Client */}
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3">
                    <div className="mb-4 text-left">
                        <h3 className="text-[22px] font-semibold tracking-normal capitalize-none flex items-center">
                            Feedback From Client
                            <span className="ml-2 h-[1px] flex-grow "></span>
                        </h3>
                    </div>
                </div>
                <div className="w-full md:w-2/3 pb-[35px]">
                    <div className="text-left text-[16px] pb-[6px]">
                        <p>
                            We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include
                        </p>
                        <p className="mt-5">
                            inTech Innovation Lab that keep us at the forefront of innovation. Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSectionsComponent;