import React from "react";
import ImmoScanProtoImg from "../Components/ImmoScanProtoImg";

const ImmoScanSection = () => {
    const logos = [
        "logo-BJunJ_FP.svg",
        "logo-2c12d4b3.svg",
        "Untitled.svg",
        "cornerstone.svg",
        "fonzt.svg",
        "rent-a-stone.png",
        "Rotsvast-logo.png",
    ];

    return (
        <>
            {/* Main Section */}
            <div className="mt-24 w-screen">
                {/* Scrolling Logos Section */}
                <div className="relative overflow-hidden mt-16">
                    {/* Gradient Blur Effects */}
                    <div className="absolute inset-y-0 left-0 w-[500px] bg-gradient-to-r from-[#f3f4f6] to-transparent dark:from-[#111827] dark:to-transparent pointer-events-none z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-[500px] bg-gradient-to-l from-[#f3f4f6] to-transparent dark:from-[#111827] dark:to-transparent pointer-events-none z-10"></div>      {/* Scrolling Content */}
                    <div className="w-full flex items-center overflow-hidden">
                        {/* Marquee Container: Use min-w-max to avoid overflow */}
                        <div className="flex animate-marquee space-x-8 min-w-96">
                            {/* Original Logos */}
                            {logos.map((client, idx) => (
                                <img
                                    key={idx}
                                    className="h-16 sm:h-12 mx-4 max-w-none object-contain"
                                    src={`/img/clients/${client}`}
                                    alt={`Logo ${idx}`}
                                />
                            ))}
                            {/* Duplicate Logos for Seamless Loop */}
                            {logos.map((client, idx) => (
                                <img
                                    key={`duplicate-${idx}`}
                                    className="h-16 sm:h-12 mx-4 max-w-screen object-contain"
                                    src={`/img/clients/${client}`}
                                    alt={`Logo Duplicate ${idx}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImmoScanSection;
