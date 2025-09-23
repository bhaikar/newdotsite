'use client'
import React from 'react';
import Image from 'next/image';

const Card = () => {
  return (
    <div className="flex flex-col gap-6">
      
      {/* First Card */}
      <div className="w-full max-w-sm bg-gray-800 shadow-lg shadow-black/20 p-4 flex items-center gap-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/30 cursor-pointer border border-gray-700">
        {/* Profile Image Circle */}
        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-gray-700 ring-2 ring-gray-600 hover:ring-gray-400 transition-all duration-300">
          <Image
            src="/images/OTImages/Tatvika.jpg"
            alt="Profile"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            width={80}
            height={80}
          />
        </div>
        
        {/* Contact Information */}
        <div className="flex-1 flex flex-col justify-center gap-2 h-full">
          {/* Name on top rectangle */}
          <div className="bg-gray-700 rounded-md px-3 py-1.5 text-white text-sm font-medium text-center hover:bg-gray-600 transition-colors duration-300">
            Tatvika
          </div>
          
          {/* Phone and Email in bottom rectangle */}
          <div className="bg-gray-700 rounded-md px-3 py-1.5 text-gray-300 text-xs hover:bg-gray-600 hover:text-white transition-all duration-300">
            <div className="text-center font-medium">+1 (555) 123-4567</div>
            <div className="text-center text-gray-400 hover:text-gray-300 transition-colors duration-300">tatvika@email.com</div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="w-full max-w-sm bg-gray-800 shadow-lg shadow-black/20 p-4 flex items-center gap-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/30 cursor-pointer border border-gray-700">
        {/* Profile Image Circle */}
        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-gray-700 ring-2 ring-gray-600 hover:ring-gray-400 transition-all duration-300">
          <Image
            src="/images/OTImages/Akash.png"
            alt="Profile"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            width={80}
            height={80}
         />
        </div>
        
        {/* Contact Information */}
        <div className="flex-1 flex flex-col justify-center gap-2 h-full">
          {/* Name on top rectangle */}
          <div className="bg-gray-700 rounded-md px-3 py-1.5 text-white text-sm font-medium text-center hover:bg-gray-600 transition-colors duration-300">
            Akash
          </div>
          
          {/* Phone and Email in bottom rectangle */}
          <div className="bg-gray-700 rounded-md px-3 py-1.5 text-gray-300 text-xs hover:bg-gray-600 hover:text-white transition-all duration-300">
            <div className="text-center font-medium">+1 (555) 987-6543</div>
            <div className="text-center text-gray-400 hover:text-gray-300 transition-colors duration-300">akash@email.com</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;