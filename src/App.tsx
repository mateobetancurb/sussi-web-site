import { useState } from 'react';
import Hero from './components/sections/Hero';
import WhatIDo from './components/sections/WhatIDo';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Navigation from './components/sections/Navigation';
import WhatsAppButton from './components/global/WhatsAppButton';

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
      <WhatsAppButton />
    </div>
  );
}

export default App;
