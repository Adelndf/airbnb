import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex group flex-col sm:flex-row sm:border-none border sm:hover:shadow-xl rounded-lg p-2 gap-2 transition-150 cursor-pointer">
      <div className="relative group-hover:opacity-80 h-28 w-full sm:h-24 sm:w-40 md:h-52 md:w-80 flex-shrink-0 rounded-xl transition-150 overflow-hidden">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col justify-between flex-grow gap-4">
        <div className="relative">
          <p className="text-xs text-gray-500">{location}</p>
          <h2 className="font-bold text-lg md:text-2xl">{title}</h2>
          <div className="border-b border-gray-300 pt-4 w-16" />
          <p className="text-xs text-gray-500 pt-2">{description}</p>
          <h3 className="absolute top-0 right-0">
            <HeartIcon className="h-5 sm:h-6 text-gray-600" />
          </h3>
        </div>
        <div className="flex items-end">
          <div className="flex flex-grow items-center text-sm md:text-base">
            <span>
              <StarIcon className="h-5 text-red-400" />
            </span>{" "}
            <h2 className="font-bold">{star}</h2>
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold">{price}</h1>
            <h2 className="text-sm text-right">{total}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
