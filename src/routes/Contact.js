import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroSection heading="CONTACT" text="I'm excited to hear from you and discuss potential collaborations or any other questions you may have." />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact