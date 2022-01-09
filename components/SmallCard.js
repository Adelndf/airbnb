import Image from "next/image";
import React from "react";

function SmallCard({ img, location, distance }) {
  return (
    <div className="bg-gray-100 flex p-2 space-x-4 rounded-md sm:hover:scale-105 hover:bg-gray-200 transition-300 cursor-pointer">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2 className="font-bold">{location}</h2>
        <p className="text-gray-500 text-sm">{distance}</p>
      </div>
    </div>
  );
}

export default SmallCard;
