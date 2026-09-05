import React from 'react';
import { Phone, ChevronsRight, Star } from 'lucide-react';
import FadeUp from './FadeUp';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5521964199750?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20de%20consultoria%20em%20QSMS.";

  return (
    <section id="inicio" className="relative bg-navy-950 overflow-hidden flex items-center py-16 sm:py-20 lg:py-24">
      {/* Native Async Picture Tag with WEBP & JPG Fallback (Ultra-lightweight 133KB to eliminate Safari render blocking) */}
      <picture className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <source srcSet="/bg-hero.webp" type="image/webp" />
        <img
          src="/bg-hero.jpg"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover"
          alt="Ecosan Consultoria e Assessoria em HSEQ/QSMS Hero Background"
        />
      </picture>
      
      {/* Dark Navy Overlay Gradient for Mobile (< 1024px) */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 lg:hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(5, 11, 20, 0.96) 0%, rgba(5, 11, 20, 0.92) 60%, rgba(5, 11, 20, 0.75) 100%)'
        }}
      ></div>

      {/* Dark Navy Overlay Gradient for Desktop (>= 1024px) */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 hidden lg:block"
        style={{
          background: 'linear-gradient(90deg, #050b14 0%, #050b14 45%, rgba(5, 11, 20, 0.92) 65%, rgba(5, 11, 20, 0.4) 85%, rgba(5, 11, 20, 0.1) 100%)'
        }}
      ></div>

      {/* Gold Ambient Glow Orb (Lightweight blur-3xl matching Gisela project) */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-9 text-left">
            
            <FadeUp delay={0} yOffset={16} className="space-y-6">
              {/* Top Authority Pill */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-navy-900/90 border border-amber-500/30 mt-2 sm:mt-0 shadow-lg max-w-full">
                <span className="text-[11px] sm:text-xs font-bold text-amber-400">4.9</span>
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-200 border-l border-slate-700 pl-2">
                  Consultoria de Autoridade em <strong className="text-amber-400">HSEQ & QSMS</strong>
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-md">
                GESTÃO INTEGRADA — <br />
                SOLUÇÕES EM <span className="text-gold-gradient">QSMS</span> <br />
                E CONFORMIDADE
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow">
                Oferecemos serviços especializados de assessoria em <strong className="text-white font-semibold">Segurança do Trabalho, Saúde Ocupacional, Meio Ambiente e Auditorias ISO</strong> para empresas cumprirem obrigações legais e reduzirem riscos operacionais.
              </p>

              {/* Dual CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
                
                {/* Button 1: Outer Gold Pill -> Inner Dark Capsule -> Arrow » */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 sm:gap-3 p-1 sm:p-1.5 rounded-full bg-gold-gradient shadow-2xl hover:brightness-110 transition-all transform hover:-translate-y-0.5 shrink-0"
                >
                  <span className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-navy-950 text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider">
                    Falar com Consultor
                  </span>
                  <div className="pr-2 sm:pr-2.5 flex items-center text-navy-950 font-black group-hover:translate-x-1 transition-transform">
                    <ChevronsRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </a>

                {/* Button 2: Gold Circle with Phone Icon + Text */}
                <a
                  href="tel:+5521964199750"
                  className="inline-flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-gradient text-navy-950 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-navy-950 text-navy-950" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] sm:text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Fale Conosco</span>
                    <span className="block text-xs sm:text-base font-extrabold text-white group-hover:text-amber-400 transition-colors tracking-wide">
                      +55 (21) 96419-9750
                    </span>
                  </div>
                </a>

              </div>
            </FadeUp>

          </div>

        </div>
      </div>
    </section>
  );
}
