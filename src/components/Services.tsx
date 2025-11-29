import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import type { Service } from '../types';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-[#8B6F47] mb-6">
            What I Create with You
          </h2>
          <p className="text-xl text-[#A0826D] max-w-2xl mx-auto">
            Services designed to elevate your brand and connect authentically with your audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map((service: Service) => (
            <div
              key={service.id}
              className={`relative p-10 bg-[#F5F1ED] hover:bg-white border-2 transition-all duration-500 group ${service.featured
                ? 'border-[#C07B5C] lg:-mt-8 lg:mb-8'
                : 'border-transparent hover:border-[#D4C4B0]'
                }`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-10 bg-[#C07B5C] text-white px-4 py-1 text-xs tracking-widest uppercase">
                  Featured
                </div>
              )}

              <div className="text-[#C07B5C] mb-6">
                <service.icon size={36} strokeWidth={1.5} />
              </div>

              <h3 className="font-serif text-2xl text-[#8B6F47] mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-[#A0826D] mb-8 italic">
                {service.subtitle}
              </p>

              <ul className="space-y-4 mb-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8B6F47]">
                    <span className="text-[#C07B5C] mt-1">•</span>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 hover:cursor-pointer text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300 group-hover:gap-4 ${service.featured
                  ? 'bg-[#C07B5C] text-white hover:bg-[#A0826D]'
                  : 'border-2 border-[#C07B5C] text-[#C07B5C] hover:bg-[#C07B5C] hover:text-white'
                  }`}
              >
                {service.cta}
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
