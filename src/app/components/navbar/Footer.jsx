"use client";
import Link from "next/link";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#dd511b] text-white pt-10 pb-5 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <img src="/logo.png" alt="YatraKarlo Logo" className="h-14 mb-3" />
          <p className="text-white/90 mb-3">
            Your companion for spiritual temple tours. Trusted, affordable, and heartfelt journeys across India’s divine destinations.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
              <Instagram size={24} />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 text-yellow-100 tracking-wide">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="#home" className="hover:underline">Home</Link></li>
            <li><Link href="#why-choose-us" className="hover:underline">Why Choose Us</Link></li>
            <li><Link href="#itinerary" className="hover:underline">Itinerary</Link></li>
            <li><Link href="#featured-temples" className="hover:underline">Temples</Link></li>
            <li><Link href="#faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="#booking" className="hover:underline">Book Now</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-4 text-yellow-100 tracking-wide">Contact Us</h4>
          <div className="flex items-center gap-3 mb-2">
            <Mail size={20} />
            <span>info@yatrakarlo.com</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <Phone size={20} />
            <span>+91-8130222583</span>
          </div>
          <div className="mt-3">
            <a href="https://wa.me/918130222583" target="_blank" rel="noopener noreferrer" className="text-white bg-green-600 px-3 py-1 rounded-full hover:bg-green-700 transition">
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-300 mt-8 pt-4 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} YatraKarlo. All Rights Reserved.
      </div>
    </footer>
  );
}
