import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import WorkStation from "@/Components/WorkStation";
import ImmoScanSection from "../Components/ImmoScanSection";

export default function Dashboard({ gigCount = 0, invitationCount = 0, user }) {
    return (
        <AuthenticatedLayout>
            <Head>
                <title>Dashboard - ImmoScan</title>
                <meta
                    name="description"
                    content="Scan and discover real estate layouts effortlessly with ImmoScan."
                />
            </Head>

            <main className="container mx-auto py-12">

            <ImmoScanSection />
            
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Welcome Message */}
                    <div className="flex items-center justify-center h-full py-12">
                        <div className="overflow-hidden bg-white shadow-lg sm:rounded-xl dark:bg-gray-800 w-full max-w-4xl">
                            <div className="p-8 text-center">
                                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
                                    Welkom,{" "}
                                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                                        {user?.first_name || "Gast"}
                                    </span>
                                    !
                                </h1>
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                                        Op je dashboard
                                    </span>
                                </p>
                                {/* YouTube Video */}
                                <div className="mt-4 relative w-full h-0 pb-9/16">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/your_video_id"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    

                    {/* WorkStation Component */}
                    <div className="mt-6">
                        <WorkStation  />
                    </div>
                </div>
            </div>

           
              
            </main>
        </AuthenticatedLayout>
    );
}