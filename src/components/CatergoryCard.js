import React from "react";
import rectangle from "../../public/Assets/rectangle-shape.png"
import Image from "next/image";


function CatergoryCard({ iconUrl, title, description, highlighted }) {
  return (
    <div
      className={`flex relative flex-col gap-4 items-center p-[1rem] sm:p-[2.5rem] ${
        highlighted ? "bg-white shadow-md rounded-[2.5rem]" : ""
      }`}
    >
      <div>
        <Image src={iconUrl} alt="category card icon" className="h-[80px]" />
      </div>
      <p className="text-subtitle text-[1.2rem] font-[600] font-Monserrat">{title}</p>
      <p className="text-lightGray text-[16px] sm:ml-2">{description}</p>
      {highlighted && (
        <div className="absolute -bottom-8 -left-10 -z-10">
          <Image src={rectangle} alt="rectangle shape" />
        </div>
      )}
    </div>
  );
}

export default CatergoryCard;