'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react' // For hamburger & close icons

const Navbar = () => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  // Hide/Show on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShow(false)
      } else {
        setShow(true)
      }
      setLastScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Trip Plan', href: '#itinerary' },
    { name: 'Temples', href: '#featured-temples' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Book Now', href: '#booking' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full lg:h-24 h-16 
        backdrop-blur-md shadow-md transition-transform duration-300 bg-black/10
        ${show ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo */}
          <Link href="#home" onClick={handleLinkClick} className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="lg:h-[90px] h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="hover:text-orange-200 transition font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white z-50">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#dd511b] shadow-lg animate-slideDown">
          <div className="flex flex-col space-y-4 py-6 px-6 text-white font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="hover:text-orange-200 transition font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
