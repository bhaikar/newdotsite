'use client';
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Project from '@/components/projectcard';

// Sample workshop data
const project = [
    {
        name: "Attendance Management System",
        description: "The DevOps Team Attendance System streamlines attendance management with two login options: Member Login for viewing records and Coordinator Login for marking attendance during meetings. Admins manage members and update records, while coordinators set meeting dates and log attendance.",
        imageSrc: "/images/ProjectImages/Attendance.jpg",
        imageAlt: "Python Programming"
    },
    {
        name: "CICADA",    
        description: "This treasure hunt app, fully developed in-house by the DevOps team, challenges players with a series of questions where each correct answer unlocks the next clue. The first player to complete all rounds wins, offering an engaging and competitive way to test knowledge and problem-solving skills.",
        imageSrc: "/images/ProjectImages/Cicada.png",
        imageAlt: "Web Development"
    },
    {
        name: "IronMan Helmet",
        description: "In November 2022, the club members held a session on basic video editing in the AB block. This session introduced participants to essential video editing techniques and tools, offering hands-on experience with popular editing software and enhancing their multimedia skills following the earlier web development workshops.",
        imageSrc: "/images/ProjectImages/IronMan Helmet.png",
        imageAlt: "video Editing"
    },
    {
        name: "DISC Personality Test",
        description: "The DevOps Team's app provides a streamlined DISC personality test experience, offering real-time analysis and personalized reports. It's designed for easy use, helping individuals and teams gain insights into personality traits for personal growth and team dynamics.",
        imageSrc: "/images/ProjectImages/DISC.png",
        imageAlt: "git Hub"
    },
    {
        name: "MCE Pusthak",
        description: "This app is a comprehensive resource for engineering students, offering organized notes across all years of study. Users can easily access and review subject-specific materials, streamlining their study efforts and enhancing their understanding. With notes categorized by year and subject, the app provides a centralized platform for efficient learning.",
        imageSrc: "/images/ProjectImages/pusthak.jpeg",
        imageAlt: "Canva"
    },
    {
        name: "Thief City",
        description: "Thief City is an Android game that uses GPS technology to turn players into virtual thieves. Teams hide diamonds around the city and then search for diamonds hidden by others. Players steal diamonds within their vicinity to boost their score.",
        imageSrc: "/images/ProjectImages/ThiefCity.png",
        imageAlt: "Report and Letter formatting"
    },
    {
        name: "Challan Generator",
        description: "The Devops Team contributed to the Challan generator application for the college fees.",
        imageSrc: "/images/ProjectImages/challan.svg",
        imageAlt: "Web Development"
    },
    {
        name: "Just MCE",
        description: "Just MCE application, a social network specific to the college is developed by DevOps Team.",
        imageSrc: "/images/ProjectImages/justmce.svg",
        imageAlt: "Digital Designing"
    },
    {
        name: "SMS service application",
        description: "Devops Team contributed to the SMS service application developed to send SMS to students.",
        imageSrc: "/images/ProjectImages/sms.png",
        imageAlt: "Digital Designing"
    },
];
    
const projectPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-950 to-black">
            <Navbar />
             <div className="w-full min-h-screen flex flex-col items-center pt-20 pb-10"> 
                <h1 className="text-4xl font-bold text-white mb-10">Project</h1> 
                <div className="w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pl-8">
                    {project.map((project, index) => (
                        <Project
                            key={index}
                            name={project.name}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            imageAlt={project.imageAlt}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default projectPage;



