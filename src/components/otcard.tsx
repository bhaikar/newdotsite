'use client';
import React from 'react';
import Image from 'next/image';

const Card = ({ 
  name = "Person", 
  description = "Job Title",
  imageSrc = "/images/person.png",
  imageAlt = "Person",
}) => {
  return (
    <div className="relative w-55 h-75 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 rounded-2xl shadow-2xl shadow-slate-900/50 transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group cursor-pointer overflow-hidden">
      
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse rounded-2xl"></div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      {/* Top border accent */}
      <div className="w-3/5 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-b-2xl transition-all duration-300 group-hover:w-4/5 group-hover:shadow-lg group-hover:shadow-cyan-400/50"></div>
      
      {/* Profile Image */}
      <div className="relative mx-auto mt-6 mb-4 group/image">
         <div className="w-35 h-35 rounded-full overflow-hidden border-2 border-slate-600 group-hover:border-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/30 mx-auto">
          <Image
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
            width={64}
            height={64}
          />
        </div>
        {/* Image glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
      </div>

      {/* Person Name */}
      <span className="block text-center font-bold text-white text-base pt-2 transition-colors duration-300 group-hover:text-cyan-300 tracking-wide">
        {name}
      </span>

      {/* Job Title */}
      <p className="block text-center font-semibold text-[20px] text-slate-300 text-xs pt-1 transition-colors duration-300 group-hover:text-slate-200">
        {description}
      </p>      
      {/* Floating particles effect */}
      <div className="absolute top-8 left-6 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 group-hover:animate-bounce"></div>
      <div className="absolute top-12 right-8 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-1200 group-hover:animate-pulse"></div>
      <div className="absolute bottom-16 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-800 group-hover:animate-bounce"></div>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
    </div>
  );
}
export default Card;