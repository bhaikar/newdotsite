'use client'
import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const ContactUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          If you have any questions, feedback, or inquiries, please feel free to reach out to us. We would love to hear from you!
        </p>
      </main>
      <Footer />
    </div>
  )
}
export default ContactUsPage;