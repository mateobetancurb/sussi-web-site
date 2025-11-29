import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Sussana no solo crea, ella entiende.",
      author: 'María González',
      role: 'Propietaria de Restaurante',
      featured: false,
    },
    {
      quote: 'Mi marca cambió después de trabajar con ella.',
      author: 'Carlos Méndez',
      role: 'Diseñador de Moda',
      featured: false,
    },
    {
      quote: "Nunca había tenido una estratega que se sintiera tanto como parte del equipo.",
      author: 'Andrea Silva',
      role: 'Gerente de Hotel Boutique',
      featured: false,
    },
  ];

  const featuredTestimonial = {
    quote: "Trabajar con Sussana fue transformador. No solo me ayudó con el contenido—me ayudó a entender mi propia historia y cómo compartirla auténticamente. Los resultados hablan por sí solos, pero más que eso, finalmente me siento segura en mi presencia digital.",
    author: 'Isabella Torres',
    role: 'Coach de Bienestar y Emprendedora',
  };

  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-[#8B6F47] mb-6">
            Lo Que Dicen Sobre Crear Conmigo
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-[#F5F1ED] p-12 lg:p-16 relative">
            <Quote
              size={48}
              className="text-[#C07B5C] opacity-20 absolute top-8 left-8"
            />
            <div className="relative z-10">
              <p className="font-serif text-2xl md:text-3xl text-[#8B6F47] leading-relaxed mb-8 italic">
                "{featuredTestimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#D4C4B0]/50"></div>
                <div>
                  <div className="font-medium text-[#8B6F47]">
                    {featuredTestimonial.author}
                  </div>
                  <div className="text-sm text-[#A0826D]">
                    {featuredTestimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 border-2 border-[#D4C4B0]/30 hover:border-[#C07B5C] transition-all duration-500 group"
            >
              <Quote
                size={32}
                className="text-[#C07B5C] opacity-30 mb-6 group-hover:opacity-60 transition-opacity"
              />
              <p className="font-serif text-xl text-[#8B6F47] mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#D4C4B0]/40"></div>
                <div>
                  <div className="font-medium text-[#8B6F47] text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-[#A0826D]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
