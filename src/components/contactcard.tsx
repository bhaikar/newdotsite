'use client'
import React from 'react';
import Image from 'next/image';

const Card = () => {
  const cardData = [
    {
      id: 1,
      name: "Tatvika",
      phone: "+1 (555) 123-4567",
      image: "/images/OTImages/Tatvika.jpg"
    },
    {
      id: 2,
      name: "Akash",
      phone: "+1 (555) 987-6543",
      image: "/images/OTImages/Akash.png"
    }
  ];

  return (
    <div className="w-full px-4 py-6">
      {/* Container with fixed grid - single column layout */}
      <div className="flex flex-col gap-4 sm:gap-6 max-w-lg mx-auto">
        
        {cardData.map((person) => (
          <div 
            key={person.id}
            className="group w-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg shadow-black/25 p-4 sm:p-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-3 sm:gap-4 rounded-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl hover:shadow-black/40 cursor-pointer border border-gray-700/50 hover:border-gray-600 backdrop-blur-sm"
          >
            {/* Profile Image Circle */}
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-600 to-gray-700 ring-2 ring-gray-600 group-hover:ring-blue-400 transition-all duration-300 shadow-lg">
              <Image
                src={person.image}
                alt={`${person.name} Profile`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={80}
                height={80}
                priority
              />
              {/* Overlay gradient for better image blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Contact Information */}
            <div className="flex-1 w-full sm:w-auto flex flex-col justify-center gap-2 sm:gap-2.5 h-full text-center sm:text-left lg:text-center xl:text-left">
              {/* Name section */}
              <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg px-3 py-2 text-white text-sm sm:text-base font-medium hover:from-gray-600 hover:to-gray-500 transition-all duration-300 shadow-md group-hover:shadow-lg">
                <div className="truncate">{person.name}</div>
              </div>

              {/* Contact details section */}
              <div className="bg-gradient-to-r from-gray-700/80 to-gray-600/80 rounded-lg px-3 py-2 text-gray-300 text-xs sm:text-sm hover:from-gray-600/80 hover:to-gray-500/80 hover:text-white transition-all duration-300 shadow-md group-hover:shadow-lg backdrop-blur-sm">
                <div className="font-medium text-center sm:text-left lg:text-center xl:text-left mb-1 truncate">
                  {person.phone}
                </div>
                  </div>
            </div>

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Card;