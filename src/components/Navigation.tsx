import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { NavigationProps } from '../types';
import { NAV_ITEMS } from '../data/navigation';


const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1ED]/95 backdrop-blur-sm border-b border-[#D4C4B0]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="font-serif text-2xl text-[#8B6F47] tracking-wide hover:text-[#C07B5C] transition-colors duration-300"
          >
            Sussana Correa
          </button>

          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item: { id: string; label: string }) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-[#C07B5C] font-medium'
                    : 'text-[#8B6F47] hover:text-[#C07B5C]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#8B6F47] hover:text-[#C07B5C] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#F5F1ED] border-t border-[#D4C4B0]/20">
          <div className="px-6 py-6 space-y-4">
            {NAV_ITEMS.map((item: { id: string; label: string }) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-sm tracking-widest uppercase transition-colors ${
                  activeSection === item.id
                    ? 'text-[#C07B5C] font-medium'
                    : 'text-[#8B6F47] hover:text-[#C07B5C]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
