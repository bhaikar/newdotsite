'use client'
import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import LinkedIn from '@/components/linkedin'
import Insta from '@/components/insta'
import Fb from '@/components/fb'
import Discord from '@/components/discord'
import Card from '@/components/contactcard'

const ContactUsPage = () => {
  return (
    <div className="flex flex-col bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-26">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
     </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-40 pr-40">
      <div className="flex flex-col items-start space-y-20">
        {[
          <LinkedIn key="linkedin" />,
          <Insta key="insta" />,
          <Fb key="fb" />,
          <Discord key="discord" />
          
        ].map((Component, index) => (
          <div key={index} className={index % 2 === 0 ? "ml-0" : "ml-32"}>
            {Component}
          </div>
        ))}
      </div>
      <div className="mt-24">
        <Card />
      </div>
    </div>

      
      <Footer />
    </div>
  )
}
export default ContactUsPage;