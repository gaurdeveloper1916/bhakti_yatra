"use client";
import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 w-full bg-[#dd511b] text-white py-3 px-4 flex justify-between items-center z-50 shadow-lg">
      <span className="font-semibold">Plan Your Spiritual Journey Today</span>
      <Link
        href="#booking"
        className="bg-white text-[#dd511b] font-bold px-4 py-2 rounded-full hover:bg-yellow-100 transition"
      >
        Book Now
      </Link>
    </div>
  );
}
