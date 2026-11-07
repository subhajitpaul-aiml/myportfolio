import React from 'react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <button
            onClick={() => scrollTo('about')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none text-inherit uppercase font-inherit p-0"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none text-inherit uppercase font-inherit p-0"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none text-inherit uppercase font-inherit p-0"
          >
            Projects
          </button>
          <button
            onClick={onContactClick || (() => scrollTo('contact'))}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none text-inherit uppercase font-inherit p-0"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden flex items-center justify-center text-center mt-6 sm:mt-4 md:-mt-5 z-20 pointer-events-none">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[9.5vw] sm:text-[10.5vw] md:text-[11.5vw] lg:text-[12vw] select-none">
            Hi, i&apos;m subhajit
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait with Magnet */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full h-full flex justify-center items-end">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center items-end"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Subhajit - Full-Stack Developer portrait"
              className="w-full h-auto object-contain select-none drop-shadow-2xl pointer-events-none"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20 w-full mt-auto">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px] select-none">
            a full-stack developer driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick || (() => scrollTo('contact'))} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
