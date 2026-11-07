import React from 'react';
import { ArrowUp, Github, Twitter, Instagram, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#0C0C0C] border-t border-white/10 py-12 px-6 md:px-10 text-[#D7E2EA]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="hero-heading font-black text-2xl uppercase tracking-tight">
            Subhajit
          </span>
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light mt-1">
            Full-Stack Developer &bull; &copy; {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/70 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/70 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/70 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-[#D7E2EA]/70 hover:text-white transition-colors"
            aria-label="Website"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white/40 text-xs uppercase tracking-widest text-[#D7E2EA] hover:bg-white/5 transition-all cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
