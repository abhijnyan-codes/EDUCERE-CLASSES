import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Courses from './components/Courses.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx'; 
import Location from './components/Location.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Courses />
        <Testimonials />
        <Contact />
        <Location />
        <CTA />
      </main>
    </div>
  );
}

export default App;