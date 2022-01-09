import Image from "next/image";
import React from "react";

function LargCard({ img, title, desc, btnText }) {
  return (
    <section className="relative">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="absolute min-w-[300px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center sm:left-12 sm:-translate-x-0 sm:text-left">
        <h1 className="font-bold text-xl sm:text-4xl">{title}</h1>
        <p className="text-base sm:text-lg">{desc}</p>
        <div className="inline-flex my-4 py-1 px-3 bg-gray-900 hover:bg-gray-800 rounded-full text-white shadow-xl cursor-pointer active:scale-90 transition-150">
          {btnText}
        </div>
      </div>
    </section>
  );
}

export default LargCard;
