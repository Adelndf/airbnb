import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="hover:scale-105 transition-300 cursor-pointer">
      <div className="relative h-52 w-52 sm:h-72 sm:w-72">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <p className="font-bold capitalize py-2 sm:text-xl">{title}</p>
      </div>
    </div>
  );
}

export default MediumCard;
