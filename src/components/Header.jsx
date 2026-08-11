import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin, MessageSquare, Menu, X, ChevronsRight } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const whatsappUrl = "https://wa.me/5521964199750?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20consultoria%20em%20QSMS%20com%20a%20Ecosan.";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (targetId === '#') {
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(element, { offset: -80, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-navy-950 shadow-2xl' 
        : 'max-lg:bg-navy-950 lg:bg-transparent'
    }`}>
      {/* Top Utility Bar (Solid bg-navy-950 on Mobile, 100% Transparent on Desktop when at top) */}
      <div className={`transition-all duration-300 text-xs py-2 px-4 border-b ${
        isScrolled 
          ? 'bg-navy-950 text-slate-300 border-amber-500/20' 
          : 'max-lg:bg-navy-950 lg:bg-transparent text-slate-300 border-amber-500/20 lg:border-amber-500/10'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-x-4 gap-y-1 text-[11px] sm:text-xs w-full text-center px-2">
          
          {/* Item 1: Phone */}
          <a href="tel:+5521964199750" className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors shrink-0">
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>+55 (21) 96419-9750</span>
          </a>

          {/* Item 2: Email */}
          <a href="mailto:ecosaneng.consultoriadeqsms@gmail.com" className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors shrink-0">
            <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="hidden md:inline">ecosaneng.consultoriadeqsms@gmail.com</span>
            <span className="md:hidden">E-mail Ecosan</span>
          </a>

          {/* Item 3: Location */}
          <div className="inline-flex items-center gap-1.5 text-slate-400 shrink-0">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Volta Redonda | RJ</span>
          </div>

        </div>
      </div>

      {/* Main Navbar (Solid bg-navy-950 on Mobile, 100% Transparent on Desktop when at top) */}
      <nav className={`transition-all duration-300 px-4 py-3 border-b ${
        isScrolled
          ? 'bg-navy-950 border-amber-500/30 shadow-xl'
          : 'max-lg:bg-navy-950 lg:bg-transparent border-amber-500/30 lg:border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center">
            <Logo size="lg" variant="light" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-100">
            <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="hover:text-amber-400 transition-colors">Início</a>
            <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')} className="hover:text-amber-400 transition-colors">Sobre a Consultoria</a>
            <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')} className="hover:text-amber-400 transition-colors">Áreas de Atuação</a>
            <a href="#diferenciais" onClick={(e) => handleNavClick(e, '#diferenciais')} className="hover:text-amber-400 transition-colors">Diferenciais</a>
            <a href="#especialista" onClick={(e) => handleNavClick(e, '#especialista')} className="hover:text-amber-400 transition-colors">Responsável Técnico</a>
            <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')} className="hover:text-amber-400 transition-colors">Contato</a>
          </div>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 p-1 rounded-full bg-gold-gradient shadow-lg hover:brightness-110 transition-all transform hover:-translate-y-0.5"
            >
              <span className="px-4 py-2 rounded-full bg-navy-950 text-white font-extrabold text-xs uppercase tracking-wider">
                Falar com Consultor
              </span>
              <div className="pr-2 flex items-center text-navy-950 font-black group-hover:translate-x-0.5 transition-transform">
                <ChevronsRight className="w-4 h-4" />
              </div>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-amber-400 focus:outline-none"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 border-t border-slate-800 flex flex-col gap-4 text-sm px-2 pb-2 bg-navy-950">
            <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="text-slate-100 hover:text-amber-400 py-1 font-semibold">Início</a>
            <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')} className="text-slate-100 hover:text-amber-400 py-1 font-semibold">Sobre a Consultoria</a>
            <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')} className="text-slate-100 hover:text-amber-400 py-1 font-semibold">Áreas de Atuação (Serviços)</a>
            <a href="#diferenciais" onClick={(e) => handleNavClick(e, '#diferenciais')} className="text-slate-100 hover:text-amber-400 py-1 font-semibold">Diferenciais</a>
            <a href="#especialista" onClick={(e) => handleNavClick(e, '#especialista')} className="text-slate-100 hover:text-amber-400 py-1 font-semibold">Responsável Técnico (Trajetória)</a>
            <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')} className="text-slate-100 hover:text-amber-400 py-1 font-semibold">Contato Direto</a>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold text-xs uppercase shadow-md mt-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar com Eng. San Alves</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
