import { useState } from 'react';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <div id="home">
        <Hero />
        <WhatIDo />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
