import { Heart, Lightbulb, Handshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Autenticidad',
      description: 'Cada estrategia comienza con entender quién eres realmente.',
    },
    {
      icon: Lightbulb,
      title: 'Creatividad',
      description: 'Ideas que sorprenden, contenido que conecta emocionalmente.',
    },
    {
      icon: Handshake,
      title: 'Cercanía',
      description: 'Trabajo contigo, no para ti. Tu marca es nuestro proyecto compartido.',
    },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#F5F1ED]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-[#8B6F47] leading-tight">
              Quién soy cuando no estoy creando contenido
            </h2>

            <div className="space-y-6 text-[#8B6F47] leading-relaxed text-lg">
              <p>
                Soy alguien que cree que cada marca tiene una historia que vale la pena contar, y cada persona tiene el poder de construir algo significativo en el mundo digital.
              </p>
              <p>
                Mi viaje comenzó con la curiosidad—querer entender por qué algunas marcas conectan profundamente mientras que otras se desvanecen en el ruido. A lo largo de los años, he aprendido que la diferencia no está solo en la estética o la estrategia. Está en el sentimiento.
              </p>
              <p>
                Trabajo desde el sentimiento, no desde una plantilla. Porque tu marca merece más que una solución copiada y pegada.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-[#D4C4B0]/30"></div>
            <div className="aspect-[3/4] bg-[#D4C4B0]/30 mt-8"></div>
          </div>
        </div>

        <div className="border-t border-[#D4C4B0]/30 pt-16">
          <h3 className="font-serif text-3xl text-[#8B6F47] text-center mb-16">
            Mi Filosofía
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center text-[#C07B5C]">
                  <value.icon size={36} strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-xl text-[#8B6F47]">
                  {value.title}
                </h4>
                <p className="text-[#A0826D] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
