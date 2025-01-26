import React, { Suspense, useEffect, useRef, useState } from "react";
import { lazy } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "@/Layouts/NavBar";
import { Head } from "@inertiajs/react";
import WorkStation from "@/Components/WorkStation";
import ImmoScanSection from "@/Components/ImmoScanSection";
import CallToActionButton from "@/Components/CallToActionButton";
import ChatBot from "../Pages/ChatBot/ChatBot"
// Lazy-load components for performance
const Featuresections = lazy(() => import("@/Components/Featuresections"));
const FeatureAboutUs = lazy(() => import("@/Components/FeatureAboutUs"));
const Testimonials = lazy(() => import("@/Components/Testimonials"));

gsap.registerPlugin(ScrollTrigger);

export default function Dashboard({ gigCount = 0, invitationCount = 0, user }) {
    const featureSectionsRef = useRef(null);
    const aboutUsRef = useRef(null);
    const testimonialsRef = useRef(null);

    const [isFeatureSectionsLoaded, setIsFeatureSectionsLoaded] = useState(false);
    const [isAboutUsLoaded, setIsAboutUsLoaded] = useState(false);

    useEffect(() => {
        // Animation for Featuresections
        if (featureSectionsRef.current) {
            gsap.fromTo(
                featureSectionsRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: featureSectionsRef.current,
                        start: "top 80%",
                        end: "bottom 50%",
                        toggleActions: "play none none none",
                    },
                    onComplete: () => setIsFeatureSectionsLoaded(true),
                }
            );
        }

        // Animation for About Us
        if (aboutUsRef.current && isFeatureSectionsLoaded) {
            gsap.fromTo(
                aboutUsRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: aboutUsRef.current,
                        start: "top 80%",
                        end: "bottom 50%",
                        toggleActions: "play none none none",
                    },
                    onComplete: () => setIsAboutUsLoaded(true),
                }
            );
        }

        // Animation for Testimonials
        if (testimonialsRef.current && isAboutUsLoaded) {
            gsap.fromTo(
                testimonialsRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: testimonialsRef.current,
                        start: "top 80%",
                        end: "bottom 50%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, [isFeatureSectionsLoaded, isAboutUsLoaded]);

    return (
        <>

            <Head>
                <title>Dashboard - CyrBot</title>
                <meta
                    name="description"
                    content="Your Personal CyrBot."
                />
            </Head>
            <NavBar>
                <div className="relative bg-none bg-transparent">
                    {/* Main Content */}
                    <main className="relative container mx-auto z-10">
                        {/* ImmoScan Section */}
                        <div className="flex flex-col items-center justify-center ">
                            <div className="w-full">
                                <ImmoScanSection />
                            </div>
                            <div className="flex items-center justify-center h-screen/4">
                                <CallToActionButton />
                            </div>
                        </div>



                        {/* Featuresections Component */}
                        <div ref={featureSectionsRef}>
                            <Suspense fallback={<div>Loading Featuresections...</div>}>
                                <Featuresections />
                            </Suspense>
                        </div>

                        {/* FeatureAboutUs Component */}
                        {isFeatureSectionsLoaded && (
                            <div ref={aboutUsRef}>
                                <Suspense fallback={<div>Loading About Us...</div>}>
                                    <FeatureAboutUs />
                                </Suspense>
                            </div>
                        )}

                        {/* Testimonials Component */}
                        {isAboutUsLoaded && (
                            <div ref={testimonialsRef}>
                                <Suspense fallback={<div>Loading Testimonials...</div>}>
                                    <Testimonials />
                                </Suspense>
                            </div>
                        )}

                        {/* Chatbot Section */}
                        <div className="mt-12">
                            <ChatBot/>
                        </div>
                    </main>
                </div>
            </NavBar>

        </>
    );
}
