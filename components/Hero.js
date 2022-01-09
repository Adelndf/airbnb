import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-full relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      <video
        src="/vid/hero-vid.mp4"
        className="h-full w-full object-cover"
        loop={true}
        autoPlay={true}
        muted
      />
      <div className="absolute font-bold text-sm sm:text-base md:text-2xl top-0 left-0 z-10 w-full h-full flex flex-col items-center justify-center space-y-4">
        <h1 className="text-white capitalize">
          Not sure where to go?{" "}
          <span className="text-base bg-red-400 p-1">Perfect..</span>
        </h1>
        <div className="bg-gray-100 py-2 px-8 rounded-full text-purple-500 shadow-sm sm:hover:shadow-xl uppercase cursor-pointer md:text-lg active:scale-90 transition-150">
          I'm flexible
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-red-500 opacity-30" />
      <div className="max-w-[1400px] w-full mx-auto"></div>
    </div>
  );
}

export default Hero;
