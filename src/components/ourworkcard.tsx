'use client';
import React from 'react';
import Image from 'next/image';

const Card = ({
  name = "Walter",
  description = "I'm Walter, a multidisciplinary designer...",
  imageSrc = "/images/walter.png",
  imageAlt = "Profile"
}) => {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-130 h-auto min-h-[265px] sm:min-h-[300px] md:min-h-[350px] lg:h-165 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group cursor-pointer overflow-hidden mx-auto rounded-lg"
      style={{
        clipPath: 'polygon(15px 0%, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0% 15px)'
      }}>

      {/* All the cool hover effects and styling */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      <div className="relative z-10 flex flex-col h-full p-3 sm:p-4 md:p-5 lg:p-6">
        <div className="relative mx-auto mt-2 sm:mt-3 md:mt-4 lg:mt-6 mb-3 sm:mb-4 group/image">
          <div className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-100 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-slate-600 group-hover:border-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/30">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
              width={80}
              height={80}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
        </div>

        <span className="font-semi-bold text-white text-center block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2 sm:mt-3 md:mt-4 transition-colors duration-300 group-hover:text-cyan-300 tracking-wide">
          {name}
        </span>

       <p className=" text-slate-300 block text-center mx-2 mt-2 flex-1 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] break-words transition-colors duration-300 group-hover:text-slate-200">
          {description}
        </p>

        {/* Floating particles - adjusted for mobile */}
        <div className="absolute top-6 sm:top-8 md:top-10 left-6 sm:left-8 md:left-10 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 group-hover:animate-bounce"></div>
        <div className="absolute top-8 sm:top-12 md:top-16 right-8 sm:right-10 md:right-12 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-1200 group-hover:animate-pulse"></div>
        <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-4 sm:left-6 md:left-8 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-800 group-hover:animate-bounce"></div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default Card;  