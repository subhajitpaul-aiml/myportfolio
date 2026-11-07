import React from 'react';
import FadeIn from './FadeIn';

interface SkillItem {
  id: string;
  name: string;
  description: string;
}

const SKILLS: SkillItem[] = [
  {
    id: '01',
    name: 'React',
    description:
      'Engineering high-performance, component-driven user interfaces and web applications with modern state management, hooks, and fluid responsive UX.',
  },
  {
    id: '02',
    name: 'JavaScript',
    description:
      'Deep mastery of modern ES6+, asynchronous paradigms, event-driven programming, and performance-optimized execution across client and server.',
  },
  {
    id: '03',
    name: 'Node.js',
    description:
      'Architecting resilient RESTful APIs, real-time microservices, secure token authentication systems, and scalable backend infrastructure.',
  },
  {
    id: '04',
    name: 'MongoDB',
    description:
      'Designing flexible NoSQL document models, high-performance aggregation pipelines, database indexing, and cloud data persistence.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={30}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 select-none">
            Skills
          </h2>
        </FadeIn>

        {/* Skills List */}
        <div className="w-full border-t border-[rgba(12,12,12,0.15)]">
          {SKILLS.map((skill, index) => (
            <FadeIn key={skill.id} delay={index * 0.1} y={30}>
              <div className="py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-12 group hover:bg-[rgba(12,12,12,0.02)] transition-colors duration-200">
                {/* Number on left */}
                <div className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none select-none flex-shrink-0 min-w-[120px] sm:min-w-[160px] md:min-w-[200px]">
                  {skill.id}
                </div>

                {/* Name + description on right */}
                <div className="flex flex-col flex-grow text-left">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] tracking-tight">
                    {skill.name}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C] opacity-60 mt-2">
                    {skill.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
