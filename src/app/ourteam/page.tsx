'use client';
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Card from '@/components/otcard';

// Add this team data at the top of your component
const Convener = [
  {
    name: "Dr. Prashanth H S",
    description: " Assistant Professor, Dept. of CSE",
    imageSrc: "/images/OTImages/vinod.jpg",
    imageAlt: "Dr. Prashanth H S"
  }
];
const fourthYear = [
  {
    name: "Tatvika Sharma",
    description: "President",
    imageSrc: "/images/OTImages/Tatvika.jpg",
    imageAlt: "tatvika"
  },
  {
    name: "Akash Hariharan", 
    description: "Vice President",
    imageSrc: "/images/OTImages/Akash.png",
    imageAlt: "akash"
  },
  {
    name: "Kushal C J",
    description: "Digital Head &                  Treasurer",
    imageSrc: "/images/OTImages/Kushal.jpg", 
    imageAlt: "kushal"
  },
  {
    name: "Jnanavi Venugopal",
    description: "General Secretary",
    imageSrc: "/images/OTImages/Jnanavi.jpg",
    imageAlt: "jnanavi"
  },
  {
    name: "Sanjana Desh",
    description: "Technical Director",
    imageSrc: "/images/OTImages/Sanjana.jpg",
    imageAlt: "sanjana"
  },
  {
    name: "Sunitha P",
    description: "Head of Internal Affairs",
    imageSrc: "/images/OTImages/Sunitha.heic",
    imageAlt: "sunitha"
  },
  {
    name: "Nithyashree C P",
    description: "Editorial Head",
    imageSrc: "/images/OTImages/nithya.jpg",
    imageAlt: "nithyashree"
  },
  {
    name: "Nishigandha S",
    description: "Editorial Head",
    imageSrc: "/images/OTImages/Nishi.jpg",
    imageAlt: "Maya Patel"
  },
  {
    name: "Karthik",
    description: "Event Director",
    imageSrc: "/images/OTImages/karthik3.jpg",
    imageAlt: "Karthik"
  },
  {
    name: "Mohammed Azam",
    description: "Event Director & Project Director",
    imageSrc: "/images/OTImages/azam.jpg",
    imageAlt: "Mohammed Azam"
  },
  {
    name: "Vishwas M Bharadwaj",
    description: "Project Director",
    imageSrc: "/images/OTImages/vishwas.jpg",
    imageAlt: "Vishwas M Bharadwaj"
  },
  {
    name: "Diya S Thange",
    description: "Project Director",
    imageSrc: "/images/OTImages/diya.png",
    imageAlt: "Diya S Thange"
  },
  {
    name: "Jahnavi H K",
    description: "Creative Director",
    imageSrc: "/images/OTImages/jahnavi.jpg",
    imageAlt:   "Jahnavi H K"
  },
  {
    name: "Saniya",
    description: "Creative Director",
    imageSrc: "/images/OTImages/saniya.jpeg",
    imageAlt:   "Jahnavi H K"
  }
];

const thirdYear = [
    {
      name: "Nithin H C",
      description: "Treasury Subordinate",
      imageSrc: "/images/OTImages/Nithin.png",
      imageAlt: "Nithin H C"
      },
    {
      name: "Prathyusha v Kumar",
      description: "Treasury Subordinate",
      imageSrc: "/images/OTImages/pratyusha .jpg",
      imageAlt: "Prathyusha v Kumar"
      },
      
    {
      name: "Akshatha",
      description: "Student Member",
      imageSrc: "/images/OTImages/aksh.png",
      imageAlt: "Akshatha"
      },
      
    {
      name: "Anuj",
      description: "Student Member",
      imageSrc: "/images/OTImages/Anuj.png",
      imageAlt: "Anuj"
      },
      
    {
      name: "Geetha H",
      description: "Student Member",
      imageSrc: "/images/OTImages/Geetha.jpg",
      imageAlt: "Geetha H"
      },
      
    {
      name: "Prasad Malegaon",
      description: "Student Member",
      imageSrc: "/images/OTImages/PP.png",
      imageAlt: "Prasad Malegaon"
      },
      
    {
      name: "Mariam Noorani",
      description: "Student Member",
      imageSrc: "/images/OTImages/Mariam.png",
      imageAlt: "Mariam Noorani"
      },
    {
      name: "Likith Shetty",
      description: "Student Member",
      imageSrc: "/images/OTImages/liki.jpg",
      imageAlt: "Likith Shetty"
      },
    {
      name: "Namrath",
      description: "Student Member",
      imageSrc: "/images/OTImages/namrath.jpg",
      imageAlt: "Namrath"
      },
    {
      name: "Tilak Shetty",
      description: "Student Member",
      imageSrc: "/images/OTImages/tilak.jpg",
      imageAlt: "Tilak Shetty"
      },
    {
      name: "Yashika D",
      description: "Student Member",
      imageSrc: "/images/OTImages/Yash.png",
      imageAlt: "Yashika D"
      },
];

const secondYear = [
    {
      name: "Akash",
      description: "Student Member",
        imageSrc: "/images/OTImages/akash1.JPG",
        imageAlt: "Akash"
        },
    {
      name: "Chandana HR",
      description: "Student Member",
        imageSrc: "/images/OTImages/chandana.jpg",
        imageAlt: "Chandana HR"
        },
    {
      name: "DHEERAJ KUMAR BHAIKAR",
      description: "Student Member",
        imageSrc: "/images/OTImages/dheeraj.png",
        imageAlt: "DHEERAJ KUMAR BHAIKAR"
        },
    {
      name: "Karthik K L",
      description: "Student Member",
        imageSrc: "/images/OTImages/kartik.jpg",
        imageAlt: "Karthik K L"
        },
    {
      name: "Rashmi M",
      description: "Student Member",
        imageSrc: "/images/OTImages/rashmi.jpg",
        imageAlt: "Rashmi M"
        },
    {
      name: "Shreedha M M",
      description: "Student Member",
        imageSrc: "/images/OTImages/shreedha.jpg",
        imageAlt: "Shreedha M M"
        },
    {
      name: "Shravya Jain HS",
      description: "Student Member",
        imageSrc: "/images/OTImages/shravya.jpg",
        imageAlt: "Shravya Jain HS"
        },
    {
      name: "Tejas",
      description: "Student Member",
        imageSrc: "/images/OTImages/tejas.jpg",
        imageAlt: "Tejas"
        },
    ];
    
const OurTeam = () => {
    return (
        <div className="main-w-full min-h-screen bg-slate-900">
            <Navbar />
            <div className="w-full min-h-screen flex flex-col items-center pt-20 pb-10">
                <h1 className="text-4xl font-bold text-white mb-10">Convener</h1>
                <div className="grid grid-cols-1  mb-12">
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