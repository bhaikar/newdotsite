'use client'
import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import LinkedIn from '@/components/linkedin'
import Insta from '@/components/insta'
import Fb from '@/components/gmail'
import Discord from '@/components/github'
import Card from '@/components/contactcard'

const ContactUsPage = () => {
  return (
    <div className="flex flex-col bg-gray-900 text-white min-h-screen">
      <Navbar />
      
      {/* Main Content Container */}
      <div className="flex-grow pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        {/* Header Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <div className="w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
            
            {/* Social Media Links Section - Zigzag on all screens */}
            <div className="order-2 lg:order-1">
              <div className="flex flex-col items-start space-y-6 sm:space-y-8 lg:space-y-10 pb-12 sm:pb-16 lg:pb-20">
                {[
                  <LinkedIn key="linkedin" />,
                  <Insta key="insta" />,
                  <Fb key="fb" />,
                  <Discord key="discord" />
                ].map((Component, index) => (
                  <div key={index} className={`${index % 2 === 0 ? "ml-0" : "ml-8 sm:ml-12 md:ml-16 lg:ml-32"} transition-all duration-300`}>
                    {Component}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Cards Section */}
            <div className="order-1 lg:order-2">
              <div className="w-full">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default ContactUsPage;