import React from "react";
import CatergoryCard from "./CatergoryCard";
import satellite from "../../public/Assets/satellite.png"
import aircraft from "../../public/Assets/aircraft.png"
import mic from "../../public/Assets/mic.png"
import cog from "../../public/Assets/cog.png"


function CategorySection() {
  const features = [
    {
      id: 0,
      iconUrl: satellite,
      title: "Calculated Weather",
      description:
        "Precision meets prediction: Unleash accurate weather insights with our web service – your go-to for calculated forecasts and meteorological mastery.",
      highlighted: false,
    },
    {
      id: 1,
      iconUrl: aircraft,
      title: "Best Flights",
      description:
        
    "Elevate your travel with us, your gateway to seamless, affordable, and optimal flight experiences worldwide.",
      highlighted: true,
    },
    {
      id: 2,
      iconUrl: mic,
      title: "Local Events",
      description:
        "Explore local excitement effortlessly with our web service – your key to curated and unforgettable community events.",
      highlighted: false,
    },
    {
      id: 3,
      iconUrl: cog,
      title: "Customization",
      description:
        "Empower your experience with our web service – delivering unparalleled customization to meet your unique needs and preferences seamlessly.",
      highlighted: false,
    },
  ];
  return (
    <section className="mt-28 mr-20 ml-20">
      <p className="volkhov sm:text-[3.125rem] text-[2.125rem] text-title font-[300] sm:font-[700] text-center font-Monserrat">
        We Offer Best Services
      </p>
      <div className="flex flex-col gap-4 md:flex-row justify-between w-full mt-16">
        {features.map((feature) => (
          <CatergoryCard
            key={feature.id}
            iconUrl={feature.iconUrl}
            title={feature.title}
            description={feature.description}
            highlighted={feature.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;