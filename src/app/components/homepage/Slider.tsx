'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function BlackShadeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/pure-nature-landscape-single-tree-in-green-field-free-photo.webp",
    "/pure-nature-landscape-single-tree-in-green-field-free-photo.webp",
    "/pure-nature-landscape-single-tree-in-green-field-free-photo.webp",
  ];

  const dynamicMessages = [
    "Mandir tak ka raasta, dil se shuru hota hai.",
    "Har yatra mein bhakti, har darshan mein shanti.",
    "Jahaan bhakti ho wahan doori nahi hoti.",
    "Mandir ka darshan, ab dil se har ghar tak.",
    "Safar mandir ka, lekin saath dil ka.",
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40 bg-opacity-30"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center gap-9 sm:gap-8 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-3xl transition duration-500 ease-in-out">
          {dynamicMessages[currentIndex]}
        </h1>
        <h5 className="text-lg max-w-2xl">
          Kyunki sacha darshan sirf aankhon se nahi, dil se hota hai — aur jab bhakti ki roshni jagti hai, toh mandir chahe kitni bhi door ho, uski mahsoos har pal hoti hai.
        </h5>
        <div className="flex gap-5 flex-wrap justify-center">
          <button className="bg-[#dd511b] text-white font-semibold rounded-full px-5 py-2">
            Book Your Spiritual Journey
          </button>
          <button className="border border-white text-white text-sm rounded-full px-3 py-1">
            Explore Mandir
          </button>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
