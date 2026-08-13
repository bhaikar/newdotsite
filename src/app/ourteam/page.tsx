'use client';
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Card from '@/components/otcard';

// Add this team data at the top of your component
const Convener = [
  {
    name: "Mr. Keerthi Kumar H M",
    description: " Assistant Professor, Dept. of CSE",
    imageSrc: "/images/OTImages/keerthi.jpeg",
    imageAlt: "Mr. Keerthi Kumar H M"
  },
  {
    name: "Mr. Hemanth T S",
    description: " Assistant Professor, Dept. of CSE",
    imageSrc: "/images/OTImages/Hemanth.jpg",
    imageAlt: "Mr. Hemanth T S"
  }
];
const fourthYear = [
  {
    name: "Tilak Shetty",
    description: "President",
    imageSrc: "/images/OTImages/tilak.jpg",
    imageAlt: "tilak"
  },
  {
    name: "Yashika D", 
    description: "Vice President",
    imageSrc: "/images/OTImages/Yash.png",
    imageAlt: "yashika"
  },
  {
    name: "Namrath",
    description: "Digital Head &                  Media Director",
    imageSrc: "/images/OTImages/namrath.png", 
    imageAlt: "namrath"
  },
  {
    name: "Nithin H C",
    description: "General Secretary",
    imageSrc: "/images/OTImages/Nithin.png",
    imageAlt: "nithin"
  },
  {
    name: "Prasad Malegaon",
    description: "General Secretary",
    imageSrc: "/images/OTImages/PP.png",
    imageAlt: "prasad"
  },
  {
    name: "Anuj",
    description: "Technical Director",
    imageSrc: "/images/OTImages/Anuj.png",
    imageAlt: "anuj"
  },
  {
    name: "Prathyusha v Kumar",
    description: "Head of Internal Affairs",
    imageSrc: "/images/OTImages/prathyusha.jpeg",
    imageAlt: "prathyusha"
  },
  {
    name: "Mariam Noorani",
    description: "Editorial Head",
    imageSrc: "/images/OTImages/Mariam.png",
    imageAlt: "mariam"
  },
  
  {
    name: "Geetha H",
    description: "Creative Director",
    imageSrc: "/images/OTImages/Geetha.jpg",
    imageAlt:   "Geetha H"
  }
];

const thirdYear  = [
    
    {
      name: "DHEERAJ KUMAR BHAIKAR",
      description: "Student Member",
        imageSrc: "/images/OTImages/dheeraj.png",
        imageAlt: "DHEERAJ KUMAR BHAIKAR"
        },
    {
      name: "G Eramma",
      description: "Student Member",
        imageSrc: "/images/OTImages/Eramma.jpg",
        imageAlt: "eramma"
        },
    {
      name: "Punyashree",
      description: "Student Member",
        imageSrc: "/images/OTImages/Punya.jpg",
        imageAlt: "Punyashree"
        },
    {
      name: "Shasank",
      description: "Student Member",
        imageSrc: "/images/OTImages/Shashank.jpg",
        imageAlt: "Shasank"
        },
   
    ];

const secondYear= [
    {
      name: "Akshay K S",
      description: "Student Member",
        imageSrc: "/images/OTImages/Akshay.jpg",
        imageAlt: "Akshay"
        },
    {
      name: "Huthrika M",
      description: "Student Member",
        imageSrc: "/images/OTImages/Huthrika.jpg",
        imageAlt: "Huthrika"
        },
    {
      name: "Kishor E",
      description: "Student Member",
        imageSrc: "/images/OTImages/kishor.jpeg",
        imageAlt: "Kishor"
        },

          {
        name: "J S Nidhish ",
        description: "Student Member",
          imageSrc: "/images/OTImages/Nidesh.jpg",
          imageAlt: "Nidhish"
          },
    {
      name: "Parinith G",
      description: "Student Member",
        imageSrc: "/images/OTImages/Parinith.jpg",
        imageAlt: "Parinith"
        }
    

    ];

    
const OurTeam = () => {
    return (
        <div className="main-w-full min-h-screen bg-slate-900">
            <Navbar />
            <div className="w-full min-h-screen flex flex-col items-center pt-20 pb-10">
                <h1 className="text-4xl font-bold text-white mb-10">Convener</h1>
                <div className="grid grid-cols-2  mb-12">
                    {Convener.map((member, index) => (
                        <Card
                            key={index}
                            name={member.name}
                            description={member.description}
                            imageSrc={member.imageSrc}
                            imageAlt={member.imageAlt}
                        />
                    ))}
                </div>
                
                {/* Replace your 8 identical cards with this: */}
                <h2 className="text-2xl font-semibold text-white mb-6">4th Years</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15 md:gap-6 lg:gap-15">
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
                    <h2 className='text-2x1 font-semibold text-[35px] text-white py-10 mb-6'>3rd Years</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15 md:gap-6 lg:gap-15">
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
                    <h2 className='test-2x1 font-semibold text-[35px] text-white py-10 mb-6'>2nd Years</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15 md:gap-6 lg:gap-15">
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