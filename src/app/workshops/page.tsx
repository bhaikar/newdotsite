'use client';
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Workshop from '@/components/workshopcard';

// Sample workshop data
const workshops = [
    {
        name: "Basic Python programming",
        description: "The Basic Python Programming workshop featured two sessions: the first on April 23, from 2 PM to 4 PM in AB Block, introduced Python programming to all college students. The second session, held on April 30 at the same time and location, continued the basics of Python programming.",
        imageSrc: "/images/workshop1.png",
        imageAlt: "Python Programming"
    },
    {
        name: "Fundamentals of Web Development",    
        description: "The Web Development workshop began with an introductory session on November 12, 2022, from 2 PM to 5 PM in AB Block, where club members covered the basics of HTML and CSS. The second session, held on November 19, 2022, at the same time and location, built on the first session and involved project assignments related to the topics covered.",
        imageSrc: "/images/workshop2.png",
        imageAlt: "Web Development"
    },
    {
        name: "Wbasics On Video Editing",
        description: "In November 2022, the club members held a session on basic video editing in the AB block. This session introduced participants to essential video editing techniques and tools, offering hands-on experience with popular editing software and enhancing their multimedia skills following the earlier web development workshops.",
        imageSrc: "/images/workshop3.png",
        imageAlt: "video Editing"
    },
    {
        name: "Basics on Git Hub",
        description: "On February 16, 2024, a session exclusively for club members was held in the AB block to provide a brief overview of Git and GitHub. Conducted by the club members, this session aimed to introduce essential version control concepts and practical usage of Git and GitHub, enhancing members' collaboration and project management skills.",
        imageSrc: "/images/workshop3.png",
        imageAlt: "git Hub"
    },
    {
        name: "Basics On using Canva",
        description: "On January 13, 2024, we conducted an exclusive session for club members, concentrating on mastering Canva elements and basic tools. The event aimed to enhance members' Canva skills through hands-on assignments, ensuring practical experience and improvement. By the end, members were better equipped to use Canva effectively.",
        imageSrc: "/images/workshop3.png",
        imageAlt: "Canva"
    },
    {
        name: "Report and Letter formatting",
        description: "On January 19, 2024, we held a session on report and letter formatting to boost vocabulary and formal writing skills. The session covered proper formatting techniques and provided practical examples and exercises. Participants gained insights into improving their writing style and structure, leaving with enhanced skills for effective formal communication.",
        imageSrc: "/images/workshop3.png",
        imageAlt: "Report and Letter formatting"
    },
    {
        name: "Basic web development",
        description: "The Web Development workshop started on May 22, 2024, with a session on HTML and CSS basics. The following day, participants learned portfolio building, focusing on creating their own portfolios. Both sessions were held in AB Block.",
        imageSrc: "/images/workshop3.png",
        imageAlt: "Web Development"
    },
    {
        name: "Digital Designing",
        description: "A session was held on June 22, 2024, in the SA block, led by one of our former club members. This session provided a brief overview of poster design and the choice of colours for various scenarios, equipping participants with fundamental design principles and skills.",
        imageSrc: "/images/workshop3.png",
        imageAlt: "Digital Designing"
    },
];

const WorkshopsPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-950 to-black">
            <Navbar />
             <div className="w-full min-h-screen flex flex-col items-center pt-20 pb-10"> 
                <h1 className="text-4xl font-bold text-white mb-10">Workshop</h1> 
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 pl-8">
                    {workshops.map((workshop, index) => (
                        <Workshop 
                            key={index}
                            name={workshop.name}
                            description={workshop.description}
                            imageSrc={workshop.imageSrc}
                            imageAlt={workshop.imageAlt}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default WorkshopsPage;



