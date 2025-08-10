"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Clock,
  Bus,
  Hotel,
  Coffee,
  Landmark,
  Utensils,
  BedDouble,
  Repeat,
} from "lucide-react";

const itinerary = [
  {
    title: "Pickup & Travel",
    description: "We’ll pick you up from your chosen location and begin an overnight journey to the temple city.",
    icon: Bus,
    image: "/indian-city-buildings-scene_23-2151823120.avif",
  },
  {
    title: "Arrival & Check-In",
    description: "Reach the hotel in the early morning. Freshen up and relax after check-in.",
    icon: Hotel,
    image: "/view-world-monument-celebrate-world-heritage-day_23-2151297147.avif",
  },
  {
    title: "Breakfast & Temple Visit",
    description: "Enjoy breakfast at the hotel, then head for temple darshan. Guided help is available if needed.",
    icon: Landmark,
    image: "/indian-city-buildings-scene_23-2151823120.avif",
  },
  {
    title: "Lunch Break",
    description: "After darshan, return to the hotel or nearby spot for a peaceful lunch.",
    icon: Utensils,
    image: "/view-world-monument-celebrate-world-heritage-day_23-2151297147.avif",
  },
  //   {
  //     title: "Free Time / Local Sightseeing",
  //     description: "Relax at the hotel or explore local attractions if time permits.",
  //     icon: BedDouble,
  //     image: "/images/sightseeing.jpg",
  //   },
  {
    title: "Return Journey",
    description: "Start your journey back and get dropped at your original pickup location.",
    icon: Repeat,
    image: "/indian-city-buildings-scene_23-2151823120.avif",
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const TempleItinerary = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <section className="bg-white py-20 px-4 " id="itinerary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#dd511b] mb-12">
          Your Temple Tour – Step by Step
        </h2>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="relative border-l-2 border-[#dd511b] pl-6 space-y-10 w-full lg:w-1/2">
            {itinerary.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  custom={index}
                  variants={fadeInVariant}
                >
                  <div className="absolute -left-13.5 top-2 w-14 h-14 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="w-full lg:w-1/2">
            <Slider {...settings}>
              {itinerary.map((step, idx) => (
                <div key={idx} className="relative h-64 sm:h-80 lg:h-96">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleItinerary;
