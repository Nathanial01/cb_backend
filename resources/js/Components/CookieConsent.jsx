import React, { useEffect, useState } from "react";
import axios from "axios";

const CookieConsent = () => {
    const [cookieHtml, setCookieHtml] = useState("");
    const [showBanner, setShowBanner] = useState(false);

    // Helper function to get a cookie by name
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
    };

    // Helper function to set a cookie
    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    };

    // Hide the banner
    const hideBanner = () => {
        setShowBanner(false);
    };

    // Handle button actions
    const handleAcceptAll = () => {
        setCookie("cookie_consent", "accepted", 365);
        setCookie("analytics_cookies", true, 365);
        setCookie("marketing_cookies", true, 365);
        hideBanner();
    };

    const handleRejectAll = () => {
        setCookie("cookie_consent", "rejected", 365);
        setCookie("analytics_cookies", false, 365);
        setCookie("marketing_cookies", false, 365);
        hideBanner();
    };

    const handleSaveSettings = (analytics, marketing) => {
        setCookie("cookie_consent", "custom", 365);
        setCookie("analytics_cookies", analytics, 365);
        setCookie("marketing_cookies", marketing, 365);
        hideBanner();
    };

    useEffect(() => {
        const cookieConsent = getCookie("cookie_consent");
        if (!cookieConsent) {
            axios
                .get("/cookie-consent-html")
                .then((response) => {
                    if (response.data) {
                        setCookieHtml(response.data);
                        setShowBanner(true);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching cookie consent HTML:", error);
                });
        }
    }, []);

    if (!showBanner) return null;

    return (
        <div id="cookie-banner" className="fixed bottom-0 w-full bg-gray-900 text-white p-4 z-50">
            <div dangerouslySetInnerHTML={{ __html: cookieHtml }}></div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={handleAcceptAll}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                    Accept All
                </button>
                <button
                    onClick={handleRejectAll}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                    Reject All
                </button>
                <button
                    onClick={() => document.getElementById("cookie-settings-modal").classList.remove("hidden")}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Settings
                </button>
            </div>

            {/* Modal for Cookie Settings */}
            <div
                id="cookie-settings-modal"
                className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60"
            >
                <div className="bg-white p-6 rounded shadow-lg">
                    <h2 className="text-lg font-semibold mb-4">Cookie Settings</h2>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="analytics-cookies" className="mr-2" />
                        <label htmlFor="analytics-cookies">Allow Analytics Cookies</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="marketing-cookies" className="mr-2" />
                        <label htmlFor="marketing-cookies">Allow Marketing Cookies</label>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            onClick={() =>
                                handleSaveSettings(
                                    document.getElementById("analytics-cookies").checked,
                                    document.getElementById("marketing-cookies").checked
                                )
                            }
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => document.getElementById("cookie-settings-modal").classList.add("hidden")}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
