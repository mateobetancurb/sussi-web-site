import { Target, Sparkles, Users } from 'lucide-react';

const WhatIDo = () => {
  const services = [
    {
      icon: Target,
      title: 'Estrategia Digital',
      description: 'Planificación estratégica que se alinea con la visión de tu marca y los objetivos de negocio.',
    },
    {
      icon: Sparkles,
      title: 'Gestión de Redes Sociales y Creación de Contenido',
      description: 'Contenido auténtico que resuena con tu audiencia y construye comunidad.',
    },
    {
      icon: Users,
      title: 'Consultoría y Marca Personal',
      description: 'Orientación personalizada para ayudarte a definir y hacer crecer tu marca personal.',
    },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-[#8B6F47] mb-6">
            Lo Que Hago
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="group space-y-6 p-8 hover:bg-[#F5F1ED] transition-all duration-500"
            >
              <div className="text-[#C07B5C]">
                <service.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-[#8B6F47]">
                {service.title}
              </h3>
              <p className="text-[#A0826D] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="flex justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-[#8B6F47] font-light tracking-wider text-sm">CLIENTE</div>
            <div className="text-[#8B6F47] font-light tracking-wider text-sm">CLIENTE</div>
            <div className="text-[#8B6F47] font-light tracking-wider text-sm">CLIENTE</div>
          </div>
          <p className="font-serif text-xl md:text-2xl text-[#8B6F47] italic">
            Cuentas reales. Historias reales. Resultados que puedes sentir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
