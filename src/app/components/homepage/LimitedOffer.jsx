"use client";
import { useEffect, useState } from "react";

export default function LimitedOffer() {
  const [seconds, setSeconds] = useState(86400); // 24 hours countdown

  useEffect(() => {
    if (seconds <= 0) return; // Stop if countdown finished

    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;

    const pad = (num) => String(num).padStart(2, "0");

    return `${pad(h)}h ${pad(m)}m ${pad(sec)}s`;
  };

  return (
    <section className="bg-[#dd511b] text-white py-10 mt-24 text-center">
      <h2 className="text-2xl font-bold mb-2">Special Festival Offer – 10% Off!</h2>
      <p className="mb-4">Book before the timer runs out and save on your yatra.</p>
      <div
        className={`text-3xl font-mono transition-transform ${
          seconds <= 10 ? "animate-pulse scale-110" : ""
        }`}
      >
        {seconds > 0 ? formatTime(seconds) : "Offer expired"}
      </div>
    </section>
  );
}
