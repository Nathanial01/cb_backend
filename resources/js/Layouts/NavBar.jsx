import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
import DarkModeToggle from "@/Components/DarkModeToggle";
import NotificationBar from "@/Components/NotificationBar";
import Footer from "@/Components/Footer";

export default function AuthenticatedLayout({ header, children }) {
    const { auth } = usePage().props; // Get user authentication data
    const user = auth.user;

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

    const accountDropdownRef = useRef(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
    const toggleAccountDropdown = () => setIsAccountDropdownOpen((prev) => !prev);

    const closeDropdowns = () => setIsAccountDropdownOpen(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!accountDropdownRef.current?.contains(event.target)) {
                closeDropdowns();
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    // Navigation Links
    const navLinks = [
        { href: "/dashboard", label: "Home" },
        { href: "/voor-wie", label: "Voor wie?" },
        { href: "/prijzen", label: "Prijzen" },
        { href: "/toepassing", label: "Aan de slag" },
        { href: "/demo", label: "Demo" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <div className="min-h-screen bg-gray-200 dark:bg-gray-900">
            <NotificationBar/>

            {/* Sticky Navigation */}
            <nav className="sticky top-0 py-6 nav-bar-dark-mode z-50">
                <div className="mx-auto flex justify-between items-center px-4 w-full">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/">
                            <ApplicationLogo className="h-9 w-auto fill-current text-dark-mode"/>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="w-14 h-14 relative focus:outline-none bg-inherit rounded text-dark-mode-hovers"
                        >
                            <div
                                className="block w-3 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span
                                className={`hamburger-menu-dark-mode ${
                                    isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                                }`}
                            ></span>
                                <span
                                    className={`hamburger-menu-dark-mode ${
                                        isMobileMenuOpen ? "opacity-0" : ""
                                    }`}
                                ></span>
                                <span
                                    className={`hamburger-menu-dark-mode ${
                                        isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                                    }`}
                                ></span>
                            </div>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
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

                    {/* User & Dark Mode */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {auth?.user ? (
                            <form method="POST" action={route("logout")}>
                                <button
                                    type="submit"
                                    className="logout-link-dark-mode-hovers"
                                >
                                    Uitloggen
                                </button>
                            </form>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="logout-link-dark-mode-hovers"
                                >
                                    Inloggen
                                </Link>
                                <Link
                                    href="/register"
                                    className="register-link-dark-hovers"
                                >
                                    Account aanmaken
                                </Link>
                            </>
                        )}
                        <DarkModeToggle/>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        id="mobile-menu"
                        className="lg:hidden relative overflow-hidden text-dark-mode-reverse p-8"
                    >
                        <div className="flex flex-col space-y-2">
                            <Link
                                href="/dashboard"
                                className="flex justify-between items-center text-dark-mode-hovers"
                            >
                                Home
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-dark-mode"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="/voor-wie"
                                className="flex justify-between items-center text-dark-mode-hovers"
                            >
                                Voor wie?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-dark-mode"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="/prijzen"
                                className="flex justify-between items-center text-dark-mode-hovers"
                            >
                                Prijzen
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-dark-mode"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="/toepassing"
                                className="flex justify-between items-center text-dark-mode-hovers"
                            >
                                Aan de slag
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-dark-mode"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="/demo"
                                className="flex justify-between items-center text-dark-mode-hovers"
                            >
                                Demo
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-dark-mode"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>

                            {/* Authentication Links */}
                            {auth?.user ? (
                                <form method="POST" action={route("logout")}>
                                    <button
                                        type="submit"
                                        className="logout-link-dark-mode-hovers"
                                    >
                                        Uitloggen
                                    </button>
                                </form>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="logout-link-dark-mode-hovers"
                                    >
                                        Inloggen
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="register-link-dark-hovers"
                                    >
                                        Account aanmaken
                                    </Link>
                                </>
                            )}
                        </div>
                        <div className="mt-12 flex justify-center">
                            <DarkModeToggle/>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="container mx-auto p-6">{children}</main>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
