'use client';
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MoveLeft, MoveRight } from "lucide-react";

function Slider2() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        "https://framerusercontent.com/images/XCG9dfSfl6ZdmnzyE5Jf0ppB0.png",
        "https://framerusercontent.com/images/WZBcHnKCV4GXhsvROvYR9bGJQA.png",
        "https://framerusercontent.com/images/6VpaccqjbR6q7C0GsQbNit3y80w.png",
        "https://framerusercontent.com/images/XCG9dfSfl6ZdmnzyE5Jf0ppB0.png",
        "https://framerusercontent.com/images/WZBcHnKCV4GXhsvROvYR9bGJQA.png",
        "https://framerusercontent.com/images/6VpaccqjbR6q7C0GsQbNit3y80w.png",
    ];

    return (


        <div className="p-5">
            <div className="flex justify-between">
                <h1 className="text-7xl px-5 font-semibold">Our Collections:</h1>
                <div className="flex gap-56 z-20">
                    <div className="flex gap-2 justify-center items-center">
                        <p>Previous</p>
                        <button
                            disabled={currentSlide === 0}
                            onClick={() => sliderRef.current?.slickPrev()}
                            className={`bg-white text-black font-semibold p-2 rounded-full shadow hover:bg-gray-200 transition ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >

                            <MoveLeft />
                        </button>
                    </div>

                    <div className="flex gap-2 justify-center items-center">
                        <p>Next</p>
                        <button
                            onClick={() => sliderRef.current?.slickNext()}
                            className="bg-white text-black font-semibold p-2 rounded-full shadow hover:bg-gray-200 transition"
                        >
                            <MoveRight />
                        </button>
                    </div>
                </div>

            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full mt-3">
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
                                    className={`rounded-lg w-full object-cover transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg`

                                    }
                                />
                                <p className="text-4xl">Summer</p>
                            </div>
                        );
                    })}
                </Slider>


            </div>
        </div>

    );
}

export default Slider2;
