"use client";

import Image from "next/image";
import { MapPin, Calendar, Navigation } from "lucide-react";

const temples = [
  {
    id: 1,
    name: "Shree Khatu Shyam & Salasar Balaji",
    location: "Rajasthan",
    description:
      "Visit two renowned temples in Rajasthan – Shree Khatu Shyam, known for devotion to Barbarika, and Salasar Balaji, a sacred Hanuman temple.",
    distance: "Local travel between both temples (~110 km apart)",
    image: "/card/khatu_shyam.jfif", // Replace with actual image
  },
  {
    id: 2,
    name: "Prem Mandir, Vrindavan",
    location: "Vrindavan, Uttar Pradesh",
    description:
      "A stunning white marble temple dedicated to Lord Radha Krishna, known for its intricate carvings and musical fountain shows.",
    distance: "3 km from Vrindavan Railway Station",
    image: "/card/prem_mandir.jpeg", // Replace with actual image
  },
  {
    id: 3,
    name: "Har Ki Pauri, Haridwar",
    location: "Haridwar, Uttarakhand",
    description:
      "A sacred ghat on the Ganges, famous for Ganga Aarti, spiritual bathing, and devotion in one of India’s holiest cities.",
    distance: "2 km from Haridwar Railway Station",
    image: "/card/Haridwar_Har_Ki_Pauri_1620897109499.jpg", // Replace with actual image
  },
  {
    id: 4,
    name: "Neem Karoli Baba Ashram, Kainchi Dham",
    location: "Nainital, Uttarakhand",
    description:
      "Spiritual ashram of the revered saint Neem Karoli Baba, nestled in the Kumaon Hills – a peaceful retreat for seekers.",
    distance: "17 km from Nainital",
    image: "/card/Kainchi-Dham-Temple-Shri-Neeb-Karori-Baba.webp", // Replace with actual image
  },
];


const FeaturedTemples = () => {
  return (
    <section className=" bg-white">
      <div className="container w-full lg:max-w-7xl px-5 lg:px-0 mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#dd511b]">
            Top Divine <span className="text-gray-800">Destination</span> We Cover 
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the most sacred and famous temples of India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {temples.map((temple) => (
            <div
              key={temple.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 group overflow-hidden cursor-pointer flex flex-col border border-gray-100"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={temple.image}
                  alt={temple.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover transition-opacity" />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{temple.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 text-[#dd511b] mr-1" />
                  {temple.location}
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">{temple.description}</p>
                <div className="flex justify-between text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-[#dd511b]" />
                    {temple.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#dd511b]" />
                    Open
                  </span>
                </div>
                <button className="mt-auto w-full border border-[#dd511b] text-[#dd511b] py-2 px-4 rounded hover:bg-[#dd511b] hover:text-white transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="px-6 py-3 text-white bg-[#dd511b] rounded shadow hover:brightness-110 transition">
            View All Temples
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedTemples;
