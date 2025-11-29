import { Heart, Lightbulb, Handshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'Every strategy begins with understanding who you truly are.',
    },
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'Ideas that surprise, content that connects emotionally.',
    },
    {
      icon: Handshake,
      title: 'Closeness',
      description: 'I work with you, not for you. Your brand is our shared project.',
    },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#F5F1ED]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-[#8B6F47] leading-tight">
              Who I am when I'm not creating content
            </h2>

            <div className="space-y-6 text-[#8B6F47] leading-relaxed text-lg">
              <p>
                I'm someone who believes that every brand has a story worth telling, and every person has the power to build something meaningful in the digital world.
              </p>
              <p>
                My journey started with curiosity—wanting to understand why some brands connect deeply while others fade into the noise. Over the years, I've learned that the difference isn't just in the aesthetics or the strategy. It's in the feeling.
              </p>
              <p>
                I work from feeling, not from a template. Because your brand deserves more than a copy-paste solution.
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
            My Philosophy
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
