'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center  py-1">
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="Logo" className="h-24 w-auto" />
                        
                    </Link>
                    <div className="hidden md:flex space-x-8 text-black font-medium">
                        <Link href="#" className="hover:text-blue-600 transition">Home</Link>
                        <Link href="#" className="hover:text-blue-600 transition">About</Link>
                        <Link href="#" className="hover:text-blue-600 transition">Services</Link>
                        <Link href="#" className="hover:text-blue-600 transition">Pricing</Link>
                        <Link href="#" className="hover:text-blue-600 transition">Contact</Link>
                    </div>
                    {/* Mobile Button - Optional toggle button if you want responsive menu */}
                    <div className="md:hidden">
                        {/* You can add a menu icon here for mobile */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
