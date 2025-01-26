import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Contact() {
    return (
        <AuthenticatedLayout>
            <div className="min-h-screen bg-gray-200 dark:bg-gray-900 flex items-center justify-center px-8">
                <div className=" rounded-lg flex flex-col lg:flex-row max-w-6xl w-full overflow-hidden ">
                    <div className="w-full rounded-lg lg:w-1/3 bg-yellow-400 text-gray-900 dark:bg-yellow-500 dark:text-gray-900 p-8 flex flex-col justify-between">
                        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mt-6 mb-6">
                            Neem contact op
                        </h2>
                        <ul className="space-y-6">
                            <li className="flex items-center space-x-3">
                                {/* Location Icon */}
                                <i className="bi bi-geo-alt text-gray-900 dark:text-gray-900"></i>
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-900">
                                        Bezoek ons
                                    </p>
                                    <p className="text-gray-900 dark:text-gray-900">
                                        67 Wisteria Way, Croydon South VIC 3136
                                        AU
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Chat Icon */}
                                <i className="bi bi-chat-dots text-yellow-900 dark:text-yellow-900"></i>
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-900">
                                        Chat met ons
                                    </p>
                                    <a
                                        href="mailto:hello@paysphere.com"
                                        className="text-yellow-400 hover:text-yellow-500 dark:text-yellow-900 dark:hover:text-yellow-400 underline"
                                    >
                                        hello@paysphere.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Phone Icon */}
                                <i className="bi bi-telephone text-yellow-900 dark:text-yellow-900"></i>
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-900">
                                        Bel ons
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-900">
                                        Ma-Vr 8:00 - 17:00
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-900">
                                        (+995) 555-55-55-55
                                    </p>
                                </div>
                            </li>
                        </ul>
                        {/*  Google Maps Embed under Phone Number */}
                        <div className="mt-12 mb-24">
                            <p className="font-semibold text-gray-800 dark:text-gray-00">
                                Onze Locatie:
                            </p>
                            <iframe
                                className="w-full h-64 rounded-lg"
                                src="https://www.google.com/maps/embed/v1/place?q=67+Wisteria+Way,+Croydon+South+VIC+3136+AU&key=YOUR_GOOGLE_MAPS_API_KEY"
                                allowfullscreen=""
                                loading="lazy"
                            ></iframe>
                        </div>

                        {/* Social Media Icons Section */}
                        <div className="mt-8 flex justify-center space-x-4">
                            <a href="#" className="hover:opacity-80">
                                <i className="bi bi-facebook text-2xl text-gray-900 dark:text-gray-900"></i>
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <i className="bi bi-twitter text-2xl text-gray-900 dark:text-gray-900"></i>
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <i className="bi bi-linkedin text-2xl text-gray-900 dark:text-gray-900"></i>
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <i className="bi bi-instagram text-2xl text-gray-900 dark:text-gray-900"></i>
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <i className="bi bi-youtube text-2xl text-gray-900 dark:text-gray-900"></i>
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <i className="bi bi-github text-2xl text-gray-900 dark:text-gray-900"></i>
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 bg-gray-200 dark:bg-gray-900 p-12">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                            Stuur ons een bericht
                        </h2>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder=" "
                                        className="w-full h-14 px-4 rounded-lg bg-gray-300 text-white border border-gray-700 focus:outline-none peer dark:bg-gray-900 dark:text-gray-900 dark:border-gray-600"
                                    />
                                    <label
                                        for="name"
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white transition-all duration-200 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400  peer-focus:text-gray-900 dark:peer-focus:text-gray-100 peer-focus:text-sm peer-focus:top-0 peer-focus:transform peer-focus:-translate-y-0"
                                    >
                                        Name
                                    </label>
                                </div>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    id="last_name"
                                    placeholder=" "
                                    className="w-full h-14 px-4 rounded-lg bg-gray-300 text-white border border-gray-700 focus:outline-none peer dark:bg-gray-900 dark:text-gray-900 dark:border-gray-600"
                                />
                                <label
                                    for="last_name"
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white transition-all duration-200 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-gray-100 peer-focus:text-sm peer-focus:top-0 peer-focus:transform peer-focus:-translate-y-0"
                                >
                                    Achternaam
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder=" "
                                    className="w-full h-14 px-4 rounded-lg bg-gray-300 text-white border border-gray-700 focus:outline-none peer dark:bg-gray-900 dark:text-gray-900 dark:border-gray-600"
                                />
                                <label
                                    for="email"
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white transition-all duration-200 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400  peer-focus:text-gray-900 dark:peer-focus:text-gray-100 peer-focus:text-sm peer-focus:top-0 peer-focus:transform peer-focus:-translate-y-0"
                                >
                                    E-mailadres
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder=" "
                                    className="w-full h-14 px-4 rounded-lg bg-gray-300 text-white border border-gray-700 focus:outline-none peer dark:bg-gray-900 dark:text-gray-900 dark:border-gray-600"
                                />
                                <label
                                    for="phone"
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white transition-all duration-200 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:text-gray-900 dark:peer-focus:text-gray-100 peer-focus:text-sm peer-focus:top-0 peer-focus:transform peer-focus:-translate-y-0"
                                >
                                    Telefoonnummer
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder=" "
                                    className="w-full px-4 py-3 rounded-lg bg-gray-300 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 peer dark:bg-gray-900 dark:text-gray-900 dark:border-gray-600"
                                ></textarea>
                                <label
                                    for="message"
                                    className="absolute left-4 text-white transition-all duration-200 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400  peer-focus:text-gray-900 dark:peer-focus:text-gray-100 peer-focus:text-sm peer-focus:top-0 peer-focus:transform peer-focus:-translate-y-0"
                                >
                                    Typ hier je bericht
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="privacy_policy"
                                    className="w-5 h-5 rounded border-gray-700 bg-gray-800 text-gray-400 focus:ring-yellow-400"
                                />
                                <label
                                    for="privacy_policy"
                                    className="text-gray-900 dark:text-gray-100 text-sm ml-3"
                                >
                                    Ik ga akkoord met de{" "}
                                    <a href="#" className="underline">
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>
                            <button class="button group relative flex items-center justify-center w-full h-14 px-5 rounded-full font-semibold text-gray-900 dark:text-gray-100 uppercase bg-transparent border-0 overflow-hidden transition-all duration-300 ease-in-out z-10">
                                <span class="text whitespace-nowrap leading-5 pr-11 z-20">
                                    Bericht versturen
                                </span>
                                <span class="icon absolute top-1/2 right-2 transform -translate-y-1/2 w-12 h-8 flex items-center justify-center rounded-full z-20">
                                    <svg
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-icon="paper-plane"
                                        width="25px"
                                        aria-hidden="true"
                                        className="text-gray-200 dark:text-gray-900 fill-current"
                                    >
                                        <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                                    </svg>
                                </span>
                                <span class="button-after absolute inset-0 border-2 border-yellow-500 rounded-full z-10"></span>
                                <span class="button-before absolute inset-0 bg-yellow-500 z-0 transform translate-x-[90%] transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
