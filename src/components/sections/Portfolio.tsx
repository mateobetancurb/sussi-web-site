import { useState } from 'react';
import { TrendingUp, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'restaurants', label: 'Restaurantes' },
    { id: 'hotels', label: 'Hoteles' },
    { id: 'fashion', label: 'Moda' },
    { id: 'other', label: 'Otros' },
  ];

  const projects = [
    {
      id: 1,
      category: 'restaurants',
      title: 'Restaurante Casa Bella',
      description: 'Transformación completa de marca con enfoque en narrativa auténtica',
      results: {
        engagement: '+245%',
        reach: '+180%',
        aesthetic: 'Elevado',
      },
      timeline: '3 meses',
    },
    {
      id: 2,
      category: 'hotels',
      title: 'Hotel Boutique Serena',
      description: 'Estrategia de contenido destacando lujo y experiencias personalizadas',
      results: {
        engagement: '+190%',
        reach: '+150%',
        aesthetic: 'Sofisticado',
      },
      timeline: '4 meses',
    },
    {
      id: 3,
      category: 'fashion',
      title: 'Luna Fashion Studio',
      description: 'Marca personal para diseñador de moda emergente',
      results: {
        engagement: '+320%',
        reach: '+220%',
        aesthetic: 'Audaz',
      },
      timeline: '6 meses',
    },
    {
      id: 4,
      category: 'other',
      title: 'Wellness by Sofia',
      description: 'Construcción de marca personal desde cero para coach de bienestar',
      results: {
        engagement: '+280%',
        reach: '+195%',
        aesthetic: 'Orgánico',
      },
      timeline: '5 meses',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#8B6F47] mb-6">
            Proyectos y Casos de Estudio Reales
          </h2>
          <p className="text-xl text-[#A0826D] max-w-2xl mx-auto">
            Historias de transformación, crecimiento y conexión auténtica.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[#C07B5C] text-white'
                  : 'bg-white text-[#8B6F47] hover:bg-[#D4C4B0]/30'
              }`}
              aria-label={`Filtrar portafolio por ${filter.label.toLowerCase()}`}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-10 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="aspect-[4/3] bg-[#D4C4B0]/30 mb-8 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#8B6F47]/90">
                  <Eye size={32} className="text-white" />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#8B6F47] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#A0826D] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-[#D4C4B0]/30 pt-6">
                  <div className="flex items-center gap-2 text-sm text-[#8B6F47] mb-4">
                    <TrendingUp size={16} className="text-[#C07B5C]" />
                    <span className="tracking-wider uppercase text-xs">Resultados</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-serif text-[#C07B5C] mb-1">
                        {project.results.engagement}
                      </div>
                      <div className="text-xs text-[#A0826D] uppercase tracking-wider">
                        Interacción
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-serif text-[#C07B5C] mb-1">
                        {project.results.reach}
                      </div>
                      <div className="text-xs text-[#A0826D] uppercase tracking-wider">
                        Alcance
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-serif text-[#C07B5C] mb-1">
                        {project.results.aesthetic}
                      </div>
                      <div className="text-xs text-[#A0826D] uppercase tracking-wider">
                        Estética
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-[#A0826D] italic">
                  Duración: {project.timeline}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
