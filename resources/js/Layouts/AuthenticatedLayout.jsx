import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
import DarkModeToggle from "../Components/DarkModeToggle";
import NotificationBar from "@/Components/NotificationBar";


export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

    const accountDropdownRef = useRef(null);

    const toggleAccountDropdown = () =>
        setIsAccountDropdownOpen((prev) => !prev);

    const closeDropdowns = () => {
        setIsAccountDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!accountDropdownRef.current?.contains(event.target)) {
                closeDropdowns();
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const navItems = [
        { href: "/dashboard", label: "Home", icon: "bi-house-door" },
    ];

    const userActions = user
        ? [
              { href: "/profile", label: "Profiel", icon: "bi-person-circle" },
              { href: "/settings", label: "Instellingen", icon: "bi-gear" },
              { href: "/faq", label: "FAQ", icon: "bi-question-circle" },
              ,
          ]
        : [
              { href: "/login", label: "Login", icon: "bi-box-arrow-in-right" },
              { href: "/register", label: "Register", icon: "bi-person-plus" },
          ];

    const NavItem = ({ href, label, icon }) => (
        <NavLink
            href={href}
            className="flex items-center gap-x-4 px-4 py-3 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
        >
            <i className={`bi ${icon} text-xl`}></i>
            <span className="flex-1">{label}</span>
        </NavLink>
    );

    return (
        <div className="min-h-screen bg-gray-200 dark:bg-gray-900">
            <NotificationBar />
            {/* Sticky Navigation */}
            <nav className="sticky py-12 top-0 backdrop-blur bg-gray-200 dark:bg-gray-900 z-50 ">
                <div className="mx-auto flex justify-between items-center px-6">
                    {/* Start: Logo and Name */}
                    <div className="flex items-center -space-x-4">
                        <Link href="/dashboard">
                            <ApplicationLogo className="h-9 w-auto fill-current text-gray-800 dark:text-gray-200"/>
                        </Link>
                    </div>
                    <div
                        className="hidden sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <nav className="flex space-x-4">
                            <Link
                                href="/dashboard"
                                className="text-dark-mode-hovers hover:underline"
                            >
                                Home
                            </Link>
                            <Link
                                href="/voor-wie"
                                className="text-dark-mode-hovers hover:underline"
                            >
                                Voor wie?
                            </Link>
                            <Link
                                href="/prijzen"
                                className="text-dark-mode-hovers hover:underline"
                            >
                                Prijzen
                            </Link>
                            <Link
                                href="/toepassing"
                                className="text-dark-mode-hovers hover:underline"
                            >
                                Aan de slag
                            </Link>
                            <Link
                                href="/demo"
                                className="text-dark-mode-hovers hover:underline"
                            >
                                Demo
                            </Link>
                            <Link
                                href="/contact"
                                className="text-dark-mode-hovers hover:underline"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* End: Search Bar and Profile */}
                    <div className="lg:flex lg:items-center -lg:space-x-6 hidden ">
                        {/* Search Bar */}
                        <form className="flex items-center">
                            <div className="relative w-full"></div>
                        </form>

                        {/* User Dropdown */}
                        <div
                            className="relative z-50 "
                            ref={accountDropdownRef}
                        >
                            <button
                                onClick={toggleAccountDropdown}
                                className="flex ml-12 items-center justify-center h-10 w-10 bg-gray-900 dark:bg-gray-800 rounded-full shadow-md hover:scale-110  focus:outline-none"
                            >
                                {user?.profile_picture ? (
                                    <img
                                        src={user.profile_picture}
                                        alt={`${user.first_name}'s profile`}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                ) : (
                                    <svg
                                        className="h-6 w-6 text-gray-100 dark:text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 11c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm0 2c-4.418 0-8 3.582-8 8 0 .553.447 1 1 1h14c.553 0 1-.447 1-1 0-4.418-3.582-8-8-8z"
                                        />
                                    </svg>
                                )}
                            </button>

                            {isAccountDropdownOpen && (
                                <div
                                    className="absolute left-2/4 transform -translate-x-2/4 mt-4 bg-gray-200 rounded-lg dark:bg-gray-800   px-8 py-4 w-72 ">
                                    {/* Column Layout */}
                                    <NavLink></NavLink>{" "}
                                    <div className="flex flex-col items-center">
                                        <NavLink href="/profile">
                                            {" "}
                                            <div className="mb-4">
                                                {user?.cover_picture ? (
                                                    <img
                                                        src={
                                                            user.profile_picture
                                                        }
                                                        alt={`${user.first_name}'s profile`}
                                                        className="h-14 w-14 rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <img
                                                        src="/img/cover.png"
                                                        alt="default"
                                                        className="h-300 w-100 rounded-lg object-cover"
                                                    />
                                                )}
                                            </div>
                                        </NavLink>
                                        <p className="absolute flex items-center justify-center top-16 text-lg font-bold text-gray-100 dark:text-gray-400">
                                            <svg
                                                margintop="80px"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                data-name="Flat Color"
                                                className="icon flat-color"
                                            >
                                                <path
                                                    d="M21.6 9.84a4.6 4.6 0 0 1-.42-.84 4 4 0 0 1-.18-.93 4.2 4.2 0 0 0-.64-2.16 4.25 4.25 0 0 0-1.87-1.28 5 5 0 0 1-.85-.43 5 5 0 0 1-.64-.66 4.2 4.2 0 0 0-1.8-1.4 4.2 4.2 0 0 0-2.2.07 4.24 4.24 0 0 1-1.94 0 4.2 4.2 0 0 0-2.24-.07A4.2 4.2 0 0 0 7 3.54a5 5 0 0 1-.66.66 5 5 0 0 1-.85.43 4.25 4.25 0 0 0-1.88 1.28A4.2 4.2 0 0 0 3 8.07a4 4 0 0 1-.18.93 4.6 4.6 0 0 1-.42.82A4.3 4.3 0 0 0 1.63 12a4.3 4.3 0 0 0 .77 2.16 4 4 0 0 1 .42.82 4 4 0 0 1 .15.95 4.2 4.2 0 0 0 .64 2.16 4.25 4.25 0 0 0 1.87 1.28 5 5 0 0 1 .85.43 5 5 0 0 1 .66.66 4.1 4.1 0 0 0 1.8 1.4 3 3 0 0 0 .87.13 6.7 6.7 0 0 0 1.34-.18 4 4 0 0 1 1.94 0 4.33 4.33 0 0 0 2.24.06 4.1 4.1 0 0 0 1.8-1.4 5 5 0 0 1 .66-.66 5 5 0 0 1 .85-.43 4.25 4.25 0 0 0 1.87-1.28 4.2 4.2 0 0 0 .64-2.16 4 4 0 0 1 .15-.95 4.6 4.6 0 0 1 .42-.82 4.3 4.3 0 0 0 .8-2.17 4.3 4.3 0 0 0-.77-2.16"
                                                    style={{fill: "blue"}}
                                                />
                                                <path
                                                    d="M11 16a1 1 0 0 1-.71-.29l-3-3a1 1 0 1 1 1.42-1.42l2.29 2.3 4.29-4.3a1 1 0 0 1 1.42 1.42l-5 5A1 1 0 0 1 11 16"
                                                    style={{fill: "#2ca9bc"}}
                                                />
                                            </svg>
                                            {user?.first_name || "Guest"}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                            {user?.email || "No email provided"}
                                        </p>
                                    </div>
                                    {/* normal links */}
                                    <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg mx-auto">
                                        <div className="flex flex-col divide-y divide-gray-300 dark:divide-gray-600">
                                            {/* Navigation Items */}
                                            {navItems.map((item) => (
                                                <NavItem
                                                    key={item.href}
                                                    {...item}
                                                />
                                            ))}

                                            {/* User Actions */}
                                            {userActions.map((action) => (
                                                <NavItem
                                                    key={action.href}
                                                    {...action}
                                                />
                                            ))}

                                            {user ? (
                                                // If the user is logged in, show Log Out option
                                                <>
                                                    <NavLink
                                                        href={route("logout")}
                                                        method="post"
                                                        as="button"
                                                        className="block px-4 py-2 text-center bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
                                                    >
                                                        <i className="bi bi-box-arrow-right mr-2"></i>{" "}
                                                        Uitloggen
                                                    </NavLink>
                                                </>
                                            ) : (
                                                // If the user is not logged in, show Login and Register options
                                                <>
                                                    <NavLink
                                                        href="/login"
                                                        className="block px-4 py-2 text-center bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
                                                    >
                                                        <i className="bi bi-person-plus mr-2"></i>{" "}
                                                        Inlogen
                                                    </NavLink>
                                                    <NavLink
                                                        href="/register"
                                                        className="block px-4 py-2 text-center bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
                                                    >
                                                        <i className="bi bi-box-arrow-in-right mr-2"></i>{" "}
                                                        Register
                                                    </NavLink>
                                                </>
                                            )}
                                        </div>

                                        {/* Dark Mode Toggle */}
                                        <div className="mt-6 text-center">
                                            <DarkModeToggle/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown((prev) => !prev)
                            }
                            className="lg:hidden focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6 text-gray-900 dark:text-gray-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {showingNavigationDropdown && (
                        <div
                            className="hidden sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">

                            <NavLink
                                href="/dashboard"
                                className="text-base font-semibold hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                href="/voor-wie"
                                className="text-base font-semibold hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                Voor wie?
                            </NavLink>

                            <NavLink
                                href="/prijzen"
                                className="text-base font-semibold hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                Prijzen
                            </NavLink>

                            <NavLink
                                href="/toepassing"
                                className="text-base font-semibold hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                Aan de slag
                            </NavLink>

                            <NavLink
                                href="/demo"
                                className="text-base font-semibold hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                Demo
                            </NavLink>

                            <NavLink
                                href="/contact"
                                className="text-base font-semibold hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                Contact
                            </NavLink>

                            {user ? (
                                <>
                                    <NavLink
                                        href="/profile"
                                        className="block px-4 py-2 text-center bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
                                    >
                                        Profile
                                    </NavLink>
                                    <NavLink
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="block px-4 py-2 text-center bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
                                    >
                                        Uitloggen
                                    </NavLink>
                                </>
                            ) : (
                                <>
                                    <NavLink
                                        href="/login"
                                        className="block px-4 py-2 text-center bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
                                    >
                                        Inlogen
                                    </NavLink>
                                    <NavLink
                                        href="/register"
                                        className="block px-4 py-2 text-center bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
                                    >
                                        Register
                                    </NavLink>
                                </>
                            )}
                            <div className="px-4 py-2">
                                <DarkModeToggle/>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Header */}
            {header && (
                <header className="bg-white shadow dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            {/* Main Content */}
            <main>{children} </main>

            {/* Footer */}
            <div>
                <Footer/>
            </div>
        </div>
    );
}
