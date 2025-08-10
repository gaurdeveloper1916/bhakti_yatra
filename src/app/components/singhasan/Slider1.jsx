'use client';
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Slider1() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const images = [
        "./selected/SINGLE CHAIR .png",
        "./selected/front sofa (4).png",
        "./selected/center_table.png",

        "./selected/central_table.png",
        // "./selected/central_table.png"
    ];

    return (
        <div
            className=" h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url('./6857387.jpg')` }}
        >

            <div className="relative z-10 flex flex-col justify-center items-center h-full">
                <Slider ref={sliderRef} {...settings} className="w-full px-4">
                    {images.map((src, index) => {
                        const isLeftmost = index === currentSlide;
                        return (
                            <div
                                key={index}
                                className="px-2 transition-transform duration-500 ease-in-out"
                            >
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className={`rounded-lg w-full object-cover transition-all duration-500 ease-in-out ${isLeftmost
                                            ? "scale-90 opacity-100 h-[370px]"
                                            : "scale-100 opacity-100 h-[400px]"
                                        }`}
                                />
                            </div>
                        );
                    })}
                </Slider>

                <div className="absolute bottom-32 left-48 flex gap-4 z-20">
                    <button
                            disabled={currentSlide === 0}
                            onClick={() => sliderRef.current?.slickPrev()}
                            className={`bg-white text-black font-semibold p-2 rounded-full shadow hover:bg-gray-200 transition ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >

                        <ChevronLeft />
                    </button>
                    <button
                            onClick={() => sliderRef.current?.slickNext()}
                            className="bg-white text-black font-semibold p-2 rounded-full shadow hover:bg-gray-200 transition"
                        >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Slider1;
