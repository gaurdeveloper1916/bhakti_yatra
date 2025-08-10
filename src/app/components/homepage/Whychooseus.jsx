"use client";

const features = [
  {
    img: "/icons/bus-lane.png",
    title: "Comfortable",
    subtitle: "Group Travel",
    color: "#710200",
  },
  {
    img: "/icons/lunch.png",
    title: "Meals",
    subtitle: "Home Cooked Meals",
    color: "#710200",
  },
  {
    img: "/icons/best-price.png",
    title: "Affordable",
    subtitle: "Bhakti Packages",
    color: "#710200",
  },
  {
    img: "/icons/badge.png",
    title: "Expert Temple",
    subtitle: "Guides",
    color: "#710200",
  },
];

export default function WhyChooseUs() {
  return (
    <div  className="bg-[#fff5dc]  flex flex-col justify-between items-center p-16" id="why-choose-us">
      <h1 className="text-[#811300] text-4xl font-extralight">Why Choose Us?</h1>
      <div className="flex justify-around mx-10 items-center mt-10 w-full lg:gap-0 gap-10 lg:w-6xl  flex-wrap">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex justify-between items-center flex-col gap-3 text-center"
          >
            <img
              className="w-20"
              src={feature.img}
              alt={feature.title}
              loading="lazy"
            />
            <p className="font-semibold" style={{ color: feature.color }}>
              {feature.title} <br /> {feature.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
    