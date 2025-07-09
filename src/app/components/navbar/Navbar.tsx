'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 w-full h-28 bg-white/10 backdrop-blur-md shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-1 h-full">
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="Logo" className="h-24 w-auto" />
                    </Link>
                    <div className="hidden md:flex space-x-8 text-white font-medium">
                        <Link href="#" className="hover:text-blue-400 transition">Home</Link>
                        <Link href="#" className="hover:text-blue-400 transition">About</Link>
                        <Link href="#" className="hover:text-blue-400 transition">Services</Link>
                        <Link href="#" className="hover:text-blue-400 transition">Pricing</Link>
                        <Link href="#" className="hover:text-blue-400 transition">Contact</Link>
                    </div>
                    <div className="md:hidden">
                        {/* Mobile menu icon (optional) */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
