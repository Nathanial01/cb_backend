// import React, { useState, useEffect } from "react";

// const DarkModeToggle = () => {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     // Toggle dark mode
//     const toggleDarkMode = () => {
//         setIsDarkMode((prevMode) => !prevMode);
//     };

//     // Apply dark mode class to the HTML tag
//     useEffect(() => {
//         const html = document.documentElement;
//         if (isDarkMode) {
//             html.classList.add("dark");
//         } else {
//             html.classList.remove("dark");
//         }
//     }, [isDarkMode]);

//     return (
//         <div className="">
//             <div
//                 className="relative w-[155px] h-[35px] rounded-full  cursor-pointer flex items-center"
//                 onClick={toggleDarkMode}
//             >
//                 {/* Single Background Image */}
//                 <img
//                     src={isDarkMode ? "/img/night-mode.png" : "/img/day-mode.png"} // Adjust the path
//                     alt="Mode Background"
//                     className="absolute inset-0 w-full h-full object-cover rounded-full"
//                 />
//                 <div
//                     className={`absolute w-[36px] h-[36px] bg-none rounded-full flex items-center justify-center shadow-md transition-transform ${
//                         isDarkMode ? "translate-x-[120px]" : "translate-x-0"
//                     }`}
//                 >
//                     {isDarkMode ? (
//                         // Moon icon for Dark Mode
//                         <svg
//                             width="20"
//                             height="20"
//                             viewBox="0 0 0.6 0.6"
//                             fill="none"
//                         >
//                             <path
//                                 d="M.335.191a.008.008 0 0 1 .014 0l.007.018.005.005.019.007a.008.008 0 0 1 0 .014L.361.242.356.247.349.265a.008.008 0 0 1-.014 0L.328.247.323.242.304.235a.008.008 0 0 1 0-.014L.323.214.328.209zm.073.082c.002-.004.008-.004.01 0l.004.012.003.003.012.004a.005.005 0 0 1 0 .01L.425.306.422.309.418.321a.005.005 0 0 1-.01 0L.404.309.401.306.389.302a.005.005 0 0 1 0-.01L.401.288.404.285zM.444.082c.003-.01.017-.01.021 0l.012.033a.01.01 0 0 0 .007.007l.034.012a.011.011 0 0 1 0 .021L.484.167a.01.01 0 0 0-.007.007L.465.207a.011.011 0 0 1-.021 0L.432.174A.01.01 0 0 0 .425.167L.391.155a.011.011 0 0 1 0-.021L.425.122A.01.01 0 0 0 .432.115z"
//                                 fill="#0095FF"
//                             />
//                             <path
//                                 d="M.075.337c0 .104.087.188.194.188.083 0 .153-.05.181-.121A.2.2 0 0 1 .377.42.17.17 0 0 1 .205.252.17.17 0 0 1 .241.149a.19.19 0 0 0-.166.188"
//                                 stroke="#FFFF00"
//                                 stroke-width=".038"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                             />
//                         </svg>
//                     ) : (
//                         // Sun icon for Light Mode
//                         <svg
//                             width="20"
//                             height="20"
//                             viewBox="0 0 0.6 0.6"
//                             fill="none"
//                         >
//                             <path
//                                 d="M.425.3a.125.125 0 1 1-.25 0 .125.125 0 0 1 .25 0Z"
//                                 stroke="#ffff"
//                                 stroke-width=".038"
//                             />
//                             <path
//                                 d="M.458.142.461.139M.139.461.142.458M.3.077V.075m0 .45V.523M.077.3H.075m.45 0H.523M.142.142.139.139m.322.322L.458.458"
//                                 stroke="#ffff"
//                                 stroke-width=".038"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                             />
//                         </svg>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DarkModeToggle;
import React, { useState, useEffect } from "react";

export default function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(
        JSON.parse(localStorage.getItem("dark_mode")) ?? true // Default to dark mode
    );

    // Toggle dark mode
    const toggleDarkMode = () => {
        const html = document.documentElement;

        if (isDarkMode) {
            html.classList.remove("dark");
            setIsDarkMode(false);
            localStorage.setItem("dark_mode", false);

            // Optional: Send to server
            fetch("/dark-mode-toggle", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dark_mode: false }),
            });
        } else {
            html.classList.add("dark");
            setIsDarkMode(true);
            localStorage.setItem("dark_mode", true);

            // Optional: Send to server
            fetch("/dark-mode-toggle", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dark_mode: true }),
            });
        }
    };

    // Initialize dark mode on mount
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <div
            className="relative w-8 h-8 cursor-pointer flex items-center justify-center transition-transform"
            onClick={toggleDarkMode}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            {/* Moon icon for Dark Mode */}
            {isDarkMode ? (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 0.6 0.6"
                    fill="none"
                    className="transition-transform hover:scale-110"
                >
                    <path
                        d="M.335.191a.008.008 0 0 1 .014 0l.007.018.005.005.019.007a.008.008 0 0 1 0 .014L.361.242.356.247.349.265a.008.008 0 0 1-.014 0L.328.247.323.242.304.235a.008.008 0 0 1 0-.014L.323.214.328.209zm.073.082c.002-.004.008-.004.01 0l.004.012.003.003.012.004a.005.005 0 0 1 0 .01L.425.306.422.309.418.321a.005.005 0 0 1-.01 0L.404.309.401.306.389.302a.005.005 0 0 1 0-.01L.401.288.404.285zM.444.082c.003-.01.017-.01.021 0l.012.033a.01.01 0 0 0 .007.007l.034.012a.011.011 0 0 1 0 .021L.484.167a.01.01 0 0 0-.007.007L.465.207a.011.011 0 0 1-.021 0L.432.174A.01.01 0 0 0 .425.167L.391.155a.011.011 0 0 1 0-.021L.425.122A.01.01 0 0 0 .432.115z"
                        fill="#0095FF"
                    />
                    <path
                        d="M.075.337c0 .104.087.188.194.188.083 0 .153-.05.181-.121A.2.2 0 0 1 .377.42.17.17 0 0 1 .205.252.17.17 0 0 1 .241.149a.19.19 0 0 0-.166.188"
                        stroke="#FFFF00"
                        strokeWidth=".038"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ) : (
                // Sun icon for Light Mode
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform hover:scale-110"
                >
                    <defs>
                        <linearGradient
                            id="sunGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#FFD700" />
                            <stop offset="100%" stopColor="#FF8C00" />
                        </linearGradient>
                    </defs>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707M.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0M12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707M5.5 7.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
                        fill="url(#sunGradient)"
                    />
                </svg>
            )}
        </div>
    );
}
