import { ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/';

const Hero = () => {
  const whatsappUrl = getWhatsAppUrl();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      <div className="max-w-5xl w-full">
        <div className="space-y-12 text-center">
          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#8B6F47] leading-tight">
              Soy Sussana Correa
            </h1>
            <p className="text-xl md:text-2xl text-[#A0826D] tracking-wide">
              Estratega digital + creadora
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="font-serif text-2xl md:text-3xl text-[#8B6F47] leading-relaxed italic">
              Creo en las marcas, creo en las personas, creo en las historias.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group px-10 py-4 bg-[#C07B5C] text-white text-sm tracking-widest uppercase hover:bg-[#A0826D] hover:cursor-pointer transition-all duration-300 flex items-center gap-3"
              aria-label="Ver mi trabajo en el portafolio"
            >
              Ver mi trabajo
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 border-2 border-[#C07B5C] text-[#C07B5C] text-sm tracking-widest uppercase hover:bg-[#C07B5C] hover:text-white hover:cursor-pointer transition-all duration-300 flex items-center gap-3"
              aria-label="Trabajar conmigo - contactar por WhatsApp"
            >
              Trabaja conmigo
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
