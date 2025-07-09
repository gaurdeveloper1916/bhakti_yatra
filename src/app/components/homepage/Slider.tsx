'use client'
import React, { useState } from "react";
import Image from "next/image";

export default function BlackShadeSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1504159506876-f8338247a14a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    ];

    const dynamicMessages = [
        "Mandir tak ka raasta, dil se shuru hota hai.",
        "Har yatra mein bhakti, har darshan mein shanti.",
        "Jahaan bhakti ho wahan doori nahi hoti.",
        "Mandir ka darshan, ab dil se har ghar tak.",
        "Safar mandir ka, lekin saath dil ka.",
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-[80vh]">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />

                    </div>
                ))}
            </div>
            <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"
                            }`}
                    />
                ))}
            </div>
            <button
                onClick={handlePrev}
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1L1 5l4 4"
                        />
                    </svg>
                </span>
            </button>
            <button
                onClick={handleNext}
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 9l4-4-4-4"
                        />
                    </svg>
                </span>
            </button>
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center gap-9 sm:gap-8 bg-black bg-opacity-50 py-4">
                <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-white text-center max-w-3xl">
                    {dynamicMessages[currentIndex]}
                </h1>
                <h5 className="text-lg text-white text-center max-w-2xl max-[445px]:px-3">
                    Kyunki sacha darshan sirf aankhon se nahi, dil se hota hai — aur jab bhakti ki roshni jagti hai, toh mandir chahe kitni bhi door ho, uski mahsoos har pal hoti hai.
                </h5>
                <div className="w-full flex flex-row flex-nowrap justify-center item-center gap-5">
                    <button
                        // href="/donate_now"
                        // text="Donate Now"
                        // color="red-600"
                        className="bg-[#dd511b] text-white text-semibold rounded-full px-5 py-2"
                    >Book Your Spiritual Journey</button>
                    <button
                        // href="/contact_us"
                        // text="Contact Us"
                        // color="yellow-600"
                        className=" text-white text-sm rounded-full px-3 py-1 border"
                    >Explore Mandir</button>
                </div>
            </div>
        </div>
    );
}
