import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Proj from '../components/Proj';
import GameProj from '../components/GameProj';
import AndroidProj from '../components/AndroidProj';
import SoftProj from '../components/SoftProj';
import RecentProj from '../components/RecentProj';
import AiProjects from '../components/AiProjects';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroSection heading="PROJECTS" text="While my projects may not be flawless, I take great pride in each and every one of them. Since they carry their own unique significance in shaping my experience and expanding my knowledge" />
      <AiProjects/>
      <RecentProj/>
      <SoftProj/>
      <AndroidProj/>
      <Proj />
      <GameProj/>
      <Footer />
    </div>
  )
}

export default Projects