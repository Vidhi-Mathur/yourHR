import React, { useState } from 'react';
import { Briefcase, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative min-h-screen flex flex-col">
            <header className="bg-[#F3C3D7] text-black py-4 px-6 md:px-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <Briefcase size={36} strokeWidth={1.75} />
                    <span className="text-3xl font-bold">YourHR</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-lg hover:underline">Home</Link>
                    <Link to="/signup" className="text-lg hover:underline">Sign Up</Link>
                </nav>
                <button onClick={toggleSidebar} className="md:hidden">
                    <Menu size={36} strokeWidth={1.75} />
                </button>
            </header>
            <div className={`fixed inset-y-0 right-0 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out bg-[#e5f7ff] w-full z-50 md:hidden`}>
                <div className="p-6">
                    <button onClick={toggleSidebar} className="mb-6">
                        <X size={36} strokeWidth={1.75} />
                    </button>
                    <nav className="flex flex-col gap-6 items-center justify-center">
                        <Link to="/" className="text-lg hover:underline" onClick={toggleSidebar}>Home</Link>
                        <Link to="/signup" className="text-lg hover:underline" onClick={toggleSidebar}>Sign Up</Link>
                    </nav>
                </div>
            </div>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-[#F3C3D7] text-black py-6 px-6 md:px-12 flex items-center justify-between">
                <div className="text-sm">&copy; 2024 YourHR. All rights reserved.</div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/" className="hover:underline">Terms of Service</Link>
                    <Link to="/" className="hover:underline">Privacy Policy</Link>
                </nav>
            </footer>
        </div>
    );
};

export default Layout;