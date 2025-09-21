'use client';
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Card from '@/components/otcard';

// Add this team data at the top of your component
const fourthYear = [
  {
    name: "Tatvika Sharma",
    description: "President",
    imageSrc: "/images/OTImages/Tatvika.jpg",
    imageAlt: "Walter Smith"
  },
  {
    name: "Akash Hariharan", 
    description: "I'm Sarah, a UX/UI designer passionate about creating intuitive and accessible digital experiences. I specialize in user research and design systems.",
    imageSrc: "/images/sarah.png",
    imageAlt: "Sarah Johnson"
  },
  {
    name: "Michael Chen",
    description: "I'm Michael, a full-stack developer who loves building scalable web applications. I specialize in React, Node.js, and cloud architecture.",
    imageSrc: "/images/michael.png", 
    imageAlt: "Michael Chen"
  },
  {
    name: "Emma Davis",
    description: "I'm Emma, a digital marketing specialist focused on data-driven strategies and brand storytelling. I excel in SEO and content marketing.",
    imageSrc: "/images/emma.png",
    imageAlt: "Emma Davis"
  },
  {
    name: "Alex Rodriguez",
    description: "I'm Alex, a travel consultant with 8 years of experience crafting unforgettable journeys. I specialize in luxury travel and adventure tourism.",
    imageSrc: "/images/alex.png",
    imageAlt: "Alex Rodriguez"
  },
  {
    name: "Lisa Wang",
    description: "I'm Lisa, a travel photographer and content creator who captures the essence of destinations. I help clients discover hidden gems.",
    imageSrc: "/images/lisa.png",
    imageAlt: "Lisa Wang"
  },
  {
    name: "James Wilson",
    description: "I'm James, a destination specialist focused on sustainable and eco-friendly travel. I create responsible tourism experiences.",
    imageSrc: "/images/james.png",
    imageAlt: "James Wilson"
  },
  {
    name: "Maya Patel",
    description: "I'm Maya, a cultural travel expert who designs immersive experiences. I specialize in culinary tours and authentic cultural exchanges.",
    imageSrc: "/images/maya.png",
    imageAlt: "Maya Patel"
  }
];

const thirdYear = [
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
      imageSrc: "/images/john.png",
      imageAlt: "John Doe"
      },
      
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
      imageSrc: "/images/john.png",
      imageAlt: "John Doe"
      },
      
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
      imageSrc: "/images/john.png",
      imageAlt: "John Doe"
      },
      
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
      imageSrc: "/images/john.png",
      imageAlt: "John Doe"
      },
      
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
      imageSrc: "/images/john.png",
      imageAlt: "John Doe"
      },
      
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
      imageSrc: "/images/john.png",
      imageAlt: "John Doe"
      },
      
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
      imageSrc: "/images/john.png",
      imageAlt: "John Doe"
      },
];

const secondYear = [
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
        imageSrc: "/images/john.png",
        imageAlt: "John Doe"
        },
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
        imageSrc: "/images/john.png",
        imageAlt: "John Doe"
        },
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
        imageSrc: "/images/john.png",
        imageAlt: "John Doe"
        },
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
        imageSrc: "/images/john.png",
        imageAlt: "John Doe"
        },
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
        imageSrc: "/images/john.png",
        imageAlt: "John Doe"
        },
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
        imageSrc: "/images/john.png",
        imageAlt: "John Doe"
        },
    {
      name: "John Doe",
      description: "I'm John, a passionate developer with a knack for problem-solving and creating efficient code.",
        imageSrc: "/images/john.png",
        imageAlt: "John Doe"
        },
    ];
    
const OurTeam = () => {
    return (
        <div className="w-full min-h-screen bg-slate-900">
            <Navbar />
            <div className="w-full min-h-screen flex flex-col items-center pt-20 pb-10">
                <h1 className="text-4xl font-bold text-white mb-10">Our Team</h1>
                
                {/* Replace your 8 identical cards with this: */}
                <h2 className="text-2xl font-semibold text-white mb-6">4th Years</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
                    {fourthYear.map((member, index) => (
                        <Card 
                            key={index}
                            name={member.name}
                            description={member.description}
                            imageSrc={member.imageSrc}
                            imageAlt={member.imageAlt}
                        />
                    ))}
                </div>
                    <h2 className='text-2x1 font-semibold text-white mb-6'>3rd Years</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
                        {thirdYear.map((member, index) => (
                            <Card 
                                key={index}
                                name={member.name}
                                description={member.description}
                                imageSrc={member.imageSrc}
                                imageAlt={member.imageAlt}
                            />
                        ))}
                    </div>
                    <h2 className='test-2x1 font-semibold text-white mb-6'>2nd Years</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
                        {secondYear.map((member, index) => (
                            <Card
                                key={index}
                                name={member.name}
                                description={member.description}
                                imageSrc={member.imageSrc}
                                imageAlt={member.imageAlt}
                            />
                        ))}
                        </div>

            </div>
            <Footer />
        </div>
    );
}

export default OurTeam;