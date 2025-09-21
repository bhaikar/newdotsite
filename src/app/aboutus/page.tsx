// src/app/about/page.tsx
"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Card from "@/components/Card"; // the animated card you shared
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      {/* Navbar */}
      <Navbar />

      {/* About Content */}
      <section className=" py-16 text-center mt-5 px-4">
        <h1 className="text-4xl md:text-5xl font-bold ">About Us</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          We are a passionate travel agency dedicated to curating unforgettable
          journeys across the globe. Our mission is to make your travel
          experience seamless, exciting, and filled with memories.
        </p>
      </section>

      
      <hr className="border-gray-700 mb-6 w-[75%] mx-auto"
       />
       <section className="text-center mb-14 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          At the core of our agency are values that drive us to deliver
          exceptional service and create meaningful travel experiences. We
          believe in integrity, customer-centricity, innovation, and a deep
          respect for the cultures and environments we engage with.
        </p>
      </section>

      {/* Cards Section */}
         <section>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 place-items-center">
          <Card
            title="Our Vision"
            description="DevOps fosters a culture of seamless collaboration between traditionally siloed teams, breaking down barriers to create a more cohesive and agile environment. This approach offers significant benefits, such as enhanced trust, quicker resolution of critical issues, and better management of unplanned work, all contributing to increased productivity and innovation."
        
          />
          <Card
            title="Our Mission"
            description="Our mission is to foster student interest in development and operations, enhance their technical and development skills, and encourage project-building and participation in competitions. We aim to cultivate leadership qualities, empowering students to become confident and respectful members of society."
            
          />
        </div>
      </section>
      {/* Footer */}
      <div className="mt-20">

      <Footer />
      </div>
    </div>
  );
}
