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
    <div className="relative w-130 h-165 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group cursor-pointer overflow-hidden"
      style={{
        clipPath: 'polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px)',
        borderTopRightRadius: '20px',
        borderBottomLeftRadius: '20px'
      }}>

      {/* All the cool hover effects and styling */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="relative mx-auto mt-6 mb-4 group/image">
          <div className="w-100 h-80 rounded-2xl overflow-hidden border-2 border-slate-600 group-hover:border-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/30">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
              width={80}
              height={80}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
        </div>

        <span className="font-bold text-white text-center block [font-size:18px] sm:[font-size:20px] md:[font-size:24px] lg:[font-size:28px] mt-4 transition-colors duration-300 group-hover:text-cyan-300 tracking-wide">
          {name}
        </span>

        <p className="font-bold text-slate-300 block text-center mx-4 mt-4 flex-1 leading-relaxed [font-size:16px] sm:[font-size:18px] md:[font-size:20px] lg:[font-size:20px] transition-colors duration-300 group-hover:text-slate-200">
          {description}
        </p>

        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 group-hover:animate-bounce"></div>
        <div className="absolute top-16 right-12 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-1200 group-hover:animate-pulse"></div>
        <div className="absolute bottom-20 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-800 group-hover:animate-bounce"></div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default Card;