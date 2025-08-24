import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';

const GameShow = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "65%", // Aspect ratio (700/1080 ≈ 65%)
        margin: "20px auto",
        maxWidth: "1080px", // optional max width
      }}
    >
      <iframe
        src="https://andriajandieri.github.io/MoonlightGraveyard/"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
        title="My JavaScript Game"
        allowFullScreen
      ></iframe>
    </div>
  );
};


export default GameShow